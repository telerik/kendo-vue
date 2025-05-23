<template>
    <Card class="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
      <div class="k-d-grid k-gap-6">
        <div
          :style='{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }'
          class="k-gap-2"
        >
          Calendar
        </div>
      </div>

      <div class="k-d-grid k-gap-6 k-justify-content-center k-align-items-center">
        <Calendar />
      </div>
    </Card>
</template>
<script setup>
import { Card } from "@progress/kendo-vue-layout";
import { Calendar } from "@progress/kendo-vue-dateinputs";
</script>