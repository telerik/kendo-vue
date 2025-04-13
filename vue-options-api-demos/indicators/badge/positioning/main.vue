<template>
  <div>
    <div class="flex-container">
      <div>Badge Alignment</div>
      <div class="example">
        <DropDownList
          :style="{ width: '200px' }"
          :data-items="alignments"
          :value="alignment"
          :text-field="'title'"
          :data-item-key="'value'"
          @change="handleAlignment"
        />
      </div>
      <div>Badge Position</div>
      <div class="example">
        <DropDownList
          :style="{ width: '200px' }"
          :data-items="positions"
          :value="position"
          @change="handlePositionChange"
        />
      </div>
    </div>
    <div class="flex-container">
      <div class="wrap">
        <span class="badge">
          <SvgIcon
            :icon="facebookIcon"
            :size="'xlarge'"
            style="color: #5270a4"
          />
          <Badge :align="alignment.value" :position="position"> 11 </Badge>
        </span>
        <span class="badge">
          <SvgIcon
            :icon="twitterIcon"
            :size="'xlarge'"
            style="color: #4eb9ed"
          />
          <Badge :align="alignment.value" :position="position"> 3 </Badge>
        </span>
        <span class="badge">
          <SvgIcon :icon="vimeoIcon" :size="'xlarge'" style="color: #b3d062" />
          <Badge :align="alignment.value" :position="position"> 77 </Badge>
        </span>
        <span class="badge">
          <SvgIcon :icon="envelopBoxIcon" :size="'xlarge'" />
          <Badge :align="alignment.value" :position="position"> 14+ </Badge>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge } from "@progress/kendo-vue-indicators";
import { Avatar } from "@progress/kendo-vue-layout";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { SvgIcon } from "@progress/kendo-vue-common";
import {
  facebookIcon,
  twitterIcon,
  vimeoIcon,
  envelopBoxIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    Badge,
    Avatar,
    DropDownList,
    SvgIcon,
  },
  data() {
    return {
      facebookIcon,
      twitterIcon,
      vimeoIcon,
      envelopBoxIcon,
      position: "edge",
      positions: ["inside", "edge", "outside"],
      alignment: {
        title: "top end",
        value: {
          vertical: "top",
          horizontal: "end",
        },
      },
      alignments: [
        {
          title: "top start",
          value: {
            vertical: "top",
            horizontal: "start",
          },
        },
        {
          title: "top end",
          value: {
            vertical: "top",
            horizontal: "end",
          },
        },
        {
          title: "bottom start",
          value: {
            vertical: "bottom",
            horizontal: "start",
          },
        },
        {
          title: "bottom end",
          value: {
            vertical: "bottom",
            horizontal: "end",
          },
        },
      ],
    };
  },
  methods: {
    handleAlignment(e) {
      this.alignment = e.target.value;
    },
    handlePositionChange(e) {
      this.position = e.target.value;
    },
  },
};
</script>

<style>
.badge {
  position: relative;
  overflow: visible;
}

.flex-container {
  display: inline-flex;
  flex-direction: column;
  vertical-align: middle;
}

.example {
  display: flex;
  margin-bottom: 30px;
}

.wrap {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  width: 370px;
}
</style>
