<template>
  <div>
    <CheckboxStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <kcheckbox :size="size" :rounded="rounded" :default-checked="true" />
  </div>
</template>
<script>
import CheckboxStyleConfigurator from './CheckboxStyleConfigurator.vue';
import { Checkbox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    CheckboxStyleConfigurator,
    'kcheckbox': Checkbox,
  },
  data() {
    return {
      size: 'medium',
      rounded: 'medium',
    };
  },
  methods: {
    setRounded(event) {
      this.rounded = event.value;
    },
    setSize(event) {
      this.size = event.value;
    },
  },
};
</script>
