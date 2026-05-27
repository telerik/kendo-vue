<template>
    <div>
        <div class="example-config row">
            <div class="col-sm-4">
                <p>Collapse mode:</p>
                <DropDownList :data-items='collapseModes' @change="onChange" :value='collapseMode'/>
            </div>
        </div>

        <Slider
            style="width: 100%; display: block"
            v-model="breadCrumbWidth"
            :small-step="1"
            :min="0"
            :max="100"
            :show-buttons="false"
        />

        <Breadcrumb :collapse-mode="collapseMode" :style="{ width: breadCrumbWidth + '%' }" :dataItems="items" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Breadcrumb } from '@progress/kendo-vue-layout';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Slider } from '@progress/kendo-vue-inputs';

const collapseMode = ref('auto');
const collapseModes = ref(['auto', 'wrap', 'none']);
const items = [
    { id: '1', text: 'Item1' },
    { id: '2', text: 'Item2' },
    { id: '3', text: 'Item3' },
    { id: '4', text: 'Item4' },
    { id: '5', text: 'Item5' },
    { id: '6', text: 'Item6' },
    { id: '7', text: 'Item7' },
    { id: '8', text: 'Item8' },
    { id: '9', text: 'Item9' },
];
const breadCrumbWidth = ref(100);

function onChange (event) {
    collapseMode.value = event.value;
}
</script>

<style>
.example-config {
    margin-bottom: 20px;
}
</style>
