<template>
  <div>
    <pdfexport ref="gridPdfExport">
      <Grid
        ref="grid"
        :style="{ height: '500px' }"
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
              :style="{ width: '230px' }"
              :placeholder="gridSearchMessage"
              :value="searchWord"
              @input="onFilter"
            ></k-input>
          </span>
          <span class="export-buttons">
            <dropdownlist
              :style="{ width: '230px' }"
              class="localeDropDownList"
              :value="currentLocale"
              :text-field="'language'"
              @change="localeChange"
              :data-items="locales"
            >
            </dropdownlist>
            <kbutton
              title="Export to Excel"
              :theme-color="'primary'"
              @click="exportExcel"
            >
              {{ exportExcelMessage }}</kbutton
            >&nbsp;
            <kbutton :theme-color="'primary'" @click="exportPDF">
              {{ exportPdfMessage }}
            </kbutton>
          </span>
        </toolbar>
        <template v-slot:contactTemplate="{ props }">
          <td>
            <contact
              v-if="props.rowType !== 'groupHeader'"
              :data-item="props.dataItem"
            ></contact>
          </td>
        </template>
        <template v-slot:flagTemplate="{ props }">
          <td class="text-center">
            <flag :data-item="props.dataItem"></flag>
          </td>
        </template>
        <template v-slot:isOnlineTemplate="{ props }">
          <td class="text-center">
            <isonline
              v-if="props.rowType !== 'groupHeader'"
              :data-item="props.dataItem"
            ></isonline>
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
import { process } from '@progress/kendo-data-query';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { Input } from '@progress/kendo-vue-inputs';
import { Button } from '@progress/kendo-vue-buttons';
import { GridPdfExport } from '@progress/kendo-vue-pdf';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

import BudgetComponent from './BudgetComponent.vue';
import EngagementComponent from './EngagementComponent.vue';
import IsOnlineComponent from './IsOnlineComponent.vue';
import Flag from './FlagComponent.vue';
import ContactName from './ContactNameComponent.vue';
import { provideLocalizationService } from '@progress/kendo-vue-intl';

import employees from './employees.json';

export default {
  name: 'App',
  components: {
    Grid: Grid,
    toolbar: GridToolbar,
    pdfexport: GridPdfExport,
    budget: BudgetComponent,
    engagement: EngagementComponent,
    isonline: IsOnlineComponent,
    flag: Flag,
    contact: ContactName,
    'k-input': Input,
    kbutton: Button,
    dropdownlist: DropDownList,
  },
  inject: {
    kendoLocalizationService: { default: null },
  },
  data: function () {
    return {
      currentLocale: {
        language: 'English',
        locale: 'en',
      },
      locales: [
        {
          language: 'English',
          locale: 'en',
        },
        {
          language: 'French',
          locale: 'fr',
        },
        {
          language: 'Spanish',
          locale: 'es',
        },
      ],
      localizationLanguage: 'English',
      searchWord: '',
      columnMenu: true,
      selectedField: 'selected',
      expandField: 'expanded',
      gridPageable: {
        buttonCount: 5,
        info: true,
        type: 'numeric',
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
    this.gridData = this.getData(this.employees);
  },
  computed: {
    locale() {
      if (this.localizationLanguage === 'Spanish') {
        return 'es';
      }

      if (this.localizationLanguage === 'French') {
        return 'fr';
      }

      return 'en';
    },
    selectedDataItems() {
      return this.gridData.data.filter((item) => item.selected === true);
    },
    areAllSelected() {
      return (
        this.selectedDataItems.length === this.gridData.data.length &&
        this.selectedDataItems.length !== 0
      );
    },
    columns() {
      return [
        {
          field: 'selected',
          width: '45px',
          columnMenu: false,
          headerSelectionValue: this.areAllSelected,
        },
        {
          title: this.employeeMessage,
          children: [
            {
              field: 'full_name',
              title: this.contactNameMessage,
              width: '220px',
              cell: 'contactTemplate',
            },
            { field: 'job_title', title: this.jobTitleMessage, width: '250px' },
            {
              field: 'country',
              title: this.countryMessage,
              width: '100px',
              resizable: false,
              className: 'text-center',
              cell: 'flagTemplate',
            },
            {
              field: 'is_online',
              title: this.statusMessage,
              width: '100px',
              resizable: false,
              className: 'text-center',
              filter: 'boolean',
              cell: 'isOnlineTemplate',
            },
          ],
        },
        {
          title: this.performanceMessage,
          children: [
            {
              field: 'target',
              title: this.engagementMessage,
              width: '230px',
              resizable: false,
              filter: 'numeric',
              cell: 'engagementTemplate',
            },
            {
              field: 'budget',
              title: this.budgetMessage,
              width: '120px',
              filter: 'numeric',
              format: '{0:c}',
              cell: 'budgetTemplate',
            },
          ],
        },
        {
          title: this.contactsMessage,
          children: [
            {
              field: 'phone',
              title: this.phoneMessage,
              width: '140px',
            },
            {
              field: 'address',
              title: this.addressMessage,
              width: '200px',
            },
          ],
        },
      ];
    },
    exportPdfMessage() {
      return provideLocalizationService(this).toLanguageString(
        'exportPdf',
        'Export to PDF'
      );
    },
    exportExcelMessage() {
      return provideLocalizationService(this).toLanguageString(
        'exportExcel',
        'Export to Excel'
      );
    },
    gridSearchMessage() {
      return provideLocalizationService(this).toLanguageString(
        'gridSearch',
        'Search in all columns...'
      );
    },
    contactNameMessage() {
      return provideLocalizationService(this).toLanguageString(
        'contactName',
        'Contact Name'
      );
    },
    jobTitleMessage() {
      return provideLocalizationService(this).toLanguageString(
        'jobTitle',
        'Job Title'
      );
    },
    countryMessage() {
      return provideLocalizationService(this).toLanguageString(
        'country',
        'Country'
      );
    },
    employeeMessage() {
      return provideLocalizationService(this).toLanguageString(
        'employee',
        'Employee'
      );
    },
    statusMessage() {
      return provideLocalizationService(this).toLanguageString(
        'status',
        'Status'
      );
    },
    engagementMessage() {
      return provideLocalizationService(this).toLanguageString(
        'engagement',
        'Engagement'
      );
    },
    performanceMessage() {
      return provideLocalizationService(this).toLanguageString(
        'performance',
        'Performance'
      );
    },
    budgetMessage() {
      return provideLocalizationService(this).toLanguageString(
        'budget',
        'Budget'
      );
    },
    contactsMessage() {
      return provideLocalizationService(this).toLanguageString(
        'contacts',
        'Contacts'
      );
    },
    phoneMessage() {
      return provideLocalizationService(this).toLanguageString(
        'phone',
        'Phone'
      );
    },
    addressMessage() {
      return provideLocalizationService(this).toLanguageString(
        'address',
        'Address'
      );
    },
  },
  methods: {
    onFilter(e) {
      let inputValue = e.value;
      this.searchWord = inputValue;
      this.take = 10;
      this.skip = 0;
      if (inputValue !== '') {
        this.filter = {
          logic: 'or',
          filters: [
            {
              field: 'full_name',
              operator: 'contains',
              value: inputValue,
            },
            {
              field: 'job_title',
              operator: 'contains',
              value: inputValue,
            },
            {
              field: 'budget',
              operator: 'contains',
              value: inputValue,
            },
            {
              field: 'phone',
              operator: 'contains',
              value: inputValue,
            },
            {
              field: 'address',
              operator: 'contains',
              value: inputValue,
            },
          ],
        };
      } else this.filter = null;
      this.gridData = this.getData(this.employees);
    },
    onHeaderSelectionChange(event) {
      let checked = event.event.target.checked;
      const tempData = this.employees.map((item) => {
        return { ...item, selected: checked };
      });

      const tempGridData = this.gridData.data.map((item) => {
        return { ...item, selected: checked };
      });
      this.gridData.data = tempGridData;
      this.employees = tempData;
    },
    getData(data) {
      return process(data, {
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

      this.gridData = this.getData(this.employees);
    },
    dataStateChange: function (event) {
      this.createAppState(event.data);
    },
    expandChange: function (event) {
      if (event.dataItem) {
        event.dataItem[event.target.$props.expandField] = event.value;
        //
        // In Vue 2 context, instead of the above line, inside the expandChange method we should have the following:
        //
        //   Vue.set(
        //     event.dataItem,
        //     event.target.$props.expandField,
        //     event.dataItem.expanded === undefined ? false : !event.dataItem.expanded
        //   );
        //
      }
    },
    exportExcel() {
      const columnsToExport = [...this.columns];
      columnsToExport.splice(0, 1);
      saveExcel({
        data: this.gridData.data,
        group: this.group,
        fileName: 'Employees',
        columns: columnsToExport,
      });
    },
    exportPDF() {
      const tempSort = this.sort;
      this.sort = null;
      this.$nextTick(() => {
        this.columnMenu = false;
        this.$refs.gridPdfExport.save(
          process(this.gridData.data, { skip: this.skip, take: this.take })
        );
        this.columnMenu = true;
        this.sort = tempSort;
      });
    },
    onSelectionChange(event) {
      event.dataItem[this.selectedField] = !event.dataItem[this.selectedField];
    },
    localeChange(e) {
      this.currentLocale = e.target.value;
      this.localizationLanguage = e.target.value.language;
      this.$emit('localizationLanguageChange', this.localizationLanguage);
    },
  },
};
</script>

<style>
td.text-center{
  margin: 0px;
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

.localeDropDownList {
  margin-right: 5px;
}
</style>