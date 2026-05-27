<template>
  <label
    :style="{
      textAlign: 'center',
    }"
  >
    <span :style="spanStyle">Start</span> <br />
    <DateInput
      :value="value"
      :format="format"
      :id="id"
      @change="handleChange"
    />
  </label>
</template>

<script setup>
import { computed } from "vue";
import { DateInput } from "@progress/kendo-vue-dateinputs";

const props = defineProps({
    value: Date,
    format: String,
    id: String,
    min: Date,
    max: Date,
    disabled: Boolean,
    label: String,
});

const spanStyle = computed(() => ({
    color: props.value !== null ? "green" : "red",
}));

const handleChange = (e) => {
    emit("change", e);
};
</script>
