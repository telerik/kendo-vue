<template>
  <div>
    <RadioButton
      :name="'group1'"
      :value="'first'"
      :checked="selectedValue === 'first'"
      @change="handleChange"
      :label="'First'"
    />
    <RadioButton
      :name="'group1'"
      :value="'second'"
      :checked="selectedValue === 'second'"
      @change="handleChange"
      :label="'Second'"
    />
    <RadioButton
      :name="'group1'"
      :value="'third'"
      :checked="selectedValue === 'third'"
      @change="handleChange"
      :label="'Third'"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RadioButton } from "@progress/kendo-vue-inputs";

const selectedValue = ref("first");

const handleChange = (e) => {
    selectedValue.value = e.value;
};
</script>

