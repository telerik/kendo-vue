<template>
  <div class="example-wrapper">
    <div>
      <div>T-shirt sizes:</div>
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="sizes"
        :value="value"
        @change="onChange"
        :tags="tags"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

const sizes = ref(["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"]);
const value = ref([]);

const selected = computed(() => value.value.length);
const tags = computed(() =>
    selected.value > 0
        ? [{ text: `${selected.value} items selected`, data: [...value.value] }]
        : []
);

function onChange(event) {
    value.value = [...event.target.value];
}
</script>
