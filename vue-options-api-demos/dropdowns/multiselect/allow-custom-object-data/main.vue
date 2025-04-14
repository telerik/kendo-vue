<template>
   <div class="example-wrapper">
            <div>
                <div class="example-config">
                    Selected Values: {{value}}
                </div>
                <multiselect :style="{ width: '230px' }"
                    :data-items="sports"
                    :value="value"
                    @change="onChange"
                    :text-field="'text'"
                    :data-item-key="'id'"
                    :allow-custom="true"
                >
                </multiselect>
            </div>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        'multiselect': MultiSelect
    },
    data () {
        return {
            sports: [  
                { text: 'Basketball', id: 1 },
                { text: 'Football', id: 2 },
                { text: 'Tennis', id: 3 },
                { text: 'Volleyball', id: 4 }
            ],
            value: []
        };
    },
    methods: {
        isCustom(item) { return item.id === undefined; },
        addKey(item) { item.id = new Date().getTime(); },
        onChange (event)  {
            const values = event.target.value;
            const lastItem = values[values.length - 1];

            if (lastItem && this.isCustom(lastItem)) {
                values.pop();
                const sameItem = values.find(v => v.text === lastItem.text);
                if (sameItem === undefined) {
                    this.addKey(lastItem);
                    values.push(lastItem);
                }
            }

            this.value = values;
        }
    }
};

</script>
