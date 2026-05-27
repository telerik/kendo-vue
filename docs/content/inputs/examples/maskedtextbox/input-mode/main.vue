<template>
  <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
    <div class="k-col-span-1">
      <div>inputmode=text <i>(default)</i></div>
      <MaskedTextBox
        :mask="lettersMask"
        :rules="rules"
        :placeholder="'Enter text...'"
        :input-attributes="{ inputMode: 'text' }"
        :style="{ width: '300px' }"
      />
    </div>
    <div class="k-col-span-1">
      <div>inputmode=tel</div>
      <MaskedTextBox
        :mask="'(999) 000-00-00-00'"
        :placeholder="'(___) ___-__-__-__'"
        :input-attributes="{ inputMode: 'tel' }"
        :input-suffix="'suffix'"
        :style="{ width: '300px' }"
      >
        <template #suffix>
          <SvgIcon :icon="bookIcon" />
        </template>
      </MaskedTextBox>
    </div>
    <div class="k-col-span-1">
      <div>inputmode=email</div>
      <MaskedTextBox
        :placeholder="'example@email.com'"
        :input-attributes="{ inputMode: 'email' }"
        :input-prefix="'prefix'"
        :style="{ width: '300px' }"
      >
        <template #prefix>
          <SvgIcon :icon="envelopeIcon" />
        </template>
      </MaskedTextBox>
    </div>
    <div class="k-col-span-1">
      <div>inputmode=numeric</div>
      <MaskedTextBox
        :mask="numbersMask"
        :rules="rules"
        :placeholder="'Enter a number...'"
        :input-attributes="{ inputMode: 'numeric' }"
        :style="{ width: '300px' }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { bookIcon, envelopeIcon } from "@progress/kendo-svg-icons";

const lettersMask = ref("LLLLL");
const numbersMask = ref("NNNNN");
const rules = ref({
    L: /[a-zA-Z]/,
    N: /[0-9]/,
});
</script>
