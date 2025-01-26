<template>
<div>
    <chart :title-text="'Kendo Chart Example'"
                 :series="series"
                 :category-axis-categories="categories"
                 :theme="'sass'">
    </chart>
</div>
</template>

<script>
import { Chart } from '@progress/kendo-charts-vue-wrapper';

export default {
  name: 'App',
  components: {
    'chart': Chart,
  },
  data: function() {
        return {
            series: [{
                name: 'Example Series',
                data: [200, 450, 300, 125]
            }],
            categories: [2000, 2001, 2002, 2003]
        }
    }
}
</script>
