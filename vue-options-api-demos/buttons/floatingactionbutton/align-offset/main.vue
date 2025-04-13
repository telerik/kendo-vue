<template>
  <div class="example">
    <div class="row">
      <div class="col-6">
        <p>Horizontal offset</p>
        <numerictextbox :style="{ width: '230px' }" v-model="xValue" />
      </div>
      <div class="col-6">
        <p>Vertical offset</p>
        <numerictextbox :style="{ width: '230px' }" v-model="yValue" />
      </div>
    </div>

    <fab :alignOffset="{ x: xValue, y: yValue }" :svg-icon="homeIcon" />
  </div>
</template>
<script>
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import { homeIcon } from "@progress/kendo-svg-icons";

export default {
  components: {
    numerictextbox: NumericTextBox,
    fab: FloatingActionButton,
  },
  data() {
    return {
      homeIcon,
      yValue: 16,
      xValue: 16,
    };
  },
};
</script>
