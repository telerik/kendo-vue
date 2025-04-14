<template>
    <div>
        <pager 
            :skip="skip" 
            :take="take" 
            :total="total" 
            :button-count="buttonCount" 
            :info="info" 
            :type="type" 
            :page-sizes="pageSizes"
            :previous-next="previousNext" 
            @pagechange="handlePageChange" 
            @pagesizechange="handlePageSizeChange" 
            >
        </pager>
        <br/>
        <div class="example-config">
        <h5>{{ title }}</h5>
        <ul class="event-log">
            <li v-for="(event, index) in events" :key="index" >{{ event }}</li>
        </ul>
        </div>
    </div>
</template>

<script>
import { Pager } from '@progress/kendo-vue-data-tools';
import { Slider, SliderLabel } from '@progress/kendo-vue-inputs';

export default {
    components: {
        "pager": Pager,
        'slider': Slider,
        'slider-label': SliderLabel
    },
    data: function(){
        return {
            skip: 0,
            take: 5,
            buttonCount: 5,
            type: "numeric",
            info: true,
            pageSizes: [5, 10, 20, 50, 100],
            previousNext: true,
            total: 200,
            title: "Event log",
            events: []
        }
    },
    methods:{
        handlePageChange: function(event){
            this.log("pageChange", event);
            this.skip=event.skip;
            this.take=event.take;
        },
        handlePageSizeChange: function(event){
            this.log("pageSizeChange", event);
            this.skip=event.skip;
            this.take=event.take;
        },
        log: function(event, arg){
            this.events.unshift(
            `event: ${event}, event data: ${arg ? JSON.stringify(arg) : ""}`
            );
        }
    }
};

</script>