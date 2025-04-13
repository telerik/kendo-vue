<template>
  <div>
    <div class="flex-container">
      <div>Badge Position</div>
      <div class="example">
        <DropDownList
          :data-items="positions"
          :value="position"
          @change="handleChange"
        />
      </div>
    </div>
    <div class="flex-container">
      <div class="badge">
        <Avatar :shape="'square'" :type="'text'"> SB </Avatar>
        <Badge :position="position" :theme-color="'success'">
          <SvgIcon :icon="checkIcon" :size="'xsmall'" />
        </Badge>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge } from "@progress/kendo-vue-indicators";
import { Avatar } from "@progress/kendo-vue-layout";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { SvgIcon } from "@progress/kendo-vue-common";
import { checkIcon } from "@progress/kendo-svg-icons";

export default {
  components: {
    Badge,
    Avatar,
    DropDownList,
    SvgIcon,
  },
  data() {
    return {
      position: "edge",
      positions: ["inside", "edge", "outside"],
      checkIcon,
    };
  },
  methods: {
    handleChange(e) {
      this.position = e.target.value;
    },
  },
};
</script>

<style>
.flex-container {
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
}
.example {
  display: flex;
  margin-bottom: 30px;
}
.badge {
  position: relative;
  overflow: visible;
  padding-left: 130px;
}
</style>
