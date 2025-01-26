<template>
<div>
    <div class="vue-app k-rtl">
        <div class="row">
           <k-button icon="check">Apply</k-button>
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
