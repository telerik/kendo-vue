<template>
  <div>
    <KLabel :id="labelId" :editor-id="editorId">
      Shirt Size:&nbsp;
    </KLabel>
    <DropDownList
      :style="{ width: '230px' }"
      :id="editorId"
      :ariaLabelledBy="labelId"
      :data-items="sizes"
      @change="onChange"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Label as KLabel } from "@progress/kendo-vue-labels";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

const editorId = "sizes-editor";
const labelId = "sizes-label";
const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
const ddlState = ref(undefined);

function onChange(e) {
    ddlState.value = e.value;
}
</script>

