<template>
  <div class="panelbar-wrapper">
    <PanelBar :items="items"> </PanelBar>
  </div>
</template>

<script>
import { PanelBar } from '@progress/kendo-vue-layout';
import './styles.css';

const starIcon = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/panelbar/icons/star.png';
const photoIcon = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/panelbar/icons/photo.png';
const videoIcon = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/panelbar/icons/video.png';
const speakerIcon = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/panelbar/icons/speaker.png';
const golfIcon = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/panelbar/icons/golf.png';
const baseballIcon = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/panelbar/icons/baseball.png';

export default {
  components: {
    PanelBar,
  },
  data() {
    return {
      items: [
        {
          title: 'Golf',
          imageUrl: golfIcon,
          items: [
            { title: 'Top News', imageUrl: starIcon },
            { title: 'Photo Galleries', imageUrl: photoIcon },
            { title: 'Video Records', imageUrl: videoIcon },
            { title: 'Radio Records', imageUrl: speakerIcon },
          ],
        },
        {
          title: 'Baseball',
          imageUrl: baseballIcon,
          items: [
            { title: 'Top News', imageUrl: starIcon },
            { title: 'Photo Galleries', imageUrl: photoIcon },
            { title: 'Video Records', imageUrl: videoIcon },
            { title: 'Radio Records', imageUrl: speakerIcon },
          ],
        },
      ],
    };
  },
};
</script>
