<template>
<div>
    <div style="width: 45%;display: inline-block;">
        <h4>Base date unit</h4>
        <div>
            <div>
                <input id="baseUnitAuto"
                    name="baseUnit"
                    type="radio"
                    value=""
                    autocomplete="off"
                    v-model="baseUnit" />
                <label for="baseUnitAuto">Automatic (default)</label>
            </div>
            <div>
                <input id="baseUnitYears"
                    name="baseUnit"
                    type="radio"
                    value="years"
                    autocomplete="off"
                    v-model="baseUnit" />
                <label for="baseUnitYears">Years</label>
            </div>
            <div>
                <input id="baseUnitMonths"
                    name="baseUnit"
                    type="radio"
                    value="months"
                    autocomplete="off"
                    v-model="baseUnit" />
                <label for="baseUnitMonths">Months</label>
            </div>
            <div>
                <input id="baseUnitWeeks"
                    name="baseUnit"
                    type="radio"
                    value="weeks"
                    checked="checked"
                    autocomplete="off"
                    v-model="baseUnit" />
                <label for="baseUnitWeeks">Weeks</label>
            </div>
            <div>
                <input id="baseUnitDays"
                    name="baseUnit"
                    type="radio"
                    value="days"
                    autocomplete="off"
                    v-model="baseUnit" />
                <label for="baseUnitDays">Days</label>
            </div>
        </div>
    </div>
    <div style="width: 45%;display: inline-block;">
        <h4>Aggregate function</h4>
        <div>
            <div>
                <input id="aggregateMax"
                       name="aggregate"
                       type="radio"
                       value="max"
                       autocomplete="off"
                       v-model="aggregate"/>
                <label for="aggregateMax">Max (default)</label>
            </div>
            <div>
                <input id="aggregateMin"
                       name="aggregate"
                       type="radio"
                       value="min"
                       autocomplete="off"
                       v-model="aggregate" />
                <label for="aggregateMin">Min</label>
            </div>
            <div>
                <input id="aggregateSum"
                       name="aggregate"
                       type="radio"
                       value="sum"
                       autocomplete="off"
                       v-model="aggregate" />
                <label for="aggregateSum">Sum</label>
            </div>
            <div>
                <input id="aggregateAvg"
                       name="aggregate"
                       type="radio"
                       value="avg"
                       checked="checked"
                       autocomplete="off"
                       v-model="aggregate" />
                <label for="aggregateAvg">Avg</label>
            </div>
            <div>
                <input id="aggregateCount"
                       name="aggregate"
                       type="radio"
                       value="count"
                       autocomplete="off"
                       v-model="aggregate" />
                <label for="aggregateCount">Count</label>
            </div>
        </div>
    </div>

    <chart ref="chart"
                :data-source="stats"
                :category-axis-base-unit="baseUnit"
                :category-axis-major-grid-lines-visible="false"
                :value-axis="valueAxis"
                :theme="'sass'">
        <chart-series-item :type="'column'"
                            :aggregate="aggregate"
                            :field="'value'"
                            :category-field="'date'">
        </chart-series-item>
    </chart>
</div>
</template>

<script>
import { Chart, ChartSeriesItem } from '@progress/kendo-charts-vue-wrapper';

export default {
    name: 'App',
    components: {
        'chart': Chart,
        'chart-series-item': ChartSeriesItem
    },
    data: function() {
        return {
            aggregate: 'avg',
            baseUnit: 'weeks',
            stats: [
                { value: 30, date: new Date("2011/12/20") },
                { value: 50, date: new Date("2011/12/21") },
                { value: 45, date: new Date("2011/12/22") },
                { value: 40, date: new Date("2011/12/23") },
                { value: 35, date: new Date("2011/12/24") },
                { value: 40, date: new Date("2011/12/25") },
                { value: 42, date: new Date("2011/12/26") },
                { value: 40, date: new Date("2011/12/27") },
                { value: 35, date: new Date("2011/12/28") },
                { value: 43, date: new Date("2011/12/29") },
                { value: 38, date: new Date("2011/12/30") },
                { value: 30, date: new Date("2011/12/31") },
                { value: 48, date: new Date("2012/01/01") },
                { value: 50, date: new Date("2012/01/02") },
                { value: 55, date: new Date("2012/01/03") },
                { value: 35, date: new Date("2012/01/04") },
                { value: 30, date: new Date("2012/01/05") }
            ],
            valueAxis: [{
                line: {
                    visible: false
                }
            }]
        }
    }
}
</script>
