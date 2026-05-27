<template>
  <div>
    <p>Type the name of a European country:</p>
    <ComboBox
      :style="{ width: '230px' }"
      :data-items="countries"
      :header="header"
      :footer="footer"
    >
      <template #myHeader>
        <HeaderRender />
      </template>
      <template #myFooter>
        <FooterRender />
      </template>
    </ComboBox>
  </div>
</template>

<script setup>
import { ComboBox } from '@progress/kendo-vue-dropdowns'
import HeaderRender from './HeaderRender.vue'
import FooterRender from './FooterRender.vue'
import countries from './countries'

const header = 'myHeader'
const footer = 'myFooter'
</script>
