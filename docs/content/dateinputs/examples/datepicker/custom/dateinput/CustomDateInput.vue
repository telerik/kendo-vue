<template>
  <div>
    <input
      :id="'day'"
      :style="inputStyle"
      type="number"
      data-section="day"
      :value="value.getDate()"
      @change="handleChange"
    />
    <input
      :id="'month'"
      :style="inputStyle"
      type="number"
      data-section="month"
      :value="value.getMonth() + 1"
      @change="handleChange"
    />
    <input
      :id="'year'"
      :style="inputStyle"
      type="number"
      data-section="year"
      :value="value.getFullYear()"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';

defineProps({
    value: Date,
});

const emit = defineEmits(['change']);

const inputStyle = reactive({
    width: '90px',
});

function handleChange(event) {
    const date = {
        day: value.getDate(),
        month: value.getMonth(),
        year: value.getFullYear(),
    };

    date[event.target.getAttribute('data-section')] = Number(event.target.value);

    const newValue =
    event.target.id === 'month'
        ? new Date(date.year, date.month - 1, date.day)
        : new Date(date.year, date.month, date.day);

    emit('change', {
        value: newValue,
        event,
    });
}
</script>
