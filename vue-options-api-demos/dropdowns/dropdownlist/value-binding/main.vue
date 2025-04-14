<template>
  <div class="example-wrapper">
    <div>
      <div>T-shirt size: {{ value }}</div>
      <DropDownList
        :style="{ width: '230px' }"
        :data-items="sizes"
        :value="value"
        @change="onChange"
      ></DropDownList>
    </div>
  </div>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    DropDownList,
  },
  data() {
    return {
      sizes: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'],
      value: null,
    };
  },
  methods: {
    onChange(event) {
      this.value = event.target.value;
    },
  },
};
</script>
