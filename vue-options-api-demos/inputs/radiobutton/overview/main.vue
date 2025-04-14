<template>
    <div>
        <radiobutton
            :name="'group1'"
            :value="'first'"
            :checked="selectedValue==='first'"
            @change="handleChange"
            :label="'First'"
        />
        <radiobutton
            :name="'group1'"
            :value="'second'"
            :checked="selectedValue==='second'"
            @change="handleChange"
            :label="'Second'"
        />
        <radiobutton
            :name="'group1'"
            :value="'third'"
            :checked="selectedValue==='third'"
            @change="handleChange"
            :label="'Third'"
        />
    </div>
</template>
<script>
import { RadioButton } from "@progress/kendo-vue-inputs";

export default {
    components: {
        radiobutton: RadioButton,
    },
    data: function(){
        return {
            selectedValue: "first"
        }
    },
    methods: {
        handleChange: function(e){
            this.selectedValue = e.value;
        }
    }
}
</script>

