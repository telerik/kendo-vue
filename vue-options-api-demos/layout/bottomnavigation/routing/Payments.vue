<template>
  <div>
    <h3 class="title k-color-primary">{{ text }}</h3>
    <Avatar :type="'icon'" :size="'large'">
      <SvgIcon :icon="dollarIcon" :size="'large'"/>
    </Avatar>
  </div>
</template>
<script>
import { Avatar } from "@progress/kendo-vue-layout";
import { SvgIcon } from "@progress/kendo-vue-common";
import { dollarIcon } from "@progress/kendo-svg-icons";
export default {
    components: {
        Avatar,
        SvgIcon
    },
    data() {
        return {
            text: "Payments",
            dollarIcon
        };
    },
};
</script>
