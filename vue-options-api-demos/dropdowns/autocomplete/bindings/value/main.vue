<template>
  <div class="example-wrapper">
    <p>Type the name of a European country:</p>
    <AutoComplete
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="value"
      @change="onChange"
      :placeholder="'e.g. Andorra'"
    ></AutoComplete>
    <br />
    <br />
    Selected country: {{ value }}
  </div>
</template>
<script>
import { AutoComplete } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    AutoComplete,
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
