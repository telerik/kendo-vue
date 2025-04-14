<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <DateInput
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
        <DateInput
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
        <DateInput
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
        <DateInput
          :class="'custom-dateinput'"
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
import { DateInput } from '@progress/kendo-vue-dateinputs';

export default {
  components: {
    DateInput,
  },
};
</script>

<style>
.custom-dateinput {
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
