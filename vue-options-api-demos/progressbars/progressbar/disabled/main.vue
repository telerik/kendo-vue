<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <Checkbox
          :id="'disabled'"
          @click="handleClick"
          :label="'Toggle the disabled state'"
          :label-placement="'before'"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-sm">
        <ProgressBar :value="20" :disabled="disabled" />
      </div>
    </div>
  </div>
</template>

<script>
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ProgressBar,
    Checkbox,
  },
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    handleClick(e) {
      this.disabled = e.target.checked;
    },
  },
};
</script>
