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

<script setup>
import { ref } from "vue";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { Stepper } from "@progress/kendo-vue-layout";
import {
    lockIcon,
    userIcon,
    myspaceIcon,
    trackChangesAcceptIcon,
} from "@progress/kendo-svg-icons";

const value = ref(1);
const orientation = ref("horizontal");
const items = ref([
    { svgIcon: lockIcon, label: "Account Info" },
    { svgIcon: userIcon, label: "Personal Info" },
    { svgIcon: myspaceIcon, label: "Membership" },
    { svgIcon: trackChangesAcceptIcon, label: "Verification" },
]);

function handleChange(e) {
    value.value = e.value;
}

function handleOrientationChange(e) {
    orientation.value = e.target.value;
}
</script>
