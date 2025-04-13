<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size: </span>
        <knumeric :size="'small'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium size: </span>
        <knumeric :size="'medium'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large size: </span>
        <knumeric :size="'large'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom size: </span>
        <knumeric
          :size="null"
          :class="'custom-numerictextbox'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    knumeric: NumericTextBox,
  },
};
</script>

<style>
.custom-numerictextbox input {
  line-height: 2;
}
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
}
</style>
