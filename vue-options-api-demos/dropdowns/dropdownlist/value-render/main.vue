<template>
  <div>
    <p>Type the name of a European country: </p>
     <dropdownlist
          :style="{ width: '230px' }"
      :data-items="countries"
      :default-value="countries[0]"
      :value-render="valueRender"
    >
      <template v-slot:myTemplate="{ props }">
        <custom :value="props.value" />
      </template>
    </dropdownlist>
  </div>
</template>
<script>
import countries from "./countries";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import ValueRender from "./ValueRender.vue";

export default {
  components: {
    dropdownlist: DropDownList,
    custom: ValueRender
  },
  data: function() {
    return {
      valueRender: "myTemplate",
      countries: countries
    };
  }
};
</script>
