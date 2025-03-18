<template>
  <span
    :class="[
      dataItem.is_online === true
        ? ' k-badge k-badge-solid k-badge-success k-badge-md k-badge-rounded k-badge-inline'
        : ' k-badge k-badge-solid k-badge-error k-badge-md k-badge-rounded k-badge-inline',
    ]"
    >{{ dataItem.is_online === true ? "Online" : "Offline" }}</span
  >
</template>

<script>
export default {
  props: {
    dataItem: Object,
  },
};
</script>
