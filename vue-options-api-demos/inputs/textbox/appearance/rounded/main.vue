<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small roundness: </span>
        <KTextBox :rounded="'small'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium roundness: </span>
        <KTextBox :rounded="'medium'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large roundness: </span>
        <KTextBox :rounded="'large'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Full roundness: </span>
        <KTextBox :rounded="'full'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Custom roundness: </span>
        <KTextBox
          :rounded="null"
          :class="'custom-input'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { TextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    KTextBox: TextBox,
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
