<template>
   <div class="example-wrapper">
            <div>
                <multiselect
                    :style="{ width: '400px'}"
                    :data-items="countries"
                    :item-render="itemRender"
                >
                    <template v-slot:myTemplate="{props}">
                        <custom
                            :style="props.style"
                            :class="props.itemClass"
                            :data-item="props.dataItem"
                            :index="props.index" @click="(ev) => props.onClick(ev)" />
                    </template>
                </multiselect>
            </div>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import countries from './countries';
import ItemRender from './ItemRender.vue';

export default {
    components: {
        'multiselect': MultiSelect,
        'custom': ItemRender
    },
    data () {
        return {
            countries: countries.slice(),
            itemRender: 'myTemplate'
        };
    }
};

</script>
