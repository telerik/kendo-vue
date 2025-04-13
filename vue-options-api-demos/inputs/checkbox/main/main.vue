<template>
    <div>
        <checkbox :label="'Unchecked state'" />
        <br />
        <checkbox :default-checked="true" :label="'Checked state'" />
        <br />
        <checkbox :value="null" :label="'Indeterminate state'" />
        <br />
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

