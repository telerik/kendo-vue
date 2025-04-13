<template>
    <TileLayout
      :columns="4"
      :rowHeight="255"
      :positions="dataItems"
      :gap="{
        rows: 10,
        columns: 10,
      }"
      :items="tiles"
      @reposition="handleReposition"
    >
    <template v-slot:pageviews>
      <PageViewsChart :dataItems="pageViews" />
    </template>
    <template v-slot:popularpageschart>
      <PopularPagesChart :dataItems="pageViews" />
    </template>
   <template v-slot:usersgrid>
      <UsersGrid :dataItems="channelUsers" />
    </template>
    <template v-slot:conversionrate>
      <div>
        <ConversionRate :dataItems="channelUsers" />
      </div>
    </template>
    <template v-slot:currently>
      <div>
        <h3
          :style="{
            marginBottom: '-1px',
            marginTop: '-10px'
          }"
        >
          2399
        </h3>
        <p>Active users right now</p>
      </div>
    </template>
    <template v-slot:bouncerate>
      <div>
        <h3
          :style="{
            marginBottom: '-1px',
            marginTop: '-10px',
          }"
        >
          55%
        </h3>
        <p>
          The percentage of all sessions on your site in which users viewed
          only a single page.
        </p>
      </div>
    </template>
    <template v-slot:visitors>
      <VisitorsDonut :dataItems="visitors" />
    </template>
    <template v-slot:conversions>
      <ConversionsChart :dataItems="conversions" />
    </template>
    </TileLayout>
</template>
<script>
import {
  TileLayout
} from "@progress/kendo-vue-layout";
import {
  conversions,
  channelUsers,
  pageViews,
  visitors,
} from "./tilelayout-data";
import ConversionsChart from "./ConversionsChart.vue";
import ConversionRate from "./ConversionRate.vue";
import PageViewsChart from "./PageViews.vue";
import PopularPagesChart from "./PopularPagesChart.vue";
import UsersGrid from "./UsersGrid.vue";
import VisitorsDonut from "./VisitorsDonut.vue";

export default {
    components: {
      TileLayout,
      ConversionsChart,
      ConversionRate,
      PageViewsChart,
      PopularPagesChart,
      UsersGrid,
      VisitorsDonut
    },
    data() {
      return {
        conversions,
        channelUsers,
        pageViews,
        visitors,
        dataItems: [
          {
            col: 1,
            colSpan: 3,
            rowSpan: 1,
          },
          {
            col: 1,
            colSpan: 2,
            rowSpan: 1,
          },
          {
            col: 1,
            colSpan: 2,
            rowSpan: 2,
          },
          {
            col: 4,
            colSpan: 1,
            rowSpan: 1,
          },
          {
            col: 3,
            colSpan: 1,
            rowSpan: 1,
          },
          {
            col: 3,
            colSpan: 1,
            rowSpan: 1,
          },
          {
            col: 4,
            colSpan: 1,
            rowSpan: 2,
          },
          {
            col: 3,
            colSpan: 2,
            rowSpan: 1,
          }
        ],
        tiles: [
          {
            headerText: "Page Views",
            body: 'pageviews',
          },
          {
            headerText: "Most Visited Pages",
            body: 'popularpageschart',
          },
          {
            headerText: "Users by Channel",
            body: 'usersgrid',
          },
          {
            headerText: "Conversion Rate",
            body: 'conversionrate',
          },
          {
            headerText: "Currently",
            body: 'currently',
          },
          {
            headerText: "Bounce Rate",
            body: 'bouncerate',
          },
          {
            headerText: "Visitors",
            body: 'visitors'
          },
          {
            headerText: "Conversions This Month",
            body: 'conversions'
          },
        ]
      };
    },
    methods: {
      handleReposition (e) {
        this.dataItems = e.value;
      }
    }
};

</script>

