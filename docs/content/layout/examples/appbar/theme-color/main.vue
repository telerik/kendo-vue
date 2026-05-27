<template>
    <div>
        <div class="wrap" v-for="(color, index) in themeColors" :key="index">
            <AppBar :theme-color="color.value">
                <AppBarSection>
                    <KButton fill-mode="flat" :svg-icon="menuIcon"></KButton>
                </AppBarSection>

                <AppBarSpacer :width="8" />

                <AppBarSection>
                    <h1 class="title">{{ color.text }} AppBar</h1>
                </AppBarSection>
                {{ color.value }}
                <AppBarSpacer />

                <AppBarSection>
                    <KButton fill-mode="flat">
                        <div class="badge">
                            <SvgIcon :icon="menuIcon" />
                            <Badge theme-color="info" shape="dot" />
                        </div>
                    </KButton>
                </AppBarSection>
            </AppBar>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-vue-layout';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Badge } from '@progress/kendo-vue-indicators';
import { SvgIcon } from '@progress/kendo-vue-common';
import { menuIcon } from '@progress/kendo-svg-icons';

const themeColors = ref([
    {
        text: 'Base',
        value: 'base',
    },
    {
        text: 'Primary',
        value: 'primary',
    },
    {
        text: 'Secondary',
        value: 'secondary',
    },
    {
        text: 'Tertiary',
        value: 'tertiary',
    },
    {
        text: 'Inverse',
        value: 'inverse',
    },
]);
</script>

<style>
body {
    background: #dfdfdf;
}
.title {
    text-transform: capitalize;
    font-size: 18px;
    margin: 0;
}
.k-badge-container {
    margin-right: 4px;
}
.k-icon {
    font-size: 18px;
}
.k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
    padding: 0;
}

.wrap {
    margin-bottom: 30px;
}
.badge {
    position: relative;
    overflow: visible;
}
</style>
