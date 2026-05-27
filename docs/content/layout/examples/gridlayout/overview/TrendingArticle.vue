<template>
  <div class="article k-d-flex">
    <div class="article-position k-d-inline-flex k-text-primary k-font-weight-bold">
      0{{ position }}
    </div>
    <div class="article-description k-d-flex-col">
      <div class="author">{{ article.author }}</div>
      <div class="title k-font-weight-bold">{{ article.title }}</div>
      <div class="date k-d-flex">
        <div>{{ formattedDate }}</div>
        <div class="separator">|</div>
        <div>{{ article.minsLength }} min read</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    position: Number,
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
