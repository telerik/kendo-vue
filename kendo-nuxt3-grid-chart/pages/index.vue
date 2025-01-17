<template>
<div>
  <KendoGrid/>
  <KendoCharts />
  </div>
</template>

<script>
import KendoGrid from '../components/KendoGrid.vue'
import KendoCharts from '../components/KendoCharts.vue'
export default {
    components: {
      KendoGrid,
      KendoCharts
    }
  }
</script>
