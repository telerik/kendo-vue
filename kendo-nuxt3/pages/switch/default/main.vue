<template>
   <div class="example">
       <kSwitch :default-checked="true" />
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

