<template>
  <chip
    :data-item="dataItem"
    :text="text"
    :value="value"
    :removable="true"
    :avatar="'avatar'"
  >
    <template v-slot:avatar>
      <Avatar :type="'image'" :rounded="'full'" :size="'small'">
        <img :src="dataItem.avatar.imageUrl" alt="image" />
      </Avatar>
    </template>
  </chip>
</template>
  <script>
import { Chip } from "@progress/kendo-vue-buttons";
import { Avatar } from "@progress/kendo-vue-layout";

export default {
  name: "CustomChip",
  components: {
    chip: Chip,
    Avatar,
  },
  props: {
    dataItem: Object,
    value: String,
    text: String,
  },
};
</script>
  