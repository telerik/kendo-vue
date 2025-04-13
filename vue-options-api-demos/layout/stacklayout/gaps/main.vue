<template>
  <div>
    <NumericTextBox
      :value="gap"
      :style="{ marginBottom: '20px' }"
      @change="handleGapChange"
    />
    <div class="example-wrapper">
      <div class="page">
        <div class="content">
          <StackLayout :orientation="'vertical'" :gap="gap">
            <div class="box first k-flex-40" />
            <div class="box second k-flex-20" />
            <div class="box third k-flex-10" />
            <div class="box fourth k-flex-30" />
          </StackLayout>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import { StackLayout } from "@progress/kendo-vue-layout";
import "./styles.css";

export default {
  components: {
    StackLayout,
    NumericTextBox,
  },
  data() {
    return {
      gap: 0,
    };
  },
  methods: {
    handleGapChange(e) {
      this.gap = e.value !== null ? e.value : this.gap;
    },
  },
};
</script>
