<template>
  <div :dir="isRtl ? 'rtl' : 'ltr'">
    <div class="example-config">
      <DropDownList
        :data-items="languageOptions"
        :text-field="'text'"
        :data-item-key="'value'"
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

<script>
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

export default {
  name: "App",
  components: {
    Grid,
    IntlProvider,
    LocalizationProvider,
    DropDownList,
  },
  data() {
    return {
      locale: "en-US", // Default locale
      isRtl: false, // Default direction (left-to-right)
      languageOptions: [
        { text: "English", value: "en-US" },
        { text: "Español", value: "es-ES" },
        { text: "עברית", value: "he-IL" },
      ],
      gridData: [], // Empty grid data
      columnTitles: {
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
      },
    };
  },
  computed: {
    columns() {
      return [
        {
          field: "ProductID",
          title: this.titles.ProductID,
          width: "70px",
          filterable: false,
        },
        { field: "ProductName", title: this.titles.ProductName },
        {
          field: "FirstOrderedOn",
          title: this.titles.FirstOrderedOn,
          filter: "date",
          format: "{0:D}",
        },
        {
          field: "UnitPrice",
          title: this.titles.UnitPrice,
          filter: "numeric",
          format: "{0:c}",
        },
      ];
    },
    titles() {
      return this.columnTitles[this.locale] || this.columnTitles["en-US"];
    },
  },
  methods: {
    handleLocaleChange(event) {
      const newLocale = event.value;
      this.locale = newLocale.value;
      if (this.locale === "he-IL") {
        this.isRtl = true;
      } else {
        this.isRtl = false;
      }
    },
  },
};
</script>

<style>
.example-config {
  margin-bottom: 1em;
}
</style>
