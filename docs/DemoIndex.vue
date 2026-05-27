<template>
  <div class="page">
    <div class="header">
      <div class="brand">
        <span class="brand-icon">K</span>
        <span>Kendo UI for Vue Demos</span>
      </div>
      <input
        v-model="search"
        class="search-box"
        type="text"
        placeholder="Search demos..."
      />
      <span class="count-badge">{{ filtered.length }}</span>
    </div>
    <table class="demo-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Demo</th>
          <th>Path</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filtered" :key="item.path">
          <td class="cell-component">
            {{ item.component.replace(/-/g, " ") }}
          </td>
          <td>
            <a :href="'/' + item.path" target="_blank" rel="noopener">
              {{ item.demo }}
            </a>
          </td>
          <td class="cell-path">{{ item.path }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface DemoRoute {
  path: string;
  component: string;
  demo: string;
}

const props = defineProps<{ routes: DemoRoute[] }>();

const search = ref("");

const filtered = computed(() => {
  const q = search.value.toLowerCase().trim();
  return q
    ? props.routes.filter((r) => r.path.toLowerCase().includes(q))
    : props.routes;
});
</script>
