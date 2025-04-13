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
                ></multiselect>
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
            value: [
                { text: 'Football', id: 2 },
                { text: 'Tennis', id: 3 }
            ]
        };
    },
    methods: {
        onChange (event)  {
            this.value = [...event.target.value];
        }
    }
};

</script>
