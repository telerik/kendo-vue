<template>
  <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
    <div class="k-col-span-1">
      <div>inputmode=numeric</div>
      <NumericTextBox
        :format="'n0'"
        :default-value="value"
        :input-attributes="{ inputMode: 'numeric' }"
        :input-prefix="'prefix'"
        :style="{ width: '300px' }"
      >
        <template #prefix>
          <SvgIcon :icon="mapMarkerTargetIcon" />
        </template>
      </NumericTextBox>
    </div>
    <div class="k-col-span-1">
      <div>inputmode=decimal</div>
      <NumericTextBox
        :format="'n4'"
        :default-value="value2"
        :input-attributes="{ inputMode: 'decimal' }"
        :input-prefix="'prefix'"
        :style="{ width: '300px' }"
      >
        <template #prefix>
          <SvgIcon :icon="mapMarkerTargetIcon" />
        </template>
      </NumericTextBox>
    </div>
  </div>
</template>

<script setup>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { mapMarkerTargetIcon } from "@progress/kendo-svg-icons";

const value = 42;
const value2 = 42.6977;
</script>
