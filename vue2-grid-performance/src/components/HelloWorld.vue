<template>
  <div class="hello">
   <div class='controls-holder' :style="{maxWidth: '1350px'}">
                <div class='switches'>
                    <div class='control-item'>
                        <div :style="{minWidth: '140px'}">
                            <checkbox
                                :value="isGrouped"
                                @change="onGroupedChange"
                                :label="'Grouped'"
                            />
                        </div>
                    </div>
                    <div class='fintech-slider control-item'>
                        <label>
                            Records: {{volume}} <br />
                            <slider
                                :min="0"
                                :max="10000"
                                :step="volumeStep"
                                :default-value="volume"
                                @change="onVolumeChange"
                                :disabled="liveUpdating"
                            />
                        </label>
                    </div>
                    <div class='fintech-slider control-item'>
                        <label>
                            Frequency: {{frequency}} ms <br />
                        <slider
                                :min="100"
                                :max="3000"
                                :step="10"
                                :default-value="frequency"
                                @change="onFrequencyChange"
                                :disabled="liveUpdating"
                            />
                        </label>
                    </div>
                </div>
                <div class='control-item fintech-play-controls'>
                    <buttongroup class='intechsample-btn-group'>
                        <kbutton v-for="key in [0,1,2]" :key="key"
                            :togglable="true"
                            :selected="selectedButton === key"
                            @click="onSelectClick"
                            :name="key"
                            :icon="buttonsMeta[key].icon"
                            :style="{ width: '200px' }"
                        >
                            {{buttonsMeta[key].title}}
                        </kbutton>
                    </buttongroup>
                </div>
            </div>
            <div class='sample-toolbar'>
                <span v-if="selectedButton === 0">
                    Feeding {{volume}} records every {{frequency / 1000}} sec. {{volume / 5}} records updated.
                </span>
                <span v-if="selectedButton === 1">
                    Feeding {{volume}} records every {{frequency / 1000}} sec. {{volume}} records updated.
                </span>
            </div>
                <grid
                    :style="{
                        width: '1350px',
                        height: '800px'
                    }"
                    :group="group"
                    :sort="sort"
                    :skip="skip"
                    :take="take"
                    :data-item-key="'ID'"
                    :groupable="true"
                    :sortable="true"
                    :resizable="true"
                    :row-height="44"
                    :selected-field="'selected'"
                    :scrollable="'virtual'"
                    :column-virtualization="true"

                    :total="100"
                    :data-items="processedData"

                    @datastatechange="onDataStateChange"
                    @selectionchange="onSelectionChange"
                    @headerselectionchange="onHeaderSelectionChange"
                    @rowclick="onRowClick"
                    :columns="columns"
                >
                 <template v-slot:myPriceCell="{props}">
                    <pricecell 
                        :class-name="props.className"
                        :data-item="props.dataItem"
                        :field="props.field"/>
                </template>
                <template v-slot:myChangeCell="{props}">
                    <changecell 
                        :class-name="props.className"
                        :data-item="props.dataItem"
                        :field="props.field"/>
                </template>
                 <template v-slot:myChangePercentCell="{props}">
                    <changepercentcell 
                        :class-name="props.className"
                        :data-item="props.dataItem"
                        :field="props.field"/>
                </template>
                    <toolbar>
                        <kbutton
                            :title="'Export PDF'"
                            :icon="'file-excel'"
                            @click="onExcelExport"
                        >
                            Export to Excel
                        </kbutton>
                    </toolbar>
                  
                </grid>
  </div>
</template>

<script>
import {
    Grid, GridToolbar
} from '@progress/kendo-vue-grid';
import { Checkbox, Slider } from '@progress/kendo-vue-inputs';
import { Button, ButtonGroup } from '@progress/kendo-vue-buttons';
import { updateAllPrices, updateRandomPrices } from '../DataService';
import { debounce } from '../utils/index.js';
import { process } from '@progress/kendo-data-query';
import { FinancialData } from '../DataService/local-data/financial-data';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import PriceCell from './PriceCell.vue';
import ChangeCell from './ChangeCell.vue';
import ChangePercentCell from './ChangePercentCell.vue';

const DEBOUNCE_TIME = 250;
const VOLUME_INITIAL = 100;
const VOLUME_STEP = 100;
const FREQUENCY_INITIAL = 100;
const FREQUENCY_STEP = 100;
const PAGE_SIZE = 25;


const BUTTON_META = {
    [0]: {
        title: 'Live Prices',
        icon: 'refresh'
    },
    [1]: {
        title: 'Live All Prices',
        icon: 'refresh'
    },
    [2]: {
        title: 'Stop',
        icon: 'stop'
    }
};


export default {
  name: 'HelloWorld',
  components: {
    grid: Grid,
    toolbar: GridToolbar,
    checkbox: Checkbox,
    slider: Slider,
    kbutton: Button,
    buttongroup: ButtonGroup,
    pricecell: PriceCell,
    changecell: ChangeCell,
    changepercentcell: ChangePercentCell
  },
  data(){
    return {
      volumeStep: VOLUME_STEP,
      buttonsMeta: BUTTON_META,
      dataItems: [],
      processedData: [],
      interval: null,
      columns:[
                    { field: "selected",
                        width: 45,
                        filterable: false, 
                    },
                    { field: 'Category', width: 120 },                    
                    { field: 'Type', width: 100 },
                    { field: 'Contract', width:110 },
                    { field: 'Settlement', width:100 },
                    { field: 'Region', width:110 },
                    { field: 'Country', width:100 },
                    { field: 'Open Price', width: 120, filter: 'numeric', format:"{0:c4}"},
                    { field: 'Price', width: 130, filter: 'numeric', cell: 'myPriceCell'},
                    { field: 'Change', width: 90, className: 'numeric change', filter: 'numeric', headerClassName: 'headerAlignStyle', cell: 'myChangeCell' }, 
                    { field: 'Change(%)', width: 90, className: 'numeric change', filter: 'numeric',  cell: 'myChangePercentCell' },
                    { field: 'Buy', width: 110, filter: 'numeric', format:'{0:c4}' },
                    { field: 'Sell', width: 110, filter: 'numeric', format: '{0:c4}'},
                    { field: 'Spread', width:110, filter: 'numeric', format: '{0:c4}'},
                    { field: 'Volume', width:110, filter: 'numeric', format: '{0:c4}'},
                    { field: 'High(D)', width:110, filter: 'numeric', format: '{0:c4}'},
                    { field: 'Low(D)', width: 110, filter: 'numeric', format: '{0:c4}'},
                    { field: 'High(Y)', width: 110, filter: 'numeric', format: '{0:c4}'},
                    { field: 'Low(Y)', width: 110, filter: 'numeric', format: '{0:c4}'},
                    { field: 'Start(Y)', width: 110, filter: 'numeric', format: '{0:c4}'},
                    { field: 'Chart', width:60, className: 'center' }, //, cell: ChartCell},
                    { field: 'IndGrou', width:100, filterable: false },
                    { field: 'IndSect', width:120, filterable: false, resizable: true },
                    { field: 'IndSubg', width:100, filterable: false },
                    { field: 'SecType', width:90, filterable: false },
                    { field: 'IssuerN', width:170, filterable: false, resizable: true },
                    { field: 'Moodys', width:60, filterable: false },
                    { field: 'Fitch', width:60, filterable: false },
                    { field: 'DBRS', width:60, filterable: false },
                    { field: 'CollatT', width:90, filterable: false },
                    { field: 'Curncy', width:60, filterable: false },
                    { field: 'Security', width:120, filterable: false },
                    { field: 'sector', width:80, filterable: false },
                    { field: 'CUSIP', width:100, filterable: false },
                    { field: 'Ticker', width:60, filterable: false },
                    { field: 'Cpn', width:80, filterable: false },
                    { field: 'Maturity', width:120, filterable: false },
                    { field: 'KRD_3YR', width:110, filterable: false },
                    { field: 'ZV_SPREAD', width:90, filterable: false },
                    { field: 'KRD_5YR', width:50, filterable: false },
                    { field: 'KRD_1YR', width:80, filterable: false },
                    { field: 'IndGrou', width:100, filterable: false },
                    { field: 'IndSect', width:100, filterable: false, resizable: true },
                    { field: 'IndSubg', width:100, filterable: false },
                    { field: 'SecType', width:90, filterable: false },
                    { field: 'IssuerN', width:170, filterable: false, resizable: true },
                    { field: 'Moodys', width:60, filterable: false },
                    { field: 'Fitch', width:60, filterable: false },
                    { field: 'DBRS', width:60, filterable: false },
                    { field: 'CollatT', width:90, filterable: false },
                    { field: 'Curncy', width:60, filterable: false },
                    { field: 'Security', width:120, filterable: false },
                    { field: 'sector', width:80, filterable: false },
                    { field: 'CUSIP', width:100, filterable: false },
                    { field: 'Ticker', width:60, filterable: false },
                    { field: 'Cpn', width:80, filterable: false },
                    { field: 'Maturity', width:120, filterable: false },
                    { field: 'KRD_3YR', width:110, filterable: false },
                    { field: 'ZV_SPREAD', width:90, filterable: false },
                    { field: 'KRD_5YR', width:50, filterable: false },
                    { field: 'KRD_1YR', width:80, filterable: false },
                    { field: 'IndGrou', width:100, filterable: false },
                    { field: 'IndSect', width:100, filterable: false },
                    { field: 'IndSubg', width:100, filterable: false },
                    { field: 'SecType', width:90, filterable: false },
                    { field: 'IssuerN', width:170, filterable: false },
                    { field: 'Moodys', width:60, filterable: false },
                    { field: 'Fitch', width:60, filterable: false },
                    { field: 'DBRS', width:60, filterable: false },
                    { field: 'CollatT', width:90, filterable: false },
                    { field: 'Curncy', width:60, filterable: false },
                    { field: 'Security', width:120, filterable: false },
                    { field: 'sector', width:80, filterable: false },
                    { field: 'CUSIP', width:100, filterable: false },
                    { field: 'Ticker', width:60, filterable: false },
                    { field: 'Cpn', width:80, filterable: false },
                    { field: 'Maturity', width:120, filterable: false },
                    { field: 'KRD_3YR', width:110, filterable: false },
                    { field: 'ZV_SPREAD', width:90, filterable: false },
                    { field: 'KRD_5YR', width:50, filterable: false },
                    { field: 'KRD_1YR', width:80, filterable: false },
                    { field: 'IndGrou', width:100, filterable: false },
                    { field: 'IndSect', width:100, filterable: false },
                    { field: 'IndSubg', width:100, filterable: false },
                    { field: 'SecType', width:90, filterable: false },
                    { field: 'IssuerN', width:170, filterable: false },
                    { field: 'Moodys', width:60, filterable: false },
                    { field: 'Fitch', width:60, filterable: false },
                    { field: 'DBRS', width:60, filterable: false },
                    { field: 'CollatT', width:90, filterable: false },
                    { field: 'Curncy', width:60, filterable: false },
                    { field: 'Security', width:120, filterable: false },
                    { field: 'sector', width:80, filterable: false },
                    { field: 'CUSIP', width:100, filterable: false },
                    { field: 'Ticker', width:60, filterable: false },
                    { field: 'Cpn', width:80, filterable: false }
      ],
        group: [],
        sort: [],
        skip: 0,
        take: PAGE_SIZE,
      volume: VOLUME_INITIAL,
      frequency: FREQUENCY_INITIAL,
      selectedButton: 2,
      liveUpdating: false,
      lastSelectedIndex: 0
    }
  },
  mounted(){
    this.onDataReset(this.volume);
    this.getData();
  },
  computed: {
      isGrouped(){
          return this.group ? !!this.group.length : false;
      }
  },
  methods: {
      onExcelExport() {
           saveExcel({
                data: this.processedData.data,
                fileName: "myFile",
                columns: this.columns
            });
      },
      onDataReset (volume = 10) {
          clearInterval(this.interval);

          const financialData = new FinancialData();
          this.dataItems = financialData.generateData(volume);
      },
      onStartLiveUpdate(interval) {
              clearInterval(this.interval);
  
              this.interval = setInterval(
                  () => this.dataItems = updateRandomPrices(this.dataItems),
                  interval
              );
          },
      onStartLiveUpdateAll (interval) {
              clearInterval(this.interval);
  
              this.interval = setInterval(
                  () =>  this.dataItems =  updateAllPrices(this.dataItems),
                  interval
              );
          },
      onStopLiveUpdate() {
          clearInterval(this.interval);
      },
    debouncedDataReset (){
       debounce((currentVolume) => this.onDataReset(currentVolume), DEBOUNCE_TIME);
    },
    onDataStateChange(event) {
        this.group = event.data.group;
        this.sort =  event.data.sort;
        this.skip = event.data.skip;
        this.take =  event.data.take;
        this.getData();
    },
    getData(){
          this.processedData = process(this.dataItems, {
            group: this.group,
            sort: this.sort,
            skip: this.skip,
            take: this.take
        });
    },
    onGroupedChange() {
            if (this.group && this.group.length > 0) {
               this.group = [];
            } else {
                this.group = [{
                        dir: 'desc',
                        field: 'Category'
                    }, {
                        dir: 'desc',
                        field: 'Type'
                    }, {
                        dir: 'desc',
                        field: 'Contract'
                    }];
            }
              this.getData();
        },
     onVolumeChange (event) {
            // because our slider...
            const currentVolume = Math.floor(event.value / this.volumeStep) * this.volumeStep;
            this.volume = currentVolume;
            this.debouncedDataReset(); //currentVolume
        },
      onFrequencyChange(event){
            // because our slider...
            this.frequency = Math.floor(event.value / FREQUENCY_STEP) * FREQUENCY_STEP;
            this.debouncedDataReset(); //this.volume
        },
        onSelectClick(event) {
            const currentButton = Number(event.currentTarget.name);
            this.selectedButton = currentButton;

            switch (currentButton) {
                case 0:
                    this.onStartLiveUpdate(this.frequency);
                    this.liveUpdating = true;
                    break;
                case 1:
                    this.onStartLiveUpdateAll(this.frequency);
                     this.liveUpdating = true;
                    break;
                case 2:
                    this.onStopLiveUpdate();
                    this.liveUpdating = false;
                    break;
                default:
            }
        },
        onHeaderSelectionChange (event) {
            const checked = event.target.checked;

            this.dataItems.forEach(item => item.selected = checked);

           // setForceUpdate(prevForceState => !prevForceState);
        },
        onSelectionChange(event) {
            event.dataItem.selected = !event.dataItem.selected;

           // setForceUpdate(prevForceState => !prevForceState);
        },
        onRowClick(event) {
            let last = this.lastSelectedIndex;
            const data = this.dataItems;
            const current = data.findIndex(dataItem => dataItem === event.dataItem);

            if (!event.event.shiftKey) {
                 this.lastSelectedIndex = last = current;
            }

            if (!event.event.ctrlKey) {
                data.forEach(item => item.selected = false);
            }
            const select = !event.dataItem.selected;
            for (let i = Math.min(last, current); i <= Math.max(last, current); i++) {
                if( data[i]){
                    data[i].selected = select;
                }
            }

         //   setForceUpdate(prevForceState => !prevForceState);
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
