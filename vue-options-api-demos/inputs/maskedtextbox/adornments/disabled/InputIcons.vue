<template>
    <div>
        <SvgIcon :icon="menuIcon" />
        <InputSeparator />
        <SvgIcon :icon="gearIcon" />
    </div>
</template>
<script>
import { gearIcon, menuIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-vue-common";
import { InputSeparator } from "@progress/kendo-vue-inputs";
export default {
    components: {
        InputSeparator,
        SvgIcon
    },
    data(){
        return {
            menuIcon,
            gearIcon
        }
    }
};
</script>
