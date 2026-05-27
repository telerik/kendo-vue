<template>
  <div>
    <span
      :class="[
        dataItem.is_online
          ? 'k-badge k-badge-solid k-badge-success k-badge-md k-badge-rounded k-badge-inline'
          : 'k-badge k-badge-solid k-badge-error k-badge-md k-badge-rounded k-badge-inline',
      ]"
    >
      {{ dataItem.is_online ? 'Online' : 'Offline' }}
    </span>
  </div>
</template>

<script setup>
defineProps({
    dataItem: Object,
});
</script>
