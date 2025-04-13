<template>
    <formelement style="max-width: 400px">
        <klabel :editor-id="editorId" >
            First name:&nbsp;
        </klabel>
        <kinput :style="{ width: '230px' }" 
            :id="editorId"
            :aria-describedby="'firstNameHint'"
            />
        <hint :id="'firstNameHint'">
            e.g.: Peter
        </hint>
    </formelement>
</template>
<script>
import { FormElement } from "@progress/kendo-vue-form";
import { Label, Hint } from "@progress/kendo-vue-labels";
import { Input } from "@progress/kendo-vue-inputs";

export default {
    components: {
        klabel: Label ,
        hint: Hint,
        formelement: FormElement,
        kinput: Input
    },
    data: function(){
        return {
            editorId: 'firstName',
            validationMessage: "This field is required.",
        }
    }
}
</script>

