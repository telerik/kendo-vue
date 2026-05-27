<template>
  <div>
    <p>Change the layout:</p>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="layoutItems"
      :text-field="'label'"
      :data-item-key="'value'"
      :value="layoutSelectorValue"
      @change="handleChange"
    />
    <hr />
    <div class="col-md-8">
      <RadioGroup :data-items="tasks" :layout="layout" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RadioGroup } from "@progress/kendo-vue-inputs";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

const layoutItems = [
    { value: "horizontal", label: "Horizontal" },
    { value: "vertical", label: "Vertical" },
];

const layout = ref("vertical");
const layoutSelectorValue = ref(layoutItems[1]);

const tasks = [
    { label: "To Do", value: "to do", className: "task red" },
    { label: "In Progress", value: "in progress", className: "task orange" },
    { label: "Ready for Test", value: "ready for test", className: "task blue" },
    { label: "Done", value: "done", className: "task green" },
];

function handleChange(e) {
    layout.value = e.value.value;
    layoutSelectorValue.value = e.value;
}
</script>

