<template>
  <div>
    <img
      :alt="`${dataItem.Ticker} icon`"
      :src="`./${dataItem.Ticker}.png`"
    /><span
      :style="{
        color: '#4B5FFA',
        marginLeft: '5px',
        fontWeight: 'bold',
      }"
      >{{ dataItem[field] }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    dataItem: Object,
    field: String,
  },
};
</script>
