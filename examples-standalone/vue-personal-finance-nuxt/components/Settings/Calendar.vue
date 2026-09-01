<template>
    <Card class="calendar-card">
      <div class="calendar-heading">
        <div
          :style='{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }'
          class="calendar-title"
        >
          Calendar
        </div>
      </div>

      <div class="calendar-content">
        <Calendar />
      </div>
    </Card>
</template>
<script setup>
import { Card } from "@progress/kendo-vue-layout";
import { Calendar } from "@progress/kendo-vue-dateinputs";
</script>
<style scoped>
.calendar-card { height: 100%; padding: var(--kendo-spacing-4); gap: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-xxl); }
.calendar-heading, .calendar-content { display: grid; gap: var(--kendo-spacing-6); }
.calendar-title { gap: var(--kendo-spacing-2); }
.calendar-content { justify-content: center; align-items: center; }
</style>