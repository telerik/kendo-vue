<template>
        <floatinglabel 
            :editor-id="editorId" 
            :editor-value="ddlState"
            :label="'Shirt Size:'">
             <dropdownlist
          :style="{ width: '230px' }" 
                :id="editorId"
                :ariaLabelledBy="labelId"
                :data-items="sizes"
                @change="onChange"
                />
        </floatinglabel>
</template>
<script>
import { FloatingLabel } from "@progress/kendo-vue-labels";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

export default {
    components: {
        floatinglabel: FloatingLabel,
        dropdownlist: DropDownList
    },
    data: function(){
      return {
        editorId: 'sizes-editor',
        labelId: 'sizes-label',
        ddlState: undefined,
        sizes: ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"]
      }
    },
    methods: {
      onChange: function(e){
          this.ddlState = e.value;
      }
    }
}
</script>

