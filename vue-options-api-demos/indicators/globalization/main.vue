<template>
  <div class="example" :dir="'rtl'">
    <div class="col-6">
      <div class="row badges">
        <div class="badge-container">
          <KButton :theme-color="'primary'">Action</KButton>
          <Badge
            :align="{
              vertical: 'top',
              horizontal: 'end',
            }"
            :theme-color="'secondary'"
            >8</Badge
          >
        </div>
        <div class="badge-container">
          <span
            :style="{
              position: 'relative',
              overflow: 'visible',
            }"
          >
            <SvgIcon :icon="bellIcon" style="width: 36px" />
          </span>
          <Badge :theme-color="'info'">99+</Badge>
        </div>
        <div class="badge-container">
          <Avatar :type="'image'">
            <img
              :src="avatarImage"
              :alt="'Avatar Image'"
            />
          </Avatar>
          <Badge
            :size="'small'"
            :align="{
              vertical: 'bottom',
              horizontal: 'end',
            }"
            :theme-color="'success'"
            :cutout-border="true"
          >
            <SvgIcon :icon="checkIcon" :size="'xsmall'" />
          </Badge>
        </div>
      </div>
    </div>
    <div class="col-6">
      <Card
        :style="{
          'min-width': '350px',
          width: '350px',
          height: 'auto',
        }"
      >
        <CardHeader class="k-hbox">
          <Skeleton
            :shape="'circle'"
            :style="{
              width: '45px',
              height: '45px',
              'margin-left': '16px',
            }"
          />
          <div
            :style="{
              flex: '1 1 50%',
            }"
          >
            <Skeleton
              :shape="'text'"
              :style="{
                width: '100%',
              }"
            />
            <Skeleton
              :shape="'text'"
              :style="{
                width: '40%',
              }"
            />
          </div>
        </CardHeader>
        <Skeleton
          :shape="'rectangle'"
          :style="{
            width: '100%',
            height: '230px',
          }"
        />
        <CardFooter>
          <Skeleton
            :shape="'text'"
            :style="{
              width: '100%',
            }"
          />
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
<script>
import { Button } from "@progress/kendo-vue-buttons";
import { Badge, Skeleton } from "@progress/kendo-vue-indicators";
import {
  Avatar,
  Card,
  CardHeader,
  CardFooter,
} from "@progress/kendo-vue-layout";
import { SvgIcon } from "@progress/kendo-vue-common";
import { bellIcon, checkIcon } from "@progress/kendo-svg-icons";

const avatarImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';

export default {
  components: {
    Avatar,
    Badge,
    Skeleton,
    Card,
    CardHeader,
    CardFooter,
    KButton: Button,
    SvgIcon,
  },
  data() {
    return { bellIcon, checkIcon, avatarImage };
  },
};
</script>
<style>
.example {
  display: flex;
}
.badge-container {
  position: relative;
  overflow: visible;
}
.badges {
  justify-content: space-between;
  padding: 15px;
}
</style>
