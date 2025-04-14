<template>
    <fieldwrapper>
        <div class="k-form-field-wrap">
            <kinput :style="{ width: '230px' }" 
                :id="id"
                :value="value"
                @input="handleChange"
                />
        </div>
    </fieldwrapper> 
</template>
<script>
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Input } from "@progress/kendo-vue-inputs";
export default {
    props: {
        id: String,
        value: {
            type: String,
            default: ''
        }
    },
    components: {
      fieldwrapper: FieldWrapper,
      kinput: Input
    },
    emits: {
        change: null
    },
    methods: {
        handleChange(e){
            this.$emit('change', e);
        }
    }
}
</script>

