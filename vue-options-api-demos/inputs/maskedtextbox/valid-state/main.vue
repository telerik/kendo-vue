<template>
  <div>
    <p>Type any letters</p>
    <maskedtextbox
      :style="{ width: '230px' }"
      :mask="'(999) 000-00-00-00'"
      :value="value"
      :valid="valid"
      @change="handleChange"
    ></maskedtextbox>
  </div>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    maskedtextbox: MaskedTextBox,
  },
  data: function () {
    return {
      value: '(359) 884-12-33-21',
      valid: true,
    };
  },
  methods: {
    handleChange(event) {
      if (this.value === event.target.value) {
        this.updateValidity(event);
      } else {
        this.value = event.target.value;
      }
    },
    updateValidity(event) {
      const textbox = event.target;
      if (textbox.value.length > textbox.value.length) {
        if (this.valid) {
          this.valid = false;
        } else {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this.valid = true;
        }, 100);
      }
    },
  },
};
</script>
