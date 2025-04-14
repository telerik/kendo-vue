<template>
  <div>
    <splitbutton :item-render="itemRender" :items="items" :text="'Save'">
      <template v-slot:itemRender="{ props }">
        <span class="k-link k-menu-link">
          <em>{{ `action #${props.itemIndex}: ${props.item.text}` }}</em>
        </span>
      </template>
    </splitbutton>
  </div>
</template>

<script>
import { SplitButton } from "@progress/kendo-vue-buttons";

export default {
  components: {
    splitbutton: SplitButton,
  },
  data: function () {
    return {
      items: [
        {
          text: "Save as",
        },
        {
          text: "Upload to drive",
        },
      ],
      itemRender: "itemRender",
    };
  },
};
</script>
