<template>
   <div class="example-wrapper">
            <div>
                <div>T-shirt sizes:</div>
                <multiselect :style="{ width: '230px' }"
                    :data-items="sizes"
                    :value="value"
                    @change="onChange"
                    :tags="tags"
                >
                </multiselect>
            </div>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import countries from './countries';

export default {
    components: {
        'multiselect': MultiSelect
    },
    data () {
        return {
            sizes: [ "X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large" ],
            value: []
        };
    },
    computed: {
        selected () {
            return this.value.length;
        },
        tags () {
            return this.selected > 0 ?
            [ { text: `${this.selected} items selected`, data: [ ...this.value ] } ] : [];
        }
    },
    methods: {
        onChange (event)  {
            this.value = [...event.target.value];
        }
    }
};

</script>
