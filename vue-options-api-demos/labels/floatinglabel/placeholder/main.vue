<template>
        <floatinglabel 
            :editor-id="editorId" 
            :editor-value="value"
            :label="'Home Address:'">
            <kinput :style="{ width: '230px' }" 
                :id="editorId"
                :placeholder="placeholder"
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
        editorId: 'homeaddress',
        placeholder : 'e.g.: Dublin blvd',
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

