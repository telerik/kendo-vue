<template>
<div>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-lg-3 example-col">
            <p>Default Button</p>
            <p class="k-block">
                <k-button @kendoclick="onClick">Browse</k-button>
                <k-button icon="folder" @kendoclick="onClick">Browse</k-button>
                <k-button icon="folder" @kendoclick="onClick"></k-button>
            </p>
        </div>
    </div>
</div>
</template>

<script>
import { Button } from '@progress/kendo-buttons-vue-wrapper';

export default {
  name: 'App',
  components: {
    'k-button': Button
  },
  methods: {
    onClick: function (ev) {
        console.log("Button clicked!");
    }
}
}
</script>
