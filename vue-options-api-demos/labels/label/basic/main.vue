  <template>
      <div>
          <klabel :editor-id="editorId">
              First Name:&nbsp;        
          </klabel>
          <kinput :style="{ width: '230px' }" :id="editorId" />
      </div>
  </template>
  
  <script>
  import { Label } from "@progress/kendo-vue-labels";
  import { Input } from "@progress/kendo-vue-inputs";

  export default {
      components: {
          klabel: Label ,
          kinput: Input
      },
      data: function(){
        return {
          editorId: 'firstName',
          value: undefined,
        }
      }
  }
  </script>

