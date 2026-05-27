<template>
  <div style="display: flex; justify-content: space-evenly">
    <div class="k-card-list">
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
      <Card style="width: 200px" type="primary">
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
    <div class="k-card-list">
      <Card style="width: 200px" type="info">
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
      <Card style="width: 200px" type="success">
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
    <div class="k-card-list">
      <Card style="width: 200px" type="warning">
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
      <Card style="width: 200px" type="error">
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
import {
    Card,
    CardBody,
    CardTitle,
    CardActions,
} from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
</script>

