<template>
    <div>
        <section aria-label="Tooltip host region" class="tooltip-host-container">
            <div
                role="toolbar"
                aria-label="Tooltip action targets"
                class="tooltip-host-actions"
                @mouseover="handleMouseOver"
                @mouseout="handleMouseOut"
            >
                <KButton :fill-mode="'link'" title="Tooltip for the first action"> First action </KButton>
                <KButton :theme-color="'primary'" title="Tooltip for the second action"> Action button </KButton>
            </div>
            <div class="tooltip-outside-action">
                <KButton title="There is no Kendo UI for Vue Native Tooltip for the third action">
                    Third action
                </KButton>
            </div>
        </section>

        <Tooltip ref="tooltip" :anchor-element="'anchor'" :parent-title="true" :position="'bottom'" :open-delay="250" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Tooltip } from '@progress/kendo-vue-tooltip';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const tooltip = ref(null);

const handleMouseOver = (event) => {
    tooltip.value?.handleMouseOver(event);
};

const handleMouseOut = (event) => {
    tooltip.value?.handleMouseOut(event);
};
</script>

<style>
.tooltip-host-container {
    display: flex;
    align-items: center;
    gap: 12px;
}

.tooltip-host-actions,
.tooltip-outside-action {
    border: 1px dashed var(--kendo-color-border);
    border-radius: 6px;
    padding: 16px;
    display: inline-flex;
    align-items: center;
}

.tooltip-host-actions {
    gap: 12px;
    background: var(--kendo-color-warning-subtle);
}

.k-button-text {
    pointer-events: none;
}
</style>
