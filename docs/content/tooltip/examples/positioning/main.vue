<template>
  <div>
    <Tooltip :position="position" :anchor-element="anchor">
      <div class="k-form">
        <legend>Change position</legend>
        <RadioGroup
          :data-items="positions"
          :layout="'horizontal'"
          @change="onPositionChange"
          :value="'auto'"
        />
      </div>
      <div class="k-form">
        <legend>Change anchor</legend>
        <RadioGroup
          :data-items="anchors"
          :layout="'horizontal'"
          @change="onAnchorChange"
          :value="'target'"
        />
      </div>
      <div
        :style="{
          'text-align': 'center',
          'padding-top': '100px',
        }"
      >
        <KButton title="some title">Hover me</KButton>
      </div>
    </Tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Tooltip } from '@progress/kendo-vue-tooltip';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const anchor = ref('target');
const position = ref(undefined);

const positions = [
    { label: 'Default', value: 'auto' },
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
];

const anchors = [
    { label: 'Target', value: 'target' },
    { label: 'Pointer', value: 'pointer' },
];

function onPositionChange(e) {
    position.value = e.value;
}

function onAnchorChange(e) {
    anchor.value = e.value;
}
</script>

<style>
.k-button-text {
  pointer-events: none;
}
</style>
