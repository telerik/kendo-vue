<template>
  <div>
    <div class="example-config">
      <radiogroup :data-items="dataItems" :value="enabled" @change="onChange" />
    </div>
    <ScrollView :style="{
      width: '512px',
      height: '384px',
    }" :data-items="items" :content="'content'" :arrows="enabled">
      <template v-slot:content="{ props }">
        <div class="image-with-text">
          <h2 class="demo-title">{{ props.item.title }}</h2>
          <img :src="props.item.url" :alt="`Photo ${props.item.position}`" :style="{
            width: '512px',
            height: '384px',
          }" :draggable="false" />
        </div>
      </template>
    </ScrollView>
  </div>
</template>

<script>
import { ScrollView } from '@progress/kendo-vue-scrollview';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import './styles.css';

export default {
  components: {
    ScrollView,
    radiogroup: RadioGroup,
  },
  data() {
    return {
      balloonsImage: (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/1.jpg',
      bambooImage: (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/2.jpg',
      dandelionImage: (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/3.jpg',
      waveImage: (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/4.jpg',
      grassImage: (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/5.jpg',
      enabled: true,
      dataItems: [
        {
          label: 'Enable arrows',
          value: true,
        },
        {
          label: 'Disable arrows',
          value: false,
        },
      ],
    };
  },
  computed: {
    items() {
      return [
        {
          title: 'Balloons',
          position: 1,
          url: this.balloonsImage,
        },
        {
          title: 'Forest',
          position: 2,
          url: this.bambooImage,
        },
        {
          title: 'Flower',
          position: 3,
          url: this.dandelionImage,
        },
        {
          title: 'Painting',
          position: 4,
          url: this.waveImage,
        },
        {
          title: 'Grass',
          position: 5,
          url: this.grassImage,
        },
      ];
    }
  },
  methods: {
    onChange(e) {
      this.enabled = e.value;
    },
  },
};
</script>
