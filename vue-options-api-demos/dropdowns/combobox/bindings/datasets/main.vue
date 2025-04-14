<template>
   <div class="example-wrapper">
            <p>Type the name of a European country:</p>
             <combobox
          :style="{ width: '230px' }" 
                :data-items="countries" 
                :value="value"
                :text-field="'text'"
                @change="onChange"></combobox>
    </div>
</template>
<script>
import { ComboBox } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        'combobox': ComboBox
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
