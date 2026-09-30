<template>
  <Card class="weather-card">
    <div class="weather-heading">
      <div
        :style="{
          fontSize: '20px',
          letterSpacing: 'wide',
          fontWeight: '500',
        }"
        class="weather-title"
      >
        Weather
      </div>
    </div>

    <div
      class="weather-summary"
    >
      <img
        src="@/public/images/cloud.png"
        alt="Weather Icon"
        :style="{ width: '50px', height: '50px', margin: 'auto' }"
      />
      <div :style="{ fontSize: '16px', fontWeight: '400', color: 'var(--kendo-color-on-app-surface)' }">
        Partly Cloudy
      </div>
      <div :style="{ fontSize: '34px', fontWeight: '400', color: 'var(--kendo-color-info)' }">
        12˚C
      </div>
    </div>
    <div
      class="weather-divider"
      :style="{
        borderBottom: '1px solid var(--kendo-color-border)',
      }"
    ></div>
    <div
      class="weather-details"
    >
      <div :style="{ fontSize: '12px', fontWeight: '400', color: 'var(--kendo-color-on-app-surface)' }">
        Humidity: 56%
      </div>
      <div :style="{ fontSize: '12px', fontWeight: '400', color: 'var(--kendo-color-on-app-surface)' }">
        Dew: 2 C
      </div>
      <div :style="{ fontSize: '12px', fontWeight: '400', color: 'var(--kendo-color-on-app-surface)' }">
        Pressure: 1043 mb
      </div>
      <div :style="{ fontSize: '12px', fontWeight: '400', color: 'var(--kendo-color-on-app-surface)' }">
        Wind Speed: 30km/h NW
      </div>
    </div>
  </Card>
</template>
<script setup>
import { Card } from "@progress/kendo-vue-layout";
</script>
<style scoped>
.weather-card { height: 100%; padding: var(--kendo-spacing-4); gap: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-xxl); }
.weather-heading { display: grid; gap: var(--kendo-spacing-6); }
.weather-title { gap: var(--kendo-spacing-2); }
.weather-summary, .weather-details { display: grid; gap: var(--kendo-spacing-2); justify-content: center; align-items: center; text-align: center; }
.weather-divider { width: 100%; }
</style>
