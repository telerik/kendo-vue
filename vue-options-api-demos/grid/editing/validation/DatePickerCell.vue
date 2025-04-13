<template>
<td v-if="!dataItem.inEdit">{{ formattedCurrentValue}}</td>
    <td v-else>
      <datepicker :style="{ width: '100%' }"
          ref="dateInput"
          :value="dataItem[field]"
          :valid="dateInRange"
          @change="change"
      ></datepicker>

      <Popup
          :anchor="'dateInput'"
          :show="!dateInRange"
          :popup-class="'popup-content'"
      >
          <span class="errorMessage">          
              Should be between 1.1.1995 and 31.12.2022    
          </span>  
      </Popup>
</td>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { Popup } from '@progress/kendo-vue-popup';

export default {
    components: {
        'datepicker': DatePicker,
        'Popup': Popup
    },
    props: {
        field: String,
        dataItem: Object,
        dateInRange: Boolean
    },
    computed: {
        formattedCurrentValue: function(){
          return new Intl.DateTimeFormat('en-US').format(this.dataItem[this.field]);  
        }
    },
    methods: {
        change: function(e) {
            this.dataItem[this.field] = e.value;
            this.$emit('change', e);
        }
    }
}
</script>

