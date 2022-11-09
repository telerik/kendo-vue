<template>
    <KButton @click="handleClick"> {{visible ? ' Hide Navigation' : 'Show Navigation' }}</KButton>
    <div v-if="visible" id="rootnav">
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/next">Next</NuxtLink> |
        <NuxtLink to="/form">form</NuxtLink> |
        <NuxtLink to="/grid">Grid</NuxtLink> |
        <NuxtLink to="/drawer">Drawer</NuxtLink> |
        <NuxtLink to="/splitbutton">SplitButton</NuxtLink> |
        <NuxtLink to="/scrollview">scrollview</NuxtLink> |
        <NuxtLink to="/numerictextbox">Numeric</NuxtLink> |
        <NuxtLink to="/daterangepicker">DateRangePicker</NuxtLink> | 
        <NuxtLink to="/loader">Loader</NuxtLink> | 
        <NuxtLink to="/progressbar">ProgressBar</NuxtLink> | 
        <NuxtLink to="/stepper">Stepper</NuxtLink> | 
        <NuxtLink to="/editor">Editor</NuxtLink> | 
        <NuxtLink to="/textarea">textarea</NuxtLink> | 
        <NuxtLink to="/switch">switch</NuxtLink> | 
        <NuxtLink to="/tooltip">tooltip</NuxtLink> | 
        <NuxtLink to="/arcgauge">arcgauge</NuxtLink> | 
        <NuxtLink to="/circulargauge">circulargauge</NuxtLink> | 
        <NuxtLink to="/lineargauge">lineargauge</NuxtLink> | 
        <NuxtLink to="/scheduler">scheduler</NuxtLink> | 
        <NuxtLink to="/chart">chart</NuxtLink> | 
        <NuxtLink to="/splitter">splitter</NuxtLink> |
        <NuxtLink to="/slider">slider</NuxtLink> |
        <NuxtLink to="/panelbar">panelbar</NuxtLink> | 
        <NuxtLink to="/tabstrip">tabstrip</NuxtLink> | 
        <NuxtLink to="/indicators">indicators</NuxtLink> | 
        <NuxtLink to="/notification">notification</NuxtLink> | 
        <NuxtLink to="/treeview">treeview</NuxtLink> | 
        <NuxtLink to="/dropdowns">dropdowns</NuxtLink> | 
        <NuxtLink to="/colors">colors</NuxtLink> | 
        <NuxtLink to="/datepicker">datepicker</NuxtLink> | 
        <NuxtLink to="/treelist">treelist</NuxtLink> | 
        <NuxtLink to="/layouts">layouts</NuxtLink> | 
        <NuxtLink to="/listview">listview</NuxtLink> | 
    </div>
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