<template>
  <div>
    <div :style="{ display: 'flex', justifyContent: 'center' }">
      <span
        class="k-color-primary"
        :style="{ textTransform: 'uppercase', padding: '4px 0' }"
      >
        Configurator
      </span>
    </div>
    <div
      class="example-config"
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }"
    >
      <span class="k-form-field">
        <KLabel>
          Theme
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="themeColors"
              :value="theme"
              :style="{ 'min-width': '120px' }"
              @change="handleThemeChange"
            />
          </div>
        </KLabel>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Label as KLabel } from '@progress/kendo-vue-labels';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

defineProps({
    theme: String,
});

const emit = defineEmits(['themechange']);

const themeColors = ref([
    'primary',
    'secondary',
    'tertiary',
    'info',
    'success',
    'warning',
    'error',
    'inverse',
]);

function handleThemeChange(event) {
    emit('themechange', event);
}
</script>
