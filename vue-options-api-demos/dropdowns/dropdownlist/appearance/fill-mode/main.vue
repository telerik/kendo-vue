<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <DropDownList
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
        <DropDownList
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
        <DropDownList
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
        <DropDownList
          :class="'custom-dropdownlist'"
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
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    DropDownList,
  },
};
</script>

<style>
.custom-dropdownlist {
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
