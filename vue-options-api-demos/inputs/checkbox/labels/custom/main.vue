<template>
    <div>
        <checkbox :id="'chb1'">
            <label
            class="k-checkbox-label"
            :for="'chb1'"
            :style="{ display:'inline-block'}"
            >
            By clicking <a href="#">Sign Up</a>, you agree to our Terms and
            Conditions.
            </label>
        </checkbox>
    </div>
</template>
<script>
import { Checkbox } from "@progress/kendo-vue-inputs";
import { Label } from "@progress/kendo-vue-labels";

export default {
    components: {
        checkbox: Checkbox,
        label: Label
    }
}
</script>

