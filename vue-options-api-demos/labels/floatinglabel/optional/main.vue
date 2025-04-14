<template>
        <floatinglabel 
            :editor-id="editorId" 
            :editor-value="value"
            :optional="true"
            :label="'First Name'">
            <kinput :style="{ width: '230px' }" 
                :id="editorId"
                @change="onChange"
                />
        </floatinglabel>
</template>

<script>
import { FloatingLabel } from "@progress/kendo-vue-labels";
import { Input } from "@progress/kendo-vue-inputs";

export default {
    components: {
        floatinglabel: FloatingLabel,
        kinput: Input
    },
    data: function(){
      return {
        editorId: 'firstName',
        value: undefined,
      }
    },
    methods: {
      onChange: function(e){
          this.value = e.value;
      }
    }
}
</script>

