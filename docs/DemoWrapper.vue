<template>
  <div class="demo-page">
    <component :is="comp" v-if="comp" />
    <div v-else>Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, type Component } from "vue";

const props = defineProps<{ loader: () => Promise<{ default: Component }> }>();

const comp = shallowRef<Component | null>(null);

props.loader().then((mod) => {
  comp.value = mod.default;
});
</script>
