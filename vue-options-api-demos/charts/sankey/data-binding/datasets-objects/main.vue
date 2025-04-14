<template>
 <div>
    <Sankey
      :dataNodes="dataNodes"
      :dataLinks="dataLinks"
      :style="{ 'max-width': '700px', height: '250px', margin: 'auto' }"
      :links="{ colorType: 'source' }"
      :title="{ position: 'top', text: 'WebSite Visits\' Statistic', font: '500 18px sans-serif' }"
    >
    </Sankey>
  </div>
</template>

<script>
import { Sankey, createSankeyData } from '@progress/kendo-vue-charts';

const trafficData = [
    { gender: 'Female', device: 'Tablet', age: '< 18', value: 4 },
    { gender: 'Female', device: 'Tablet', age: "> 40", value: 8 },
    { gender: 'Female', device: 'Mobile', age: '< 18', value: 4 },
    { gender: 'Female', device: 'Mobile', age: '18-26', value: 24 },
    { gender: 'Female', device: 'Mobile', age: '27-40', value: 10 },
    { gender: 'Female', device: 'Mobile', age: '> 40', value: 2 },
    { gender: 'Female', device: 'Desktop', age: '18-26', value: 11 },
    { gender: 'Female', device: 'Desktop', age: '27-40', value: 28 },
    { gender: 'Female', device: 'Desktop', age: '> 40', value: 9 },
    { gender: 'Male', device: 'Mobile', age: '< 18', value: 4 },
    { gender: 'Male', device: 'Mobile', age: '18-26', value: 11 },
    { gender: 'Male', device: 'Mobile', age: '27-40', value: 28 },
    { gender: 'Male', device: 'Mobile', age: '> 40', value: 9 },
    { gender: 'Male', device: 'Desktop', age: '18-26', value: 11 },
    { gender: 'Male', device: 'Desktop', age: '27-40', value: 28 },
    { gender: 'Male', device: 'Desktop', age: '> 40', value: 9 },
];

const trafficDimensions = [
    { value: item => item.gender },
    { value: item => item.device },
    { value: item => 'Age ' + item.age }
];
const trafficMeasure = { value: item => item.value };
const data = createSankeyData(trafficData, trafficDimensions, trafficMeasure);

export default {
    components: {
      Sankey
    },
    methods: {},
    data() {
      return {
        dataNodes: data.nodes,
        dataLinks: data.links
      };
    }
};

</script>
