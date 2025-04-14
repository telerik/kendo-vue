<template>
  <div
    id="Education"
    :style="{
      display: 'flex',
      justifyContent: 'space-evenly',
      marginBottom: 10,
    }"
  >
    <div :style="{ width: '47%' }">
      <Card>
        <CardImage
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
          style="padding: 20px 20px"
        />
        <div>
          <CardHeader>
            <CardTitle>Vue</CardTitle>
            <CardSubtitle>
              <span class="reviews">
                <span
                  :style="{
                    color: '#ffce2a',
                  }"
                >
                  <SvgIcon :icon="starIcon" />
                </span>
                <span
                  :style="{
                    color: '#ffce2a',
                  }"
                >
                  <SvgIcon :icon="starIcon" />
                </span>
                <span
                  :style="{
                    color: '#ffce2a',
                  }"
                >
                  <SvgIcon :icon="starIcon" />
                </span>
                <span
                  :style="{
                    color: '#ffce2a',
                  }"
                >
                  <SvgIcon :icon="starIcon" />
                </span>
                <span
                  :style="{
                    color: '#ffce2a',
                  }"
                >
                  <SvgIcon :icon="starIcon" />
                </span>
                <div>5/5 (981)</div>
              </span>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              If you're serious about learning Vue, there's no better place to
              do it. This course includes all of the best practices and newest
              APIs for building professional Vue apps in 2022.
            </p>
          </CardBody>
          <CardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'"
              >Review</kbutton
            >
          </CardActions>
        </div>
      </Card>
    </div>
    <div
      :style="{
        width: '47%',
      }"
    >
      <Card>
        <CardImage
          :src="jslogo"
        />
        <div>
          <CardHeader>
            <CardTitle>Advanced JS</CardTitle>
            <CardSubtitle>
              <span class="reviews">
                <span
                  :style="{
                    color: '#ffce2a',
                  }"
                >
                  <SvgIcon :icon="starIcon" />
                </span>
                <span
                  :style="{
                    color: '#ffce2a',
                  }"
                >
                  <SvgIcon :icon="starIcon" />
                </span>
                <span
                  :style="{
                    color: '#ffce2a',
                  }"
                >
                  <SvgIcon :icon="starIcon" />
                </span>
                <span
                  :style="{
                    color: '#ffce2a',
                  }"
                >
                  <SvgIcon :icon="starIcon" />
                </span>
                <span
                  :style="{
                    color: '#ffce2a',
                  }"
                >
                  <SvgIcon :icon="starOutlineIcon" />
                </span>
                <div>4/5 (681)</div>
              </span>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              If you use JavaScript in any capacity, there's probably not
              another resource that will benefit you more than this course.
              Closures, The 'this' keyword, module patterns and so much more.
            </p>
          </CardBody>
          <CardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'"
              >Review</kbutton
            >
          </CardActions>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardActions,
} from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import { SvgIcon } from "@progress/kendo-vue-common";
import { starIcon, starOutlineIcon } from "@progress/kendo-svg-icons";

const jslogo = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/js-logo.png';

export default {
  components: {
    Card,
    CardImage,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardActions,
    kbutton: Button,
    SvgIcon,
  },
  data() {
    return { starIcon, starOutlineIcon, jslogo };
  },
};
</script>
