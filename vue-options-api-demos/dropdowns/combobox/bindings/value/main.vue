<template>
  <div class="example-wrapper">
    <p>Type the name of a European country:</p>
    <ComboBox
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="value"
      @change="onChange"
      :placeholder="'e.g. Andorra'"
    ></ComboBox>
    <br />
    <br />
    Selected country: {{ value }}
  </div>
</template>
<script>
import { ComboBox } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    ComboBox,
  },
  data: function () {
    return {
      countries: ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'],
      value: '',
    };
  },
  methods: {
    onChange(event) {
      this.value = event.target.value;
    },
  },
};
</script>
