<template>
  <div class="example-wrapper">
    <div>
      <MultiSelect
        :style="{ width: '400px' }"
        :data-items="sizes"
        :tag-render="tagRender"
      >
        <template #myTemplate="{ props }">
          <li class="k-chip">
            <span class="custom-tag">{{ sizes.indexOf(props.tagData.data[0]) }}</span>
            - {{ props.tagData.text }}
          </li>
        </template>
      </MultiSelect>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

const sizes = ref(["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"]);
const tagRender = ref("myTemplate");
</script>
