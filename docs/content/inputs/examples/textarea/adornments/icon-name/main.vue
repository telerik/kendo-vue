<template>
  <div>
    <TextArea
      :style="{ width: '230px' }"
      :input-prefix="'textAreaIcon'"
      :rows="4"
    >
      <template #textAreaIcon>
        <SvgIcon :icon="gearIcon" />
      </template>
    </TextArea>
  </div>
</template>

<script setup>
import { TextArea } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { gearIcon } from "@progress/kendo-svg-icons";
</script>
