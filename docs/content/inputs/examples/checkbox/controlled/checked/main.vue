<template>
  <div>
    <div class="k-d-flex k-align-items-center">
      <KButton class="k-mr-4" @click="handleClick">Change state</KButton>
      <Checkbox v-model="checked" :label="'Controlled value'" />
      &nbsp;&nbsp;
      <Checkbox :checked="checked" @change="handleChange" :label="'Controlled value'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Checkbox } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const checked = ref(true);

function handleClick() {
    checked.value = !checked.value;
}

function handleChange(e) {
    checked.value = e.value;
}
</script>

