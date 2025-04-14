<template>
  <div>
    <p>Type the name of a European country:</p>
    <autocomplete :style="{ width: '230px' }"
      :data-items="countries"
      :item-render="itemRender"
    >
      <template v-slot:myTemplate="{ props }">
        <custom
          :style="props.style"
          :class="props.itemClass"
          :data-item="props.dataItem"
          :focused="props.focused"
          :index="props.index"
          @click="ev => props.onClick(ev)"
        />
      </template>
    </autocomplete>
  </div>
</template>
<script>
import countries from "./countries";
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
import ItemRender from "./ItemRender.vue";

export default {
  components: {
    autocomplete: AutoComplete,
    custom: ItemRender
  },
  data: function() {
    return {
      itemRender: "myTemplate",
      countries: countries
    };
  }
};
</script>
