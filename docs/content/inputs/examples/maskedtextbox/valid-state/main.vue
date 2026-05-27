<template>
  <div>
    <p>Type any letters</p>
    <MaskedTextBox
      :style="{ width: '230px' }"
      :mask="'(999) 000-00-00-00'"
      :value="value"
      :valid="valid"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";

const value = ref("(359) 884-12-33-21");
const valid = ref(true);
let timeout;

const handleChange = (event) => {
    if (value.value === event.target.value) {
        updateValidity(event);
    } else {
        value.value = event.target.value;
    }
};

const updateValidity = (event) => {
    const textbox = event.target;
    if (textbox.value.length > textbox.value.length) {
        if (valid.value) {
            valid.value = false;
        } else {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            valid.value = true;
        }, 100);
    }
};
</script>
