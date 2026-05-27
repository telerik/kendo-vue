<template>
  <chip
    :data-item="dataItem"
    :text="text"
    :value="value"
    :removable="true"
    :avatar="'avatar'"
  >
    <template #avatar>
      <Avatar :type="'image'" :rounded="'full'" :size="'small'">
        <img :src="dataItem.imageURL" alt="image" />
      </Avatar>
    </template>
  </chip>
</template>

<script setup>
import { Chip as chip } from '@progress/kendo-vue-buttons';
import { Avatar } from '@progress/kendo-vue-layout';

defineProps({
    dataItem: Object,
    value: String,
    text: String,
});
</script>
