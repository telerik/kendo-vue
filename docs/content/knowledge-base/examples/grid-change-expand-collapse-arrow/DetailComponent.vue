<template>
  <section>
    <p><strong>Description:</strong> {{ dataItem?.Category?.Description }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailComponent",
  props: {
    dataItem: { type: Object, required: true },
  },
});
</script>
