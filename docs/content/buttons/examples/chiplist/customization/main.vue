<template>
    <div>
      <h4>Choose from the summer months</h4>
      <ChipList
        :rounded="'full'"
        :default-data-items="monthsData"
        :selection="'multiple'"
        :chip="chip"
        @datachange="handleMonthChange">
        <template #myTemplate="{ props }">
          <CustomChip
            :data-item="props.dataItem"
            :value="props.value"
            :text="props.text"/>
        </template>
      </ChipList>
    </div>
</template>

<script setup>
import { ChipList } from '@progress/kendo-vue-buttons';
import CustomChip from './CustomChip.vue';
import { ref } from 'vue';

const monthsData = ref([
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
]);

const chip = 'myTemplate';

function handleMonthChange(event) {
    monthsData.value = event.value;
}
</script>
