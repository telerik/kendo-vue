<template>
  <div>
    <div class="k-d-flex k-align-items-center">
      <KButton class="k-mr-4" @click="handleClick">Change state</KButton>
      <Checkbox v-model="value" :label="'v-model value '" />
      &nbsp;&nbsp;
      <Checkbox :value="value" @change="handleChange" :label="'Controlled value'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Checkbox } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const value = ref(true);

function handleClick() {
    value.value = !value.value;
}

function handleChange(e) {
    value.value = e.value;
}
</script>

