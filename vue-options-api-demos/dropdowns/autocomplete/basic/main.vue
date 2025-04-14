<template>
  <div class="example-wrapper">
            <p>Type the name of a European country:</p>
            <autocomplete :style="{ width: '230px' }" :data-items="countries" :placeholder="'e.g. Denmark'" ></autocomplete>
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
            countries: countries
        }
    }
};

</script>
