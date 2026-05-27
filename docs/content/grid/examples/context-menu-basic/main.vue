<template>
  <div>
    <Grid
      :data-items="employees"
      :auto-process-data="true"
      :data-item-key="'id'"
      :context-menu="true"
      :sortable="true"
      :selectable="{ enabled: true }"
      :style="{ height: '500px' }"
      :columns="columns"
    >
    </Grid>
  </div>
</template>

<script setup>
import { Grid } from '@progress/kendo-vue-grid';

const employees = [
  { id: 1, full_name: 'Sig Jeannel', job_title: 'Human Resources Assistant III', country: 'US', is_online: true, rating: 3, target: 100, budget: 47601, phone: '(936) 9429601', address: '138 Buhler Avenue' },
  { id: 2, full_name: 'Shelden Greyes', job_title: 'Operator', country: 'UK', is_online: true, rating: 5, target: 40, budget: 12253, phone: '(343) 6656271', address: '2 Waxwing Point' },
  { id: 3, full_name: 'Megen Cody', job_title: 'Operator', country: 'FR', is_online: true, rating: 1, target: 66, budget: 96183, phone: '(178) 2336256', address: '4082 Stephen Court' },
  { id: 4, full_name: 'Myrilla Henly', job_title: 'Environmental Specialist', country: 'BR', is_online: false, rating: 4, target: 60, budget: 52067, phone: '(764) 3aborni', address: '18 Tomscot Way' },
  { id: 5, full_name: 'Lorrin Loseke', job_title: 'Desktop Support Technician', country: 'US', is_online: false, rating: 2, target: 77, budget: 28615, phone: '(673) 8469629', address: '956 Johnson Trail' },
  { id: 6, full_name: 'Ari Gorler', job_title: 'Nurse Practitioner', country: 'DE', is_online: true, rating: 4, target: 85, budget: 54253, phone: '(889) 1174411', address: '5 Meadow Vale Drive' },
  { id: 7, full_name: 'Esdras Tuminelli', job_title: 'Geologist I', country: 'FR', is_online: false, rating: 3, target: 91, budget: 34910, phone: '(332) 7994686', address: '84 Kingsford Lane' },
  { id: 8, full_name: 'Vin Mayhow', job_title: 'Automation Specialist I', country: 'US', is_online: true, rating: 5, target: 29, budget: 77208, phone: '(991) 5738423', address: '76 Golf Course Terrace' },
];

const columns = [
  { columnType: 'checkbox', width: '50px' },
  { title: 'Employee', children: [
    { field: 'full_name', title: 'Contact Name', width: '250px' },
    { field: 'job_title', title: 'Job Title', width: '220px' },
    { field: 'country', title: 'Country', width: '100px' },
  ]},
  { title: 'Performance', children: [
    { field: 'rating', title: 'Rating', width: '230px' },
    { field: 'target', title: 'Engagement', width: '250px' },
    { field: 'budget', title: 'Budget', width: '230px' },
  ]},
  { title: 'Contacts', children: [
    { field: 'phone', title: 'Phone', width: '230px' },
    { field: 'address', title: 'Address', width: '230px' },
  ]},
];
</script>
