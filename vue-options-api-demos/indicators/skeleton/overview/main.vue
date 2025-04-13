<template>
  <div class="example">
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
      <Card
        :style="{
          'min-width': '350px',
          width: '350px',
          height: 'auto',
        }"
      >
        <CardHeader class="k-hbox">
          <Avatar :type="'image'">
            <img alt="user-avatar" :src="cardData.userAvatar" />
          </Avatar>
          <div
            :style="{
              flex: '1 1 50%',
            }"
          >
            <CardTitle>{{ cardData.title }}</CardTitle>
            <CardSubtitle
              :style="{
                'margin-top': '0px',
              }"
            >
              {{ cardData.subtitle }}
            </CardSubtitle>
          </div>
        </CardHeader>
        <CardImage :src="cardData.thumbnailSrc" />
        <CardFooter>{{ cardData.description }}</CardFooter>
      </Card>
    </div>
  </div>
</template>
<script>
import { Skeleton } from '@progress/kendo-vue-indicators';
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardImage,
  Avatar,
} from '@progress/kendo-vue-layout';

const cardThumbnail = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/indicators/skeleton/card-thumbnail.jpg';
const userAvatar = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/indicators/skeleton/user-avatar.jpg';

export default {
  components: {
    Skeleton,
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardFooter,
    CardImage,
    Avatar,
  },
  data() {
    return {
      cardData: {
        userAvatar: userAvatar,
        title: 'Tom Smith',
        subtitle: '5 hours ago',
        thumbnailSrc: cardThumbnail,
        description: 'Having so much fun in Prague! #NaZdravi',
      },
    };
  },
};
</script>
