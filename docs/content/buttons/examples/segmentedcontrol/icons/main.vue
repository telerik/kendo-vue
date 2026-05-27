<template>
    <div class="page-host">
        <div class="demo-container">
            <div class="demo-section">
                <span class="section-label">Kendo SVG Icons + text</span>
                <SegmentedControl
                    :items="kendoIconItems"
                    :value="kendoIconValue"
                    @change="(val) => kendoIconValue = val"
                    :size="'large'"
                />
            </div>

            <div class="demo-section">
                <span class="section-label">Custom SVG Icons + text</span>
                <SegmentedControl
                    :items="customIconItems"
                    :value="customIconValue"
                    @change="(val) => customIconValue = val"
                    :size="'large'"
                />
            </div>

            <div class="demo-section">
                <span class="section-label">Icon-only (with tooltips)</span>

                <Tooltip v-if="showTooltips" :anchor-element="'target'" :parent-title="true">
                    <SegmentedControl
                        :items="iconOnlyItemsWithTitle"
                        :value="iconOnlyValue"
                        @change="(val) => iconOnlyValue = val"
                        :size="'large'"
                    />
                </Tooltip>
                <SegmentedControl
                    v-else
                    :items="iconOnlyItems"
                    :value="iconOnlyValue"
                    @change="(val) => iconOnlyValue = val"
                    :size="'large'"
                />

                <p class="tip-text">Tip: Provide tooltips and accessible labels for icon-only segments.</p>

                <div class="tooltip-toggle">
                    <input
                        :id="'show-tooltips'"
                        type="checkbox"
                        class="k-checkbox k-checkbox-md k-rounded-md"
                        :checked="showTooltips"
                        @change="showTooltips = $event.target.checked"
                    />
                    <label :for="'show-tooltips'" class="k-checkbox-label">
                        Show tooltips
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { SegmentedControl } from '@progress/kendo-vue-buttons';
import { Tooltip } from '@progress/kendo-vue-tooltip';
import { mobileIcon, tabletIcon, laptopIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const customIcon = {
    name: 'customIcon',
    content:
        '<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.7 512m-446.9 0a446.9 446.9 0 1 0 893.8 0 446.9 446.9 0 1 0-893.8 0Z" fill="#E4E4E4" /><path d="M160.2 788.1l351.5-276-276-351.5C41.6 313 7.8 593.9 160.2 788.1zM863.8 788.1l-351.5-276 276-351.5c194.1 152.4 227.9 433.3 75.5 627.5z" fill="#F25421" /><path d="M512.1 512.1m-186.4 0a186.4 186.4 0 1 0 372.8 0 186.4 186.4 0 1 0-372.8 0Z" fill="#8FCEE2" /><path d="M511.2 698.5c90.7 0 166.3-64.8 182.9-150.7-6.2 1.3-12.5 1.6-18.7 0.2-13.1-2.9-24.5-16.9-19.7-29.3-22.1 15.6-49.3 23.7-76.3 22.8-7.5-0.3-15.1-1.3-21.6-5-6.5-3.7-11.5-10.7-11.1-18.1-7.3 11.4-20 18.4-33.2 21.6-13.1 3.2-26.8 3.1-40.4 2.9-9.1-0.1-18.6-0.4-26.5-5-11.1-6.5-15.8-19.9-19.6-32.2-12 18.6-34.8 27.9-56.8 29.3-15 0.9-29.9-1.4-44.6-4.6 9.3 94.4 88.9 168.1 185.6 168.1z" fill="#13AEE5" /><path d="M423.5 204.2c3.2 2.6 7.6 3.5 11.6 2.3 29.4-9 60.7-13.8 93-13.8 176.2 0 319.5 143.3 319.5 319.5 0 10-0.5 20-1.4 29.8-0.4 4.2 1.3 8.2 4.5 10.9 7.8 6.4 19.5 1.4 20.4-8.6 1-10.6 1.5-21.3 1.5-32 0-46.5-9.1-91.6-27.1-134.1-17.4-41-42.2-77.9-73.8-109.5-31.6-31.6-68.5-56.5-109.5-73.8-42.5-18-87.6-27.1-134.1-27.1-34.4 0-68 5-100.3 14.9-9.6 2.7-12.1 15.2-4.3 21.5z" fill="#FFFDFD" /><path d="M856.1 619m-14 0a14 14 0 1 0 28 0 14 14 0 1 0-28 0Z" fill="#FFFDFD" /></svg>',
    viewBox: '0 0 512 512',
};

const lucideTabletIcon = {
    name: 'tablet',
    content:
        '<rect width="16" height="20" x="4" y="2" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>' +
        '<line x1="12" x2="12.01" y1="18" y2="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>',
    viewBox: '0 0 24 24'
};

const lucideMonitorIcon = {
    name: 'monitor',
    content:
        '<rect width="20" height="14" x="2" y="3" rx="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>' +
        '<line x1="8" x2="16" y1="21" y2="21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>' +
        '<line x1="12" x2="12" y1="17" y2="21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>',
    viewBox: '0 0 24 24'
};

const kendoIconItems = [
    { value: 'mobile', text: 'Mobile', svgIcon: mobileIcon },
    { value: 'tablet', text: 'Tablet', svgIcon: tabletIcon, disabled: true },
    { value: 'desktop', text: 'Desktop', svgIcon: laptopIcon }
];

const customIconItems = [
    { value: 'option-1', text: 'Option 1', svgIcon: customIcon },
    { value: 'mobile', text: 'Mobile', svgIcon: lucideTabletIcon },
    { value: 'desktop', text: 'Desktop', svgIcon: lucideMonitorIcon }
];

const iconOnlyItems = [
    { value: 'mobile', svgIcon: mobileIcon, 'aria-label': 'Mobile' },
    { value: 'tablet', svgIcon: tabletIcon, 'aria-label': 'Tablet' },
    { value: 'desktop', svgIcon: laptopIcon, 'aria-label': 'Desktop' }
];

const showTooltips = ref(false);
const kendoIconValue = ref('mobile');
const customIconValue = ref('mobile');
const iconOnlyValue = ref('mobile');

const iconOnlyItemsWithTitle = computed(() =>
    iconOnlyItems.map((item) => ({
        ...item,
        title: item['aria-label']
    }))
);
</script>
