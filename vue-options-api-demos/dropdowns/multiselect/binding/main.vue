<template>
   <div class="example-wrapper">
            <div>
                <div>T-shirt sizes:</div>
                <multiselect :style="{ width: '230px' }"
                    :data-items="sizes"
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
    data: function () {
         return {
            sizes: [ "X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large" ]
        };
    }
};

</script>
