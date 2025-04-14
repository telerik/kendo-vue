<template>
    <div>
        <configurator
            :type="type"
            :buttonCount="buttonCount"
            :info="info"
            :pageSizes="pageSizes"
            @typeChange="(inputType)=>onTypeChange(inputType)"
            @buttonCountChange="(buttonsNumber)=>onButtonCountChange(buttonsNumber)"
            @showInfoChange="(showInfo)=>onShowInfoChange(showInfo)"
            @pageSizeChange="(pageChanged)=>onPageSizeChange(pageChanged)"
            @previousNextChange="(prevNextChanged)=>onPreviousNextChange(prevNextChanged)"
            />
        <pager
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
import { products } from "./products";
import Configurator from "./Configurator.vue";

const initialPageState = {
  skip: 0,
  take: 5,
  buttonCount: 5,
  type: 'numeric',
  info: true,
  pageSizes: true,
  previousNext: true
}

export default {
    components: {
        "pager": Pager,
        "configurator": Configurator
    },
    data: function(){
        return {
            skip: initialPageState.skip,
            take: initialPageState.take,
            buttonCount: initialPageState.buttonCount,
            type: initialPageState.type,
            info: initialPageState.info,
            pageSizes: initialPageState.pageSizes,
            previousNext: initialPageState.previousNext,
            total: products.length,
            pageSizeDefs:[5,10,20]
        }
    },
    methods:{
        handlePageChange: function(event){
            this.skip=event.skip;
            this.take=event.take;
        },
        onTypeChange: function(inputType){
            inputType==="numeric"? this.type="numeric" : this.type = "input";
        },
        onButtonCountChange: function(buttonsNumber){
            this.buttonCount = buttonsNumber;
        },
        onShowInfoChange: function(showInfo){
            this.info = showInfo;
        },
        onPageSizeChange: function(pageChanged){
            this.pageSizes = pageChanged;
        },
        onPreviousNextChange: function(prevNextChanged){
            this.previousNext = prevNextChanged;
        }
    }
};

</script>
