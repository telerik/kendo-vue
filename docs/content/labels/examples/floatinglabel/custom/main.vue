<template>
  <FloatingLabel
    :editor-id="editorId"
    :editor-value="ddlState"
    :label="'Shirt Size:'"
  >
    <DropDownList
      :style="{ width: '230px' }"
      :id="editorId"
      :ariaLabelledBy="labelId"
      :data-items="sizes"
      @change="onChange"
    />
  </FloatingLabel>
</template>

<script setup>
import { ref } from "vue";
import { FloatingLabel } from "@progress/kendo-vue-labels";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

const editorId = "sizes-editor";
const labelId = "sizes-label";
const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
const ddlState = ref(undefined);

function onChange(e) {
    ddlState.value = e.value;
}
</script>

