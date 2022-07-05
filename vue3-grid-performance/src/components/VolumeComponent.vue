<template>
  <span> {{ formattedNumber }} </span>
</template>

<script>

export default {
  inject: {
    kendoIntlService: { default: null },
  },
  props: {
    dataItem: Object,
    field: String,
  },
  computed: {
    formattedNumber: function () {
      return this.dataItem[this.field];
    },
  },
};
</script>
