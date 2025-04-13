<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size:</span>
        <kradiobutton :size="'small'" :checked="true" />
      </span>
      <span class="wrapper">
        <span>Medium size:</span>
        <kradiobutton :size="'medium'" :checked="true" />
      </span>
      <span class="wrapper">
        <span>Large size:</span>
        <kradiobutton :size="'large'" :checked="true" />
      </span>
      <span class="wrapper">
        <span>Custom size:</span>
        <kradiobutton :size="null" :class="'custom-checkbox'" :checked="true" />
      </span>
    </div>
  </div>
</template>
<script>
import { RadioButton } from '@progress/kendo-vue-inputs';

export default {
  components: {
    kradiobutton: RadioButton,
  },
};
</script>

<style>
.custom-checkbox input {
  width: 30px;
  height: 30px;
}
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
