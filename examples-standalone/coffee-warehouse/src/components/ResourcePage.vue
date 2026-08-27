<template>
  <section class="page">
    <PageHeader :title="title" :subtitle="subtitle" updated="Last updated: 4 min ago" />
    <div class="kpi-grid compact">
      <article v-for="metric in metrics" :key="metric.label" class="kpi-card"><p>{{ metric.label }}</p><strong>{{ metric.value }}</strong><span :class="metric.state">{{ metric.detail }}</span></article>
    </div>
    <div class="resource-workspace" :class="{ 'has-selection': selectedRow }">
      <article class="panel table-panel">
        <div class="panel-header"><div><h2>{{ tableTitle }}</h2><p>{{ tableDescription }}</p></div><div class="panel-actions"><input v-model="search" type="search" :aria-label="`Search ${tableTitle}`" placeholder="Search records" /><button type="button" class="k-button k-button-solid k-button-solid-primary">Create record</button></div></div>
        <p class="table-hint" id="resource-grid-hint">Select a row to inspect its operational context.</p>
        <Grid :data-items="filteredRows" :columns="columns" :sortable="true" :resizable="true" :pageable="{ pageSizes: true, buttonCount: 5 }" :page-size="8" :selectable="true" aria-describedby="resource-grid-hint" @rowclick="selectRow" />
      </article>
      <Transition name="detail-slide">
        <aside v-if="selectedRow" ref="detailPanel" class="resource-detail" :role="isMobileViewport ? 'dialog' : 'complementary'" :aria-modal="isMobileViewport ? 'true' : undefined" aria-labelledby="resource-detail-title">
          <div class="resource-detail-header">
            <div>
              <p class="detail-eyebrow">{{ detailConfig.eyebrow }}</p>
              <h2 id="resource-detail-title">{{ selectedRow.field0 }}</h2>
            </div>
            <button ref="detailClose" type="button" class="detail-close" aria-label="Close record details" @click="closeDetails"><SvgIcon :icon="cancelIcon" aria-hidden="true" /></button>
          </div>
          <div class="resource-detail-body">
            <div class="detail-status" :class="statusTone">
              <span class="detail-status-label">Status</span>
              <strong>{{ statusValue }}</strong>
            </div>
            <p class="detail-summary">{{ detailConfig.summary(selectedRow) }}</p>
            <dl class="detail-metadata">
              <div v-for="column in columns" :key="column.field">
                <dt>{{ column.title }}</dt>
                <dd>{{ selectedRow[column.field] }}</dd>
              </div>
            </dl>
            <section class="detail-context" aria-labelledby="detail-context-title">
              <h3 id="detail-context-title">{{ detailConfig.contextLabel }}</h3>
              <p>{{ detailConfig.context(selectedRow) }}</p>
            </section>
            <div class="detail-actions">
              <button type="button" class="k-button k-button-solid k-button-solid-primary" @click="copyRecord">
                Copy {{ selectedRow.field0 }}
              </button>
              <button type="button" class="k-button k-button-outline k-button-outline-base" @click="copySummary">
                Copy summary
              </button>
              <p class="detail-action-status" aria-live="polite">{{ copyStatus }}</p>
            </div>
          </div>
        </aside>
      </Transition>
      <button v-if="selectedRow" type="button" class="resource-detail-backdrop" tabindex="-1" aria-label="Close record details" @click="closeDetails"></button>
    </div>
  </section>
</template>

<script>
import { Grid } from "@progress/kendo-vue-grid";
import { SvgIcon } from "@progress/kendo-vue-common";
import { cancelIcon } from "@progress/kendo-svg-icons";
import PageHeader from "./PageHeader.vue";
const configs = {
  inventory: { title: "Inventory management", subtitle: "Track stock levels, bin locations, and replenishment needs across every warehouse zone.", tableTitle: "Inventory overview", tableDescription: "Available stock and the latest movements by SKU.", metrics: [["TOTAL SKUS", "2,486", "Across 12 warehouse zones", "success"], ["LOW STOCK", "18", "Requires replenishment", "warning"], ["INVENTORY VALUE", "$1.84M", "At weighted average cost", "success"]], columns: ["SKU", "Description", "Available", "Bin location", "Status"], rows: [["BEA-ESP-1K", "Brazil Espresso Blend, 1 kg", "412", "A-12-04", "In stock"], ["GUA-ANT-25", "Guatemala Antigua, 25 kg", "18", "C-04-11", "Low stock"], ["KEN-AA-5K", "Kenya AA, 5 kg", "0", "B-07-03", "Out of stock"]] },
  "purchase-orders": { title: "Purchase orders", subtitle: "Manage procurement from supplier selection through receipt and reconciliation.", tableTitle: "Purchase order queue", tableDescription: "Open and recently received purchase orders.", metrics: [["OPEN ORDERS", "42", "9 awaiting approval", "warning"], ["DUE THIS WEEK", "11", "3 inbound today", "success"], ["AT RISK", "2", "Late supplier confirmation", "error"]], columns: ["PO number", "Supplier", "Expected delivery", "Total", "Status"], rows: [["PO-10482", "Vale Verde Estates", "25 Aug 2026", "$18,460", "Delayed"], ["PO-10491", "Sierra Azul Coffee", "27 Aug 2026", "$9,280", "Approved"], ["PO-10503", "Mombasa Exporters", "02 Sep 2026", "$26,940", "Submitted"]] },
  "sales-orders": { title: "Sales orders", subtitle: "Prioritize customer orders and move fulfilment from intake to delivery.", tableTitle: "Order queue", tableDescription: "Customer orders sorted by shipping commitment.", metrics: [["NEW ORDERS", "86", "17 placed in the last hour", "success"], ["RUSH ORDERS", "7", "Prioritize before 14:00", "warning"], ["ON HOLD", "3", "Payment or inventory review", "error"]], columns: ["Order", "Customer", "Ship-by", "Priority", "Status"], rows: [["SO-34082", "North Star Roasters", "25 Aug 2026", "Rush", "Processing"], ["SO-34089", "Linden Cafes", "26 Aug 2026", "High", "Packed"], ["SO-34101", "Fifth Street Market", "27 Aug 2026", "Standard", "New"]] },
  suppliers: { title: "Supplier management", subtitle: "Monitor supplier performance, contracts, and active procurement relationships.", tableTitle: "Supplier directory", tableDescription: "Lead time and fulfilment performance across active suppliers.", metrics: [["ACTIVE SUPPLIERS", "74", "6 strategic partners", "success"], ["ON-TIME DELIVERY", "93.2%", "Target: 95%", "warning"], ["CONTRACTS DUE", "4", "Renewal within 30 days", "warning"]], columns: ["Supplier", "Category", "Lead time", "On-time delivery", "Rating"], rows: [["Vale Verde Estates", "Green coffee", "18 days", "89%", "4.2 / 5"], ["Sierra Azul Coffee", "Green coffee", "12 days", "97%", "4.7 / 5"], ["Atlas Packaging", "Packaging", "7 days", "99%", "4.8 / 5"]] },
  planning: { title: "Team planning", subtitle: "Coordinate roster coverage and resource demand for warehouse shifts.", tableTitle: "Today's team roster", tableDescription: "Assigned employees and coverage for the current operating day.", metrics: [["SCHEDULED STAFF", "58", "Across three shifts", "success"], ["OPEN SHIFTS", "3", "Requires coverage", "warning"], ["CONFLICTS", "0", "No overlapping assignments", "success"]], columns: ["Employee", "Team", "Shift", "Zone", "Status"], rows: [["Elena Morris", "Fulfilment", "06:00 - 14:00", "Picking A", "On shift"], ["Malik Bowen", "Roasting", "07:00 - 15:00", "Roastery", "On shift"], ["Avery Kim", "Quality", "08:00 - 16:00", "Lab 2", "Scheduled"]] },
  operations: { title: "Warehouse operations", subtitle: "Monitor throughput, dock activity, and active floor assignments in real time.", tableTitle: "Active workers", tableDescription: "Current warehouse assignments and productivity signals.", metrics: [["PICKS / HOUR", "482", "Above shift target", "success"], ["PACKS / HOUR", "416", "Within 3% of target", "success"], ["DOCK APPOINTMENTS", "14", "2 arrivals remaining", "warning"]], columns: ["Worker", "Zone", "Current task", "Productivity", "Status"], rows: [["Taylor Reid", "Dock 3", "Unload PO-10482", "88%", "Awaiting arrival"], ["Maya Chen", "Picking B", "Pick SO-34082", "104%", "Active"], ["Jon Bell", "Packing", "Pack pallet 7", "97%", "Active"]] },
  assets: { title: "Asset management", subtitle: "Plan maintenance and protect the availability of essential warehouse equipment.", tableTitle: "Asset registry", tableDescription: "Service status and next maintenance due date.", metrics: [["ACTIVE ASSETS", "126", "Equipment in service", "success"], ["DUE IN 7 DAYS", "8", "Schedule maintenance", "warning"], ["OVERDUE", "2", "Requires immediate action", "error"]], columns: ["Asset ID", "Asset", "Location", "Next service", "Status"], rows: [["FLT-014", "Forklift 14", "Picking A", "20 Aug 2026", "Overdue"], ["CNV-008", "Conveyor line 8", "Packing", "28 Aug 2026", "Due soon"], ["RCK-112", "Racking bay 112", "Zone C", "15 Nov 2026", "Active"]] },
  manufacturing: { title: "Manufacturing planning", subtitle: "Schedule production, monitor work orders, and protect material availability.", tableTitle: "Work orders", tableDescription: "Active production work orders by line and due date.", metrics: [["ACTIVE WORK ORDERS", "16", "Across four production lines", "success"], ["MATERIAL SHORTAGES", "2", "Block start until resolved", "error"], ["LINE UTILIZATION", "84%", "Target: 80 - 90%", "success"]], columns: ["Work order", "Product", "Due date", "Line", "Status"], rows: [["WO-2081", "Espresso Blend 1 kg", "26 Aug 2026", "Line 1", "In progress"], ["WO-2089", "House Decaf 500 g", "28 Aug 2026", "Line 2", "Planned"], ["WO-2093", "Cold Brew 1 L", "30 Aug 2026", "Line 4", "QC"]] },
  finance: { title: "Financial reporting", subtitle: "Compare warehouse revenue, costs, and margin performance for the current period.", tableTitle: "Budget versus actual", tableDescription: "Operating spend by category for August 2026.", metrics: [["REVENUE", "$842K", "Up 6.8% versus July", "success"], ["GROSS MARGIN", "31.4%", "0.9 points above target", "success"], ["OPERATING COSTS", "$216K", "3.1% over budget", "warning"]], columns: ["Category", "Budget", "Actual", "Variance", "Status"], rows: [["Green coffee", "$268,000", "$274,600", "+$6,600", "Over budget"], ["Packaging", "$64,000", "$61,820", "-$2,180", "On budget"], ["Logistics", "$88,000", "$91,240", "+$3,240", "Over budget"]] },
};
const detailContexts = {
  inventory: { eyebrow: "Inventory record", contextLabel: "Replenishment context", summary: (row) => `${row.field1} is held in ${row.field3} with ${row.field2} available for warehouse allocation.`, context: (row) => row.field4 === "Out of stock" ? "This SKU is unavailable for allocation and should be prioritised in the replenishment queue." : row.field4 === "Low stock" ? "Available stock is below the reorder point. Review inbound supply before committing new allocations." : "Stock is currently above its replenishment threshold." },
  "purchase-orders": { eyebrow: "Procurement record", contextLabel: "Receiving context", summary: (row) => `${row.field0} for ${row.field1} is scheduled for ${row.field2}.`, context: (row) => row.field4 === "Delayed" ? "The receiving team should confirm the next dock appointment before planning against this delivery." : "The supplier handoff is progressing through the normal receiving workflow." },
  "sales-orders": { eyebrow: "Customer order", contextLabel: "Fulfilment context", summary: (row) => `${row.field0} for ${row.field1} ships by ${row.field2} with ${row.field3.toLowerCase()} priority.`, context: (row) => row.field4 === "Processing" ? "Pick and pack teams are actively preparing this order for its shipping commitment." : row.field4 === "Packed" ? "The order is packed and ready for the carrier handoff." : "The order is newly received and awaiting fulfilment review." },
  suppliers: { eyebrow: "Supplier record", contextLabel: "Sourcing context", summary: (row) => `${row.field0} supplies ${row.field1} with an average lead time of ${row.field2}.`, context: (row) => `${row.field0} is currently tracked at ${row.field3} on-time delivery and a ${row.field4} rating.` },
  planning: { eyebrow: "Roster record", contextLabel: "Coverage context", summary: (row) => `${row.field0} is assigned to ${row.field1} from ${row.field2}.`, context: (row) => `${row.field0} is scheduled in ${row.field3}; use this view to confirm shift coverage before coordinating changes.` },
  operations: { eyebrow: "Floor assignment", contextLabel: "Operations context", summary: (row) => `${row.field0} is assigned to ${row.field2} in ${row.field1}.`, context: (row) => `${row.field0}'s productivity signal is ${row.field3}; the current assignment is ${row.field4.toLowerCase()}.` },
  assets: { eyebrow: "Asset record", contextLabel: "Maintenance context", summary: (row) => `${row.field1} (${row.field0}) is located in ${row.field2}.`, context: (row) => row.field4 === "Overdue" ? "Maintenance is overdue. Confirm service availability before assigning this asset to a new shift." : row.field4 === "Due soon" ? `The next service is due ${row.field3}; plan a maintenance window around active work.` : "The asset is active and outside the immediate maintenance window." },
  manufacturing: { eyebrow: "Work order", contextLabel: "Production context", summary: (row) => `${row.field0} produces ${row.field1} on ${row.field3}, due ${row.field2}.`, context: (row) => row.field4 === "QC" ? "Quality review is the next visible checkpoint before this order can move forward." : row.field4 === "In progress" ? "Production is underway; teams can use the due date to sequence the next line handoff." : "This work order is planned and ready for production sequencing." },
  finance: { eyebrow: "Finance record", contextLabel: "Variance context", summary: (row) => `${row.field0} is tracking ${row.field3} against its August budget.`, context: (row) => row.field4 === "Over budget" ? "This category is above plan and should be included in the next operating review." : "This category is currently tracking within the planned operating budget." },
};
export default {
  components: { Grid, PageHeader, SvgIcon },
  props: { module: { type: String, required: true } },
  data() { return { search: "", selectedRow: null, previousFocus: null, copyStatus: "", isMobileViewport: typeof window !== "undefined" && window.innerWidth <= 767 }; },
  computed: {
    config() { return configs[this.module]; },
    title() { return this.config.title; }, subtitle() { return this.config.subtitle; }, tableTitle() { return this.config.tableTitle; }, tableDescription() { return this.config.tableDescription; },
    metrics() { return this.config.metrics.map(([label, value, detail, state]) => ({ label, value, detail, state })); },
    columns() { return this.config.columns.map((title, index) => ({ field: `field${index}`, title })); },
    filteredRows() { const query = this.search.toLowerCase(); return this.config.rows.filter((row) => row.join(" ").toLowerCase().includes(query)).map((row) => Object.fromEntries(row.map((value, index) => [`field${index}`, value]))); },
    detailConfig() { return detailContexts[this.module]; },
    statusValue() { return this.selectedRow ? this.selectedRow[`field${this.columns.length - 1}`] : ""; },
    statusTone() {
      const status = this.statusValue.toLowerCase();
      if (/(out|overdue|delayed|hold|shortage|error)/.test(status)) return "detail-status-error";
      if (/(low|due|risk|awaiting|new|planned|over budget)/.test(status)) return "detail-status-warning";
      return "detail-status-success";
    },
  },
  watch: {
    module() {
      this.selectedRow = null;
      this.previousFocus = null;
      this.copyStatus = "";
    },
    selectedRow(row) {
      if (!row) return;
      this.copyStatus = "";
      this.$nextTick(() => this.$refs.detailClose?.focus());
    },
    search() {
      if (this.selectedRow && !this.filteredRows.some((row) => row.field0 === this.selectedRow.field0)) this.closeDetails();
    },
  },
  mounted() {
    this.updateViewport();
    window.addEventListener("resize", this.updateViewport);
    window.addEventListener("keydown", this.handleGlobalKeydown);
    document.addEventListener("focusin", this.handleFocusIn);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateViewport);
    window.removeEventListener("keydown", this.handleGlobalKeydown);
    document.removeEventListener("focusin", this.handleFocusIn);
  },
  methods: {
    selectRow(event) {
      if (!event.dataItem) return;
      this.previousFocus = document.activeElement;
      this.selectedRow = event.dataItem;
    },
    handleGlobalKeydown(event) {
      if (!this.selectedRow || !this.isMobileViewport) {
        if (event.key === "Escape" && this.selectedRow) this.closeDetails();
        return;
      }
      if (event.key === "Escape") {
        this.closeDetails();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = this.getFocusableDetails();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!this.$refs.detailPanel?.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    },
    handleFocusIn(event) {
      if (!this.selectedRow || !this.isMobileViewport || this.$refs.detailPanel?.contains(event.target)) return;
      this.getFocusableDetails()[0]?.focus();
    },
    getFocusableDetails() {
      return Array.from(this.$refs.detailPanel?.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])") || []);
    },
    updateViewport() {
      this.isMobileViewport = window.innerWidth <= 767;
    },
    closeDetails() {
      this.selectedRow = null;
      this.copyStatus = "";
      this.$nextTick(() => {
        if (this.previousFocus?.isConnected) this.previousFocus.focus();
        this.previousFocus = null;
      });
    },
    async copyText(text, label) {
      try {
        await navigator.clipboard.writeText(text);
        this.copyStatus = `${label} copied.`;
      } catch {
        this.copyStatus = "Copy is unavailable in this browser.";
      }
    },
    copyRecord() { this.copyText(this.selectedRow.field0, "Record identifier"); },
    copySummary() { this.copyText(this.detailConfig.summary(this.selectedRow), "Record summary"); },
  },
};
</script>
