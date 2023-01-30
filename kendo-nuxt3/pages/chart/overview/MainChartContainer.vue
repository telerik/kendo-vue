<template>
  <div>
      <button @click="changeDataset" class="button">Change dataset</button>
    <ChartWrapper v-for="chart in chartSetDefinition"
    :key="chart.id"
    :id="chart.id"
    :type="chart.type"
    :fields="chart.fields"
    :title="chart.title"
    :category="chart.category"
    class="chart-wrapper" 
    :table="dataset[chart.table]"
    :dataProcessOptions="chart.dataProcessOptions"
    />
   
  </div>
</template>

<script lang="ts">
import ChartWrapper from "./ChartWrapper.vue";
import service from "./modules/Service"
export default {
  components: {
      ChartWrapper,
  },
data() {
    return {
        chartSetId:"fad5d09e-5455-11ec-bf63-0242ac130002",
        dataset:{}, 
        chartSetDefinition:[]
    }
  },
  methods:{
      changeDataset(){
          let a =this.dataset.projects[0].Duration;
          this.dataset.projects[0].Duration=a+4;
      },
      fetchDataset(chartSetId){
          return service.fetchDataset(chartSetId)
      },
      fetchChartSetDefinition(chartSetId){
          return service.fetchChartSetDefinition(chartSetId)
      }
  },
  mounted(){
      this.dataset=this.fetchDataset(this.chartSetId);
      this.chartSetDefinition=this.fetchChartSetDefinition(this.chartSetId)
  }
  
};
</script>