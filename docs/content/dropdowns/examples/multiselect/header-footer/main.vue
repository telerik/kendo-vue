<template>
  <div class="example-wrapper">
    <div>
      <MultiSelect
        :style="{ width: '400px' }"
        :data-items="countriesList"
        :header="header"
        :footer="footer"
      >
        <template #myHeader>
          <HeaderRender />
        </template>
        <template #myFooter>
          <FooterRender />
        </template>
      </MultiSelect>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import countries from './countries';
import HeaderRender from './HeaderRender.vue';
import FooterRender from './FooterRender.vue';

const countriesList = ref(countries.slice());
const header = ref('myHeader');
const footer = ref('myFooter');
</script>
