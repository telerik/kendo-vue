<template>
  <div class="example-container k-d-flex-col">
    <div class="header-stacklayout-overview k-d-flex">
      <div class="title-stacklayout-overview">Popular Creators</div>
      <span class="k-spacer" />
      <div class="k-d-flex k-align-items-center">
        <ButtonGroup selection="single">
          <KButton
            :selected="orientation === 'horizontal'"
            :toggleable="true"
            @click="toggleOrientation('horizontal')"
          >
            Horizontal
          </KButton>
          <KButton
            :selected="orientation === 'vertical'"
            :toggleable="true"
            @click="toggleOrientation('vertical')"
          >
            Vertical
          </KButton>
        </ButtonGroup>
      </div>
    </div>
    <StackLayout :gap="15" :orientation="orientation">
      <Card width="auto">
        <CardHeader class="k-hstack">
          <Avatar width="40px" height="40px" shape="circle" type="image">
            <img :src="lindseyAvatar" />
          </Avatar>
          <div>
            <CardTitle>Lindsey Mango</CardTitle>
            <CardSubtitle>34K followers</CardSubtitle>
          </div>
        </CardHeader>
        <img class="card-img" :src="lindseyImage" alt="lindsey_img" />
        <CardBody>
          <p class="photo-desc">
            Photos by Rikonavt and by Ivana La on Unsplash
          </p>
        </CardBody>
        <CardActions layout="center">
          <KButton fillMode="flat" themeColor="primary">
            See more from Lindsey
          </KButton>
        </CardActions>
      </Card>
      <Card width="auto">
        <CardHeader class="k-hstack">
          <Avatar width="40px" height="40px" shape="circle" type="image">
            <img :src="vincenzoAvatar" />
          </Avatar>
          <div>
            <CardTitle>Vincenzo Mays</CardTitle>
            <CardSubtitle>32K followers</CardSubtitle>
          </div>
        </CardHeader>
        <img class="card-img" :src="vincenzoImage" alt="vincenzo_img" />
        <CardBody>
          <p class="photo-desc">
            Photos by Irene Strong and by the BlackRabbit on Unsplash
          </p>
        </CardBody>
        <CardActions layout="center">
          <KButton fillMode="flat" themeColor="primary">
            See more from Vincenzo
          </KButton>
        </CardActions>
      </Card>
      <Card width="auto">
        <CardHeader class="k-hstack">
          <Avatar width="40px" height="40px" type="image">
            <img :src="marissaAvatar" />
          </Avatar>
          <div>
            <CardTitle>Marissa Webb</CardTitle>
            <CardSubtitle>36K followers</CardSubtitle>
          </div>
        </CardHeader>
        <img class="card-img" :src="marissaImage" alt="marissa_img" />
        <CardBody>
          <p class="photo-desc">
            Photos by JJ Jordan and by Silvana Carlos on Unsplash
          </p>
        </CardBody>
        <CardActions layout="center">
          <KButton fillMode="flat" themeColor="primary">
            See more from Marissa
          </KButton>
        </CardActions>
      </Card>
    </StackLayout>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    StackLayout,
    Avatar,
    Card,
    CardActions,
    CardBody,
    CardHeader,
    CardSubtitle,
    CardTitle,
} from '@progress/kendo-vue-layout';
import { Button as KButton, ButtonGroup } from '@progress/kendo-vue-buttons';
import './styles.css';

const orientation = ref('horizontal');
const lindseyAvatar = `${import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/'}assets/layout/stacklayout/avatar1.jpg`;
const vincenzoAvatar = `${import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/'}assets/layout/stacklayout/avatar2.webp`;
const marissaAvatar = `${import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/'}assets/layout/stacklayout/avatar3.webp`;
const lindseyImage = `${import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/'}assets/layout/stacklayout/dog1.webp`;
const vincenzoImage = `${import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/'}assets/layout/stacklayout/summer.jpg`;
const marissaImage = `${import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/'}assets/layout/stacklayout/dog2.webp`;

function toggleOrientation(newOrientation) {
    orientation.value = newOrientation;
}
</script>
