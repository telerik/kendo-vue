<template>
  <div>
    <div class="card-header-wrapper">
      <h3 class="card-title">{{ teamEfficiencyMessage }}</h3>
      <buttongroup>
        <k-button
          :togglable="true"
          @click="buttonGroupClick($event, 0)"
          :selected="selectedIndex === 0"
        >
          {{ trendMessage }}
        </k-button>
        <k-button
          :togglable="true"
          @click="buttonGroupClick($event, 1)"
          :selected="selectedIndex === 1"
        >
          {{ volumeMessage }}
        </k-button>
      </buttongroup>
      <div class="card-ranges">
        <datepicker
          style="width: 130px"
          :value="dateRange.start"
          @change="onFromDateChange"
        >
        </datepicker>
        <span> - </span>
        <datepicker
          style="width: 130px"
          :value="dateRange.end"
          @change="onToDateChange"
        >
        </datepicker>
      </div>
    </div>
    <div v-if="selectedIndex === 0">
      <Chart>
        <ChartTooltip :render="myToolTipTemplate">
          <template v-slot:myToolTipTemplate="{ props = { point: {} } }">
            <div>
              {{
                provideIntlService(this)
                  .formatDate(props.point.category, "MMMM yyyy")
                  .toUpperCase()
              }}
              <br />
              <div class="chart-tooltip">
                {{
                  provideIntlService(this).formatNumber(props.point.value, "n3")
                }}
              </div>
            </div>
          </template>
        </ChartTooltip>
        <ChartLegend
          :position="'bottom'"
          :orientation="'horizontal'"
          :background="'#f4f5f8'"
          :spacing="140"
          :padding="{ left: 80, right: 80 }"
        >
        </ChartLegend>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            :labels="{ format: 'MMMM yyyy', rotation: 'auto' }"
            :base-unit="'months'"
            :min="dateRange.start"
            :max="dateRange.end"
            :categories="categories"
          />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem
            v-for="(item, index) in series"
            :key="index"
            :type="'line'"
            :data-items="item.data"
            :name="item.name"
          />
        </ChartSeries>
      </Chart>
    </div>
    <div v-else>
      <Chart>
        <ChartTooltip :render="myToolTipLineTemplate">
          <template v-slot:myToolTipLineTemplate="{ props = { point: {} } }">
            <div>
              {{
                provideIntlService(this)
                  .formatDate(props.point.category, "MMMM yyyy")
                  .toUpperCase()
              }}
              <br />
              <div class="chart-tooltip">
                {{
                  provideIntlService(this).formatNumber(props.point.value, "n3")
                }}
              </div>
            </div>
          </template>
        </ChartTooltip>
        <ChartLegend
          :position="'bottom'"
          :orientation="'horizontal'"
          :background="'#f4f5f8'"
          :spacing="140"
          :padding="{ left: 80, right: 80 }"
        >
        </ChartLegend>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem
            :labels="{ format: 'MMMM yyyy', rotation: 'auto' }"
            :base-unit="'months'"
            :min="dateRange.start"
            :max="dateRange.end"
            :categories="categories"
          />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem
            v-for="(item, index) in series"
            :key="index"
            :type="'column'"
            :data-items="item.data"
            :color="item.color"
            :name="item.name"
          />
        </ChartSeries>
      </Chart>
    </div>
  </div>
</template>

<script>
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartTooltip,
} from "@progress/kendo-vue-charts";
import { Button, ButtonGroup } from "@progress/kendo-vue-buttons";
import { DatePicker } from "@progress/kendo-vue-dateinputs";

import {
  provideIntlService,
  provideLocalizationService,
} from "@progress/kendo-vue-intl";

import { orders } from "../assets/orders";
import "hammerjs";

export default {
  props: {
    localizationLanguage: String,
  },
  components: {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartTooltip,
    "k-button": Button,
    buttongroup: ButtonGroup,
    datepicker: DatePicker,
  },
  inject: {
    kendoIntlService: { default: null },
    kendoLocalizationService: { default: null },
  },
  data: function () {
    return {
      selectedIndex: 0,
      provideIntlService: provideIntlService,
      myToolTipTemplate: "myToolTipTemplate",
      myToolTipLineTemplate: "myToolTipLineTemplate",
      orders: orders,
      dateRange: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 4, 1),
      },
      series: null,
      categories: null,
    };
  },
  created() {
    this.categories = this.orders.map((dataItem) => {
      return dataItem.orderDate;
    });
    this.series = [
      {
        name: "Tiger Team",
        data: this.fetchData(1),
        color: "#FF6358",
      },
      {
        name: "Lemon Team",
        data: this.fetchData(2),
        color: "#F7C62F",
      },
      {
        name: "Organic Team",
        data: this.fetchData(3),
        color: "#55AB1D",
      },
      {
        name: "Ocean Team",
        data: this.fetchData(4),
        color: "#28B4C8",
      },
    ];
  },
  computed: {
    teamEfficiencyMessage() {
      return provideLocalizationService(this).toLanguageString(
        "teamEfficiency",
        "Team Efficiency"
      );
    },
    trendMessage() {
      return provideLocalizationService(this).toLanguageString(
        "trend",
        "Trend"
      );
    },
    volumeMessage() {
      return provideLocalizationService(this).toLanguageString(
        "volume",
        "Volume"
      );
    },
  },
  methods: {
    fetchData(team) {
      return this.orders.map((dataItem) => {
        if (
          dataItem.teamID === team &&
          dataItem.orderDate >= this.dateRange.start &&
          dataItem.orderDate < this.dateRange.end
        ) {
          return dataItem.orderTotal;
        }
      });
    },
    buttonGroupClick(e, newIndex) {
      this.selectedIndex = newIndex;
    },
    updateSeries() {
      this.series.map((series, index) => {
        return (series.data = this.fetchData(index + 1));
      });
    },
    onFromDateChange(date) {
      this.dateRange.start = date.value;
      this.updateSeries();
    },
    onToDateChange(date) {
      this.dateRange.end = date.value;
      this.updateSeries();
    },
  },
};
</script>

<style scoped>
.chart-tooltip {
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}

.card-header-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card-title {
  grid-column: 1 / 2;
  grid-row: 1;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.k-button-group {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.card-ranges {
  margin-top: 1rem;
  text-align: left;
}
</style>