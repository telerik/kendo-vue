<template>
  <div style="display: flex; justify-content: space-evenly">
    <div style="width: 45%" class="k-card-list">
      <div>Actions Orientation</div>
      <hr />
      <Card style="width: 200px">
        <CardBody>
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
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </CardBody>
        <CardActions orientation="vertical">
          <KButton fill-mode="flat" theme-color="primary">Action 1</KButton>
          <KButton fill-mode="flat" theme-color="primary">Action 2</KButton>
        </CardActions>
      </Card>
    </div>
    <div style="width: 45%" class="k-card-list">
      <div>Actions Layout</div>
      <hr />
      <Card style="width: 300px">
        <CardBody>
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
      <Card style="width: 300px">
        <CardBody>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </CardBody>
        <CardActions layout="center">
          <KButton fill-mode="flat" theme-color="primary">Action 1</KButton>
          <KButton fill-mode="flat" theme-color="primary">Action 2</KButton>
        </CardActions>
      </Card>
      <Card style="width: 300px">
        <CardBody>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </CardBody>
        <CardActions layout="end">
          <KButton fill-mode="flat" theme-color="primary">Action 1</KButton>
          <KButton fill-mode="flat" theme-color="primary">Action 2</KButton>
        </CardActions>
      </Card>
      <Card style="width: 300px">
        <CardBody>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
        </CardBody>
        <CardActions layout="stretched">
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
    CardActions,
} from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
</script>

