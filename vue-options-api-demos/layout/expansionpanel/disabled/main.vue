<template>
  <div class="k-d-flex k-justify-content-center k-pt-11">
    <ExpansionPanel
      :style="{ width: '450px' }"
      :title="'Chile'"
      :subtitle="'South America'"
      :disabled="true"
      :expanded="expanded"
      @action="handleAction"
    >
      <Reveal :appear="expanded">
        <ExpansionPanelContent v-if="expanded">
          There are various theories about the origin of the word Chile.
          According to 17th-century Spanish chronicler Diego de Rosales, the
          Incas called the valley of the Aconcagua Chili by corruption of the
          name of a Picunche tribal chief (cacique) called Tili, who ruled the
          area at the time of the Incan conquest in the 15th century. Another
          theory points to the similarity of the valley of the Aconcagua with
          that of the Casma Valley in Peru, where there was a town and valley
          named Chili.
        </ExpansionPanelContent>
      </Reveal>
    </ExpansionPanel>
  </div>
</template>
<script>
import {
  ExpansionPanel,
  ExpansionPanelContent,
} from '@progress/kendo-vue-layout';

import { Reveal } from '@progress/kendo-vue-animation';

export default {
  components: {
    ExpansionPanel,
    ExpansionPanelContent,
    Reveal,
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    handleAction(ev) {
      this.expanded = !ev.expanded;
    },
  },
};
</script>
