<template>
  <div>
    <ScrollView
      :style="{
        width: '512px',
        height: '384px',
      }"
      :data-items="items"
      :content="'content'"
      :automatic-view-change-interval="1000"
    >
      <template v-slot:content="{ props }">
        <div class="image-with-text">
          <h2 class="demo-title">{{ props.item.title }}</h2>
          <img
            :src="props.item.url"
            :alt="`Photo ${props.item.position}`"
            :style="{
              width: '512px',
              height: '384px',
            }"
            :draggable="false"
          />
        </div>
      </template>
    </ScrollView>
  </div>
</template>

<script>
import { ScrollView } from '@progress/kendo-vue-scrollview';
import './styles.css';

const balloonsImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/1.jpg';
const bambooImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/2.jpg';
const dandelionImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/3.jpg';
const waveImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/4.jpg';
const grassImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/5.jpg';

export default {
  components: {
    ScrollView,
  },
  data() {
    return {
      items: [
        {
          title: 'Balloons',
          position: 1,
          url: balloonsImage,
        },
        {
          title: 'Forest',
          position: 2,
          url: bambooImage,
        },
        {
          title: 'Flower',
          position: 3,
          url: dandelionImage,
        },
        {
          title: 'Painting',
          position: 4,
          url: waveImage,
        },
        {
          title: 'Grass',
          position: 5,
          url: grassImage,
        },
      ],
    };
  },
};
</script>
