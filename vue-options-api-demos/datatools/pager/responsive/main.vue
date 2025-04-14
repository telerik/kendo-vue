<template>
    <div>
        <div class="wrapper">
            <slider
                style="width:500px"
                :buttons="true"
                :step="5"
                :min="300"
                :max="800"
                v-model="width"
            >
                <slider-label :position="300">300</slider-label>
                <slider-label :position="400">400</slider-label>
                <slider-label :position="500">500</slider-label>
                <slider-label :position="600">600</slider-label>
                <slider-label :position="700">700</slider-label>
                <slider-label :position="800">800</slider-label>
            </slider>
            <span>Current width: {{ width.toFixed(0) }}px</span>
        </div>

        <pager 
            :style="{width:width.toFixed(0)+'px'}"
            :skip="skip" 
            :take="take" 
            :total="total" 
            :button-count="buttonCount" 
            :info="info" 
            :type="type" 
            :page-sizes="pageSizes ? pageSizeDefs : undefined"
            :previous-next="previousNext" 
            @pagechange="handlePageChange" >
        </pager>
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
            pageSizes: [10, 15, 20],
            previousNext: true,
            total: 200,
            pageSizeDefs:[5,10,20],
            width: 768
        }
    },
    methods:{
        handlePageChange: function(event){
            this.skip=event.skip;
            this.take=event.take;
        }
    }
};

</script>

<style>
      .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;
        margin-bottom: 20px;
      }
</style>
