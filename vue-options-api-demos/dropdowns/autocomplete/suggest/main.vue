<template>
    <div class="example-wrapper">
        <div class="col-xs-12 col-sm-6 example-col">
            <p>AutoComplete in Uncontrolled Mode</p>
            <autocomplete :style="{ width: '230px' }"
                :data-items="countries"
                :suggest="true"
                :placeholder="'e.g. Austria'"
            ></autocomplete>
        </div>
        <div class="col-xs-12 col-sm-6 example-col">
            <p>AutoComplete in Controlled Mode</p>
            <autocomplete :style="{ width: '230px' }"
                :data-items="countries"
                :suggest="suggest"
                :placeholder="'e.g. Austria'"
                :value="value"
                @change="handleChange"
            ></autocomplete>
        </div>
    </div>
</template>
<script>
import countries from './countries';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        'autocomplete': AutoComplete
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
