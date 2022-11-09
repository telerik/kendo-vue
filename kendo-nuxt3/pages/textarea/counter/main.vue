<template>
   <div :style="{ position: 'absolute'}">
       <kTextArea :maxlength="max" v-model="value" :rows="4" />
        <Hint :direction="'end'">
        {{value.length}} / {{max}}
      </Hint>
    </div> 
</template>

<script lang="ts">
import { TextArea } from "@progress/kendo-vue-inputs";
import { Hint } from "@progress/kendo-vue-labels";

export default {
    components: {
       kTextArea: TextArea,
       Hint
    },
    data() {
        return {
            max: 20,
            value: ''
        }
    }
};
</script>

