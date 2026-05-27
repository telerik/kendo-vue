<template>
  <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
    <div class="k-col-span-1">
      <div>
        inputmode=text <i>(default)</i>
      </div>
      <TextArea
        placeholder="Type your message here..."
        :input-attributes="{ inputMode: 'text' }"
        :style="{ width: '300px' }"
      />
    </div>
    <div class="k-col-span-1">
      <div>inputmode=email</div>
      <TextArea
        placeholder="Type your email here..."
        :input-attributes="{ inputMode: 'email' }"
        input-prefix="prefix"
        :style="{ width: '300px' }"
      >
        <template #prefix="{ props }">
          <span :class="props.className">
            <SvgIcon :icon="envelopeIcon" />
          </span>
        </template>
      </TextArea>
    </div>
    <div class="k-col-span-1">
      <div>inputmode=search</div>
      <TextArea
        placeholder="Search here..."
        :input-attributes="{ inputMode: 'search' }"
        input-suffix="suffix"
        :style="{ width: '300px' }"
      >
        <template #suffix="{ props }">
          <span :class="props.className">
            <SvgIcon :icon="searchIcon" />
          </span>
        </template>
      </TextArea>
    </div>
    <div class="k-col-span-1">
      <div>inputmode=url</div>
      <TextArea
        placeholder="Type here..."
        :input-attributes="{ inputMode: 'url' }"
        input-prefix="prefix"
        :style="{ width: '300px' }"
      >
        <template #prefix="{ props }">
          <span :class="props.className">
            <KButton :disabled="true" fill-mode="clear">
              https://
            </KButton>
          </span>
        </template>
      </TextArea>
    </div>
  </div>
</template>

<script setup>
import { TextArea } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { envelopeIcon, searchIcon } from "@progress/kendo-svg-icons";
import { Button as KButton } from "@progress/kendo-vue-buttons";
</script>
