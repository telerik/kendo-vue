<template>
  <td>
    <span :style="getStyle"> {{ changeFieldValue }}</span>
  </td>
</template>
<script>
export default {
  props: {
    dataItem: Object,
  },
  computed: {
    getStyle() {
      return this.changeFieldValue < 0 ? { color: 'red' } : { color: 'blue' };
    },
    changeFieldValue() {
      return (this.$props.dataItem.close - this.$props.dataItem.open).toFixed(
        2
      );
    },
  },
};
</script>
