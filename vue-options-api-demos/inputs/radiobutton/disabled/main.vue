<template>
    <div>
        <radiobutton
            :name="'group1'"
            :checked="true"
            :disabled="true"
            :label="'Disabled checked radio'"
        />
        <radiobutton
            :name="'group1'"
            :disabled="true"
            :label="'Disabled unchecked radio'"
        />
    </div>
</template>
<script>
import { RadioButton } from "@progress/kendo-vue-inputs";

export default {
    components: {
        radiobutton: RadioButton,
    }
}
</script>

