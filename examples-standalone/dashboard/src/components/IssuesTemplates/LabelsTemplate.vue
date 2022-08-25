<template>
    <td>
        <span v-for="(label, index) in dataItem.labels" class="badge"
            :style="{ 'background-color': getColor(dataItem.labels[index].name) }"> {{
                    dataItem.labels[index].name
            }}</span>
    </td>
</template>

<script>
import { IssuesProcessor } from '../../shared/issues-processor'

export default {
    props: {
        dataItem: Object
    },
    computed: {
        colors() {
            return IssuesProcessor.getColors();
        },
    },
    methods: {
        getColor(colorName) {
            return this.colors[colorName.toUpperCase()] || this.colors.OTHER
        }
    }
}
</script>