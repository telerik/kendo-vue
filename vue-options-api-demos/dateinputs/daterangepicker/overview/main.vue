<template>
 <div class="row">
      <div class="col-xs-12 col-md-6 example-col">
          <p>DateRangePicker with default shown state</p>
          <DateRangePicker
              :default-show="defaultShow"
          />
      </div>
  </div>
</template>

<script>

import {
 DateRangePicker
    } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
       DateRangePicker
    },
    data () {
      return {
        defaultShow: true
      }
    }
};
</script>
