<template>
  <div class="example">
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="contentTypes"
      :value="type"
      :text-field="'title'"
      :value-field="'id'"
      @change="handleChange"
    ></DropDownList>
    <FloatingActionButton
      :svg-icon="type.id !== 2 ? plusIcon : undefined"
      :text="type.id !== 0 ? 'Add new' : undefined"
    ></FloatingActionButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { plusIcon } from "@progress/kendo-svg-icons";

const contentTypes = [
    { title: "Icon", id: 0 },
    { title: "Icon & Text", id: 1 },
    { title: "Text", id: 2 },
];

const type = ref({ title: "Icon", id: 0 });

const handleChange = (e) => {
    type.value = e.target.value;
};
</script>
