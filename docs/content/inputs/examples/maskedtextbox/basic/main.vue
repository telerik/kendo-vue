<template>
  <div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>Enter phone number</p>
      <MaskedTextBox :style="{ width: '230px' }" :mask="mask" :default-value="defaultValue" />
    </div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>MaskedTextBox with prefix and suffix adornments</p>
      <MaskedTextBox :style="{ width: '230px' }" :input-prefix="'prefix'" :input-suffix="'suffix'">
        <template #prefix>
          <SvgIcon :icon="gearIcon" />
        </template>
        <template #suffix>
          <SvgIcon :icon="homeIcon" />
        </template>
      </MaskedTextBox>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { gearIcon, homeIcon } from "@progress/kendo-svg-icons";

const mask = ref("(999) 000-00-00-00");
const defaultValue = ref("(359) 884-12-33-21");
</script>
