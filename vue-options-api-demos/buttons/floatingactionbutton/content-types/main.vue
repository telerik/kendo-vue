<template>
    <div class="example">
      <dropdownlist
        :style="{ width: '230px' }"
        :data-items="contentTypes"
        :value="type"
        :text-field="'title'"
        :value-field="'id'"
        @change="handleChange"
      ></dropdownlist>
      <fab
        :svg-icon="type.id !== 2 ? plusIcon : undefined"
        :text="type.id !== 0 ? 'Add new' : undefined"
      ></fab>
    </div>
  </template>
  <script>
  import { FloatingActionButton } from "@progress/kendo-vue-buttons";
  import { DropDownList } from "@progress/kendo-vue-dropdowns";
  import { plusIcon } from "@progress/kendo-svg-icons";
  
  const contentTypes = [
    { title: "Icon", id: 0 },
    { title: "Icon & Text", id: 1 },
    { title: "Text", id: 2 },
  ];
  
  export default {
    components: {
      fab: FloatingActionButton,
      dropdownlist: DropDownList,
    },
    data() {
      return {
        plusIcon,
        contentTypes,
        type: { title: "Icon", id: 0 },
      };
    },
    methods: {
      handleChange(e) {
        this.type = e.target.value;
      },
    },
  };
  </script>
  