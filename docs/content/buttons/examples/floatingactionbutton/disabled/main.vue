<template>
  <div>
    <KButton @click="handleClick">
      {{ disabled ? "Enable" : "Disable" }}
    </KButton>
    <FloatingActionButton
      :svg-icon="checkIcon"
      :disabled="disabled"
      :align="{ vertical: 'bottom', horizontal: 'start' }"
    ></FloatingActionButton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button as KButton, FloatingActionButton } from "@progress/kendo-vue-buttons";
import { checkIcon } from "@progress/kendo-svg-icons";

const disabled = ref(true);

const handleClick = () => {
    disabled.value = !disabled.value;
};
</script>
