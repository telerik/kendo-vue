<template>
<div>
    <chart :title-text="'World population by age group and sex'"
            :legend-visible="false"
            :series-defaults-type="'column'"
            :series="series"
            :category-axis="categoryAxis"
            :value-axis="valueAxis"
            :series-colors="seriesColors"
            :tooltip="tooltip"
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
                name: "0-19",
                stack: "Female",
                data: [854622, 925844, 984930, 1044982, 1100941, 1139797, 1172929, 1184435, 1184654]
            }, {
                name: "20-39",
                stack: "Female",
                data: [490550, 555695, 627763, 718568, 810169, 883051, 942151, 1001395, 1058439]
            }, {
                name: "40-64",
                stack: "Female",
                data: [379788, 411217, 447201, 484739, 395533, 435485, 499861, 569114, 655066]
            }, {
                name: "65-79",
                stack: "Female",
                data: [97894, 113287, 128808, 137459, 152171, 170262, 191015, 210767, 226956]
            }, {
                name: "80+",
                stack: "Female",
                data: [16358, 18576, 24586, 30352, 36724, 42939, 46413, 54984, 66029]
            }, {
                name: "0-19",
                stack: "Male",
                data: [900268, 972205, 1031421, 1094547, 1155600, 1202766, 1244870, 1263637, 1268165]
            }, {
                name: "20-39",
                stack: "Male",
                data: [509133, 579487, 655494, 749511, 844496, 916479, 973694, 1036548, 1099507]
            }, {
                name: "40-64",
                stack: "Male",
                data: [364179, 401396, 440844, 479798, 390590, 430666, 495030, 564169, 646563]
            }, {
                name: "65-79",
                stack: "Male",
                data: [74208, 86516, 98956, 107352, 120614, 138868, 158387, 177078, 192156]
            }, {
                name: "80+",
                stack: "Male",
                data: [9187, 10752, 13007, 15983, 19442, 23020, 25868, 31462, 39223]
            }],
            seriesColors: [
                "#cd1533", "#d43851", "#dc5c71", "#e47f8f", "#eba1ad",
                "#009bd7", "#26aadd", "#4db9e3", "#73c8e9", "#99d7ef"
            ],
            valueAxis: [{
                line: {
                    visible: false
                },
                labels: {
                    template: "#= kendo.format('{0:N0}', value / 1000) # M"
                }
            }],
            categoryAxis: {
                categories: [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010],
                majorGridLines: {
                    visible: false
                }
            },
            tooltip: {
                visible: true,
                template: "#= series.stack #s, age #= series.name #"
            }
        }
    }
}
</script>
