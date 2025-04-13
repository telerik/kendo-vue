<template>
    <popup 
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
    <slot/>
    </popup>
</template>
<script>
import { Popup } from '@progress/kendo-vue-popup';
export default {
     props: {
        show: Boolean
    },
    components: {
        'popup': Popup
    }
  }
</script>
