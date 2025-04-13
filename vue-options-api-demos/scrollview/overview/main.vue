<template>
  <div>
    <ScrollView
      :style="{
        width: '512px',
        height: '384px',
      }"
      :data-items="items"
      :content="'content'"
    >
      <template v-slot:content="{ props }">
        <div class="image-with-text">
          <p>
            Showing image {{ props.item.position }} of {{ props.items.length }}.
          </p>
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
          position: 1,
          url: balloonsImage,
        },
        {
          position: 2,
          url: bambooImage,
        },
        {
          position: 3,
          url: dandelionImage,
        },
        {
          position: 4,
          url: waveImage,
        },
        {
          position: 5,
          url: grassImage,
        },
      ],
    };
  },
};
</script>
