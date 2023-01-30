<template>
   <div class="example">
       <kTextArea  :rows="5" />
       autosize
       <kTextArea :auto-size="true"  :rows="2" />
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

