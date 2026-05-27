<template>
  <div>
    <div class="example-config">
      <h6>Change taps position: </h6>
      <DropDownList
        :style="{ width: '230px' }"
        :data-items="data"
        default-value="k-card-deck"
        @change="handleChange"
      />
    </div>
    <hr />
    <div :class="currentLayout">
      <Card style="width: 200px">
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardTitle>Card Subtitle</CardTitle>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </CardBody>
        <CardActions>
          <KButton fill-mode="flat" theme-color="primary">Action 1</KButton>
          <KButton fill-mode="flat" theme-color="primary">Action 2</KButton>
        </CardActions>
      </Card>
      <Card style="width: 200px">
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardTitle>Card Subtitle</CardTitle>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </CardBody>
        <CardActions>
          <KButton fill-mode="flat" theme-color="primary">Action 1</KButton>
          <KButton fill-mode="flat" theme-color="primary">Action 2</KButton>
        </CardActions>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
    Card,
    CardBody,
    CardTitle,
    CardActions,
} from "@progress/kendo-vue-layout";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const data = ["k-card-list", "k-card-group", "k-card-deck"];
const currentLayout = ref("k-card-deck");

function handleChange(e) {
    currentLayout.value = e.value;
}
</script>

