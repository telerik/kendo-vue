<template>
  <Toolbar>
    <KButton
      :svg-icon="pencilIcon"
      :theme-color="'primary'"
      @click="onEditBtnClick"
      >{{ reorderable ? 'Save' : 'Edit' }}</KButton
    >
    <KButton v-if="reorderable" :theme-color="'info'" @click="handleClick"
      >Add New Tile</KButton
    >
  </Toolbar>
  <TileLayout
    :columns="maxColumnNumber"
    :rowHeight="255"
    :positions="dataItems"
    :gap="{
      rows: 10,
      columns: 10,
    }"
    :items="tiles"
    @reposition="handleReposition"
    @tileresize="handleResize"
  >
    <template v-slot:customHeader="{ props }"
      ><span :style="{ display: 'flex', justifyContent: 'space-between' }"
        ><h5 class="k-card-title">{{ props.headerText }}</h5>
        <SvgIcon
          v-if="reorderable"
          :icon="xIcon"
          @click="removeTile(props.id)"
          :style="{ paddingTop: '3px', cursor: 'default' }"
      /></span>
    </template>
    <template v-slot:pageviews="{ props }">
      <PageViewsChart :key="props.tile.uniqueKey" :dataItems="pageViews" />
    </template>
    <template v-slot:pageviewsHeader="{ props }"
      ><span :style="{ display: 'flex', justifyContent: 'space-between' }"
        ><h5 class="k-card-title">Visitors</h5>
        <SvgIcon
          v-if="reorderable"
          :icon="xIcon"
          @click="removeTile(props.id)"
          :style="{ paddingTop: '3px', cursor: 'default' }"
      /></span>
    </template>
    <template v-slot:popularpageschart="{ props }">
      <PopularPagesChart :key="props.tile.uniqueKey" :dataItems="pageViews" />
    </template>
    <template v-slot:popularpageschartHeader="{ props }"
      ><span :style="{ display: 'flex', justifyContent: 'space-between' }"
        ><h5 class="k-card-title">Most Visited Pages</h5>
        <SvgIcon
          v-if="reorderable"
          :icon="xIcon"
          @click="removeTile(props.id)"
          :style="{ paddingTop: '3px', cursor: 'default' }"
      /></span>
    </template>
    <template v-slot:visitors="{ props }">
      <VisitorsDonut :key="props.tile.uniqueKey" :dataItems="visitors" />
    </template>
    <template v-slot:visitorsHeader="{ props }"
      ><span :style="{ display: 'flex', justifyContent: 'space-between' }"
        ><h5 class="k-card-title">Page Views</h5>
        <SvgIcon
          v-if="reorderable"
          :icon="xIcon"
          @click="removeTile(props.id)"
          :style="{ paddingTop: '3px', cursor: 'default' }"
      /></span>
    </template>
  </TileLayout>
  <WindowContent
    :show-form="showAddForm"
    :max-column-number="maxColumnNumber"
    @close="handleClick"
    @addChart="addChart"
  />
</template>
<script>
import { TileLayout } from '@progress/kendo-vue-layout';
import { Toolbar, Button as KButton } from '@progress/kendo-vue-buttons';
import {
  conversions,
  channelUsers,
  pageViews,
  visitors,
} from './tilelayout-data';
import { SvgIcon } from '@progress/kendo-vue-common';
import { xIcon, pencilIcon } from '@progress/kendo-svg-icons';
import PageViewsChart from './PageViews.vue';
import PopularPagesChart from './PopularPagesChart.vue';
import VisitorsDonut from './VisitorsDonut.vue';
import WindowContent from './WindowContent.vue';

export default {
  components: {
    KButton,
    Toolbar,
    TileLayout,
    PageViewsChart,
    PopularPagesChart,
    VisitorsDonut,
    WindowContent,
    SvgIcon,
  },
  data() {
    return {
      pageviewsKey: 0,
      popularpageschartKey: 0,
      visitorsKey: 0,
      xIcon,
      pencilIcon,
      maxColumnNumber: 4,
      showAddForm: false,
      conversions,
      channelUsers,
      pageViews,
      visitors,
      reorderable: false,
      dataItems: [
        {
          col: 1,
          colSpan: 2,
          rowSpan: 1,
          id: 1,
        },
        {
          col: 3,
          colSpan: 2,
          rowSpan: 1,
          id: 2,
        },
        {
          col: 1,
          colSpan: 2,
          rowSpan: 2,
          id: 3,
        },
      ],
      tilesBase: [
        {
          body: 'pageviews',
          header: 'pageviewsHeader',
          uniqueKey: 0,
          id: 1,
        },
        {
          header: 'popularpageschartHeader',
          body: 'popularpageschart',
          uniqueKey: 0,
          id: 2,
        },
        {
          header: 'visitorsHeader',
          body: 'visitors',
          uniqueKey: 0,
          id: 3,
        },
      ],
    };
  },
  computed: {
    tiles() {
      return this.tilesBase.map((el) => ({
        ...el,
        reorderable: this.reorderable,
        class: this.reorderable ? undefined : 'custom',
      }));
    },
  },
  methods: {
    removeTile(id) {
      this.tilesBase = this.tilesBase.filter((el) => el.id !== id);
      this.dataItems = this.dataItems.filter((el) => el.id !== id);
    },
    handleClick() {
      this.showAddForm = !this.showAddForm;
    },
    handleReposition(e) {
      this.dataItems = e.value;
    },
    handleResize(e) {
      this.dataItems = e.value;
      setTimeout(() => {
        this.tilesBase[e.index].uniqueKey += 1;
      }, 500);
    },
    onEditBtnClick() {
      this.reorderable = !this.reorderable;
    },
    addChart(e) {
      const getMaxTileId = Math.max(...this.tilesBase.map((tile) => tile.id));

      if (e.insertPosition === 'start') {
        this.dataItems.unshift({
          col: 1,
          colSpan: e.colspan,
          rowSpan: 1,
          id: getMaxTileId + 1,
        });
        this.tilesBase.unshift({
          headerText: e.title,
          header: 'customHeader',
          body: e.tileTemplate,
          id: getMaxTileId + 1,
          uniqueKey: 0,
        });
      } else {
        this.dataItems.push({
          col: 1,
          colSpan: e.colspan,
          rowSpan: 1,
          row: this.dataItems.lenth,
          id: getMaxTileId + 1,
        });
        this.tilesBase.push({
          headerText: e.title,
          body: e.tileTemplate,
          id: getMaxTileId + 1,
          uniqueKey: 0,
        });
      }
    },
  },
};
</script>
<style>
div.custom .k-resize-handle {
  display: none;
}
</style>
