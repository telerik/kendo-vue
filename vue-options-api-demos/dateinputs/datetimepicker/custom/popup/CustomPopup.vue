<template>
  <Popup
    :anchor="'datepicker'"
    :show="show"
    :anchor-align="{
      horizontal: 'center',
      vertical: 'bottom'
    }"
    :popup-align="{
      horizontal: 'center',
      vertical: 'top'
    }"
  >
    <slot />
  </Popup>
</template>
<script>
import { Popup } from "@progress/kendo-vue-popup";
export default {
  props: {
    show: Boolean
  },
  components: {
    Popup
  }
};
</script>
