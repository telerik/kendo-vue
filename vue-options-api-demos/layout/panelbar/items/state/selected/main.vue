<template>
  <div class="panelbar-wrapper">
    <PanelBar :items="items"> </PanelBar>
  </div>
</template>

<script>
import { PanelBar } from '@progress/kendo-vue-layout';
import './styles.css';

export default {
  components: {
    PanelBar,
  },
  data() {
    return {
      items: [
        { title: 'Team' },
        { title: 'Projects', selected: 'true' },
        { title: 'Programs' },
        { title: 'Communication' },
      ],
    };
  },
};
</script>
