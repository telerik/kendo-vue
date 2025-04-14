<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small roundness: </span>
        <ComboBox
          :style="{ width: '170px' }"
          :rounded="'small'"
          :data-items="[
            'X-Small',
            'Small',
            'Medium',
            'Large',
            'X-Large',
            '2X-Large',
          ]"
        />
      </span>
      <span class="wrapper">
        <span>Medium roundness: </span>
        <ComboBox
          :style="{ width: '170px' }"
          :rounded="'medium'"
          :data-items="[
            'X-Small',
            'Small',
            'Medium',
            'Large',
            'X-Large',
            '2X-Large',
          ]"
        />
      </span>
      <span class="wrapper">
        <span>Large roundness: </span>
        <ComboBox
          :style="{ width: '170px' }"
          :rounded="'large'"
          :data-items="[
            'X-Small',
            'Small',
            'Medium',
            'Large',
            'X-Large',
            '2X-Large',
          ]"
        />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Full roundness: </span>
        <ComboBox
          :style="{ width: '170px' }"
          :rounded="'full'"
          :data-items="[
            'X-Small',
            'Small',
            'Medium',
            'Large',
            'X-Large',
            '2X-Large',
          ]"
        />
      </span>
      <span class="wrapper">
        <span>Custom roundness:</span>
        <ComboBox
          :class="'custom-combobox'"
          :rounded="null"
          :data-items="[
            'X-Small',
            'Small',
            'Medium',
            'Large',
            'X-Large',
            '2X-Large',
          ]"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { ComboBox } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    ComboBox,
  },
};
</script>

<style>
.custom-combobox {
  width: 200px;
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
