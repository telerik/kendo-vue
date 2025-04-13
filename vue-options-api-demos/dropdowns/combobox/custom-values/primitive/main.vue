<template>
  <div>
        <p>Custom values are <strong>enabled</strong>. Type a custom value.</p>
        <p>primitive data</p>
        <div class="example-wrapper">
             <combobox
          :style="{ width: '230px' }"
                :data-items="sizes"
                v-model="value"
                :allow-custom="true"
            />
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
            sizes: [ "Small", "Medium", "Large" ],
            value: 'Medium'
        }
    }
};

</script>
