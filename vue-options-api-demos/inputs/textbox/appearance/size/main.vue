<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size: </span>
        <KTextBox :size="'small'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium size: </span>
        <KTextBox :size="'medium'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large size: </span>
        <KTextBox :size="'large'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom size: </span>
        <KTextBox
          :size="null"
          :class="'custom-input'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { TextBox as KTextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    KTextBox,
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
