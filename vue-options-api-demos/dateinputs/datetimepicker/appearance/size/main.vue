<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small: </span>
        <DateTimePicker
          :style="{ width: '170px' }"
          :size="'small'"
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
        <span>Medium: </span>
        <DateTimePicker
          :style="{ width: '170px' }"
          :size="'medium'"
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
        <span>Large: </span>
        <DateTimePicker
          :style="{ width: '170px' }"
          :size="'large'"
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
    <span class="wrapper">
      <span>Custom size:</span>
      <DateTimePicker
        :class="'custom-datetimepicker'"
        :size="null"
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
</template>
<script>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';

export default {
  components: {
    DateTimePicker,
  },
};
</script>

<style>
.custom-datetimepicker {
  height: 40px;
  width: 200px;
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
