<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <DropDownList
          :data-items="positions"
          :value="position"
          @change="handleChange"
          :style="{
            width: 180,
          }"
        />
      </div>
      <div class="col-sm">
        <strong>Result:</strong>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <Checkbox
          :id="'visibility'"
          :checked="visible"
          @click="handleClick"
          :label="'Toggle the label visibility'"
          :label-placement="'before'"
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

<script>
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox } from "@progress/kendo-vue-inputs";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

export default {
  components: {
    ProgressBar,
    Checkbox,
    DropDownList,
  },
  data() {
    return {
      value: 50,
      visible: true,
      positions: ["start", "center", "end"],
      position: "start",
    };
  },
  methods: {
    handleClick(e) {
      this.visible = e.target.checked;
    },
    handleChange(e) {
      this.position = e.target.value;
    },
  },
};
</script>
