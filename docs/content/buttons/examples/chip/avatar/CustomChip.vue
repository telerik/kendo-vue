<template>
  <Chip
    :data-item="dataItem"
    :text="text"
    :value="value"
    :removable="true"
    :avatar="'avatar'">
    <template #avatar>
      <Avatar :type="'image'" :rounded="'full'" :size="'small'">
        <img :src="imageUrl" alt="image" />
      </Avatar>
    </template>
  </Chip>
</template>

<script setup>
import { Chip } from '@progress/kendo-vue-buttons';
import { Avatar } from '@progress/kendo-vue-layout';

defineProps({
    dataItem: Object,
    value: String,
    text: String,
    imageUrl: String
});
</script>
