<template>
    <div id="qr-wrap" style="text-align: center;">
      <p>To test the Adaptive Rendering, scan the QR code or open this demo on a mobile device.</p>
      <kendo-qrcode :value="qrCodeValue" :size="200"></kendo-qrcode>
    </div>
    <div id="scheduler-wrap" style="display: none;">
      <kendo-scheduler
        ref="scheduler"
        :data-source="localDataSource"
        :date="date"
        :mobile="true"
        :height="450"
        :timezone="'Etc/UTC'"
      >
        <kendo-scheduler-view :type="'day'"></kendo-scheduler-view>
        <kendo-scheduler-view :type="'workWeek'" :selected="true"></kendo-scheduler-view>
        <kendo-scheduler-view :type="'week'"></kendo-scheduler-view>
        <kendo-scheduler-view :type="'month'"></kendo-scheduler-view>
        <kendo-scheduler-view :type="'agenda'"></kendo-scheduler-view>
      </kendo-scheduler>
    </div>
</template>
<script>
import { Scheduler, SchedulerView } from '@progress/kendo-scheduler-vue-wrapper';
import { KendoSchedulerDataSource } from '@progress/kendo-datasource-vue-wrapper';
import { QRCode } from '@progress/kendo-barcodes-vue-wrapper';

export default {
    components: {
        'kendo-qrcode': QRCode,
        'kendo-scheduler': Scheduler,
        'kendo-scheduler-view': SchedulerView,
        'kendo-schedulerdatasource': KendoSchedulerDataSource
    },
    data: function (){
        return   {
            qrCodeValue: "https://2432r24qzj.codesandbox.io/",
            date: new Date("2018/6/6"),
            localDataSource: [{
                id: 1,
                start: new Date("2018/6/6 08:00 AM"),
                end: new Date("2018/6/6 09:00 AM"),
                title: "Interview"
            },
            {
                id: 2,
                start: new Date("2018/6/6 08:00 AM"),
                end: new Date("2018/6/6 09:00 AM"),
                title: "Meeting"
            }]
        };
    },
    mounted: function() {
        var isMobile = Boolean(kendo.support.mobileOS);

        if (isMobile) {
            document.getElementById("qr-wrap").style.display = "none";
            document.getElementById("scheduler-wrap").style.display = "block";

            this.$refs.scheduler.kendoWidget().resize();
        }
    }
}
</script>