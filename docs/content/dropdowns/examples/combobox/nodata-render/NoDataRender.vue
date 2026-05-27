<template>
    <div :style="{ fontSize: '1em', textAlign: 'center' }">
          <SvgIcon :icon="warningCircleIcon" :size="'large'" />
        <br /><br />
        No data here
    </div>
</template>

<script setup>
import { SvgIcon } from '@progress/kendo-vue-common';
import { warningCircleIcon } from '@progress/kendo-svg-icons';
</script>
