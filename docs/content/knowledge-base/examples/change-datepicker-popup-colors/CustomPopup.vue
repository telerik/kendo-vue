<template>
  <Popup
    :anchor="'datepicker'"
    :show="show"
    popup-class="inner-wrapper"
    :anchor-align="{ horizontal: 'center', vertical: 'bottom' }"
    :popup-align="{ horizontal: 'center', vertical: 'top' }"
  >
    <slot />
  </Popup>
</template>

<script setup>
import { Popup } from '@progress/kendo-vue-popup';

defineProps({
    show: Boolean,
});
</script>
