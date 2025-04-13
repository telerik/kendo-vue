<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>No roundness:</span>
        <kcheckbox :rounded="null" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Small roundness:</span>
        <kcheckbox :rounded="'small'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Medium roundness:</span>
        <kcheckbox :rounded="'medium'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Large roundness:</span>
        <kcheckbox :rounded="'large'" :default-checked="true" />
      </span>
      <span class="wrapper">
        <span>Custom roundness:</span>
        <kcheckbox
          :rounded="null"
          :class="'custom-checkbox'"
          :default-checked="true"
        />
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
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
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
