<template>
  <div class="col-xs-12 col-sm-12 example-col">
    <label> {{ label }}: </label>
    <DropDownList
      :style="{ width: '250px', marginleft: '10px' }"
      :value="value"
      :data-items="options"
      @change="onChange"
    >
    </DropDownList>
  </div>
</template>

<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
  name: 'Chooser',
  components: {
    DropDownList,
  },
  props: {
    label: String,
    value: String,
    options: Object,
  },
  methods: {
    onChange: function (e) {
      this.$emit('change', e);
    },
  },
};
</script>
