<template>
  <div
    :id="id"
    tabindex="0"
    @focusin="handleFocus"
    @focusout="handleBlur"
    @keydown="handleKeydown"
  >
    <Calendar
      :view-list-id="id"
      :value="value.start"
      @change="handleStartChange"
    />
    <Calendar :value="value.end" @change="handleEndChange" />
  </div>
</template>

<script setup>
import { Calendar } from "@progress/kendo-vue-dateinputs";

const props = defineProps({
    value: Object,
    id: String,
});

const emit = defineEmits(['change', 'focus', 'blur', 'keydown']);

const handleStartChange = (event) => {
    emit("change", {
        value: {
            start: event.target.value,
            end: props.value.end,
        },
        event: event,
    });
};

const handleEndChange = (event) => {
    emit("change", {
        value: {
            start: props.value.start,
            end: event.target.value,
        },
        event: event,
    });
};

const handleFocus = (e) => {
    emit("focus", e);
};

const handleBlur = (e) => {
    emit("blur", e);
};

const handleKeydown = (e) => {
    emit("keydown", e);
};
</script>
