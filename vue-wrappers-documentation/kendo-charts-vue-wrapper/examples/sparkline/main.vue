<template>
<div>
    <div style="width: 500px">
        <div class="climate">
            <h4>Climate control history</h4>
            <table class="history">
                <tr>
                    <td class="spark">
                        <sparkline :data="pressLogData" :theme="'sass'"></sparkline>
                    </td>
                    <td class="value">980
                        <span>mb</span>
                    </td>
                </tr>
                <tr>
                    <td class="spark">
                        <sparkline :type="'column'"
                                         :data="tempLogData"
                                         :tooltip-format="'{0} %'"
                                         :theme="'sass'">
                        </sparkline>
                    </td>
                    <td class="value">21
                        <span>&deg;C</span>
                    </td>
                </tr>
                <tr>
                    <td class="spark">
                        <sparkline :type="'area'"
                                         :data="humLogData"
                                         :tooltip-format="'{0} %'"
                                         :theme="'sass'">
                        </sparkline>
                    </td>
                    <td class="value">32
                        <span>%</span>
                    </td>
                </tr>
            </table>
        </div>
        <div class="temperature">
            <h4>Temperature control</h4>
            <div class="stats">
                <sparkline id="temp-range"
                                 :type="'bullet'"
                                 :data="tempRangeData"
                                 :tooltip-visible="false"
                                 :value-axis="tempRangeValueAxisOpt"
                                 :theme="'sass'">
                </sparkline>
            </div>
        </div>
        <div class="conditioner">
            <h4>Conditioner working time</h4>
            <ul class="pie-list stats">
                <li>
                    MON
                    <sparkline id="stats-mon"
                                     :type="'pie'"
                                     :data="[14,10]"
                                     :theme="'sass'">
                    </sparkline>
                </li>
                <li>
                    TUE
                    <sparkline id="stats-tue"
                                     :type="'pie'"
                                     :data="[8,6]"
                                     :theme="'sass'">
                    </sparkline>
                </li>
                <li>
                    WED
                    <sparkline id="stats-wed"
                                     :type="'pie'"
                                     :data="[8,16]"
                                     :theme="'sass'">
                    </sparkline>
                </li>
                <li>
                    THU
                    <sparkline id="stats-thu"
                                     :type="'pie'"
                                     :data="[12,12]"
                                     :theme="'sass'">
                    </sparkline>
                </li>
                <li>
                    FRI
                    <sparkline id="stats-fri"
                                     :type="'pie'"
                                     :data="[6,18]"
                                     :theme="'sass'">
                    </sparkline>
                </li>
                <li>
                    SAT
                    <sparkline id="stats-sat"
                                     :type="'pie'"
                                     :data="[1,23]"
                                     :theme="'sass'">
                    </sparkline>
                </li>
                <li>
                    SUN
                    <sparkline id="stats-sun"
                                     :type="'pie'"
                                     :data="[5,19]"
                                     :theme="'sass'">
                    </sparkline>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<style>
    .temperature, .conditioner {
        margin: 0;
        padding: 30px 0 0 0;
    }

    .history {
        border-collapse: collapse;
        width: 100%;
    }
    .history td {
        padding: 0;
        vertical-align: bottom;
    }
    .history td.spark {
        line-height: 30px;
    }
    .history td.value {
        font-size: 1.6em;
        font-weight: normal;
        line-height: 20px;
    }
    .history td.value span {
        font-size: .5em;
        vertical-align: top;
        line-height: 30px;
    }
    .stats {
        text-align: center;
    }
    .pie-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    .pie-list li {
        display: inline-block;
        text-align: center;
        width: 34px;
        font-size: 10px;
    }
    #stats-mon,
    #stats-tue,
    #stats-wed,
    #stats-thu,
    #stats-fri,
    #stats-sat,
    #stats-sun {
        display: block;
        width: 34px;
        line-height: 30px;
    }
    #temp-range {
        width: 100%;
        line-height: 30px;
    }
</style>

<script>
import { Sparkline } from '@progress/kendo-charts-vue-wrapper';

export default {
    name: 'App',
    components: {
        'sparkline': Sparkline,
    },
    data: function() {
        return {
            pressLogData: [
                936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007,
                1004, 988, 990, 988, 987, 995, 946, 954, 991, 984,
                974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953,
                952, 940, 937, 980, 966, 965, 928, 916, 910, 980
            ],
            tempLogData: [
                16, 17, 18, 19, 20, 21, 21, 22, 23, 22,
                20, 18, 17, 17, 16, 16, 17, 18, 19, 20,
                21, 22, 23, 25, 24, 24, 22, 22, 23, 22,
                22, 21, 16, 15, 15, 16, 19, 20, 20, 21
            ],
            humLogData: [
                71, 70, 69, 68, 65, 60, 55, 55, 50, 52,
                73, 72, 72, 71, 68, 63, 57, 58, 53, 55,
                63, 59, 61, 64, 58, 53, 48, 48, 45, 45,
                63, 64, 63, 67, 58, 56, 53, 59, 51, 54
            ],
            tempRangeData: [21, 23],
            tempRangeValueAxisOpt: {
                min: 0,
                max: 30,
                plotBands: [{
                    from: 0, to: 15, color: '#787878', opacity: 0.15
                }, {
                    from: 15, to: 22, color: '#787878', opacity: 0.3
                }, {
                    from: 22, to: 30, color: '#787878', opacity: 0.15
                }]
            }
        }
    }
}
</script>
