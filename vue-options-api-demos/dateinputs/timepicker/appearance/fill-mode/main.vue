<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <TimePicker
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
        <TimePicker
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
        <TimePicker
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
        <TimePicker
          :class="'custom-timepicker'"
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
import { TimePicker} from '@progress/kendo-vue-dateinputs';

export default {
  components: {
    TimePicker,
  },
};
</script>

<style>
.custom-timepicker {
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
