<template>
  <td v-if="!dataItem.inEdit">{{ currentValue }}</td>
      <td v-else>
      <numerictextbox 
            ref="numericInput"
            :value="currentValue"
            :valid="valid"
            @change="change"
        ></numerictextbox>
          <Popup
              :anchor="'numericInput'"
              :show="!valueNotEmpty || !validRange"
              :popup-class="'popup-content'"
          >
            <span v-if="!valueNotEmpty" class="errorMessage">The field is Required</span>
            <span v-if="!validRange" class="errorMessage">Should be between 0 and 500</span>
            </Popup>
  </td>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { Popup } from '@progress/kendo-vue-popup';

export default {
    components: {
      'numerictextbox': NumericTextBox,
      'Popup': Popup
    },
    props: {
        field: String,
        dataItem: Object,
        valueNotEmpty: Boolean,
        validRange: Boolean
    },
    computed: {    
        valid: function() {
          return this.valueNotEmpty && this.validRange;
        },
        currentValue: function(){
          return this.dataItem[this.field];
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