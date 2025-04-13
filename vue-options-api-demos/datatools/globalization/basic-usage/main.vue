<template>
  <localization :language="spanish ? 'es-ES' : 'en-EN'">
    <intl :locale="spanish ? 'es' : 'en'">
      <div class="col-xs-12 col-md-12 example-config">
        <kbutton @click="buttonClick">
          Change to {{ spanish ? "English" : "Spanish" }}
        </kbutton>
      </div>
      <pager
        :total="100"
        :page-sizes="[5, 7, 10]"
        :previous-next="true"
        :skip="skip"
        :take="take"
        @pagechange="pageChange"
      >
      </pager>

      <kFilter
        :fields="fields"
        :value="filter"
        @change="onFilterChange"
        :default-group-filter="defaultGroupFilter"
      >
      </kFilter>
    </intl>
  </localization>
</template>

<script>
import { Pager, Filter, Operators } from "@progress/kendo-vue-data-tools";
import { Button } from '@progress/kendo-vue-buttons';
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

export default {
  components: {
    pager: Pager,
    kFilter: Filter,
    localization: LocalizationProvider,
    intl: IntlProvider,
      'kbutton': Button
  },
  data: function () {
    return {
      spanish: true,
      skip: 0,
      take: 7,
      dataResult: [],
      defaultGroupFilter: {
        logic: "and",
        filters: [],
      },
      filter: {
        logic: "and",
        filters: [{ field: "ProductName", operator: "contains", value: "an" }],
      },
      fields: null,
      fieldsEN: [
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
      ],
      fieldsES: [
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
      ],
    };
  },
  created() {
    this.fields = this.fieldsES;
  },
  methods: {
    buttonClick: function () {
      this.spanish = !this.spanish;

      this.spanish
        ? (this.fields = this.fieldsES)
        : (this.fields = this.fieldsEN);
    },
    pageChange: function (event) {
      this.take = event.take;
      this.skip = event.skip;
    },
    onFilterChange(event) {
      if (event.filter !== null) {
        this.filter = event.filter;
      } else {
        this.filter = this.defaultGroupFilter;
      }
    },
  },
};
</script>
