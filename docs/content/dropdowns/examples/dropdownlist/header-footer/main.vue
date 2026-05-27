<template>
  <div>
    <p>Type the name of a European country:</p>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="countries"
      :header="'myHeader'"
      :footer="'myFooter'"
    >
      <template #myHeader>
        <HeaderRender />
      </template>
      <template #myFooter>
        <FooterRender />
      </template>
    </DropDownList>
  </div>
</template>

<script setup>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import countries from './countries';
import HeaderRender from './HeaderRender.vue';
import FooterRender from './FooterRender.vue';
</script>
