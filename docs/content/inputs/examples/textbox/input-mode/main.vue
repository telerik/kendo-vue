<template>
  <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
    <div class="k-col-span-1">
      <div>
        inputmode=text <i>(default)</i>
      </div>
      <TextBox
        :placeholder="'Type your message here...'"
        :input-attributes="{ inputMode: 'text' }"
        :style="{ width: '300px' }"
      />
    </div>
    <div class="k-col-span-1">
      <div>inputmode=tel</div>
      <TextBox
        :placeholder="'(999) 000-00-00-00'"
        :input-attributes="{ inputMode: 'tel' }"
        :input-suffix="'suffix'"
        :style="{ width: '300px' }"
      >
        <template #suffix>
          <SvgIcon :icon="bookIcon" />
        </template>
      </TextBox>
    </div>
    <div class="k-col-span-1">
      <div>inputmode=email</div>
      <TextBox
        :placeholder="'Type your email here...'"
        :input-attributes="{ inputMode: 'email' }"
        :input-prefix="'prefix'"
        :style="{ width: '300px' }"
      >
        <template #prefix>
          <SvgIcon :icon="envelopeIcon" />
        </template>
      </TextBox>
    </div>
    <div class="k-col-span-1">
      <div>inputmode=search</div>
      <TextBox
        :placeholder="'Search here...'"
        :input-attributes="{ inputMode: 'search' }"
        :input-suffix="'suffix'"
        :style="{ width: '300px' }"
      >
        <template #suffix>
          <SvgIcon :icon="searchIcon" />
        </template>
      </TextBox>
    </div>
    <div class="k-col-span-1">
      <div>inputmode=url</div>
      <TextBox
        :placeholder="'Type here...'"
        :input-attributes="{ inputMode: 'url' }"
        :input-prefix="'prefix'"
        :style="{ width: '300px' }"
      >
        <template #prefix>
          <KButton :disabled="true" :fill-mode="'clear'">
            https://
          </KButton>
        </template>
      </TextBox>
    </div>
  </div>
</template>

<script setup>
import { TextBox } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { bookIcon, envelopeIcon, searchIcon } from "@progress/kendo-svg-icons";
import { Button as KButton } from "@progress/kendo-vue-buttons";
</script>
