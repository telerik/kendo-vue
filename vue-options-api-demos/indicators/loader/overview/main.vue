 <template>
  <div class="example">
    <div class="example-wrap">
      <div :style="{ width: '50%' }">
        <klabel :editor-id="editorId">Pick the animation:&nbsp;</klabel>
         <dropdownlist
          :style="{ width: '230px' }"
          :id="editorId"
          :value="type"
          :data-items="types"
          @change="onTypeChange"
        />
      </div>
      <br />
      <div :class="'row'" :style="{ width: '50%' }">
        <div class="col-4">
          <loader :size="'small'" :type="type" />
        </div>
        <div class="col-4">
          <loader :type="type" />
        </div>
        <div class="col-4">
          <loader :size="'large'" :type="type" />
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
    loader: Loader,
    klabel: Label,
    dropdownlist: DropDownList,
  },
  data: function () {
    return {
      type: "pulsing",
      editorId: "changeAnimation",
      types: ["pulsing", "infinite-spinner", "converging-spinner"],
    };
  },
  methods: {
    onTypeChange(e) {
      this.type = e.value;
    },
  },
};
</script>
