<template>
    <div>
      <h4>Readonly Mode</h4>
      <Rating :defaultValue="3" :readonly="true" />
    </div>
</template>

<script>
import { Rating } from '@progress/kendo-vue-inputs';

export default {
    components: {
        Rating,
    },
};
</script>