<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small roundness: </span>
        <kinput :rounded="'small'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium roundness: </span>
        <kinput :rounded="'medium'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large roundness: </span>
        <kinput :rounded="'large'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Full roundness: </span>
        <kinput :rounded="'full'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Custom roundness: </span>
        <kinput
          :rounded="null"
          :class="'custom-input'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { Input } from '@progress/kendo-vue-inputs';

export default {
  components: {
    kinput: Input,
  },
};
</script>

<style>
.custom-input {
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
