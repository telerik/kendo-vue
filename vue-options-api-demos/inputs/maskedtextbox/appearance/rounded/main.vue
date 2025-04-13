<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small roundness:</span>
        <MaskedTextBox
          :rounded="'small'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :style="{ width: '170px' }"
        />
      </span>
      <span class="wrapper">
        <span>Medium roundness:</span>
        <MaskedTextBox
          :rounded="'medium'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :style="{ width: '170px' }"
        />
      </span>
      <span class="wrapper">
        <span>Large roundness:</span>
        <MaskedTextBox
          :rounded="'large'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Full roundness:</span>
        <MaskedTextBox
          :rounded="'full'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :style="{ width: '170px' }"
        />
      </span>
      <span class="wrapper">
        <span>Custom roundness:</span>
        <MaskedTextBox
          :rounded="null"
          :class="'custom-maskedtextbox'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
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
.custom-maskedtextbox {
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
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
