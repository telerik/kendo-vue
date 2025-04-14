<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <KCheckbox
          :id="'disabled'"
          v-model="disabled"
          :label="'Toggle the disabled state'"
          :labelPlacement="'before'"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <ChunkProgressBar :value="20" :disabled="disabled" />
      </div>
    </div>
  </div>
</template>
<script>
import { ChunkProgressBar } from '@progress/kendo-vue-progressbars';
import { Checkbox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    ChunkProgressBar,
    KCheckbox: Checkbox,
  },
  data() {
    return {
      disabled: true,
    };
  },
};
</script>
