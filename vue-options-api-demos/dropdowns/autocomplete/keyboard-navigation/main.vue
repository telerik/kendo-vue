<template>
 <div class="example-wrapper">
            <p>Type the name of a European country:</p>
            <autocomplete :style="{ width: '230px' }" 
                :data-items="countries" 
                :value="value"
                @change="onChange"
                :placeholder="'e.g. Andorra'" ></autocomplete>
    </div>
</template>
<script>
import { AutoComplete } from '@progress/kendo-vue-dropdowns';


export default {
    components: {
        'autocomplete': AutoComplete
    },
    data: function(){
        return {
            countries: [ "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"] ,
            value: ''
        }
    },
    methods: {
        onChange (event) {
            this.value = event.target.value;
        }
    }
};

</script>
