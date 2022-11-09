<template>
   <div class="example">
      <div class="example-wrap">
        <div
          :style="{
            width: '50%',
          }"
        >
          <Label :editor-id="editorId">Pick the animation:&nbsp;</Label>
          <DropDownList
            :id="editorId"
            :value="type"
            :data-items="types"
            @change="handleChange"
          />
        </div>
        <br />
        <div
          class="row"
          :style="{
            width: '50%'
          }"
        >
          <div class="col-4">
            <Loader :size="'small'" :type="type" />
          </div>
          <div class="col-4">
            <Loader :type="type" />
          </div>
          <div class="col-4">
            <Loader :size="'large'" :type="type" />
          </div>
        </div>
      </div>
    </div>
     
</template>

<script>
import { Loader } from "@progress/kendo-vue-indicators";
import { Label } from "@progress/kendo-vue-labels";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

export default {
    components: {
       Loader, Label, DropDownList
    },
    data () {
      return {
        type: "pulsing",
        editorId: "changeAnimation",
        types: ["pulsing", "infinite-spinner", "converging-spinner"],
      }
    },
    methods: {
      handleChange (e) {
         this.type = e.value;
      }
    }
};
</script>

