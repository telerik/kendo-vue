<template>
    <chiplist
        :rounded="'full'"
        :data-items="fruits"
        :selection="'multiple'"
        @datachange="handleDataChange"
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

const fruits = [
    {
        text: 'Berry',
        value: 'berry'
    },
    {
        text: 'Apple',
        value: 'apple'
    },
    {
        text: 'Strawberry',
        value: 'strawberry'
    },
    {
        text: 'Banana',
        value: 'banana'
    },
    {
        text: 'Kiwi',
        value: 'kiwi'
    }
];

export default {
    components: {
        'chiplist': ChipList,
        'custom': CustomChip
    },
    data () {
        return {
            fruits: fruits,
            chip: 'myTemplate'
        };
    },
    methods: {
        handleDataChange (event) {
            this.fruits = event.value
        }
    }
}
</script>
