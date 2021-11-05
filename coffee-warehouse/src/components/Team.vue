<template>
  <div >
    <div class="card-header-wrapper">
      <h3 class="card-title">{{ teamMembersMessage }}</h3>
      <buttongroup>
        <k-button
          :togglable="true"
          @click="onTeamChange(25)"
          :selected="myTeamSelected"
        >
          {{ myTeamMessage }}
        </k-button>
        <k-button
          :togglable="true"
          @click="onTeamChange(100)"
          :selected="!myTeamSelected"
        >
          {{ allTeamsMessage }}
        </k-button>
      </buttongroup>
      <span></span>
    </div>
    <pdfexport ref="gridPdfExport">
      <Grid
        ref="grid"
        :style="{ height: '500px'}"
        :data-items="gridData"
        :resizable="true"
        :reorderable="true"
        :sortable="true"
        :pageable="gridPageable"
        :groupable="true"
        :group="group"
        :sort="sort"
        :filter="filter"
        :take="take"
        :skip="skip"
        :expand-field="expandField"
        :selectable="true"
        :selected-field="selectedField"
        :columns="columns"
        :column-menu="columnMenu"
        @selectionchange="onSelectionChange"
        @headerselectionchange="onHeaderSelectionChange"
        @datastatechange="dataStateChange"
        @expandchange="expandChange"
      >
        <toolbar>
          <span class="k-textbox k-grid-search k-display-flex">
            <k-input
              :placeholder="gridSearchMessage"
              :value="searchWord"
              @input="onFilter"
            ></k-input>
          </span>
          <span class="export-buttons">
            <button
              title="Export to Excel"
              class="k-button k-primary"
              @click="exportExcel"
            >
              {{ exportExcelMessage }}</button
            >&nbsp;
            <button class="k-button k-primary" @click="exportPDF">
              {{ exportPdfMessage }}
            </button>
          </span>
        </toolbar>
        <template v-slot:contactTemplate="{ props }">
          <td><contact :data-item="props.dataItem"></contact></td>
        </template>
        <template v-slot:flagTemplate="{ props }">
          <td class="text-center"><flag :data-item="props.dataItem"></flag></td>
        </template>
        <template v-slot:isOnlineTemplate="{ props }">
          <td class="text-center">
            <isonline :data-item="props.dataItem"></isonline>
          </td>
        </template>
        <template v-slot:budgetTemplate="{ props }">
          <td class="text-center">
            <budget :data-item="props.dataItem"></budget>
          </td>
        </template>
        <template v-slot:engagementTemplate="{ props }">
          <td class="text-center">
            <engagement :data-item="props.dataItem"></engagement>
          </td>
        </template>
      </Grid>
    </pdfexport>
  </div>
</template>

<script>
import { process } from "@progress/kendo-data-query";
import { Grid, GridToolbar } from "@progress/kendo-vue-grid";
import { Input } from "@progress/kendo-vue-inputs";
import { Button, ButtonGroup } from "@progress/kendo-vue-buttons";
import { GridPdfExport } from "@progress/kendo-vue-pdf";
import { saveExcel } from "@progress/kendo-vue-excel-export";

import BudgetComponent from "./GridComponents/BudgetComponent.vue";
import EngagementComponent from "./GridComponents/EngagementComponent.vue";
import IsOnlineComponent from "./GridComponents/IsOnlineComponent.vue";
import Flag from "./GridComponents/FlagComponent.vue";
import ContactName from "./GridComponents/ContactNameComponent.vue";
import { provideLocalizationService } from "@progress/kendo-vue-intl";

import employees from "../assets/employees.json";

export default {
  name: "App",
  components: {
    Grid: Grid,
    toolbar: GridToolbar,
    pdfexport: GridPdfExport,
    budget: BudgetComponent,
    engagement: EngagementComponent,
    isonline: IsOnlineComponent,
    flag: Flag,
    contact: ContactName,
    "k-input": Input,
    "k-button": Button,
    buttongroup: ButtonGroup,
  },
  inject: {
    kendoLocalizationService: { default: null },
  },
  data: function () {
    return {
      myTeamSelected: true,
      searchWord: "",
      columnMenu: true,
      selectedField: "selected",
      expandField: "expanded",
      gridPageable: {
        buttonCount: 5,
        info: true,
        type: "numeric",
        pageSizes: true,
        previousNext: true,
      },
      employees: employees,
      gridData: [],
      skip: 0,
      take: 10,
      group: [],
      sort: [],
      filter: null,
      expandedItems: [],
    };
  },
  created: function () {
    this.getData(this.employees);
    this.onTeamChange(25);
  },
  computed: {
    areAllSelected() {
      return this.employees.findIndex((item) => item.selected === false) === -1;
    },
    columns() {
      return [
        {
          field: "selected",
          width: "50px",
          columnMenu: false,
          headerSelectionValue: !this.areAllSelected,
        },
        {
          title: this.employeeMessage,
          children: [
            {
              field: "full_name",
              title: this.contactNameMessage,
              width: "220px",
              cell: "contactTemplate",
            },
            { field: "job_title", title: this.jobTitleMessage, width: "220px" },
            {
              field: "country",
              title: this.countryMessage,
              width: "100px",
              resizable: false,
              className: "text-center",
              cell: "flagTemplate",
            },
            {
              field: "is_online",
              title: this.statusMessage,
              width: "100px",
              resizable: false,
              className: "text-center",
              filter: "boolean",
              cell: "isOnlineTemplate",
            },
          ],
        },
        {
          title: this.performanceMessage,
          children: [
            {
              field: "target",
              title: this.engagementMessage,
              width: "230px",
              resizable: false,
              filter: "numeric",
              cell: "engagementTemplate",
            },
            {
              field: "budget",
              title: this.budgetMessage,
              width: "100px",
              filter: "numeric",
              format: "{0:c}",
              cell: "budgetTemplate",
            },
          ],
        },
        {
          title: this.contactsMessage,
          children: [
            {
              field: "phone",
              title: this.phoneMessage,
              width: "130px",
            },
            {
              field: "address",
              title: this.addressMessage,
              minResizableWidth: "220px",
            },
          ],
        },
      ];
    },
    exportPdfMessage() {
      return provideLocalizationService(this).toLanguageString(
        "exportPdf",
        "Export to PDF"
      );
    },
    exportExcelMessage() {
      return provideLocalizationService(this).toLanguageString(
        "exportExcel",
        "Export to Excel"
      );
    },
    gridSearchMessage() {
      return provideLocalizationService(this).toLanguageString(
        "gridSearch",
        "Search in all columns..."
      );
    },
    myTeamMessage() {
      return provideLocalizationService(this).toLanguageString(
        "myTeam",
        "My Team"
      );
    },
    allTeamsMessage() {
      return provideLocalizationService(this).toLanguageString(
        "allTeams",
        "All Teams"
      );
    },
    teamMembersMessage() {
      return provideLocalizationService(this).toLanguageString(
        "teamMembers",
        "Team Members"
      );
    },
    contactNameMessage() {
      return provideLocalizationService(this).toLanguageString(
        "contactName",
        "Contact Name"
      );
    },
    jobTitleMessage() {
      return provideLocalizationService(this).toLanguageString(
        "jobTitle",
        "Job Title"
      );
    },
    countryMessage() {
      return provideLocalizationService(this).toLanguageString(
        "country",
        "Country"
      );
    },
    employeeMessage() {
      return provideLocalizationService(this).toLanguageString(
        "employee",
        "Employee"
      );
    },
    statusMessage() {
      return provideLocalizationService(this).toLanguageString(
        "status",
        "Status"
      );
    },
    engagementMessage() {
      return provideLocalizationService(this).toLanguageString(
        "engagement",
        "Engagement"
      );
    },
    performanceMessage() {
      return provideLocalizationService(this).toLanguageString(
        "performance",
        "Performance"
      );
    },
    budgetMessage() {
      return provideLocalizationService(this).toLanguageString(
        "budget",
        "Budget"
      );
    },
    contactsMessage() {
      return provideLocalizationService(this).toLanguageString(
        "contacts",
        "Contacts"
      );
    },
    phoneMessage() {
      return provideLocalizationService(this).toLanguageString(
        "phone",
        "Phone"
      );
    },
    addressMessage() {
      return provideLocalizationService(this).toLanguageString(
        "address",
        "Address"
      );
    },
  },
  methods: {
    onFilter(e) {
      let inputValue = e.value;
      this.searchWord = inputValue;
      const filteredData = process(this.employees, {
        filter: {
          logic: "or",
          filters: [
            {
              field: "full_name",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "job_title",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "budget",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "phone",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "address",
              operator: "contains",
              value: inputValue,
            },
          ],
        },
        take: this.take,
        skip: this.skip,
        group: this.group,
        sort: this.sort,
      });
      this.gridData = filteredData;
    },
    onHeaderSelectionChange(event) {
      let checked = event.event.target.checked;
      this.gridData.data = this.gridData.data.map((item) => {
        return { ...item, selected: checked };
      });
    },
    getData: function (data) {
      this.gridData = process(data, {
        take: this.take,
        skip: this.skip,
        group: this.group,
        sort: this.sort,
        filter: this.filter,
      });
    },
    createAppState: function (dataState) {
      this.group = dataState.group;
      this.take = dataState.take;
      this.skip = dataState.skip;
      this.sort = dataState.sort;
      this.filter = dataState.filter;
      this.getData(this.employees);
    },
    dataStateChange: function (event) {
      this.createAppState(event.data);
    },
    expandChange: function (event) {
      if (event.dataItem) {
        event.dataItem[event.target.$props.expandField] = event.value;
      }
    },
    exportExcel() {
      const columnsToExport = [...this.columns];
      columnsToExport.splice(0, 1);
      saveExcel({
        data: this.gridData.data,
        group: this.group,
        fileName: "Employees",
        columns: columnsToExport,
      });
    },
    exportPDF() {
      const tempSort = this.sort;
      this.sort = null;
      this.$nextTick(() => {
        this.$refs.gridPdfExport.save(
          process(this.employees, { skip: this.skip, take: this.take })
        );
        this.sort = tempSort;
      });
    },
    onSelectionChange(event) {
      event.dataItem[this.selectedField] = !event.dataItem[this.selectedField];
    },
    onTeamChange(pageSize) {
      let slicedEmployees;

      if (pageSize === 25) {
        slicedEmployees = this.employees.slice(pageSize, pageSize * 2);
        this.myTeamSelected = true;
      } else {
        slicedEmployees = this.employees.slice(0, pageSize);
        this.myTeamSelected = false;
      }
      this.getData(slicedEmployees);
    },
  },
};
</script>

<style>
td.text-center {
  text-align: center;
}

.customer-photo {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: 32px 35px;
  background-position: center center;
  vertical-align: middle;
  line-height: 32px;
  box-shadow: inset 0 0 1px #999, inset 0 0 10px rgba(0, 0, 0, 0.2);
  margin-left: 5px;
}

.customer-name {
  display: inline-block;
  vertical-align: middle;
  line-height: 32px;
  padding-left: 10px;
}

.red {
  color: #d9534f;
}

.text-bold {
  font-weight: 600;
}
.export-buttons {
  margin-left: auto;
  margin-right: 0;
}
</style>
