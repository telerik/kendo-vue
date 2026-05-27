<template>
  <div class="wrapper-expansion-panel">
    <ExpansionPanel
      title="Colombia"
      subtitle="South America"
      :expanded="expanded"
      @action="handleAction"
    >
      <Reveal :appear="expanded">
        <ExpansionPanelContent>
          <div class="content">
            <div class="image-container">
              <img
                :src="colombiaImage"
                alt="Colombia"
              />
            </div>
            <span class="content-text">
              The name “Colombia” is derived from the last name of the Italian
              navigator Christopher Columbus. It was conceived by the Venezuelan
              revolutionary Francisco de Miranda as a reference to all of the
              New World, but especially to those portions under Spanish law. The
              name was later adopted by the Republic of Colombia of 1819, formed
              from the territories of the old Viceroyalty of New Granada
              (modern-day Colombia, Panama, Venezuela, Ecuador, and northwest
              Brazil).
            </span>
          </div>
        </ExpansionPanelContent>
      </Reveal>
    </ExpansionPanel>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ExpansionPanel, ExpansionPanelContent } from '@progress/kendo-vue-layout';
import { Reveal } from '@progress/kendo-vue-animation';

const colombiaImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/countries/colombia.jpg';
const expanded = ref(false);

function handleAction(ev) {
    expanded.value = !ev.expanded;
}
</script>

<style>
.wrapper-expansion-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.k-expander {
  width: 600px;
}

.wrapper-expansion-panel > .content {
  display: flex;
}

.image-container {
  height: 250px;
  margin-right: 20px;
}

img {
  height: 100%;
}

.content-text {
  display: block;
  text-align: justify;
}
</style>
