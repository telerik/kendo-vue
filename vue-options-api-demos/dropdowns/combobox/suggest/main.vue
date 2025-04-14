<template>
 <div class="example-wrapper">
        <div class="col-xs-12 col-sm-6 example-col">
            <p>ComboBox in Uncontrolled Mode</p>
             <combobox
          :style="{ width: '230px' }"
                :data-items="countries"
                :suggest="true"
                :placeholder="'e.g. Austria'"
            ></combobox>
        </div>
        <div class="col-xs-12 col-sm-6 example-col">
            <p>ComboBox in Controlled Mode</p>
             <combobox
          :style="{ width: '230px' }"
                :data-items="countries"
                :suggest="suggest"
                :placeholder="'e.g. Austria'"
                :value="value"
                @change="handleChange"
            ></combobox>
        </div>
    </div>
</template>
<script>
import countries from './countries';
import { ComboBox } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        'combobox': ComboBox
    },
    data: function(){
        return {
            countries: countries,
            value: '', 
            suggest: ''
        }
    },
    methods:{
        handleChange (event) {
            this.value = event.target.value;
            this.suggest = event.suggestion ? event.suggestion.value : '';
        }
    }
};

</script>
