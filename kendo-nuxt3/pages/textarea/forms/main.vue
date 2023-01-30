<template>
   <div class="example">
       to do
       <kTextArea :placeholder="'Disabled textarea'" :rows="4" />
    </div> 
</template>

<script lang="ts">
import { TextArea } from "@progress/kendo-vue-inputs";

export default {
    components: {
       kTextArea: TextArea
    },
};
</script>

