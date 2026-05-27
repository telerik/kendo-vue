<template>
  <div>
    <MultiSelect
      :style="{ width: '230px' }"
      :data-items="subsetData"
      :data-item-key="'id'"
      :text-field="'name'"
      :group-field="'title'"
      :virtual="virtual"
      @pagechange="pageChange"
      :popup-settings="popupSettings"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import { groupBy } from '@progress/kendo-data-query';

const total = 500;
const pageSize = 30;

function createRandomData(count) {
    const firstNames = [
        'Nancy',
        'Andrew',
        'Janet',
        'Margaret',
        'Steven',
        'Michael',
        'Robert',
        'Anne',
        'Nige',
    ];
    const lastNames = [
        'Davolio',
        'Fuller',
        'Leverling',
        'Peacock',
        'Buchanan',
        'Suyama',
        'King',
        'Callahan',
        'Dodsworth',
        'White',
    ];
    const titles = [
        'Accountant',
        'Vice President, Sales',
        'Sales Representative',
        'Technical Support',
        'Sales Manager',
        'Web Designer',
        'Software Developer',
        'QA',
        'Project Manager',
    ];

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            id: idx,
            name:
        firstNames[Math.floor(Math.random() * firstNames.length)] +
        ' ' +
        lastNames[Math.floor(Math.random() * lastNames.length)],
            title: titles[Math.floor(Math.random() * titles.length)],
        }));
}

const employees = groupBy(createRandomData(total), [{ field: 'title' }]).reduce(
    (res, group) => [...res, ...group.items],
    []
);

const skip = ref(0);
const popupSettings = ref({ height: '250px' });

const virtual = computed(() => ({
    total: total,
    pageSize: pageSize,
    skip: skip.value,
}));

const subsetData = computed(() =>
    employees.slice(skip.value, skip.value + pageSize)
);

function pageChange(event) {
    skip.value = event.page.skip;
}
</script>
