<template>
  <div class="k-d-flex k-justify-content-center k-pt-11">
    <div :style="{ display: 'flex' }">
      <div class="section-icons-expansionpanel">
        <div class="label-icons-expansionpanel">Custom Kendo UI for Vue Icons</div>
        <ExpansionPanel
          :style="{ width: '280px' }"
          :title="'Colombia'"
          :expanded="expanded"
          :expand-icon="'arrow-seek-down'"
          :collapse-icon="'arrow-seek-up'"
          @action="handleAction"
        >
          <Reveal :appear="expanded">
            <ExpansionPanelContent v-if="expanded">
              The name “Colombia” is derived from the last name of the Italian
              navigator Christopher Columbus. It was conceived by the Venezuelan
              revolutionary Francisco de Miranda as a reference to all of the
              New World, but especially to those portions under Spanish law. The
              name was later adopted by the Republic of Colombia of 1819, formed
              from the territories of the old Viceroyalty of New Granada
              (modern-day Colombia, Panama, Venezuela, Ecuador, and northwest
              Brazil).
            </ExpansionPanelContent>
          </Reveal>
        </ExpansionPanel>
      </div>
      <div class="section-icons-expansionpanel">
        <div class="label-icons-expansionpanel">Custom Font Awesome Icons</div>

        <ExpansionPanel
          :style="{ width: '280px' }"
          :title="'Colombia'"
          :expanded="expanded"
          :expand-icon="'fa fa-plus'"
          :collapse-icon="'fa fa-minus'"
          @action="handleAction"
        >
          <Reveal :appear="expanded">
            <ExpansionPanelContent v-if="expanded">
              The name “Colombia” is derived from the last name of the Italian
              navigator Christopher Columbus. It was conceived by the Venezuelan
              revolutionary Francisco de Miranda as a reference to all of the
              New World, but especially to those portions under Spanish law. The
              name was later adopted by the Republic of Colombia of 1819, formed
              from the territories of the old Viceroyalty of New Granada
              (modern-day Colombia, Panama, Venezuela, Ecuador, and northwest
              Brazil).
            </ExpansionPanelContent>
          </Reveal>
        </ExpansionPanel>
      </div>
    </div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
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
<style>
.label-icons-expansionpanel {
  margin: 10px;
  font-weight: 600;
}

.section-icons-expansionpanel {
  min-width: 320px;
  padding: 10px;
}
</style>
