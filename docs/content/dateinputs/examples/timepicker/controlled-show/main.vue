<template>
  <div class="row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Controlled TimePicker</p>
      <TimePicker :style="{ width: '230px' }" :show="show" />
      <KButton theme-color="primary" @click="handleClick">Toggle</KButton>
    </div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>Always shown</p>
      <TimePicker :style="{ width: '230px' }" :show="true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { TimePicker } from '@progress/kendo-vue-dateinputs';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const show = ref(false);

const handleClick = () => {
    show.value = !show.value;
};
</script>
