<template>
    <div>
        <TextArea
            :style="{ width: '230px' }"
            :disabled="true"
            :inputPrefix="'prefix'"
            :inputSuffix="'suffix'"
            :showClearButton="true"
            :rows="4"
        >
            <template #prefix="{ props }">
                <span :class="props.className">
                    <InputIcons />
                </span>
            </template>
            <template #suffix="{ props }">
                <span :class="props.className">
                    <SvgIcon :icon="envelopeIcon" />
                </span>
            </template>
        </TextArea>
    </div>
</template>

<script setup>
import { TextArea } from '@progress/kendo-vue-inputs';
import { SvgIcon } from '@progress/kendo-vue-common';
import { envelopeIcon } from '@progress/kendo-svg-icons';
import InputIcons from './InputIcons.vue';
</script>
