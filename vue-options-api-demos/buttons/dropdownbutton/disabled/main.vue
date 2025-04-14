<template>
  <div>
    <DropDownButton :items="items" :text="'Enabled Button'" /> &nbsp;
    <DropDownButton :disabled="true" :items="items" :text="'Disabled Button'" />
  </div>
</template>

<script>
import { DropDownButton } from "@progress/kendo-vue-buttons";

export default {
  components: {
    DropDownButton,
  },
  data: function () {
    return {
      items: ["Item1", "Item2", "Item3"],
    };
  },
};
</script>

