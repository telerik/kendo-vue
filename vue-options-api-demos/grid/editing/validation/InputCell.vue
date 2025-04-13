<template>
<td v-if="!dataItem.inEdit">{{ dataItem[field]}}</td>
    <td v-else>
    <k-input        
          ref="nameInput"
          :value="dataItem[field]"
          @input="onInput"
          @change="change"
          :valid="validLength"
      ></k-input>
  
      <Popup
          :anchor="'nameInput'"
          :show="!validLength"
          :popup-class="'popup-content'"
      >
          <span class="errorMessage">          
              Should be more than 3 symbols.  
          </span>  
      </Popup>
</td>
</template>
<script>
import { Input } from '@progress/kendo-vue-inputs';
import { Popup } from '@progress/kendo-vue-popup';

export default {
    components: {
      'k-input': Input,
      'Popup': Popup
    },
    props: {
        field: String,
        dataItem: Object,
        validLength: Boolean
    },
    methods: {
        onInput: function(e){
          this.dataItem[this.field] = e.value;
        },
        change: function(e) {
            this.dataItem[this.field] = e.value;
            this.$emit('change', e);
        }
    }
}
</script>