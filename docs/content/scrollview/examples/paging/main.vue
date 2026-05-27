<template>
  <div>
    <div class="example-config">
      <RadioGroup :data-items="dataItems" :value="radioGroupValue.value" @change="onChange" />
    </div>
    <ScrollView
      :style="{ width: '512px', height: '384px' }"
      :data-items="items"
      content="content"
      :pageable="pageableValue"
    >
      <template #content="{ props }">
        <div class="image-with-text">
          <h2 class="demo-title">{{ props.item.title }}</h2>
          <img
            :src="props.item.url"
            :alt="`Photo ${props.item.position}`"
            :style="{ width: '512px', height: '384px' }"
            :draggable="false"
          />
        </div>
      </template>
    </ScrollView>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ScrollView } from '@progress/kendo-vue-scrollview';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import './styles.css';

const balloonsImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/1.jpg';
const bambooImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/2.jpg';
const dandelionImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/3.jpg';
const waveImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/4.jpg';
const grassImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/5.jpg';

const enabled = ref('enable');
const radioGroupValue = computed(() => enabled.value ? ({ label: 'Enable pager', value: 'enable' }) : ({ label: 'Disable pager', value: 'disable' }));
const pageableValue = computed(() => enabled.value === 'enable' ? true : false);
const dataItems = [
    { label: 'Enable pager', value: 'enable' },
    { label: 'Disable pager', value: 'disable' },
];
const items = [
    { title: 'Balloons', position: 1, url: balloonsImage },
    { title: 'Forest', position: 2, url: bambooImage },
    { title: 'Flower', position: 3, url: dandelionImage },
    { title: 'Painting', position: 4, url: waveImage },
    { title: 'Grass', position: 5, url: grassImage },
];

function onChange(e) {
    enabled.value = e.value;
}
</script>
