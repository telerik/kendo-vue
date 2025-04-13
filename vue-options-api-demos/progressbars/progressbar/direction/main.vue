<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <p>
          State: <strong>{{ direction ? "Reversed" : "Default" }}</strong>
        </p>
        <Checkbox
          id="reverse"
          @click="handleReverse"
          :label="'Toggle the reverse state'"
          :label-placement="'before'"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-sm">
        <ProgressBar :value="50" :reverse="direction" />
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
      direction: false,
    };
  },
  methods: {
    handleReverse(e) {
      this.direction = e.target.checked;
    },
  },
};
</script>
