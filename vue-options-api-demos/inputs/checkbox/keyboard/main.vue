<template>
    <div>
        <checkbox ref="checkboxRef" :label="'Initially focused'" />
        <br />
        <checkbox :label="'Secondary focused'" />
    </div>
</template>
<script>
import { Checkbox } from "@progress/kendo-vue-inputs";

export default {
    components: {
        checkbox: Checkbox,
    },
    mounted: function(){
        this.$refs.checkboxRef.focusElement();
    }
}
</script>

