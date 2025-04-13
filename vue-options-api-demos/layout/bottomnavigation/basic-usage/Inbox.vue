<template>
  <div>
    <h1 :class="'title-basic-usage-bottomnav k-color-primary'">Mail Inbox</h1>
    <div :class="'list'">
      <div :class="'list-item'">
        <Avatar
          :type="'text'"
          :shape="'circle'"
          :theme-color="'tertiary'"
          :rounded="'full'"
        >
          AB
        </Avatar>
        <div>
          Hi Tom, Since Monday I'll be out of office, I'm rescheduling the
          meeting for Tuesday.
        </div>
      </div>
      <div :class="'list-item separator-basic-usage-bottomnav'" />
      <div :class="'list-item sub-title-basic-usage-bottomnav'">Last Week</div>
      <div :class="'list-item'">
        <Avatar
          :type="'text'"
          :shape="'circle'"
          :theme-color="'info'"
          :rounded="'full'"
        >
          TY
        </Avatar>
        <div>
          Hi Tom, my aunt comes for a visit this Saturday, so I can’t come back
          to St. Pete…
        </div>
      </div>
      <div :class="'list-item'">
        <Avatar
          :type="'text'"
          :shape="'circle'"
          :theme-color="'warning'"
          :rounded="'full'"
        >
          IH
        </Avatar>
        <div>
          Dear All, We would like to inform you that IT will be doing planned
          upgrades…
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Avatar } from "@progress/kendo-vue-layout";
export default {
  components: {
    Avatar,
  },
  data() {
    return {
      text: "Home",
    };
  },
};
</script>
