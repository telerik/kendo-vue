<template>
    <div class="dashboard">
        <div class="row mb-4">
            <div class="col-sm">
                <h2>
                    <span class="small text-uppercase text-muted d-block">Statistics</span>
                    {{ rangeStart.toDateString() }} - {{ today.toDateString() }}
                </h2>
            </div>
            <div class="col-sm text-sm-end">
                <ButtonGroup :index="selectedIndex">
                    <KButton @click="onSelect(1)">Days</KButton>
                    <KButton @click="onSelect(2)">Weeks</KButton>
                    <KButton @click="onSelect(3)">Month</KButton>
                </ButtonGroup>
            </div>
        </div>
        <div class="row k-card-list" v-if="issues">
            <div class="col-md-12">
                <Card>
                    <CardHeader :class="'h3'">Active Issues</CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg active-issues">
                                <span class="comp-label">
                                    <strong>{{ issues.open + issues.closed }}</strong>
                                    <small>Active issues</small>
                                </span>
                                <Chart :style="{ height: '80px' }">
                                    <ChartArea :height="80" :color="'#888'" />
                                    <ChartSeriesDefaults />
                                    <ChartCategoryAxis>
                                        <ChartCategoryAxisItem :type="'date'" :base-unit="'days'" :labels="{
                                            step: 4,
                                            font: '10px sans-serif', 
                                            format: 'dd MMM', 
                                            rotation: 'auto'
                                        }" :major-grid-lines="{
                                            visible:
                                                false
                                        }" :line="{ visible: false }" />
                                    </ChartCategoryAxis>
                                    <ChartValueAxis>
                                        <ChartValueAxisItem :visible="false" :major-grid-lines="{
                                            visible: false
                                        }" />
                                    </ChartValueAxis>
                                    <ChartSeries>
                                        <ChartSeriesItem :data-items="issues.active" :type="'column'" :gap="0.5"
                                            :overlay="{ gradient: 'glass' }" :stack="true" :aggregate="'count'"
                                            :color="'#888'" :field="'count'" :category-field="'date'" />
                                    </ChartSeries>
                                </Chart>


                            </div>
                            <div class="col-sm-12 col-md-6 col-lg text-success closed-issues">
                                <span class="comp-label">
                                    <strong>{{ issues.closed }}</strong>
                                    <small>Closed issues</small>
                                </span>
                                <Chart :style="{ height: '80px' }">
                                    <ChartArea :height="80" :color="'#27c46d'" />
                                    <ChartSeriesDefaults />
                                    <ChartCategoryAxis>
                                        <ChartCategoryAxisItem :type="'date'" :base-unit="'days'" :labels="{
                                            step: 4,
                                            font: '10px sans-serif', 
                                            format: 'dd MMM',
                                            rotation: 'auto'
                                        }" :major-grid-lines="{
                                            visible:
                                                false
                                        }" :line="{ visible: false }" />
                                    </ChartCategoryAxis>
                                    <ChartValueAxis>
                                        <ChartValueAxisItem :visible="false" :major-grid-lines="{
                                            visible: false
                                        }" />
                                    </ChartValueAxis>
                                    <ChartSeries>
                                        <ChartSeriesItem :data-items="issues.groupedIssues.closed" :type="'column'"
                                            :gap="0.5" :overlay="{ gradient: 'glass' }" :stack="true"
                                            :aggregate="'count'" :color="'#27c46d'" :field="'count'"
                                            :category-field="'date'" />
                                    </ChartSeries>
                                </Chart>
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg text-danger open-issues">
                                <span class="comp-label">
                                    <strong>{{ issues.open }}</strong>
                                    <small>Open issues</small>
                                </span>
                                <Chart :style="{ height: '80px' }">
                                    <ChartArea :height="80" :color="'#CF3268'" />
                                    <ChartSeriesDefaults />
                                    <ChartCategoryAxis>
                                        <ChartCategoryAxisItem :type="'date'" :base-unit="'days'" :labels="{
                                            step: 4,
                                            font: '10px sans-serif', 
                                            format: 'dd MMM',
                                            rotation: 'auto'
                                        }" :major-grid-lines="{
                                            visible:
                                                false
                                        }" :line="{ visible: false }" />
                                    </ChartCategoryAxis>
                                    <ChartValueAxis>
                                        <ChartValueAxisItem :visible="false" :major-grid-lines="{
                                            visible: false
                                        }" />
                                    </ChartValueAxis>
                                    <ChartSeries>
                                        <ChartSeriesItem :data-items="issues.groupedIssues.open" :type="'column'"
                                            :gap="0.5" :overlay="{ gradient: 'glass' }" :stack="true"
                                            :aggregate="'count'" :color="'#CF3268'" :field="'count'"
                                            :category-field="'date'" />
                                    </ChartSeries>
                                </Chart>
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg close-rate">
                                <span class="comp-label">
                                    <strong>{{ calculatePercent(issues.closeRate.average) }}%</strong>
                                    <small>Close rate</small>
                                </span>
                                <p class="m-0 small text-uppercase text-muted"
                                    v-if="issues.closeRate.highest.close_rate">
                                    Highest:
                                    {{ calculatePercent(issues.closeRate.highest.close_rate) }}%
                                    on {{ getDate(issues.closeRate.highest.created_at) }}
                                </p>
                                <p class="m-0 small text-uppercase text-muted"
                                    v-if="issues.closeRate.highest.close_rate">
                                    Lowest:
                                    {{ calculatePercent(issues.closeRate.lowest.close_rate) }}%
                                    on {{ getDate(issues.closeRate.lowest.created_at) }}
                                </p>
                                <Chart :style="{ height: '80px' }" v-if="issues.closeRate.highest.close_rate">
                                    <ChartArea :height="30" :margin-left="0" />
                                    <ChartLegend :visible="false" />
                                    <ChartValueAxis>
                                        <ChartValueAxisItem :min="0" :max="100" :major-ticks="{ visible: false }"
                                            :minor-ticks="{ visible: false }" :major-grid-lines="{ visible: false }"
                                            :labels="{ visible: false }" :line="{ visible: false }"
                                            :plot-bands="[{ from: 0, to: 100, color: '#35C473' }]" />
                                    </ChartValueAxis>
                                    <ChartCategoryAxis>
                                        <ChartCategoryAxisItem :major-ticks="{ visible: false }"
                                            :major-grid-lines="{ visible: false }" :line="{ visible: false }"
                                            :tooltip="{ visible: false }">
                                        </ChartCategoryAxisItem>
                                    </ChartCategoryAxis>
                                    <ChartSeries>
                                        <ChartSeriesItem :current-field="'current'" :target-field="'target'"
                                            :data-items="[{ target: 70, current: Math.round(issues.closeRate.average * 100) }]"
                                            :type="'bullet'" :color="'#CF3268'" :gap="0" :target="{ color: '#fff' }" />
                                    </ChartSeries>
                                </Chart>
                            </div>
                        </div>
                        <h3>All issues</h3>
                        <Chart :style="{ heigth: '80px' }">
                            <ChartArea :height="400" />
                            <ChartLegend :visible="false" />
                            <ChartSeriesDefaults :type="'column'" :stack="true" :gap="0.6"
                                :overlay="{ gradient: 'none' }" />
                            <ChartCategoryAxis>
                                <ChartCategoryAxisItem :type="'date'" :base-unit="baseUnit"
                                    :major-ticks="{ visible: false }" :major-grid-lines="{ visible: false }"
                                    :line="{ visible: false }" :labels="{
                                        format: 'dd MM', rotation: 'auto', marginTop: 8
                                    }">
                                </ChartCategoryAxisItem>
                            </ChartCategoryAxis>
                            <ChartValueAxis>
                                <ChartValueAxisItem :major-grid-lines="{ step: 2, skip: 2, color: '#F0F2F2' }"
                                    :labels="{ step: 2, skip: 2, 'margin-right': 4 }" :line="{ visible: false }" />
                            </ChartValueAxis>
                            <ChartSeries>
                                <ChartSeriesItem :name="'open'" :field="'count'" :category-field="'date'"
                                    :aggregate="'count'" :data-items="issues.groupedIssues.open" :opacity="0.3"
                                    :color="'#35C473'" :border="{
                                        color: '#35C473',
                                        opacity: 0.3
                                    }" />
                                <ChartSeriesItem :name="'closed'" :field="'count'" :category-field="'date'"
                                    :aggregate="'count'" :data-items="issues.groupedIssues.closed" :opacity="0.3"
                                    :color="'#CC3458'" :border="{
                                        color: '#CC3458',
                                        opacity: 0.3
                                    }" />
                            </ChartSeries>
                        </Chart>
                    </CardBody>
                </Card>
            </div>
            <div :class="['col-md-12', currentScreenWidth>=1150?'k-card-deck': 'k-card-list']">
                <div :class="[currentScreenWidth>=1150?'col-md-4':'']">
                    <Card>
                        <CardHeader :class="'h4'">Issue Types</CardHeader>
                        <CardBody>
                            <Chart>
                                <ChartLegend :position="'bottom'" />
                                <ChartSeries>
                                    <ChartSeriesItem :type="'donut'" :hole-size="60" :field="'value'"
                                        :category-field="'type'" :data-items="issues.issueTypes" :labels="{
                                            visible: true,
                                            position: 'center',
                                            format: '{0:p2}'
                                        }" />
                                </ChartSeries>
                            </Chart>
                            <div class="comp-label chart-label">
                                <div class="comp-label chart-label">
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div :class="[currentScreenWidth>=1150?'col-md-8':'']">
                    <Card>
                        <CardHeader :class="'h4'">Types Distribution</CardHeader>
                        <CardBody>
                            <Chart>
                                <ChartSeriesDefaults :type="'line'" />
                                <ChartCategoryAxis>
                                    <ChartCategoryAxisItem :type="'date'" :base-unit="baseUnit"
                                        :major-ticks="{ visible: false }" :major-grid-lines="{ visible: false }"
                                        :line="{ visible: false }" :labels="{ format: 'dd MM' }">

                                    </ChartCategoryAxisItem>
                                </ChartCategoryAxis>
                                <ChartValueAxis>
                                    <ChartValueAxisItem :major-grid-lines="{ step: 2, skip: 2, color: '#F0F2F2' }"
                                        :labels="{ step: 2, skip: 2, 'margin-right': 4 }" :line="{ visible: false }" />
                                </ChartValueAxis>
                                <ChartLegend :position="'top'"
                                    :labels="{ font: '16px sans-serif', margin: { right: 40 } }" />
                                <ChartSeries>
                                    <ChartSeriesItem :name="'Enhancement'" :field="'value'" :category-field="'date'"
                                        :aggregate="'count'" :data-items="issues.typesDistribution.Enhancement"
                                        :markers="{
                                            visible: false,
                                        }" :line-style="'smooth'" />
                                    <ChartSeriesItem :name="'Feature'" :field="'value'" :category-field="'date'"
                                        :aggregate="'count'" :data-items="issues.typesDistribution.Feature" :markers="{
                                            visible: false,
                                        }" :line-style="'smooth'" />
                                    <ChartSeriesItem :name="'Others'" :field="'value'" :category-field="'date'"
                                        :aggregate="'count'" :data-items="issues.typesDistribution.Others" :markers="{
                                            visible: false,
                                        }" :line-style="'smooth'" />
                                    <ChartSeriesItem :name="'SEV: High'" :field="'value'" :category-field="'date'"
                                        :visible="false" :aggregate="'count'"
                                        :data-items="issues.typesDistribution['SEV: High']" :markers="{
                                            visible: false,
                                        }" :line-style="'smooth'" />
                                    <ChartSeriesItem :name="'SEV: Medium'" :field="'value'" :category-field="'date'"
                                        :visible="false" :aggregate="'count'"
                                        :data-items="issues.typesDistribution['SEV: Medium']" :markers="{
                                            visible: false,
                                        }" :line-style="'smooth'" />
                                    <ChartSeriesItem :name="'SEV: Low'" :field="'value'" :category-field="'date'"
                                        :aggregate="'count'" :data-items="issues.typesDistribution['SEV: Low']"
                                        :markers="{
                                            visible: false,
                                        }" :line-style="'smooth'" />
                                </ChartSeries>
                            </Chart>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Button, ButtonGroup } from '@progress/kendo-vue-buttons';
import {
    Chart, ChartArea, ChartSeries, ChartSeriesItem, ChartCategoryAxis,
    ChartCategoryAxisItem, ChartValueAxis, ChartValueAxisItem, ChartSeriesDefaults, ChartCategoryAxisLabels, ChartLegend
} from '@progress/kendo-vue-charts';
import {
    Card,
    CardHeader,
    CardBody,
} from "@progress/kendo-vue-layout";
import "hammerjs";

import { IssuesProcessor } from '../shared/issues-processor'
window.ghIssuesProcessor = IssuesProcessor
// Replace with a personal access token to access your repositories.
// See https://github.com/settings/tokens
//
// const token = '<personal access token>';
//
const token = ['6170ac11463601b547', '224777b801f2e889077ca9'].join('');

export default {
    name: 'dashboard',
    components: {
        KButton: Button,
        ButtonGroup,
        Chart,
        ChartArea,
        ChartSeries,
        ChartSeriesItem,
        ChartCategoryAxis,
        ChartCategoryAxisItem,
        ChartValueAxis, ChartValueAxisItem, ChartSeriesDefaults, ChartCategoryAxisLabels, ChartLegend,
        Card,
        CardHeader,
        CardBody,
    },
    created() {
        window.onresize = () => {
            this.currentScreenWidth = window.innerWidth;
        };

        fetch('https://api.github.com/repos/telerik/kendo-ui-core/issues?' + new URLSearchParams({
            state: 'all',
            page: 1,
            per_page: 100
        }), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${token}`,
            },
        }).then((response) => response.json())
            .then((data) => {
                this.response = data;
            })
    },
    data() {
        return {
            today: new Date(),
            selectedIndex: 2,
            response: [],
            currentScreenWidth: null
        }
    },
    computed: {
        activeIssues() {
            return this.issues.active;
        },
        issues() {
            return (this.response && this.response.length > 0) ? ghIssuesProcessor.process(this.response, this.days) : null
        },
        days() {
            switch (this.selectedIndex) {
                case 0:
                    return 7
                case 1:
                    return 14
                case 2:
                    return 30
                default:
                    return 3
            }
        },
        rangeStart() {
            const since = new Date()
            since.setDate(since.getDate() - this.days)

            return since
        },
        baseUnit() {
            return this.selectedIndex === 1 ? 'days' : this.selectedIndex === 2 ? 'weeks' : "months"
        }
    },
    methods: {
        onSelect(ev) {
            this.selectedIndex = ev
        },
        legendTemplate(data) {
            var series = data.series
            var value = 0

            for (var i = 0; i < series.data.length; i++) {
                value += series.data[i].value
            }

            return value + "\n" + series.name
        },
        calculatePercent(data) {
            return Math.round(data * 100)
        },
        getDate(data) {
            return new Date(parseInt(data)).toDateString();
        }
    }
}
</script>