<template>
    <div :style="{ display: 'flex', alignItems: 'center' }">
        <PagerNavigationButton
            :class="'k-pager-first' + (current === 1 ? ' k-disabled' : '')"
            :page="1"
            :title="'First Page'"
            :svg-icon="chevronDoubleLeftIcon"
            @pagechange="buttonPageChange"
        />
        <PagerNavigationButton
            :class="current === 1 ? ' k-disabled' : ''"
            :page="current - 1"
            :title="'Previous Page'"
            :svg-icon="chevronLeftIcon"
            @pagechange="buttonPageChange"
        />
        <Slider
            :show-buttons="false"
            :tick-placement="'none'"
            :max="totalPages"
            :min="1"
            @change="sliderChange"
            :value="current"
        />
        <PagerNavigationButton
            :class="current === totalPages ? ' k-disabled' : ''"
            :page="current + 1"
            :title="'Next Page'"
            :svg-icon="chevronRightIcon"
            @pagechange="buttonPageChange"
        />
        <PagerNavigationButton
            :class="'k-pager-last' + (current === totalPages ? ' k-disabled' : '')"
            :page="totalPages"
            :title="'Last Page'"
            :svg-icon="chevronDoubleRightIcon"
            @pagechange="buttonPageChange"
        />
        <PagerInfo :total-pages="totalPages" :skip="skip" :current-page="current" />
    </div>
</template>

<script setup>
import { Slider } from '@progress/kendo-vue-inputs';
import { PagerInfo, PagerNavigationButton } from '@progress/kendo-vue-data-tools';
import {
    chevronDoubleLeftIcon,
    chevronDoubleRightIcon,
    chevronLeftIcon,
    chevronRightIcon,
} from '@progress/kendo-svg-icons';
import { ref, computed } from 'vue';

const props = defineProps({
    currentPage: Number,
    totalPages: Number,
    skip: Number,
});

const selected = ref(undefined);

const current = computed(() => {
    return selected.value || props.currentPage;
});

const sliderChange = (event) => {
    selected.value = Math.round(event.value);
};

const buttonPageChange = (newPage) => {
    selected.value = newPage;
};
</script>
