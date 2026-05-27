<template>
  <div :style="{ margin: '-30px -30px 30px -30px' }">
    <div :style="{ display: 'flex', justifyContent: 'center' }">
      <span
        class="k-color-primary"
        :style="{ textTransform: 'uppercase', padding: '4px 0' }"
      >
        Chart Animation Configurator
      </span>
    </div>
    <div
      class="example-config"
      :style="{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }"
    >
      <span
        class="k-form-field"
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          minWidth: '180px',
        }"
      >
        <KLabel :editor-id="editorId">Motion preset</KLabel>
        <div class="k-form-field-wrap" :style="{ marginTop: '8px' }">
          <DropDownList
            :id="editorId"
            :data-items="presets"
            :value="preset"
            @change="handlePresetChange"
            :style="{ minWidth: '180px' }"
          />
        </div>
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  preset: {
    type: String,
    default: 'default',
  },
  presets: {
    type: Array,
    default: () => ['default', 'standard', 'rapid', 'stretchy', 'linear'],
  },
});

const emit = defineEmits(['preset-change']);

import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Label as KLabel } from '@progress/kendo-vue-labels';

const editorId = 'animation-preset';

const handlePresetChange = (event) => {
  emit('preset-change', event.value);
};
</script>
