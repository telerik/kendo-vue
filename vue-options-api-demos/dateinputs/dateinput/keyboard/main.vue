<template>
<div id="vueapp" class="vue-app">
    <div class="example-config">
        <dateinput :style="{ width: '230px' }" />
    </div>
</div>
</template>
<script>
import { DateInput } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'dateinput': DateInput
    }
};

</script>
