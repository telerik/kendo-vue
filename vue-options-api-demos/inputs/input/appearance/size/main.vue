<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size: </span>
        <kinput :size="'small'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium size: </span>
        <kinput :size="'medium'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large size: </span>
        <kinput :size="'large'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom size: </span>
        <kinput
          :size="null"
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
.custom-input input {
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
