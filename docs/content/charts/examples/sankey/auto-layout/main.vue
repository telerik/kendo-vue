<template>
  <div>
    <Switch @change="onChange" :checked="autoLayout" />
    <Sankey
      :dataNodes="dataNodes"
      :dataLinks="dataLinks"
      :style="{ 'max-width': '700px', height: '250px', margin: 'auto' }"
      :links="{ colorType: 'source' }"
      :disableAutoLayout="!autoLayout"
    />
  </div>
</template>

<script setup>
import { Sankey } from '@progress/kendo-vue-charts';
import { Switch } from '@progress/kendo-vue-inputs';
import { ref } from 'vue';

const data = {
    nodes: [
        { id: "node 1", label: { text: "node 1" } },
        { id: "node 2", label: { text: "node 2" } },
        { id: "node 3", label: { text: "node 3" } },
        { id: "node 4", label: { text: "node 4" } },
        { id: "node 5", label: { text: "node 5" } },
    ],
    links: [
        { sourceId: "node 2", targetId: "node 3", value: 4 },
        { sourceId: "node 1", targetId: "node 3", value: 3 },
        { sourceId: "node 1", targetId: "node 5", value: 1 },
        { sourceId: "node 3", targetId: "node 4", value: 6 },
        { sourceId: "node 3", targetId: "node 5", value: 1 },
    ],
};

const autoLayout = ref(true);
const dataNodes = data.nodes;
const dataLinks = data.links;

const onChange = (e) => {
    autoLayout.value = e.target.value;
};
</script>
