<template>
    <chiplist
         :rounded="'full'"
        :default-data-items="fruits"
        :selection="'multiple'">
    </chiplist>
</template>
<script>
import { ChipList } from '@progress/kendo-vue-buttons';

const fruits = [
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
        'chiplist': ChipList
    },
    data () {
        return {
            fruits: fruits,
        };
    }
}
</script>
