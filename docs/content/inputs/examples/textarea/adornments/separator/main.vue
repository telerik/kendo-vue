<template>
    <div>
        <TextArea :style="{ width: '230px' }" input-prefix="prefix" :rows="4">
            <template #prefix="{ props }">
                <span :class="props.className">
                    <SvgIcon :icon="menuIcon" />
                    <SvgIcon :icon="photosIcon" />
                    <InputSeparator orientation="horizontal" />
                    <SvgIcon :icon="gearIcon" />
                </span>
                <InputSeparator />
            </template>
        </TextArea>
    </div>
</template>

<script setup>
import { TextArea, InputSeparator } from '@progress/kendo-vue-inputs';
import { menuIcon, photosIcon, gearIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from "@progress/kendo-vue-common";
</script>
