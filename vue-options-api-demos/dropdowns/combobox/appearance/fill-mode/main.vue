<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <ComboBox
          :style="{ width: '170px' }"
          :fill-mode="'flat'"
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
        <span>Solid: </span>
        <ComboBox
          :style="{ width: '170px' }"
          :fill-mode="'solid'"
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
        <span>Outline: </span>
        <ComboBox
          :style="{ width: '170px' }"
          :fill-mode="'outline'"
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
        <span>Custom fill mode:</span>
        <ComboBox
          :class="'custom-combobox'"
          :fill-mode="null"
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
  background-color: #00aead;
  border: 2px solid #bfd843;
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
