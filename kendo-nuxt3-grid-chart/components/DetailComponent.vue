<template>
<div>
    <section :style='{ width: "200px", float: "left" }'>
        <p><strong>Street:</strong> {{dataItem.shipAddress.street}}</p>
        <p><strong>City:</strong> {{dataItem.shipAddress.city}}</p>
        <p><strong>Country:</strong> {{dataItem.shipAddress.country}}</p>
        <p><strong>Postal Code:</strong> {{dataItem.shipAddress.postalCode}}</p>
    </section>
    <Grid :style='{ width: "500px" }' :data-items="dataItem.details"></Grid>
</div>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
    props: {
        dataItem: Object
    },
    components: {
        'Grid': Grid
    }
}
</script>
