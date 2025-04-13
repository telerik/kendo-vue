<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size: </span>
        <ktextarea :size="'small'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Medium size: </span>
        <ktextarea :size="'medium'" :style="{ width: '170px' }" />
      </span>
      <span class="wrapper">
        <span>Large size: </span>
        <ktextarea :size="'large'" :style="{ width: '170px' }" />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom size: </span>
        <ktextarea
          :size="null"
          :class="'custom-textarea'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { TextArea } from '@progress/kendo-vue-inputs';

export default {
  components: {
    ktextarea: TextArea,
  },
};
</script>

<style>
.custom-textarea input {
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
