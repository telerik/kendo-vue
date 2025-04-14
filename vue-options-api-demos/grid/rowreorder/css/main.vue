<template>
    <div>
        <Grid
                :data-items="items"
                :columns="columns"
                :cell-render="'myTemplate'"
                :class="isDragging">
            <template v-slot:myTemplate="{props}">
                <custom  :data-item="props.dataItem" :field="props.field" :dropPosition="dropPosition"
                        @dragHandler="dragHandler"
                        @pressHandler="pressHandler"
                        @releaseHandler="releaseHandler"/>
            </template>
        </Grid>
        <dragclue v-if="showDropHints"
        :top="top" :left="left" :data-item="activeItem" :showContent="showDragClueContent" />
   </div>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import CustomCell from './CustomCell.vue';
import DragClue from './DragClue.vue';
import { reorderData, getTargetTopOffSet  } from './common'

export default {
    components: {
        'Grid': Grid,
        'custom': CustomCell,
        'dragclue': DragClue
    },
   data () {
        return {
            top: 0,
            left: 0,
            targetTopOffset: null,
            targetLeftOffset: null,
            showDropHints: false,
            showDragClueContent: null,
            dropPosition: '',
            items: [],
            columns: [
                { field: 'reorder', title: '', width: '80px', title: 'Reorder' },
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price' }
            ],
            activeItem: {}
        };
    },
    computed: {
        isDragging() {
            return {
                'dragging': this.activeItem.ProductID
            };
        }
    },
    methods: {
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
            }));
        },
        dragHandler(dataItem,  event) {
            this.top = event.pageY + 10;
            this.left = event.pageX;
            this.targetLeftOffset = this.getGridReference().offsetLeft + this.getGridReference().offsetLeft/2;
            this.targetTopOffset = getTargetTopOffSet(event);
            this.dropPosition = this.getDropPosition(event)
            this.showDropHints = true;
        },
        getDropPosition: function(event){
            return this.dropPosition = event.offsetY >= event.originalEvent.target.parentElement.clientHeight/2? "below":"above";
        },
        pressHandler(dataItem) {
          this.activeItem = dataItem;
        },
        releaseHandler(dataItem, event) {
            this.showDropHints = false;
            const reorderedData = reorderData(event, this.items, this.activeItem, this.dropPosition);
            this.items = reorderedData;
            this.activeItem = {};
        },
        gridMouseover(e) {
             this.showDragClueContent = true;
        },
        gridMouseout(e){
            this.showDragClueContent = false;
        },
        getGridReference(){
            return document.querySelector(".k-grid");
        }
    },
    mounted() {
        this.items = this.createRandomData(10);

        const gridBody = document.getElementsByClassName("k-grid-content")[0];
        gridBody.addEventListener("mouseover", this.gridMouseover, false)
        gridBody.addEventListener("mouseout", this.gridMouseout, false)
    },
    unmounted() {
        const gridBody = document.getElementsByClassName("k-grid-content")[0];
        gridBody.removeEventListener("mouseover", this.gridMouseover, false)
        gridBody.removeEventListener("mouseout", this.gridMouseout, false)
    }
};

</script>

