<template>
  <div>
    <input
      :style="inputStyle"
      :max="23"
      :min="0"
      type="number"
      data-section="hours"
      :value="value.getHours()"
      @change="handleChange"
    />
    <input
      :style="inputStyle"
      :max="59"
      :min="0"
      type="number"
      data-section="minutes"
      :value="value.getMinutes()"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    value: Date,
});

const emit = defineEmits(['change']);

const inputStyle = ref({ width: '90px' });
const today = ref(new Date());

const handleChange = (event) => {
    const date = {
        hours: props.value.getHours(),
        minutes: props.value.getMinutes(),
    };

    date[event.target.getAttribute('data-section')] = Number(event.target.value);

    const value = new Date(
        today.value.getFullYear(),
        today.value.getMonth(),
        today.value.getDate(),
        date.hours,
        date.minutes
    );

    emit('change', { value, event });
};
</script>
