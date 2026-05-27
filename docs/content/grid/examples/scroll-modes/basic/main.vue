<template>
  <Grid
    style="height: 440px;"
    :data-items="items"
    :columns="columns"
    :total="numberOfItems"
    :row-height="40"
    :skip="skip"
    :page-size="20"
    :scrollable="'virtual'"
    @pagechange="pageChange"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

const dataItems = ref([]);
const items = ref([]);
const numberOfItems = 50000;
const columns = [
    { field: 'id', title: 'ID', width: '70px' },
    { field: 'firstName', title: 'First Name' },
    { field: 'lastName', title: 'Last Name' },
    { field: 'city', title: 'City', width: '120px' },
    { field: 'title', title: 'Title', width: '200px' },
];
const skip = ref(0);

function pageChange(event) {
    skip.value = event.page.skip;
    items.value = dataItems.value.slice(skip.value, skip.value + 20);
}

function createRandomData(count) {
    const firstNames = [
        'Nancy',
        'Andrew',
        'Janet',
        'Margaret',
        'Steven',
        'Michael',
        'Robert',
        'Laura',
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
    const cities = [
        'Seattle',
        'Tacoma',
        'Kirkland',
        'Redmond',
        'London',
        'Philadelphia',
        'New York',
        'Seattle',
        'London',
        'Boston',
    ];
    const titles = [
        'Accountant',
        'Vice President, Sales',
        'Sales Representative',
        'Technical Support',
        'Sales Manager',
        'Web Designer',
        'Software Developer',
    ];

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            id: idx + 1,
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            city: cities[Math.floor(Math.random() * cities.length)],
            title: titles[Math.floor(Math.random() * titles.length)],
        }));
}

dataItems.value = createRandomData(numberOfItems);
items.value = dataItems.value.slice(skip.value, skip.value + 20);
</script>
