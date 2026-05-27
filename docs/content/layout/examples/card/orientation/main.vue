<template>
  <div style="display: flex; justify-content: space-evenly">
    <div style="width: 45%">
      <div>Horizontal Card</div>
      <hr />
      <Card orientation="horizontal">
        <CardImage
          src="https://store-images.s-microsoft.com/image/apps.29972.14474337564596307.6c783b22-9460-4205-938c-2969961ed85c.aa21aff2-b2b2-411b-88bb-158187c6e238?mode=scale&q=90&h=1080&w=1920"
        />
        <div class="k-vbox">
          <CardHeader>
            <CardTitle>Coffee with friends</CardTitle>
            <CardSubtitle>
              <span class="reviews">
                <SvgIcon :icon="starIconRef" style="color: #ffce2a" />
                <SvgIcon :icon="starIconRef" style="color: #ffce2a" />
                <SvgIcon :icon="starIconRef" style="color: #ffce2a" />
                <SvgIcon :icon="starIconRef" style="color: #ffce2a" />
                <SvgIcon :icon="starOutlineIconRef" />
                <div>4/5 (681)</div>
              </span>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              The right place to be if you're in love with high quality espresso
              or tea. We offer wide range to top coffee brands as Davidoff Cafe,
              Lavazza, Tchibo, Illy.
            </p>
          </CardBody>
          <CardActions>
            <KButton fill-mode="flat" theme-color="primary">Review</KButton>
          </CardActions>
        </div>
      </Card>
    </div>
    <div style="width: 45%">
      <div>Vertical Card</div>
      <hr />
      <Card orientation="vertical">
        <CardImage
          src="https://store-images.s-microsoft.com/image/apps.29972.14474337564596307.6c783b22-9460-4205-938c-2969961ed85c.aa21aff2-b2b2-411b-88bb-158187c6e238?mode=scale&q=90&h=1080&w=1920"
        />
        <div>
          <CardHeader>
            <CardTitle>Coffee with friends</CardTitle>
            <CardSubtitle>
              <span class="reviews">
                <SvgIcon :icon="starIconRef" style="color: #ffce2a" />
                <SvgIcon :icon="starIconRef" style="color: #ffce2a" />
                <SvgIcon :icon="starIconRef" style="color: #ffce2a" />
                <SvgIcon :icon="starIconRef" style="color: #ffce2a" />
                <SvgIcon :icon="starOutlineIconRef" />
                <div>4/5 (681)</div>
              </span>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              The right place to be if you're in love with high quality espresso
              or tea. We offer wide range to top coffee brands as Davidoff Cafe,
              Lavazza, Tchibo, Illy.
            </p>
          </CardBody>
          <CardActions>
            <KButton fill-mode="flat" theme-color="primary">Review</KButton>
          </CardActions>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup>
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardImage,
    CardActions,
    CardSubtitle
} from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { SvgIcon } from "@progress/kendo-vue-common";
import { starIcon } from "@progress/kendo-svg-icons";

const starIconRef = starIcon;
const starOutlineIconRef = starIcon;
</script>
