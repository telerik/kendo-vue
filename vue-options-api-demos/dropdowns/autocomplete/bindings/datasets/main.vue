<template>
  <div class="example-wrapper">
            <p>Type the name of a European country:</p>
            <autocomplete :style="{ width: '230px' }" 
                :data-items="countries" 
                :value="value"
                :text-field="'text'"
                @change="onChange"></autocomplete>
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
            countries: [
                { text: "Albania", id: "Alb" },
                { text: "Andorra", id: "And" },
                { text: "Armenia", id: "Arm" },
                { text: "Austria", id: "Aus" },
                { text: "Azerbaijan", id: "Aze" }
            ],
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
