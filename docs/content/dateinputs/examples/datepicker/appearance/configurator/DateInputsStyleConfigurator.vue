<template>
  <div :style="{ margin: '-30px -30px 30px -30px' }">
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
        <Label>
          Size
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="sizes"
              :value="size"
              :style="{ 'min-width': '120px' }"
              @change="handleSizeChange"
            />
          </div>
        </Label>
      </span>
      <span class="k-form-field">
        <Label>
          Fill Mode
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="fillModes"
              :value="fillMode"
              :style="{ 'min-width': '120px' }"
              @change="handleFillModeChange"
            />
          </div>
        </Label>
      </span>
      <span class="k-form-field">
        <Label>
          Border Radius
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="roundedOptions"
              :value="rounded"
              :style="{ 'min-width': '120px' }"
              @change="handleRoundedChange"
            />
          </div>
        </Label>
      </span>
    </div>
  </div>
</template>

<script setup>
import { Label } from '@progress/kendo-vue-labels';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const sizes = ['small', 'medium', 'large'];
const fillModes = ['solid', 'outline', 'flat'];
const roundedOptions = ['small', 'medium', 'large', 'full'];

defineProps({
    size: String,
    fillMode: String,
    rounded: String,
});

const emit = defineEmits(['sizechange', 'fillmodechange', 'roundedchange']);

const handleSizeChange = (event) => {
    emit('sizechange', event);
};

const handleFillModeChange = (event) => {
    emit('fillmodechange', event);
};

const handleRoundedChange = (event) => {
    emit('roundedchange', event);
};
</script>
