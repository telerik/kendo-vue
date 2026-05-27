<template>
  <div>
    <input
      :style="inputStyle"
      type="number"
      data-section="day"
      :value="value.getDate()"
      @change="handleChange"
    />
    <input
      :style="inputStyle"
      type="number"
      data-section="month"
      :value="value.getMonth() + 1"
      @change="handleChange"
    />
    <input
      :style="inputStyle"
      type="number"
      data-section="year"
      :value="value.getFullYear()"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    value: Date,
});

defineEmits(['change']);

const inputStyle = ref({ width: '90px' });

function handleChange(event) {
    const date = {
        day: value.getDate(),
        month: value.getMonth(),
        year: value.getFullYear(),
    };

    date[event.target.getAttribute('data-section')] = Number(event.target.value);

    const newValue = new Date(date.year, date.month - 1, date.day);
    emit('change', { value: newValue, event });
}
</script>
