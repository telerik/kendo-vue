<template>
  <div>
    <MaskedTextBox
      :style="{ width: '230px' }"
      :inputPrefix="'prefix'"
      :mask="mask"
      :default-value="defaultValue"
    >
      <template #prefix>
        <div>
          &nbsp; &nbsp; &nbsp;
          <InputSeparator />
          &nbsp; &nbsp; &nbsp;
        </div>
      </template>
    </MaskedTextBox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox, InputSeparator } from "@progress/kendo-vue-inputs";

const mask = ref("(999) 000-00-00-00");
const defaultValue = ref("(359) 555-55-55-55");
</script>
