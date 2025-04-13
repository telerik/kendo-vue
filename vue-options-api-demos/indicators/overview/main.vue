<template>
  <div class="example" style="display: flex">
    <div class="col-3">
      <div class="row">
        <div>Badges</div>
      </div>
      <div class="row">
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
      </div>
      <div class="row">
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
      </div>
      <div class="row">
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
    <div class="col-3">
      <div class="row">
        <div>Loaders</div>
      </div>
      <div class="row">
        <div>
          <Loader :type="'pulsing'" />
        </div>
      </div>
      <div class="row">
        <div>
          <Loader :type="'infinite-spinner'" />
        </div>
      </div>
      <div class="row">
        <div>
          <Loader :type="'converging-spinner'" />
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="row">
        <div class="col-3">Skeleton</div>
      </div>
      <div class="row">
        <div class="example-wrap k-d-flex k-justify-content-around">
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
                  'margin-right': '16px',
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
    </div>
  </div>
</template>
<script>
import { Button } from "@progress/kendo-vue-buttons";
import { Badge, Loader, Skeleton } from "@progress/kendo-vue-indicators";
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
    Loader,
    Skeleton,
    Badge,
    Card,
    CardHeader,
    CardFooter,
    KButton: Button,
    Avatar,
    SvgIcon,
  },
  data() {
    return { bellIcon, checkIcon, avatarImage };
  },
};
</script>

<style>
.row {
  margin: 20px;
}
.badge-container {
  position: relative;
  overflow: visible;
}
</style>
