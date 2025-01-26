<template>
<div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 example-col">
            <p>Image button</p>
            <k-button image-url="https://demos.telerik.com/kendo-ui/content/web/16x16/Chart.png" @kendoclick="onClick">Chart</k-button>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4 example-col">
            <p>Disabled button</p>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
            <k-button sprite-css-class="fa fa-calendar fa-fw" :disabled="true" @kendoclick="onClick">Calendar</k-button>
        </div>
    </div>
</div>
</template>

<script>
import { Button } from '@progress/kendo-buttons-vue-wrapper';

export default {
  name: 'App',
  components: {
    'k-button': Button,
  },
  methods: {
    onClick: function (ev) {
        console.log("Button clicked!");
    }
}
}
</script>
