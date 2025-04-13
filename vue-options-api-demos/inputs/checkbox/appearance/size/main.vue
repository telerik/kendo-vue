<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size:</span>
        <kcheckbox :size="'small'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Medium size:</span>
        <kcheckbox :size="'medium'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Large size:</span>
        <kcheckbox :size="'large'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Custom size:</span>
        <kcheckbox :size="null" :class="'custom-checkbox'" :default-checked="true" />
      </span>
    </div>
  </div>
</template>
<script>
import { Checkbox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    kcheckbox: Checkbox,
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
