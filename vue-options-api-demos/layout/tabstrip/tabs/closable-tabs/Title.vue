<template>
    <span class="k-item k-state-default">
      <span class="k-link">{{content}}</span>
      <span class="k-link" @click="() => onTabRemove(content)">
        <SvgIcon :icon="xIcon" />
      </span>
    </span>
</template>

<script>
import { SvgIcon } from '@progress/kendo-vue-common';
import { xIcon } from '@progress/kendo-svg-icons';

export default {
    components: {
        SvgIcon
    },
    props:{
        content: String
    },
    data(){
        return {
            xIcon
        }
    },
    methods: {
        onTabRemove: function(e){
            this.$emit("tabRemove", e)
        }
    }
}
</script>
