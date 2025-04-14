<template>
    <chiplist
        :selection="'multiple'"
        :data-items="months"
        :text-field="'month'"
        :value-field="'id'">
    </chiplist>
</template>
<script>
import { ChipList } from '@progress/kendo-vue-buttons';

const monthsData = [
    {
        month: 'December',
        id: '1'
    },
    {
        month: 'January',
        id: '2'
    },
    {
        month: 'February',
        id: '3'
    },
    {
        month: 'June',
        id: '4'
    },
    {
        month: 'July',
        id: '5'
    },
    {
        month: 'August',
        id: '6'
    }
];

export default {
    components: {
        'chiplist': ChipList
    },
    data () {
        return {
            months: monthsData,
        };
    }
}
</script>
