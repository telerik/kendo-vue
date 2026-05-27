<template>
  <ToggleButton @click="handleClick">
    <SvgIcon :icon="homeIcon" />
  </ToggleButton>
</template>

<script setup>
import { ToggleButton } from '@progress/kendo-vue-dateinputs';
import { SvgIcon } from '@progress/kendo-vue-common';
import { homeIcon} from '@progress/kendo-svg-icons';

const emit = defineEmits(['click', 'mousedown', 'mouseup']);

function handleClick(e) {
    emit('click', e);
}
</script>
