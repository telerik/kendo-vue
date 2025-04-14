<template>
    <div>
        <checkbox :default-checked="true" :label="'Default checked'" />
    </div>
</template>
<script>
import { Checkbox } from "@progress/kendo-vue-inputs";

export default {
    components: {
        checkbox: Checkbox
    }
}
</script>

