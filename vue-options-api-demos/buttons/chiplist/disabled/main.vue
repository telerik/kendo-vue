<template>
    <chiplist
         :rounded="'full'"
       :default-data-items="fruitsData"
        :disabled="true"
        :chip="chip">
         <template v-slot:myTemplate="{props}">
            <custom
            :data-item="props.dataItem"
            :value="props.value"
            :text="props.text"/>
        </template>
    </chiplist>
</template>
<script>
import { ChipList } from '@progress/kendo-vue-buttons';
import CustomChip from './CustomChip.vue';

const fruitsData = [
    {
        text: 'Berry',
        value: 'berry',
        disabled: true
    },
    {
        text: 'Apple',
        value: 'apple',
        disabled: true
    },
    {
        text: 'Strawberry',
        value: 'strawberry',
        disabled: true
    },
    {
        text: 'Banana',
        value: 'banana',
        disabled: true
    },
    {
        text: 'Kiwi',
        value: 'kiwi',
        disabled: true
    }
];

export default {
    components: {
        'chiplist': ChipList,
        'custom': CustomChip
    },
    data () {
        return {
            fruitsData: fruitsData,
            chip: 'myTemplate'
        };
    },

}
</script>
