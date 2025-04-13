<template>
  <div class="example-wrapper">
        <p>Favorite sport:</p>
         <combobox
          :style="{ width: '230px' }"
            :data-items="sports"
            :allow-custom="true"
        ></combobox>
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
            "Volleyball" ]
        }
    }
};

</script>
