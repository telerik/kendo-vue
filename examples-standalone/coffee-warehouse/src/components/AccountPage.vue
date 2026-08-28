<template>
  <section class="page narrow-page">
    <PageHeader :title="title" :subtitle="subtitle" />
    <article class="panel account-panel">
      <h2>{{ heading }}</h2>
      <p>{{ description }}</p>
      <div v-if="kind === 'notifications'" class="notification-list">
        <div v-for="item in notifications" :key="item.title">
          <Badge :theme-color="item.state" :rounded="'small'">{{ item.type }}</Badge>
          <div><strong>{{ item.title }}</strong><p>{{ item.description }}</p></div>
        </div>
      </div>
      <form v-else @submit.prevent="saveChanges">
        <label v-for="field in fields" :key="field" :for="fieldId(field)">
          <span>{{ field }}</span>
          <textarea v-if="field === 'Message'" :id="fieldId(field)" v-model="formValues[field]" :aria-label="field" rows="4"></textarea>
          <input v-else :id="fieldId(field)" v-model="formValues[field]" :aria-label="field" />
        </label>
        <button class="k-button k-button-solid k-button-solid-primary" type="submit">Save changes</button>
        <p v-if="saveMessage" class="save-confirmation" role="status" aria-live="polite">{{ saveMessage }}</p>
      </form>
    </article>
  </section>
</template>
<script>
import PageHeader from "./PageHeader.vue";
import { Badge } from "@progress/kendo-vue-indicators";
export default {
  components: { Badge, PageHeader },
  props: { kind: String },
  data() {
    return { formValues: {}, saveMessage: "" };
  },
  computed: {
    title() { return { profile: "Profile", settings: "Settings", help: "Help & Support", notifications: "Notifications" }[this.kind]; },
    subtitle() { return { profile: "Manage your warehouse account and contact details.", settings: "Control your workspace and notification preferences.", help: "Find warehouse guidance or contact the support team.", notifications: "Review recent operational updates and assignments." }[this.kind]; },
    heading() { return this.kind === "help" ? "How can we help?" : this.title; },
    description() { return this.kind === "help" ? "Search the warehouse knowledge base or send a support request with the affected order or SKU." : "Changes are saved in this browser session for this demo and are not sent to a server."; },
    fields() { return this.kind === "profile" ? ["First name", "Last name", "Email", "Role"] : this.kind === "settings" ? ["Default warehouse", "Report delivery email"] : ["Subject", "Order, PO, or SKU", "Message"]; },
    notifications() { return [{ type: "Warning", state: "warning", title: "PO-10482 missed its dock appointment", description: "Vale Verde Estates is one day late. Review the inbound delivery." }, { type: "Info", state: "info", title: "Morning shift closed above target", description: "Fulfilment completed 96.4% of orders before the cut-off." }]; },
  },
  watch: {
    kind: {
      immediate: true,
      handler() { this.resetForm(); },
    },
  },
  methods: {
    fieldId(field) { return `account-${field.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`; },
    storageKey() { return `coffee-warehouse-account-${this.kind}`; },
    resetForm() {
      const defaults = {
        "First name": "Peter",
        "Last name": "Douglas",
        Email: "peter.douglas@coffeewarehouse.example",
        Role: "Operations manager",
        "Default warehouse": "Central warehouse",
        "Report delivery email": "operations@coffeewarehouse.example",
        Subject: "",
        "Order, PO, or SKU": "",
        Message: "",
      };
      try {
        const savedValues = window.sessionStorage.getItem(this.storageKey());
        const parsedValues = savedValues ? JSON.parse(savedValues) : null;
        this.formValues = parsedValues && typeof parsedValues === "object" ? { ...defaults, ...parsedValues } : defaults;
      } catch {
        this.formValues = defaults;
      }
      this.saveMessage = "";
    },
    saveChanges() {
      try {
        window.sessionStorage.setItem(this.storageKey(), JSON.stringify(this.formValues));
        this.saveMessage = "Changes saved for this browser session.";
      } catch {
        this.saveMessage = "Changes applied for this visit; browser session storage is unavailable.";
      }
    },
  },
};
</script>
