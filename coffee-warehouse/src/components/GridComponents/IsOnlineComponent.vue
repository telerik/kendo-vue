<template>
  <span
    v-if="dataItem.is_online === true"
    class="
      k-badge
      k-badge-solid
      k-badge-success
      k-badge-md
      k-badge-rounded
      k-badge-inline
    "
    >Online</span
  >
  <span
    v-if="dataItem.is_online === false"
    class="
      k-badge
      k-badge-solid
      k-badge-error
      k-badge-md
      k-badge-rounded
      k-badge-inline
    "
    >Offline</span
  >
</template>

<script>
export default {
  props: {
    dataItem: Object,
  },
};
</script>
