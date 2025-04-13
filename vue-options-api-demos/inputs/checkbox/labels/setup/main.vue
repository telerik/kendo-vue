<template>
    <div>
        <checkbox :id="'chb1'" :label="'Checkbox label'" />
        <br />
        <br />
        <checkbox
            :id="'chb2'"
            :label="'Checkbox label before'"
            :label-placement="'before'"
        />
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

