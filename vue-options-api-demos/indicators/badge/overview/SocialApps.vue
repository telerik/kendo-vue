<template>
  <div class="wrap">
    <BadgeContainer :content="'content'" :rounded="'full'">
      <SvgIcon :icon="facebookIcon" :size="'xlarge'" style="color: #5270a4" />
      <template v-slot:content>
        <span> 1 </span>
      </template>
    </BadgeContainer>
    <BadgeContainer :content="'content'" :rounded="'full'">
      <SvgIcon :icon="twitterIcon" :size="'xlarge'" style="color: #4eb9ed" />
      <template v-slot:content>
        <span>3 </span>
      </template>
    </BadgeContainer>
    <BadgeContainer
      :content="'content'"
      :rounded="'full'"
      style="color: #b3d062"
    >
      <SvgIcon :icon="vimeoIcon" :size="'xlarge'" />
      <template v-slot:content>
        <span>77 </span>
      </template>
    </BadgeContainer>
    <BadgeContainer :content="'content'" :rounded="'full'">
      <SvgIcon :icon="envelopBoxIcon" :size="'xlarge'" />
      <template v-slot:content>
        <span>14+ </span>
      </template>
    </BadgeContainer>
  </div>
</template>
<script>
import { BadgeContainer } from "@progress/kendo-vue-indicators";
import { SvgIcon } from "@progress/kendo-vue-common";
import {
  facebookIcon,
  twitterIcon,
  vimeoIcon,
  envelopBoxIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    BadgeContainer,
    SvgIcon,
  },
  data() {
    return {
      facebookIcon,
      twitterIcon,
      vimeoIcon,
      envelopBoxIcon,
    };
  },
};
</script>

<style>
.wrap {
  display: flex;
  justify-content: space-between;
  padding: 21px 14px;
  border-bottom: 1px solid #ccc;
}
</style>
