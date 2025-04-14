<template>
    <div>
        <h4>Choose from the summer months</h4>
        <chiplist
            :rounded="'full'"
            :default-data-items="monthsData"
            :selection="'multiple'"
            :chip="chip"
            @datachange="handleMonthChange">
            <template v-slot:myTemplate="{props}">
                <custom
                :data-item="props.dataItem"
                :value="props.value"
                :text="props.text"/>
            </template>
        </chiplist>
    </div>
</template>
<script>
import { ChipList } from '@progress/kendo-vue-buttons';
import CustomChip from './CustomChip.vue';

const monthsData = [
    {
        text: 'December',
        value: '1'
    },
    {
        text: 'January',
        value: '2'
    },
    {
        text: 'February',
        value: '3'
    },
    {
        text: 'June',
        value: '4'
    },
    {
        text: 'July',
        value: '5'
    },
    {
        text: 'August',
        value: '6'
    }
];

export default {
    components: {
        'chiplist': ChipList,
        'custom': CustomChip
    },
    data () {
        return {
            monthsData: monthsData,
            chip: 'myTemplate'
        };
    },
      methods: {
        handleMonthChange (event) {
            this.monthsData = event.value;
        }
    }
}
</script>
