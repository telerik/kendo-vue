<template>
   <div class="example">
       <kSwitch :on-label="'I'" :off-label="'O'" />
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

