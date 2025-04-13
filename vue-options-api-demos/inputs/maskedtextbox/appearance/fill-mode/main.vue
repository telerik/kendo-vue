<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat:</span>
        <MaskedTextBox
          :fill-mode="'flat'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :style="{ width: '170px' }"
        />
      </span>
      <span class="wrapper">
        <span>Solid:</span>
        <MaskedTextBox
          :fill-mode="'solid'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :style="{ width: '170px' }"
        />
      </span>
      <span class="wrapper">
        <span>Outline:</span>
        <MaskedTextBox
          :fill-mode="'outline'"
          :mask="'(999) 000-00-00-00'"
          :default-value="'(359) 884-12-33-21'"
          :style="{ width: '170px' }"
        />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom fill mode:</span>
        <MaskedTextBox
          :fill-mode="null"
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
.custom-maskedtextbox {
  background-color: #00aead;
  border: 2px solid #bfd843;
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
