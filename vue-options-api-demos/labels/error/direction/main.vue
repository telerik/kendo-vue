<template>
    <formelement style="max-width: 400px">
        <klabel :editor-id="editorId" >
            First name:&nbsp;
        </klabel>
        <kinput :style="{ width: '230px' }" 
            :id="editorId"
            @change="onChange"
            />
        <error v-if="!showValidationMessage" :direction="'end'">
            {{validationMessage}}
        </error>
    </formelement>
</template>
<script>
import { FormElement } from "@progress/kendo-vue-form";
import { Label , Error } from "@progress/kendo-vue-labels";
import { Input } from "@progress/kendo-vue-inputs";

export default {
    components: {
        klabel: Label ,
        error: Error,
        formelement: FormElement,
        kinput: Input
    },
    data: function(){
      return {
        editorId: 'firstName',
        isValid:!!this.value,
        validationMessage: "This field is required.",
        value: undefined,
      }
    },
    computed: {
        showValidationMessage() {
            return this.isValid;
        }
    },
    methods: {
        onChange: function(e){
            e.value.length > 0 ? this.isValid=true : this.isValid=false;
            this.value = e.value;
        }
    }
}
</script>

