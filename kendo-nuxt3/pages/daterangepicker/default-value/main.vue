<template>
<div class="row">
      <div class="col-xs-12 col-md-12 example-col">
        <p>DateRangePicker with default value</p>
        <DateRangePicker :default-value="defaultValue" />
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
        defaultValue: {
          start: new Date(2018, 8, 5),
          end: null,
        }
      }
    }
};
</script>

