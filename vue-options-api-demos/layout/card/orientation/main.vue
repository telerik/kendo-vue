<template>
  <div style="display: flex; justify-content: space-evenly">
    <div style="width: 45%">
      <div>Horizontal Card</div>
      <hr />
      <card :orientation="'horizontal'">
        <cardImage
          :src="'https://store-images.s-microsoft.com/image/apps.29972.14474337564596307.6c783b22-9460-4205-938c-2969961ed85c.aa21aff2-b2b2-411b-88bb-158187c6e238?mode=scale&q=90&h=1080&w=1920'"
        />
        <div class="k-vbox">
          <cardHeader>
            <cardTitle>Coffee with friends</cardTitle>
            <cardSubtitle>
              <span class="reviews">
                <SvgIcon :icon="starIcon" style="color: #ffce2a" />
                <SvgIcon :icon="starIcon" style="color: #ffce2a" />
                <SvgIcon :icon="starIcon" style="color: #ffce2a" />
                <SvgIcon :icon="starIcon" style="color: #ffce2a" />
                <SvgIcon :icon="starOutlineIcon" />
                <div>4/5 (681)</div>
              </span>
            </cardSubtitle>
          </cardHeader>
          <cardBody>
            <p>
              The right place to be if you're in love with high quality espresso
              or tea. We offer wide range to top coffee brands as Davidoff Cafe,
              Lavazza, Tchibo, Illy.
            </p>
          </cardBody>
          <cardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'"
              >Review</kbutton
            >
          </cardActions>
        </div>
      </card>
    </div>
    <div style="width: 45%">
      <div>Vertical Card</div>
      <hr />
      <card :orientation="'vertical'">
        <cardImage
          :src="'https://store-images.s-microsoft.com/image/apps.29972.14474337564596307.6c783b22-9460-4205-938c-2969961ed85c.aa21aff2-b2b2-411b-88bb-158187c6e238?mode=scale&q=90&h=1080&w=1920'"
        />
        <div>
          <cardHeader>
            <cardTitle>Coffee with friends</cardTitle>
            <cardSubtitle>
              <span class="reviews">
                <SvgIcon :icon="starIcon" style="color: #ffce2a" />
                <SvgIcon :icon="starIcon" style="color: #ffce2a" />
                <SvgIcon :icon="starIcon" style="color: #ffce2a" />
                <SvgIcon :icon="starIcon" style="color: #ffce2a" />
                <SvgIcon :icon="starOutlineIcon" />
                <div>4/5 (681)</div>
              </span>
            </cardSubtitle>
          </cardHeader>
          <cardBody>
            <p>
              The right place to be if you're in love with high quality espresso
              or tea. We offer wide range to top coffee brands as Davidoff Cafe,
              Lavazza, Tchibo, Illy.
            </p>
          </cardBody>
          <cardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'"
              >Review</kbutton
            >
          </cardActions>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImage,
  CardActions,
} from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import { SvgIcon } from "@progress/kendo-vue-common";
import { starIcon, starOutlineIcon } from "@progress/kendo-svg-icons";

export default {
  components: {
    card: Card,
    cardHeader: CardHeader,
    cardBody: CardBody,
    cardTitle: CardTitle,
    cardImage: CardImage,
    cardActions: CardActions,
    kbutton: Button,
    SvgIcon,
  },
  data() {
    return {
      starIcon,
      starOutlineIcon,
    };
  },
};
</script>