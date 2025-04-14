<template>
    <localization :language="'es-ES'">
      <div class="row">
        <div class="m-3">
          <p>AutoComplete</p>
          <AutoComplete
            :style="{ width: '230px' }"
            :label="'Product'"
            :data-items="dataProducts"
          >
          </AutoComplete>
        </div>
        <div class="m-3">
          <p>ComboBox</p>
          <ComboBox
            :style="{ width: '230px' }"
            :label="'Product'"
            :data-items="dataProducts"
          >
          </ComboBox>
        </div>
        <div class="m-3">
          <p>DropDownList</p>
          <DropDownList
            :style="{ width: '230px' }"
            :label="'Product'"
            :data-items="dataProducts"
          >
          </DropDownList>
        </div>
      </div>
      <div class="row">
        <div class="m-3">
          <p>DropDownTree</p>
          <DropDownTree
            :style="{ width: '230px' }"
            :label="'Product'"
            :data-items="dataProducts"
          >
          </DropDownTree>
        </div>
        <div class="m-3">
          <p>MultiSelect</p>
          <MultiSelect
            :style="{ width: '230px' }"
            :label="'Product'"
            :data-items="dataProducts"
          >
          </MultiSelect>
        </div>
        <div class="m-3">
          <p>MultiSelectTree</p>
          <MultiSelectTree
            :style="{ width: '230px' }"
            :label="'Product'"
            :data-items="dataProducts"
          >
          </MultiSelectTree>
        </div>
      </div>
    </localization>
  </template>
  <script>
  import {
    AutoComplete,
    ComboBox,
    DropDownList,
    DropDownTree,
    MultiSelect,
    MultiSelectTree,
  } from '@progress/kendo-vue-dropdowns';
  import { loadMessages, LocalizationProvider } from '@progress/kendo-vue-intl';
  import esMessages from './es.json';
  loadMessages(esMessages, 'es-ES');
  export default {
    components: {
      AutoComplete,
      ComboBox,
      DropDownList,
      MultiSelect,
      MultiSelectTree,
      DropDownTree,
      localization: LocalizationProvider,
    },
    data: function () {
      return {
        dataProducts: [],
      };
    },
  };
  </script>
  