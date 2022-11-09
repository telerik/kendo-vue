<template>
    <label
      :style="{
        textAlign: 'center'
      }"
    >
      <span :style="spanStyle">start</span> <br />
      <DateInput :value="value" :format="format" :id="id" @change="handleChange" />
    </label>
</template>

<script>
import { DateInput } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
       DateInput
    },
     inheritAttrs: false,
    props: {
      value: Date,
      format: String,
      id: String,
      min: Date,
      max: Date,
      disabled: Boolean,
      label: String
    },
    computed: {
      spanStyle() {
          return {
            color: this.$props.value !== null ? "green" : "red",
          };
      }
    },
    methods: {
      handleChange(e) {
        this.$emit('change', e);
      }
    }
};
</script>

