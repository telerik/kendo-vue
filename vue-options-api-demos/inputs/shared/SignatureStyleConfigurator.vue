<template>
    <div :style="{ margin: '-30px -30px 30px -30px' }">
      <div :style="{ display: 'flex', justifyContent: 'center' }">
        <span
          class="k-color-primary"
          :style="{ textTransform: 'uppercase', padding: '4px 0' }"
          >Configurator</span
        >
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
          <k-label>
            Color
            <div class="k-form-field-wrap">
              <ColorPicker :value="color" @change="handleColorChange" />
            </div>
          </k-label>
        </span>
        <span class="k-form-field">
          <k-label>
            Background Color
            <div class="k-form-field-wrap">
              <ColorPicker
                :value="backgroundColor"
                @change="handleBackgroundColorChange"
              />
            </div>
          </k-label>
        </span>
        <span class="k-form-field">
          <k-label>
            Stroke Width
            <div class="k-form-field-wrap">
              <dropdownlist
                :data-items="strokeWidths"
                :value="strokeWidth"
                :style="{
                  'min-width': '120px',
                }"
                @change="handleStrokeWidthChange"
              />
            </div>
          </k-label>
        </span>
        <span class="k-form-field">
          <k-label>
            Size
            <div class="k-form-field-wrap">
              <dropdownlist
                :data-items="sizes"
                :value="size"
                :style="{
                  'min-width': '120px',
                }"
                @change="handleSizeChange"
              />
            </div>
          </k-label>
        </span>
        <span class="k-form-field">
          <k-label>
            Fill Mode
            <div class="k-form-field-wrap">
              <dropdownlist
                :data-items="fillModes"
                :value="fillMode"
                :style="{
                  'min-width': '120px',
                }"
                @change="handleFillModeChange"
              />
            </div>
          </k-label>
        </span>
        <span class="k-form-field">
          <k-label>
            Border Radius
            <div class="k-form-field-wrap">
              <dropdownlist
                :data-items="roundedOptions"
                :value="rounded"
                :style="{
                  'min-width': '120px',
                }"
                @change="handleRoundedChange"
              />
            </div>
          </k-label>
        </span>
      </div>
    </div>
  </template>
  
  <script>
  import { Label } from '@progress/kendo-vue-labels';
  import { DropDownList } from '@progress/kendo-vue-dropdowns';
  import { ColorPicker } from '@progress/kendo-vue-inputs';
  
  export default {
    components: {
      'k-label': Label,
      dropdownlist: DropDownList,
      ColorPicker,
    },
    props: {
      size: String,
      fillMode: String,
      rounded: String,
      strokeWidth: Number,
      backgroundColor: String,
      color: String,
    },
    emits: [
      'sizechange',
      'fillmodechange',
      'roundedchange',
      'strokewidthchange',
      'backgroundchange',
      'colorchange',
    ],
    data() {
      return {
        sizes: ['small', 'medium', 'large'],
        fillModes: ['solid', 'outline', 'flat'],
        roundedOptions: ['small', 'medium', 'large', 'full'],
        strokeWidths: [1, 2, 3, 6, 10],
      };
    },
    methods: {
      handleSizeChange(event) {
        this.$emit('sizechange', event);
      },
      handleFillModeChange(event) {
        this.$emit('fillmodechange', event);
      },
      handleRoundedChange(event) {
        this.$emit('roundedchange', event);
      },
      handleStrokeWidthChange(event) {
        this.$emit('strokewidthchange', event);
      },
      handleBackgroundColorChange(event) {
        this.$emit('backgroundchange', event.event);
      },
      handleColorChange(event) {
        this.$emit('colorchange', event.event);
      },
    },
  };
  </script>
  