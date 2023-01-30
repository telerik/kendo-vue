<template>
    <KButton @click="handleClick"> {{visible ? ' Hide Navigation' : 'Show Navigation' }}</KButton>
   
</template>

<script lang="ts">
import { computed } from 'vue';
import { Button } from "@progress/kendo-vue-buttons";

export default {
components: {
    KButton: Button
},
provide(this: any) {
    return {
        visible: computed(() => this.visible)
    }
},
data() {
    return {
        visible: true
    };
},
methods: {
    handleClick(this: any) {
        this.visible = !this.visible;
    }
}
}
</script>