<template>
  <div class="example-wrapper">
    <div>
      <div>T-shirt sizes: {{ value }}</div>
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="sizes"
        :value="value"
        @change="onChange"
      ></MultiSelect>
    </div>
  </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    MultiSelect,
  },
  data() {
    return {
      sizes: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'],
      value: [],
    };
  },
  methods: {
    onChange(event) {
      this.value = [...event.target.value];
    },
  },
};
</script>
