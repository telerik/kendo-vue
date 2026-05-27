<template>
  <div class="row example-wrapper" :style="{ minHeight: '450px' }">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Full-length format description:</p>
      <TimePicker :style="{ width: '230px' }" :format-placeholder="'wide'" />
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Narrow-length format description:</p>
      <TimePicker :style="{ width: '230px' }" :format-placeholder="'narrow'" />
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Short-length format description:</p>
      <TimePicker :style="{ width: '230px' }" :format-placeholder="'short'" />
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Display defined format:</p>
      <TimePicker
        :style="{ width: '230px' }"
        :format="'HH:mm:ss'"
        :format-placeholder="'formatPattern'"
      />
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Custom defined format descriptions</p>
      <TimePicker
        :style="{ width: '230px' }"
        :format="'HH:mm:ss'"
        :format-placeholder="{ hour: 'h', minute: 'm', second: 's' }"
      />
    </div>
  </div>
</template>

<script setup>
import { TimePicker } from '@progress/kendo-vue-dateinputs'
</script>
