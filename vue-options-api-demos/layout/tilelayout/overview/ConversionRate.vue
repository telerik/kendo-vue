<template>
    <div>
      <h3>{{ visitorToCustomer }}%</h3>
      <p>Visitor to customer</p>
    </div>
  </template>
  <script>
  export default {
    props: {
      dataItems: Array,
    },
    computed: {
      visitorToCustomer() {
        return Math.round(this.users() / this.conversions());
      },
    },
    methods: {
      conversions() {
        let conversionsNumber = 0;
        this.dataItems.map(
          (item, i) => (conversionsNumber = conversionsNumber + item.conversion)
        );
        return conversionsNumber;
      },
      users() {
        let usersNumber = 0;
        this.dataItems.map((item, i) => (usersNumber = usersNumber + item.users));
        return usersNumber;
      },
    },
  };
  </script>
  