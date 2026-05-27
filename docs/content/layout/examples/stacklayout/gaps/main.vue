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

<script setup>
import { ref } from 'vue';
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { StackLayout } from '@progress/kendo-vue-layout';
import './styles.css';

const gap = ref(0);

function handleGapChange(e) {
    gap.value = e.value !== null ? e.value : gap.value;
}
</script>
