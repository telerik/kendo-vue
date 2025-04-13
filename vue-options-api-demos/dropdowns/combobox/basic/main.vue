<template>
 <div class="example-wrapper">
        <div class="example-config">
            <input id="ac" type="checkbox" class="k-checkbox k-checkbox-md k-rounded-md"
            v-model="allowCustom" />
            <label class="k-checkbox-label" for="ac">Allow custom values</label>
        </div>
        <div>
            <div>Favorite sport:</div>
             <combobox
          :style="{ width: '230px' }" :data-items="sports" :allow-custom="allowCustom" />
        </div>
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
            sports: ["Baseball", "Basketball", "Cricket", 
            "Field Hockey", "Football", "Table Tennis", "Tennis", 
            "Volleyball" ],
            allowCustom: true
        }
    }
};

</script>
