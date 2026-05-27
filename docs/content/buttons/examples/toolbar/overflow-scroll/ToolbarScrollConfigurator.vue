<template>
  <div :style="{ margin: '-30px -30px 30px -30px' }">
    <div :style="{ display: 'flex', justifyContent: 'center' }">
      <span class="k-color-primary" :style="{ textTransform: 'uppercase', padding: '4px 0' }">Configurator</span>
    </div>

    <div
      class="example-config"
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }"
    >
      <div class="k-form-field" :style="{ flex: '1 1 300px' }">
        <Label>SCROLL BUTTONS VISIBILITY
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="scrollButtonsOptions"
              :value="scrollButtons"
              :style="{ 'min-width': '120px' }"
              @change="handleScrollButtonsChange"
            />
          </div>
        </Label>
      </div>

      <div class="k-form-field" :style="{ flex: '1 1 300px' }">
        <Label>SCROLL BUTTONS POSITION
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="scrollButtonsPositionOptions"
              :value="scrollButtonsPosition"
              :style="{ 'min-width': '120px' }"
              @change="handleScrollButtonsPosition"
            />
          </div>
        </Label>
      </div>

      <div class="k-form-field" :style="{ flex: '1 1 300px' }">
        <Label>BUTTONS SCROLL SPEED
          <div class="k-form-field-wrap">
            <DropDownList
              :data-items="buttonScrollSpeedOptions"
              :value="buttonScrollSpeed"
              :style="{ 'min-width': '120px' }"
              @change="handleButtonScrollSpeed"
            />
          </div>
        </Label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Label } from '@progress/kendo-vue-labels';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

defineProps({
    scrollButtons: String,
    scrollButtonsPosition: String,
    buttonScrollSpeed: Number,
});

const emit = defineEmits(['scrollButtonsChange', 'scrollButtonsPositionChange', 'buttonScrollSpeedChange']);

const scrollButtonsOptions = ['auto', 'visible', 'hidden'];
const scrollButtonsPositionOptions = ['split', 'start', 'end'];
const buttonScrollSpeedOptions = [100, 300, 500];

const handleScrollButtonsChange = (value) => {
    emit('scrollButtonsChange', value.value);
};

const handleScrollButtonsPosition = (value) => {
    emit('scrollButtonsPositionChange', value.value);
};

const handleButtonScrollSpeed = (value) => {
    emit('buttonScrollSpeedChange', value.value);
};
</script>
