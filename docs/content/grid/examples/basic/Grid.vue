<template>
  <div>
    <GridPdfExport ref="gridPdfExport">
      <Grid
        ref="grid"
        :style="{ height: '500px' }"
        :auto-process-data="true"
        :data-item-key="'id'"
        :navigatable="true"
        :data-items="gridData"
        :resizable="true"
        :reorderable="true"
        :pageable="gridPageable"
        :groupable="true"
        :selectable="true"
        :selected-field="selectedField"
        :columns="columns"
        :column-menu="columnMenu"
        @selectionchange="onSelectionChange"
        @headerselectionchange="onHeaderSelectionChange"
      >
        <GridToolbar>
            <GridSearchBox
              :style="{ width: '230px' }"
              :placeholder="gridSearchMessage"
            />
          <span class="export-buttons">
            <DropDownList
              :style="{ width: '230px' }"
              class="localeDropDownList"
              :value="currentLocale"
              :text-field="'language'"
              @change="localeChange"
              :data-items="locales"
            />
            <KButton
              title="Export to Excel"
              :theme-color="'primary'"
              @click="exportExcel"
            >
              {{ exportExcelMessage }}
            </KButton>&nbsp;
            <KButton :theme-color="'primary'" @click="exportPDF">
              {{ exportPdfMessage }}
            </KButton>
          </span>
        </GridToolbar>
        <template #contactTemplate="{ props }">
          <td v-if="props.rowType !== 'groupHeader'" :class="props.class">
            <ContactName :data-item="props.dataItem" />
          </td>
        </template>
        <template #flagTemplate="{ props }">
          <td v-if="props.rowType !== 'groupHeader'" :class="['text-center', props.class]">
            <Flag :data-item="props.dataItem" />
          </td>
        </template>
        <template #isOnlineTemplate="{ props }">
          <td :class="['text-center', props.class]" v-if="props.rowType !== 'groupHeader'">
            <IsOnlineComponent :data-item="props.dataItem" />
          </td>
        </template>
        <template #budgetTemplate="{ props }">
          <td :class="['text-center', props.class]" v-if="props.rowType !== 'groupHeader'">
            <BudgetComponent :data-item="props.dataItem" />
          </td>
        </template>
        <template #engagementTemplate="{ props }">
          <td :class="['text-center', props.class]" v-if="props.rowType !== 'groupHeader'">
            <EngagementComponent :data-item="props.dataItem" />
          </td>
        </template>
      </Grid>
    </GridPdfExport>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, inject, onBeforeMount } from 'vue';
import { process } from '@progress/kendo-data-query';
import { Grid, GridToolbar, GridSearchBox } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
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

const emit = defineEmits(['localizationLanguageChange']);
const kendoLocalizationService = inject("kendoLocalizationService", {});
const gridPdfExport = ref(null);

const currentLocale = ref({
    language: 'English',
    locale: 'en',
});

const locales = ref([
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
]);

const localizationLanguage = ref('English');
const columnMenu = ref(true);
const selectedField = ref('selected');
const gridPageable = ref({
    buttonCount: 5,
    info: true,
    type: 'numeric',
    pageSizes: true,
    previousNext: true,
});
const employeesData = ref(employees);
const gridData = ref([]);
const skip = ref(0);
const take = ref(10);
const group = ref([]);
const sort = ref([]);

onBeforeMount(() => {
    gridData.value = employeesData.value;
});

const onHeaderSelectionChange = (event) => {
    const checked = event.event.target.checked;
    employeesData.value = employeesData.value.map((item) => {
        return { ...item, selected: checked };
    });

    gridData.value = gridData.value.map((item) => {
        return { ...item, selected: checked };
    });
};

const exportExcel = () => {
    const columnsToExport = [...columns.value];
    columnsToExport.splice(0, 1);
    saveExcel({
        data: gridData.value,
        group: group.value,
        fileName: 'Employees',
        columns: columnsToExport,
    });
};

const exportPDF = () => {
    const tempSort = sort.value;
    sort.value = null;
    nextTick(() => {
        columnMenu.value = false;
        gridPdfExport.value.save(
            process(gridData.value.data, { skip: skip.value, take: take.value })
        );
        columnMenu.value = true;
        sort.value = tempSort;
    });
};

const onSelectionChange = (event) => {
    if(event.dataItem){
        event.dataItem[selectedField.value] = !event.dataItem[selectedField.value];
    }
};

const localeChange = (e) => {
    currentLocale.value = e.target.value;
    localizationLanguage.value = e.target.value.language;
    emit('localizationLanguageChange', localizationLanguage.value);
};

const selectedDataItems = computed(() => {
    return gridData.value.data ? gridData.value.data.filter((item) => item.selected === true) : [];
});

const areAllSelected = computed(() => {
    return (
        gridData.value.data &&
    selectedDataItems.value.length === gridData.value.data.length &&
    selectedDataItems.value.length !== 0
    );
});

const columns = computed(() => {
    return [
        {
            field: 'selected',
            width: '45px',
            columnMenu: false,
            headerSelectionValue: areAllSelected.value,
        },
        {
            title: employeeMessage.value,
            children: [
                {
                    field: 'full_name',
                    title: contactNameMessage.value,
                    width: '220px',
                    cell: 'contactTemplate',
                },
                { field: 'job_title', title: jobTitleMessage.value, width: '250px' },
                {
                    field: 'country',
                    title: countryMessage.value,
                    width: '100px',
                    resizable: false,
                    className: 'text-center',
                    cell: 'flagTemplate',
                },
                {
                    field: 'is_online',
                    title: statusMessage.value,
                    width: '100px',
                    resizable: false,
                    className: 'text-center',
                    filter: 'boolean',
                    cell: 'isOnlineTemplate',
                },
            ],
        },
        {
            title: performanceMessage.value,
            children: [
                {
                    field: 'target',
                    title: engagementMessage.value,
                    width: '230px',
                    resizable: false,
                    filter: 'numeric',
                    cell: 'engagementTemplate',
                },
                {
                    field: 'budget',
                    title: budgetMessage.value,
                    width: '120px',
                    filter: 'numeric',
                    format: '{0:c}',
                    cell: 'budgetTemplate',
                },
            ],
        },
        {
            title: contactsMessage.value,
            children: [
                {
                    field: 'phone',
                    title: phoneMessage.value,
                    width: '140px',
                },
                {
                    field: 'address',
                    title: addressMessage.value,
                    width: '200px',
                },
            ],
        },
    ];
});

const exportPdfMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'exportPdf',
        'Export to PDF'
    );
});

const exportExcelMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'exportExcel',
        'Export to Excel'
    );
});

const gridSearchMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'gridSearch',
        'Search in all columns...'
    );
});

const contactNameMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'contactName',
        'Contact Name'
    );
});

const jobTitleMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'jobTitle',
        'Job Title'
    );
});

const countryMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'country',
        'Country'
    );
});

const employeeMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'employee',
        'Employee'
    );
});

const statusMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'status',
        'Status'
    );
});

const engagementMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'engagement',
        'Engagement'
    );
});

const performanceMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'performance',
        'Performance'
    );
});

const budgetMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'budget',
        'Budget'
    );
});

const contactsMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'contacts',
        'Contacts'
    );
});

const phoneMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'phone',
        'Phone'
    );
});

const addressMessage = computed(() => {
    return provideLocalizationService({kendoLocalizationService}).toLanguageString(
        'address',
        'Address'
    );
});

</script>

<style>
td.text-center {
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
