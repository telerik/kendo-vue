<template>
  <div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>Input</p>
      <KInput :style="{ width: '230px' }"></KInput>
    </div>
  </div>
</template>
<script>
import { Input } from '@progress/kendo-vue-inputs';

export default {
  components: {
    KInput: Input,
  },
};
</script>
