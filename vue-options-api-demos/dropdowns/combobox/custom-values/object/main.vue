<template>
  <div>
        <p>Custom values are <strong>enabled</strong>. Type a custom value.</p>
        <p>ComboBox value: {{JSON.stringify(value)}}</p>
        <div className="example-wrapper">
             <combobox
          :style="{ width: '230px' }"
                :data-items="sizes"
                :text-field="'text'"
                :data-item-key="'id'"
                :value="value"
                @change="onChange"
                :allow-custom="true"
            ></combobox>
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
            sizes: [
                { id: 1, text: 'Small' },
                { id: 2, text: 'Medium' },
                { id: 3, text: 'Large' }
            ],
            value: { id: 2, text: 'Medium' }
        }
    },
    methods: {
        onChange (event) {
            let value = event.target.value;
    
            if (value && value.id === undefined) {
                value = {
                    ...value,
                    id: new Date().getTime()
                };
            }
    
            this.value = value;
        }
    }
};

</script>
