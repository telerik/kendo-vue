<template>
  <Card orientation="horizontal" class="card-article">
    <div class="card-article-description k-d-flex-col">
      <div class="author k-font-weight-bold">{{ article.author }}</div>
      <CardTitle class="title k-font-weight-bold">{{ article.title }}</CardTitle>
      <CardSubtitle class="subtitle">{{ article.subtitle }}</CardSubtitle>
      <div class="date k-d-flex">
        <div>{{ formattedDate }}</div>
        <div class="separator">|</div>
        <div>{{ article.minsLength }} min read</div>
      </div>
    </div>
    <div>
      <CardImage class="card-article-image" :src="article.imagePath" />
      <div v-if="article.imageText" class="photo-text">
        {{ article.imageText }}
      </div>
    </div>
  </Card>
</template>

<script setup>
import { computed } from 'vue';
import { Card, CardTitle, CardSubtitle, CardImage } from '@progress/kendo-vue-layout';

const props = defineProps({
    article: Object,
});

const formattedDate = computed(() => {
    return (
        props.article.date.toLocaleString('en-us', { month: 'short' }) +
    ' ' +
    props.article.date.getDate()
    );
});
</script>
