<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <DropDownList
          :data-items="positions"
          :value="position"
          @change="handleChange"
          :style="{ width: 180 }"
        />
      </div>
      <div class="col-sm">
        <strong>Result:</strong>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <Checkbox
          id="visibility"
          :checked="visible"
          @click="handleClick"
          label="Toggle the label visibility"
          label-placement="before"
        />
      </div>
      <div class="col-sm">
        <ProgressBar
          :value="value"
          :label-visible="visible"
          :label-placement="position"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox } from "@progress/kendo-vue-inputs";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

const value = ref(50);
const visible = ref(true);
const positions = ref(["start", "center", "end"]);
const position = ref("start");

const handleClick = (e) => {
    visible.value = e.target.checked;
};

const handleChange = (e) => {
    position.value = e.target.value;
};
</script>
