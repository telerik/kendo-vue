<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small size:</span>
        <MaskedTextBox
          :size="'small'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :style="{ width: '170px' }"
        />
      </span>
      <span class="wrapper">
        <span>Medium size:</span>
        <MaskedTextBox
          :size="'medium'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :style="{ width: '170px' }"
        />
      </span>
      <span class="wrapper">
        <span>Large size:</span>
        <MaskedTextBox
          :size="'large'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom size:</span>
        <MaskedTextBox
          :size="null"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :class="'custom-maskedtextbox'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    MaskedTextBox,
  },
};
</script>

<style>
.custom-maskedtextbox input {
  padding: 10px 14px;
}
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
}
</style>
