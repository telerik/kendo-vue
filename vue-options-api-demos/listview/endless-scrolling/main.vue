<template>
  <ListView
    :style="{ width: '100%', height: '530px' }"
    :data-items="data"
    :item="'myItem'"
    :header="'myHeader'"
    @scroll="scrollHandler"
  >
    <template v-slot:myItem="{ props }">
      <Card
        :style="{
          width: '180px',
          boxShadow: 'none',
          flex: '0 0 25.33%',
          margin: '25px',
          border: 'none',
        }"
      >
        <CardImage :src="`${destinationsBaseUrl}${props.dataItem.Image}`" :style="{ height: '150px', width: '180px' }" />
        <div :style="{ padding: 0 }">
          <CardTitle :style="{ fontSize: '14px' }">
            {{ props.dataItem.Destination }}
          </CardTitle>
          <CardSubtitle :style="{ fontSize: '12px', marginTop: 0 }">
            {{ props.dataItem.Text }}
          </CardSubtitle>
        </div>
      </Card>
    </template>
    <template v-slot:myHeader>
      <ListViewHeader
        :style="{ color: 'rgb(160, 160, 160)', fontSize: '14px' }"
        class="pl-4 pb-2 pt-2"
      >
        Top European destinations
      </ListViewHeader>
    </template>
  </ListView>
</template>
<script>
import { ListView, ListViewHeader } from '@progress/kendo-vue-listview';
import {
  Card,
  CardTitle,
  CardImage,
  CardSubtitle,
} from '@progress/kendo-vue-layout';
import destinations from './destinations.json';

const destinationsBaseUrl = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/destinations/';


export default {
  components: {
    ListView,
    ListViewHeader,
    Card,
    CardTitle,
    CardImage,
    CardSubtitle,
  },
  data() {
    return {
      destinationsBaseUrl,
      destinations: destinations,
      availableData: [],
      data: [],
    };
  },
  created() {
    this.availableData = this.createLargeData();
    this.data = this.availableData.splice(0, 12);
  },
  methods: {
    scrollHandler(e) {
      if (
        e.target.scrollTop + 10 >=
        e.target.scrollHeight - e.target.clientHeight
      ) {
        const moreData = this.availableData.splice(0, 6);

        if (moreData.length > 0) {
          this.data.push(...moreData);
        }
      }
    },
    createLargeData() {
      let data = this.destinations.slice();
      for (let i = 0; i < 4; i++) {
        data = data.concat(this.destinations);
      }
      return data;
    },
  },
};
</script>
<style>
.k-listview-content {
  display: flex;
  flex-wrap: wrap;
}
</style>
