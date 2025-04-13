<template>
    <div>
        <checkbox :disabled="true" :label="'Disabled unchecked'" />
        <br />
        <checkbox :disabled="true" :checked="true" :label="'Disabled checked'" />
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

