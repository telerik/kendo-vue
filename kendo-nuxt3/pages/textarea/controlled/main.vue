<template>
   <div class="example">
       {{value}}
       <kTextArea :value="value" @input="handleChange" :rows="2" />
       v-model
         <kTextArea v-model="value" :rows="2" />
    </div> 
</template>

<script lang="ts">
import { TextArea } from "@progress/kendo-vue-inputs";

export default {
    components: {
       kTextArea: TextArea
    },
    data() {
        return {
            value: ''
        };
    },
    methods: {
        handleChange(e) {
            this.value = e.value;
        }
    }
};
</script>

