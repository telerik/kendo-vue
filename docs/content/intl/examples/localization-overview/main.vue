<template>
  <div :dir="isRtl ? 'rtl' : 'ltr'">
    <div class="example-config">
      <DropDownList
        :data-items="languageOptions"
        text-field="text"
        data-item-key="value"
        :value="locale"
        @change="handleLocaleChange"
      />
    </div>
    <LocalizationProvider :language="locale">
      <IntlProvider :locale="locale">
        <Grid
          :style="{ height: '420px' }"
          :data-items="gridData"
          :columns="columns"
        />
      </IntlProvider>
    </LocalizationProvider>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Grid } from "@progress/kendo-vue-grid";
import {
    IntlProvider,
    LocalizationProvider,
    loadMessages,
} from "@progress/kendo-vue-intl";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import esMessages from "./messages-es.json";
import heMessages from "./messages-he.json";

// Load messages for supported languages
loadMessages(esMessages, "es-ES");
loadMessages(heMessages, "he-IL");

const locale = ref("en-US"); // Default locale
const isRtl = ref(false); // Default direction (left-to-right)
const languageOptions = [
    { text: "English", value: "en-US" },
    { text: "Español", value: "es-ES" },
    { text: "עברית", value: "he-IL" },
];
const gridData = ref([]); // Empty grid data
const columnTitles = {
    "en-US": {
        ProductID: "ID",
        ProductName: "Product Name",
        FirstOrderedOn: "First Ordered On",
        UnitPrice: "Unit Price",
    },
    "es-ES": {
        ProductID: "ID",
        ProductName: "Nombre del producto",
        FirstOrderedOn: "Primero ordenado en",
        UnitPrice: "Precio unitario",
    },
    "he-IL": {
        ProductID: "מזהה מוצר",
        ProductName: "שם המוצר",
        FirstOrderedOn: "הוזמן לראשונה בתאריך",
        UnitPrice: "מחיר ליחידה",
    },
};

const titles = computed(() => columnTitles[locale.value] || columnTitles["en-US"]);
const columns = computed(() => [
    {
        field: "ProductID",
        title: titles.value.ProductID,
        width: "70px",
        filterable: false,
    },
    { field: "ProductName", title: titles.value.ProductName },
    {
        field: "FirstOrderedOn",
        title: titles.value.FirstOrderedOn,
        filter: "date",
        format: "{0:D}",
    },
    {
        field: "UnitPrice",
        title: titles.value.UnitPrice,
        filter: "numeric",
        format: "{0:c}",
    },
]);

function handleLocaleChange(event) {
    const newLocale = event.value;
    locale.value = newLocale.value;
    isRtl.value = locale.value === "he-IL";
}
</script>

<style>
.example-config {
  margin-bottom: 1em;
}
</style>
