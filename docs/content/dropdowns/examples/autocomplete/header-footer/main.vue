<template>
  <div>
    <p>Type the name of a European country:</p>
    <AutoComplete
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
    </AutoComplete>
  </div>
</template>

<script setup>
import countries from "./countries";
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
import HeaderRender from "./HeaderRender.vue";
import FooterRender from "./FooterRender.vue";

const header = "myHeader";
const footer = "myFooter";
</script>
