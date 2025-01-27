<template>
<div>
       <k-button @kendoclick="onClick">Button</k-button>
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
