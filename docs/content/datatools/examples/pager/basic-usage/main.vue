<template>
  <div>
    <Configurator
      :type="type"
      :buttonCount="buttonCount"
      :info="info"
      :pageSizes="pageSizes"
      :previousNext="previousNext"
      @typeChange="onTypeChange"
      @buttonCountChange="onButtonCountChange"
      @showInfoChange="onShowInfoChange"
      @pageSizeChange="onPageSizeChange"
      @previousNextChange="onPreviousNextChange"
    />
    <Pager
      :skip="skip"
      :take="take"
      :total="total"
      :button-count="buttonCount"
      :info="info"
      :type="type"
      :page-sizes="pageSizes ? pageSizeDefs : undefined"
      :previous-next="previousNext"
      @pagechange="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Pager } from '@progress/kendo-vue-data-tools';
import Configurator from './Configurator.vue';
import { products } from './products';

const initialPageState = {
    skip: 0,
    take: 5,
    buttonCount: 5,
    type: 'numeric',
    info: true,
    pageSizes: true,
    previousNext: true,
};

const skip = ref(initialPageState.skip);
const take = ref(initialPageState.take);
const buttonCount = ref(initialPageState.buttonCount);
const type = ref(initialPageState.type);
const info = ref(initialPageState.info);
const pageSizes = ref(initialPageState.pageSizes);
const previousNext = ref(initialPageState.previousNext);
const total = ref(products.length);
const pageSizeDefs = ref([5, 10, 20]);

function handlePageChange(event) {
    skip.value = event.skip;
    take.value = event.take;
}

function onTypeChange(inputType) {
    type.value = inputType === "numeric" ? "numeric" : "input";
}

function onButtonCountChange(buttonsNumber) {
    buttonCount.value = buttonsNumber;
}

function onShowInfoChange(showInfo) {
    info.value = showInfo;
}

function onPageSizeChange(pageChanged) {
    pageSizes.value = pageChanged;
}

function onPreviousNextChange(prevNextChanged) {
    previousNext.value = prevNextChanged;
}
</script>
