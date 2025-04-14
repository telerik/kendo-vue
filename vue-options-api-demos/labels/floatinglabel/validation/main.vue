<template>
    <formelement style="max-width: 400px">
      <fieldwrapper>
        <floatinglabel 
            :editor-id="editorId" 
            :editor-value="value"
            :label="'First Name:'"
            :label-class="'k-form-label'">
            <div class="k-form-field-wrap">
                <kinput :style="{ width: '230px' }" 
                    :id="editorId"
                    :valid="isValid"
                    @change="onChange"
                    />
                <error v-if="!showValidationMessage">
                    {{validationMessage}}
                </error>
            </div>
        </floatinglabel>
      </fieldwrapper>
    </formelement>
</template>
<script>
import { FormElement, FieldWrapper } from "@progress/kendo-vue-form";
import { FloatingLabel, Error } from "@progress/kendo-vue-labels";
import { Input } from "@progress/kendo-vue-inputs";

export default {
    components: {
        floatinglabel: FloatingLabel,
        error: Error,
        formelement: FormElement,
        fieldwrapper: FieldWrapper,
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

