<template>
<div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-3 example-col">
            <p>Background Icon</p>
            <k-button icon="cancel">Cancel</k-button>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3 example-col">
            <p>Image icon</p>
            <k-button image-url="https://demos.telerik.com/kendo-ui/content/web/16x16/Chart.png">Chart</k-button>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3 example-col">
            <p>Icon-Only</p>
           <k-button icon="refresh"></k-button>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-3 example-col">
            <p>Font icon</p>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
            <k-button sprite-css-class="fa fa-calendar fa-fw">Calendar</k-button>
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
  }
}
</script>
