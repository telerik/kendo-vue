<template>
  <FormElement style="max-width: 400px">
    <KLabel :editor-id="editorId">
      First name:&nbsp;
    </KLabel>
    <KInput
      :style="{ width: '230px' }"
      :id="editorId"
      :aria-describedby="'firstNameHint'"
    />
    <Hint :id="'firstNameHint'">
      e.g.: Peter
    </Hint>
  </FormElement>
</template>

<script setup>
import { FormElement } from "@progress/kendo-vue-form";
import { Label as KLabel, Hint } from "@progress/kendo-vue-labels";
import { Input as KInput } from "@progress/kendo-vue-inputs";

const editorId = "firstName";
</script>

