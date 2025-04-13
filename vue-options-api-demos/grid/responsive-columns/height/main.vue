<template>
  <Grid style="height: 440px;"
            :data-items="items"
            :columns="columns"
            :total="numberOfItems"
            :row-height="40"
            :skip="skip"
            :page-size="20"
            :scrollable="'virtual'"
            @pagechange="pageChange">
    </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
    components: {
        'Grid': Grid
    },
     data: function () {
        return {
            dataItems: [],
            items: [],
            numberOfItems: 50000,
            columns: [
                { field: 'id', title: 'ID', width: '70px'},
                { field: 'firstName', title: 'First Name'},
                { field: 'lastName', title: 'Last Name'},
                { field: 'city', title: 'City', width: '120px'},
                { field: 'title', title: 'Title', width: '200px'}
            ],
            skip: 0
        };
    },
    created: function() {
      this.dataItems = this.createRandomData(this.numberOfItems);
      this.items = this.dataItems.slice(this.skip, this.skip + 20);
    },
    methods: {
        pageChange(event) {
            this.skip = event.page.skip;
            this.items = this.dataItems.slice(this.skip, this.skip + 20);
        },

        /* Generating example data */
        createRandomData(count) {
            const firstNames = [ 'Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
             'Michael', 'Robert', 'Laura', 'Anne', 'Nige' ],
            lastNames = [ 'Davolio', 'Fuller', 'Leverling', 'Peacock',
                'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth', 'White' ],
            cities = [ 'Seattle', 'Tacoma', 'Kirkland', 'Redmond',
                'London', 'Philadelphia', 'New York', 'Seattle', 'London', 'Boston' ],
            titles = [ 'Accountant', 'Vice President, Sales', 'Sales Representative',
            'Technical Support', 'Sales Manager', 'Web Designer',
                'Software Developer' ];

            return Array(count).fill({}).map((_, idx) => ({
                id: idx + 1,
                firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
                lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
                city: cities[Math.floor(Math.random() * cities.length)],
                title: titles[Math.floor(Math.random() * titles.length)]
            }));
        }
    }
};

</script>
