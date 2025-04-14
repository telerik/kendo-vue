<template>
 <div>
    <Switch @change="onChange" :checked="autoLayout" />
    <Sankey
      :dataNodes="dataNodes"
      :dataLinks="dataLinks"
      :style="{ 'max-width': '700px', height: '250px', margin: 'auto' }"
      :links="{ colorType: 'source' }"
      :disableAutoLayout="!autoLayout"
    >
    </Sankey>
  </div>
</template>

<script>
import { Sankey } from '@progress/kendo-vue-charts';
import { Switch } from '@progress/kendo-vue-inputs';

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

export default {
    components: {
      Sankey,
      Switch
    },
    methods: {
      onChange(e) {
        this.autoLayout = e.target.value;
      }
    },
    data() {
      return {
        autoLayout: true,
        dataNodes: data.nodes,
        dataLinks: data.links
      };
    }
};

</script>
