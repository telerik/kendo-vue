<template>
  <div
    :style="{
      width: '300px',
    }"
  >
    <div className="example-config">
      <KCheckbox
        :label="'Read Only'"
        :checked="readOnly"
        @change="handleDisabledChange"
      />
    </div>
    <Label>Message:</Label>
    <FieldWrapper>
      <KTextBox
        :value="value"
        :readonly="readOnly"
        @input="handleInput"
        :placeholder="'Type your message here'"
      />
    </FieldWrapper>
  </div>
</template>
<script>
import {
  TextBox as KTextBox,
  Checkbox as KCheckbox,
} from '@progress/kendo-vue-inputs';
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Label } from '@progress/kendo-vue-labels';

export default {
  components: {
    KCheckbox,
    KTextBox,
    FieldWrapper,
    Label,
  },
  data() {
    return {
      value: 'Sample text',
      readOnly: true,
    };
  },
  methods: {
    handleDisabledChange() {
      this.readOnly = !this.readOnly;
    },
    handleInput(event) {
      this.value = event.target.value;
    },
  },
};
</script>
