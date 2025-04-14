<template>
  <div class="contacts">
    <div class="k-hbox">
      <span class="badge">
        <Avatar :type="'image'">
          <img :src="managerAvatar" :alt="'Manager Image'" />
        </Avatar>
        <Badge
          :size="'small'"
          :rounded="'full'"
          :align="{
            vertical: 'bottom',
            horizontal: 'end',
          }"
          :theme-color="'error'"
          :cutout-border="true"
        >
          <SvgIcon :icon="minusIcon" :size="'xsmall'" />
        </Badge>
      </span>
      <div class="contact-info">
        <h2>Michael Holz</h2>
        <p>Manager</p>
      </div>
    </div>
    <div class="k-hbox">
      <span class="badge">
        <Avatar :type="'image'">
          <img :src="designerAvatar" :alt="'Designer Image'" />
        </Avatar>
        <Badge
          :size="'small'"
          :rounded="'full'"
          :align="{
            vertical: 'bottom',
            horizontal: 'end',
          }"
          :theme-color="'success'"
          :cutout-border="true"
        >
          <SvgIcon :icon="checkIcon" :size="'xsmall'" />
        </Badge>
      </span>
      <div class="contact-info">
        <h2>Lilly Nelson</h2>
        <p>UX Designer</p>
      </div>
    </div>
    <div class="k-hbox">
      <span class="badge">
        <Avatar :type="'image'">
          <img :src="pmAvatar" :alt="'PM Image'" />
        </Avatar>
        <Badge
          :size="'small'"
          :rounded="'full'"
          :align="{
            vertical: 'bottom',
            horizontal: 'end',
          }"
          :theme-color="'warning'"
          :cutout-border="true"
        >
          <SvgIcon :icon="clockIcon" :size="'xsmall'" />
        </Badge>
      </span>
      <div class="contact-info">
        <h2>André Stewart</h2>
        <p>Product Manager</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Avatar } from "@progress/kendo-vue-layout";
import { Badge } from "@progress/kendo-vue-indicators";
import { SvgIcon } from "@progress/kendo-vue-common";
import { minusIcon, clockIcon, checkIcon } from "@progress/kendo-svg-icons";


const managerImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';
const designerImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/BERGS.jpg';
const pmImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/GOURL.jpg';

export default {
  components: {
    Avatar,
    Badge,
    SvgIcon,
  },
  data() {
    return {
      minusIcon,
      clockIcon,
      checkIcon,
      managerAvatar: managerImage,
      designerAvatar: designerImage,
      pmAvatar: pmImage,
    };
  },
};
</script>

<style>
.badge {
  position: relative;
  overflow: visible;
}
.contacts h2 {
  font-size: 1.3em;
  font-weight: normal;
  margin: 0;
}
.contacts p {
  margin: 0;
  font-size: 0.8em;
}
.k-hbox {
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 12px 14px;
}
.k-hbox .contact-info {
  margin-left: 1em;
}
.k-hbox .contact-info p {
  text-align: left;
}
.k-badge .k-icon {
  font-size: 12px;
  color: white;
}
</style>
