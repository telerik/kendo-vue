<template>
  <LocalizationProvider :language="'es-ES'">
    <div class="row">
      <div class="m-3">
        <p>AutoComplete</p>
        <AutoComplete
          :style="{ width: '230px' }"
          :label="'Product'"
          :data-items="dataProducts"
        />
      </div>
      <div class="m-3">
        <p>ComboBox</p>
        <ComboBox
          :style="{ width: '230px' }"
          :label="'Product'"
          :data-items="dataProducts"
        />
      </div>
      <div class="m-3">
        <p>DropDownList</p>
        <DropDownList
          :style="{ width: '230px' }"
          :label="'Product'"
          :data-items="dataProducts"
        />
      </div>
    </div>
    <div class="row">
      <div class="m-3">
        <p>DropDownTree</p>
        <DropDownTree
          :style="{ width: '230px' }"
          :label="'Product'"
          :data-items="dataProducts"
        />
      </div>
      <div class="m-3">
        <p>MultiSelect</p>
        <MultiSelect
          :style="{ width: '230px' }"
          :label="'Product'"
          :data-items="dataProducts"
        />
      </div>
      <div class="m-3">
        <p>MultiSelectTree</p>
        <MultiSelectTree
          :style="{ width: '230px' }"
          :label="'Product'"
          :data-items="dataProducts"
        />
      </div>
    </div>
  </LocalizationProvider>
</template>

<script setup>
import {
    AutoComplete,
    ComboBox,
    DropDownList,
    DropDownTree,
    MultiSelect,
    MultiSelectTree,
} from '@progress/kendo-vue-dropdowns';
import { LocalizationProvider, loadMessages } from '@progress/kendo-vue-intl';
import esMessages from './es.json';

loadMessages(esMessages, 'es-ES');

const dataProducts = [];
</script>
