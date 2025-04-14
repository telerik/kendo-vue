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

const kukeriImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/card/kukeri.jpg';
const martenitsaImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/card/martenitsa.jpg';
const roseFestivalImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/card/rose_festival.jpg';

export default {
    components: {
        ScrollView,
    },
    data() {
        return {
            items: [
                {
                    url: kukeriImage,
                },
                {
                    url: martenitsaImage,
                },
                {
                    url: roseFestivalImage,
                },
            ],
        };
    },
};
</script>
