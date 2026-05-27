<template>
    <AppBar>
        <AppBarSection>
            <KButton fill-mode="flat">
                <SvgIcon :icon="menuIconRef" />
            </KButton>
        </AppBarSection>

        <AppBarSpacer :width="8" />
        <AppBarSection>
            <h1 class="title">Weather News</h1>
        </AppBarSection>

        <AppBarSpacer :width="32" />
        <AppBarSection>
            <KInput placeholder="Search" />
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection class="social-section">
            <KButton fill-mode="flat">
                <SvgIcon :icon="facebookIconRef" />
            </KButton>
            <KButton fill-mode="flat">
                <SvgIcon :icon="xLogoIconRef" />
            </KButton>
            <KButton fill-mode="flat">
                <SvgIcon :icon="pinterestIconRef" />
            </KButton>
            <KButton fill-mode="flat">
                <SvgIcon :icon="googleIconRef" />
            </KButton>
        </AppBarSection>
    </AppBar>
    <div class="page-content">
        <p>
            Light variable wind or sea breeze. Partly cloudy with sunny spells today, but patches of fog in some places
            by the coast and some afternoon rainshowerstowards the east. Day time temperatures 10 to 16 deg. C.
        </p>
        <p>
            Westerly or variable wind 3-8 m/s tomorrow. Mostly cloudy and locally some light rain in the west part of
            Iceland. Partly cloudy in other parts, but fog near the Eastfjords. Temperature 10 to 17 deg. C, warmest in
            Southeast-Iceland.
        </p>
        <p>
            Westerly 5-10 m/s and cloudy in the west part. Light variable wind and widely fair in other parts of the
            country, but fog in places by the north and east coast. Temperature 10 to 17 deg. C., warmest in the
            southeast.
        </p>
        <p>
            On Friday and Saturday: Westerly wind 3-10 m/s. Mostly cloudy and light precipitation, but mainly dry in the
            east. Temperature 10 to 15 deg. C.
        </p>
    </div>

    <AppBar position="bottom" theme-color="inverse">
        <AppBarSpacer :width="150" />
        <AppBarSection>
            <ul>
                <li><span>What's New</span></li>
                <li><span>Subscriptions</span></li>
                <li><span>Successful Stories</span></li>
                <li><span>About Us</span></li>
                <li><span>Contacts</span></li>
            </ul>
        </AppBarSection>
        <AppBarSpacer :width="100" />
    </AppBar>
</template>

<script setup>
import { ref } from 'vue';
import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-vue-layout';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Input as KInput } from '@progress/kendo-vue-inputs';
import { SvgIcon } from '@progress/kendo-vue-common';
import { facebookIcon, xLogoIcon, pinterestIcon, googleIcon, menuIcon } from '@progress/kendo-svg-icons';

const menuIconRef = ref(menuIcon);
const facebookIconRef = ref(facebookIcon);
const xLogoIconRef = ref(xLogoIcon);
const pinterestIconRef = ref(pinterestIcon);
const googleIconRef = ref(googleIcon);
</script>

<style>
#app {
    padding: 0 !important;
}
.title {
    font-size: 18px;
    margin: 0;
}
.social-section .k-icon {
    margin: 0 4px;
}
ul {
    font-size: 12px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
}
li {
    margin: 0 12px;
}
li:hover {
    cursor: pointer;
    color: #ccc;
}
.page-content {
    height: 90%;
    background: white;
    padding: 20px 10px;
}
.k-button.k-button-md.k-rounded-md.k-button-flat.k-button-flat-base {
    padding: 0;
}
</style>
