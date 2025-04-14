<template>
        <div>
            <klabel :id="labelId" :editor-id="editorId">
              Shirt Size:&nbsp;
            </klabel>
             <dropdownlist
          :style="{ width: '230px' }" 
                :id="editorId"
                :ariaLabelledBy="labelId"
                :data-items="sizes"
                @change="onChange"
                />
        </div>
</template>
<script>
import { Label } from "@progress/kendo-vue-labels";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

export default {
    components: {
        klabel: Label,
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

