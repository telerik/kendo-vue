<template>
  <div class="example">
    <h5>Using the BadgeContainer Component</h5>
    <div class="wrap">
      <BadgeContainer
        :content="'content'"
        :size="'small'"
        :rounded="'full'"
        :align="{
          vertical: 'bottom',
          horizontal: 'end',
        }"
        :theme-color="'success'"
        :cutout-border="true"
      >
        <Avatar :type="'text'">KP</Avatar>
        <template v-slot:content>
          <SvgIcon :icon="checkIcon" :size="'small'" />
        </template>
      </BadgeContainer>
      <BadgeContainer :theme-color="'info'" :shape="'dot'" :content="'content'">
        Available Updates
        <template v-slot:content>
          <SvgIcon :icon="checkIcon" :size="'small'" />
        </template>
      </BadgeContainer>
      <BadgeContainer
        :content="'content'"
        :align="{
          vertical: 'bottom',
          horizontal: 'end',
        }"
        :theme-color="'dark'"
      >
        <SvgIcon :icon="copyIcon" style="width: 36px; color: #4eb9ed" />
        <template v-slot:content> 11 </template>
      </BadgeContainer>
      <BadgeContainer :content="'content'">
        <SvgIcon :icon="cartIcon" style="width: 36px" />
        <template v-slot:content> 4 </template>
      </BadgeContainer>
      <BadgeContainer
        :content="'content'"
        :theme-color="'tertiary'"
        :rounded="'full'"
      >
        <KButton>Action</KButton>
        <template v-slot:content> 3 </template>
      </BadgeContainer>
    </div>
    <h5>Using the Badge Component</h5>
    <div class="wrap">
      <span class="mail">
        Mail
        <Badge>87</Badge>
      </span>
      <span class="updates">
        Available Updates
        <Badge :theme-color="'info'" :shape="'dot'">
          <SvgIcon :icon="checkIcon" :size="'small'" />
        </Badge>
      </span>
      <span class="files">
        <SvgIcon :icon="copyIcon" style="width: 36px; color: #4eb9ed" />
        <Badge
          :align="{
            vertical: 'bottom',
            horizontal: 'end',
          }"
          :theme-color="'dark'"
        >
          11
        </Badge>
      </span>
      <span class="shopping-cart">
        <SvgIcon :icon="cartIcon" style="width: 36px" :size="'small'" />
        <Badge>4</Badge>
      </span>
      <span class="sent-items">
        <KButton>
          Action
          <Badge :theme-color="'tertiary'" :rounded="'full'">34</Badge>
        </KButton>
      </span>
    </div>
  </div>
</template>

<script>
import { BadgeContainer, Badge } from "@progress/kendo-vue-indicators";
import { Avatar } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import { SvgIcon } from "@progress/kendo-vue-common";
import { copyIcon, cartIcon, checkIcon } from "@progress/kendo-svg-icons";

export default {
  components: {
    BadgeContainer,
    Badge,
    Avatar,
    KButton: Button,
    SvgIcon,
  },
  data() {
    return {
      cartIcon,
      copyIcon,
      checkIcon,
    };
  },
};
</script>
<style>
.example > div {
  margin-bottom: 40px;
}
.wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
.mail,
.shopping-cart,
.updates,
.files,
.sent-items {
  position: relative;
  overflow: visible;
}
</style>
