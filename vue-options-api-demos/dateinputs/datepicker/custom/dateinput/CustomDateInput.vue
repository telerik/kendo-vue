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
<script>
export default {
  props: {
    value: Date,
  },
  emits: {
    change: null,
  },
  data() {
    return {
      inputStyle: {
        width: '90px',
      },
      today: new Date(),
    };
  },
  methods: {
    handleChange(event) {
      const date = {
        day: this.$props.value.getDate(),
        month: this.$props.value.getMonth(),
        year: this.$props.value.getFullYear(),
      };

      date[event.target.getAttribute('data-section')] = Number(
        event.target.value
      );

      const value =
        event.target.id === 'month'
          ? new Date(date.year, date.month - 1, date.day)
          : new Date(date.year, date.month, date.day);

      this.$emit('change', {
        value,
        event,
      });
    },
  },
};
</script>
