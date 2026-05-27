<template>
  <LocalizationProvider :language="spanish ? 'es-ES' : 'en-EN'">
    <IntlProvider :locale="spanish ? 'es' : 'en'">
      <div class="col-xs-12 col-md-12 example-config">
        <KButton @click="toggleLanguage">
          Change to {{ spanish ? "English" : "Spanish" }}
        </KButton>
      </div>
      <Pager
        :total="100"
        :page-sizes="[5, 7, 10]"
        :previous-next="true"
        :skip="skip"
        :take="take"
        @pagechange="pageChange"
      />
      <Filter
        :fields="fields"
        :value="filter"
        @change="onFilterChange"
        :default-group-filter="defaultGroupFilter"
      />
    </IntlProvider>
  </LocalizationProvider>
</template>

<script setup>
import { ref } from "vue";
import { Pager, Filter, Operators } from "@progress/kendo-vue-data-tools";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import {
    IntlProvider,
    load,
    LocalizationProvider,
    loadMessages,
} from "@progress/kendo-vue-intl";

import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";

import numbers from "cldr-numbers-full/main/es/numbers.json";
import currencies from "cldr-numbers-full/main/es/currencies.json";
import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";
import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";

load(
    likelySubtags,
    currencyData,
    weekData,
    numbers,
    currencies,
    caGregorian,
    dateFields,
    timeZoneNames
);

import esMessages from "./es.json";
loadMessages(esMessages, "es-ES");

const spanish = ref(true);
const skip = ref(0);
const take = ref(7);
const defaultGroupFilter = {
    logic: "and",
    filters: [],
};
const filter = ref({
    logic: "and",
    filters: [{ field: "ProductName", operator: "contains", value: "an" }],
});

const fieldsEN = [
    {
        name: "ProductName",
        label: "Product Name",
        filter: "text",
        operators: Operators.text,
    },
    {
        name: "UnitPrice",
        label: "Unit Price",
        filter: "numeric",
        operators: Operators.numeric,
    },
    {
        name: "FirstOrderedOn",
        label: "First Ordered On",
        filter: "date",
        operators: Operators.date,
    },
    {
        name: "Discontinued",
        label: "Discontinued",
        filter: "boolean",
        operators: Operators.boolean,
    },
];

const fieldsES = [
    {
        name: "ProductName",
        label: "Nombre",
        filter: "text",
        operators: Operators.text,
    },
    {
        name: "UnitPrice",
        label: "Precio",
        filter: "numeric",
        operators: Operators.numeric,
    },
    {
        name: "FirstOrderedOn",
        label: "Primero ordenado",
        filter: "date",
        operators: Operators.date,
    },
    {
        name: "Discontinued",
        label: "Interrumpido",
        filter: "boolean",
        operators: Operators.boolean,
    },
];

const fields = ref(fieldsES);

const toggleLanguage = () => {
    spanish.value = !spanish.value;
    fields.value = spanish.value ? fieldsES : fieldsEN;
};

const pageChange = (event) => {
    take.value = event.take;
    skip.value = event.skip;
};

const onFilterChange = (event) => {
    if (event.filter !== null) {
        filter.value = event.filter;
    } else {
        filter.value = defaultGroupFilter;
    }
};
</script>
