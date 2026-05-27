<template>
  <div>
    <RadioButton
      :name="'group1'"
      :value="'default label'"
      :checked="true"
      :label-render="'myTemplate'"
    >
      <template #myTemplate>
        <span>
          Right-to-left support
          <strong :style="{ color: 'green' }">on</strong>
        </span>
      </template>
    </RadioButton>
    <RadioButton
      :label="'RadioButton label before'"
      :name="'group1'"
      :value="'label before'"
      :label-render="'myTemplate'"
    >
      <template #myTemplate>
        <span>
          Right-to-left support
          <strong :style="{ color: 'red' }">off</strong>
        </span>
      </template>
    </RadioButton>
  </div>
</template>

<script setup>
import { RadioButton } from "@progress/kendo-vue-inputs";
</script>

