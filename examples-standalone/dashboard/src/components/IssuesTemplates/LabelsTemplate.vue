<template>
    <td>
        <span v-for="(label, index) in dataItem.labels" class="badge" :style="{ 'background-color':getColor(dataItem.labels[index].name)}"> {{
                dataItem.labels[index].name
        }}</span>
    </td>
</template>

<script>
export default {
    props: {
        dataItem: Object
    },
    data() {
        return {
            colors: {
                'SEV: LOW': '#ff9800',
                'SEV: MEDIUM': '#ff5d2a',
                'SEV: HIGH': '#d50000',
                'ENHANCEMENT': '#00c853',
                'FEATURE': '#2e7d32',
                'OTHER': '#1ca8dd',
                'PASSED QA': '#57b45b',
                'BUG': '#cf3257',
                'NEEDS QA': '#bc007c',
                'DOCUMENTATION': '#455a64',
                'DEMO': '#673ab7',
                'DELETED': '#f44336',
                'IN PROGRESS': '#ffd600'
            }
        }
    },
    methods:{
        getColor(colorName){
            return this.colors[colorName.toUpperCase()] || this.colors.OTHER
        }
    }
}
</script>