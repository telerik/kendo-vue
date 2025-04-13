<template>
    <div>
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
          <KLabel>
            Theme
            <div class="k-form-field-wrap">
              <DropDownList
                :data-items="themeColors"
                :value="theme"
                :style="{
                  'min-width': '120px',
                }"
                @change="handleThemeChange"
              />
            </div>
          </KLabel>
        </span>
        <span class="k-form-field">
          <KLabel>
            Fill Mode
            <div class="k-form-field-wrap">
              <DropDownList
                :data-items="fillModes"
                :value="fillMode"
                :style="{
                  'min-width': '120px',
                }"
                @change="handleFillModeChange"
              />
            </div>
          </KLabel>
        </span>
      </div>
    </div>
  </template>
  
  <script>
  import { Label } from '@progress/kendo-vue-labels';
  import { DropDownList } from '@progress/kendo-vue-dropdowns';
  
  export default {
    components: {
      KLabel: Label,
      DropDownList,
    },
    props: {
      fillMode: String,
      theme: String,
    },
    emits: ['themechange', 'fillmodechange'],
    data() {
      return {
        fillModes: ['solid', 'flat'],
        themeColors: [
          'primary',
          'secondary',
          'tertiary',
          'info',
          'success',
          'warning',
          'error',
          'dark',
          'light',
          'inverse',
        ],
      };
    },
    methods: {
      handleThemeChange(event) {
        this.$emit('themechange', event);
      },
      handleFillModeChange(event) {
        this.$emit('fillmodechange', event);
      },
    },
  };
  </script>
  