<template>
  <div class="example-wrapper">
    <div>Favorite sports (can pick same multiple times):</div>
    <MultiSelect
      :style="{ width: '300px' }"
      :data-items="sports"
      :value="value"
      @change="handleChange"
      placeholder="Please select..."
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

export default {
  name: "MultiSelectDuplicateExample",
  components: {
    MultiSelect,
  },
  setup() {
    const sports = [
      "Baseball",
      "Basketball",
      "Cricket",
      "Field Hockey",
      "Football",
      "Table Tennis",
      "Tennis",
      "Volleyball",
    ];

    const value = ref([]);

    const handleChange = (e) => {
      const native = e.event || e.nativeEvent || e.domEvent || null;
      if (!native) {
        if (Array.isArray(e.value)) {
          value.value = e.value.slice();
        }
        return;
      }

      const target = native.target || null;
      if (!target) {
        if (Array.isArray(e.value)) {
          value.value = e.value.slice();
        }
        return;
      }

      if (
        target.tagName === "LI" ||
        (target.parentElement && target.parentElement.tagName === "LI")
      ) {
        const li = target.tagName === "LI" ? target : target.parentElement;
        const ul = li.parentElement;
        if (!ul) return;
        const itemIndex = Array.from(ul.children).indexOf(li);
        if (itemIndex >= 0) {
          const item = sports[itemIndex];
          value.value = [...value.value, item];
        }
        return;
      }

      const chipEl = target.closest ? target.closest(".k-chip") : null;
      if (chipEl && chipEl.parentElement) {
        const chipIndex = Array.from(chipEl.parentElement.children).indexOf(
          chipEl
        );
        if (chipIndex >= 0) {
          const next = value.value.slice();
          next.splice(chipIndex, 1);
          value.value = next;
        }
        return;
      }

      if (Array.isArray(e.value)) {
        value.value = e.value.slice();
      }
    };

    return {
      sports,
      value,
      handleChange,
    };
  },
};
</script>
