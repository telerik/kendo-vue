<template>
   <div class="example">
       <kSwitch :disabled="true" />
    </div> 
</template>

<script lang="ts">
import { Switch } from "@progress/kendo-vue-inputs";

export default {
    components: {
       kSwitch: Switch
    },
};
</script>

