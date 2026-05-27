<template>
  <div>
    <span>
      {{ formattedDate }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { provideIntlService } from "@progress/kendo-vue-intl";

const props = defineProps({
    date: Date,
});

const formattedDate = computed(() =>
    provideIntlService({}).formatDate(props.date, "EEEE, d.MM.y")
);
</script>
