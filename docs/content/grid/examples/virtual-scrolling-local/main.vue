<template>
  <Grid
    :style="{ height: '440px' }"
    :row-height="50"
    :data-items="data"
    :page-size="pageSize"
    :total="data.length"
    :skip="skip"
    scrollable="virtual"
    @pagechange="pageChange"
    :columns="columns"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

/* Generating example data */
const createRandomData = (count) => {
  const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Nige'];
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
    'White'
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
    'Boston'
  ];
  const titles = [
    'Accountant',
    'Vice President, Sales',
    'Sales Representative',
    'Technical Support',
    'Sales Manager',
    'Web Designer',
    'Software Developer'
  ];

  return Array(count)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      title: titles[Math.floor(Math.random() * titles.length)]
    }));
};

const data = ref(createRandomData(50000));
const skip = ref(0);
const pageSize = 25;

const pageChange = (event) => {
  skip.value = event.page.skip;
};

const columns = [
  { field: 'id', title: 'ID', width: '150px' },
  { field: 'firstName', title: 'First Name' },
  { field: 'lastName', title: 'Last Name' },
  { field: 'city', title: 'City', width: '120px' },
  { field: 'title', title: 'Title', width: '200px' }
];
</script>
