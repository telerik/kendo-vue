<template>
   <div class="example">
       <kTextArea :default-value="value"  :rows="4" />
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
            value: 'Textarea default value'
        };
    },
    
};
</script>

