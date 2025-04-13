<template>
  <div>
    <p>Change the orientation:</p>
    <DropDownList
      :style="{ width: '220px' }"
      :data-items="['horizontal', 'vertical']"
      :value="orientation"
      @change="handleOrientationChange"
    />
    <hr />
    <Stepper
      :value="value"
      @change="handleChange"
      :items="items"
      :orientation="orientation"
    />
  </div>
</template>

<script>
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { Stepper } from "@progress/kendo-vue-layout";
import {
  lockIcon,
  userIcon,
  myspaceIcon,
  trackChangesAcceptIcon,
} from "@progress/kendo-svg-icons";
export default {
  components: {
    Stepper,
    DropDownList,
  },
  data() {
    return {
      value: 1,
      orientation: "horizontal",
      items: [
        {
          svgIcon: lockIcon,
          label: "Account Info",
        },
        {
          svgIcon: userIcon,
          label: "Personal Info",
        },
        {
          svgIcon: myspaceIcon,
          label: "Membership",
        },
        {
          svgIcon: trackChangesAcceptIcon,
          label: "Verification",
        },
      ],
    };
  },
  methods: {
    handleChange(e) {
      this.value = e.value;
    },
    handleOrientationChange(e) {
      this.orientation = e.target.value;
    },
  },
};
</script>
