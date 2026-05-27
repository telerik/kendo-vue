<template>
  <div>
    Valid Input Icon:
    <br />
    <MaskedTextBox
      :style="{ width: '230px' }"
      :show-validation-icon="true"
      :input-class="'k-valid'"
      :mask="mask"
      :default-value="defaultValue"
    />
    <br />
    <br />
    Invalid Input Icon:
    <br />
    <MaskedTextBox
      :style="{ width: '230px' }"
      :show-validation-icon="true"
      :valid="false"
      :mask="mask"
      :default-value="defaultValue"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";

const mask = ref("(999) 000-00-00-00");
const defaultValue = ref("(359) 555-55-55-55");
</script>
