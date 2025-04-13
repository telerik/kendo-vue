<template>
  <div>
    <Tooltip :position="position" :anchor-element="anchor">
      <div class="k-form">
        <legend>Change position</legend>
        <radiogroup
          :data-items="positions"
          :layout="'horizontal'"
          @change="onPositionChange"
          :value="'auto'"
        />
      </div>
      <div class="k-form">
        <legend>Change anchor</legend>
        <radiogroup
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
        <kbutton title="some title">Hover me</kbutton>
      </div>
    </Tooltip>
  </div>
</template>

<script>
import { Tooltip } from '@progress/kendo-vue-tooltip';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    Tooltip,
    radiogroup: RadioGroup,
      'kbutton': Button
  },
  data() {
    return {
      anchor: 'target',
      position: undefined,
      positions: [
        { label: 'Default', value: 'auto' },
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      anchors: [
        { label: 'Target', value: 'target' },
        { label: 'Pointer', value: 'pointer' },
      ],
    };
  },
  methods: {
    onPositionChange(e) {
      this.position = e.value;
    },
    onAnchorChange(e) {
      this.anchor = e.value;
    },
  },
};
</script>
<style>
.k-button-text {
  pointer-events: none;
}
</style>