<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small roundness: </span>
        <knumeric :rounded="'small'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium roundness: </span>
        <knumeric :rounded="'medium'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large roundness: </span>
        <knumeric :rounded="'large'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Full roundness: </span>
        <knumeric :rounded="'full'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Custom roundness: </span>
        <knumeric
          :rounded="null"
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
.custom-numerictextbox {
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
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
