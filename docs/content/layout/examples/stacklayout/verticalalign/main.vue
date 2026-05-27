<template>
  <div>
    <DropDownList
      :style="{ marginBottom: '15px' }"
      :data-items="orientations"
      :value="orientation"
      @change="handleOrientationChange"
    />
    <DropDownList
      :style="{ marginBottom: '15px' }"
      :data-items="vAligns"
      :value="vAlign"
      @change="handleAlignChange"
    />
    <div class="example-wrapper">
      <div class="page">
        <div class="content">
          <StackLayout
            :orientation="orientation"
            :align="{
              vertical: vAlign,
            }"
            :style="{
              height: '100%',
            }"
          >
            <div class="box first">Box</div>
            <div class="box second">Box</div>
            <div class="box third">Box</div>
            <div class="box fourth">Box</div>
          </StackLayout>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { StackLayout } from '@progress/kendo-vue-layout';
import './styles.css';

const vAlign = ref('stretch');
const orientation = ref('horizontal');
const orientations = ['horizontal', 'vertical'];
const vAligns = ['top', 'middle', 'bottom', 'stretch'];

function handleOrientationChange(e) {
    orientation.value = e.value;
}

function handleAlignChange(e) {
    vAlign.value = e.value;
}
</script>
