<template>
   <div>
         <p>Type the name of a European country:</p>
         <combobox
          :style="{ width: '230px' }"
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
        </combobox>
    </div>
</template>
<script>
import countries from './countries';
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import ItemRender from './ItemRender.vue';

export default {
    components: {
        'combobox': ComboBox,
        'custom': ItemRender
    },
    data: function () {
        return {
            itemRender: 'myTemplate',
            countries: countries
        };
    }
};

</script>
