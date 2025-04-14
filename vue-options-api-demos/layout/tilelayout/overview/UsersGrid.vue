<template>
     <div>{{dataItems.length}}
     <Grid
      :style="{
        height: '100%'
      }"
      :data-items="dataItems"
      :scrollable="'scrollable'"
      :columns="columns"
    >
    </Grid> 
</div>
</template>
<script>
import { Grid } from "@progress/kendo-vue-grid";
export default {
    components: {
        Grid
    },
    props: {
        dataItems: Array
    },
    data() {
        return {
            columns: [
                { field: 'channel', title: 'Channel' },
                { field: 'users', title: 'Number Of Users' }
            ]
        }
    }
}
</script>