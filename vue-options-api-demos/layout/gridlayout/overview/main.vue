<template>
  <div class="grid-layout-container">
    <GridLayout
      :gap="{ rows: 6, cols: 10 }"
      :rows="[
        { height: '20px' },
        { height: '100px' },
        { height: '100px' },
        { height: '20px' },
        { height: '660px' },
      ]"
      :cols="[{ width: '270px' }, { width: '270px' }, { width: '310px' }]"
      :items="items"
    >
      <template v-slot:content1>
        <div class="k-text-inverse k-text-uppercase k-font-weight-bold">
          Trending articles
        </div>
      </template>
      <template v-slot:content2>
        <TrendingArticle :position="1" :article="articles[0]"></TrendingArticle>
      </template>
      <template v-slot:content3>
        <TrendingArticle :position="2" :article="articles[1]"></TrendingArticle>
      </template>
      <template v-slot:content4>
        <TrendingArticle :position="3" :article="articles[2]"></TrendingArticle>
      </template>
      <template v-slot:content5>
        <TrendingArticle :position="4" :article="articles[3]"></TrendingArticle>
      </template>
      <template v-slot:content6>
        <TrendingArticle :position="5" :article="articles[4]"></TrendingArticle>
      </template>
      <template v-slot:content7>
        <TrendingArticle :position="6" :article="articles[5]"></TrendingArticle>
      </template>
      <template v-slot:content8>
        <div class="k-text-inverse k-text-uppercase k-font-weight-bold">
          Recommended for you
        </div>
      </template>
      <template v-slot:content9>
        <RecommendedArticle
          v-for="article of recommendedArticles"
          :key="article.title"
          :article="article"
        ></RecommendedArticle>
      </template>
      <template v-slot:content10>
        <div class="k-text-inverse k-text-uppercase k-font-weight-bold">
          Events this month
        </div>
      </template>
      <template v-slot:content11>
        <div>
          <Calendar
            class="event-calendar"
            :value="selectedDate"
            @change="handleValueChange"
            :bottom-view="'year'"
            :top-view="'decade'"
            :navigation="false"
          >
          </Calendar>
          <div
            class="k-text-inverse k-text-uppercase k-font-weight-bold k-mt-4"
          >
            Discover more
          </div>
          <ChipList
            :selection="'multiple'"
            :default-data-items="tags"
            :text-field="'name'"
            :value-field="'name'"
          />
        </div>
      </template>
    </GridLayout>
  </div>
</template>
<script>
import { GridLayout } from '@progress/kendo-vue-layout';
import { ChipList, Chip } from '@progress/kendo-vue-buttons';
import { Calendar } from '@progress/kendo-vue-dateinputs';
import { tags, articles, recommendedArticles } from './articles-info';
import RecommendedArticle from './RecommendedArticle.vue';
import TrendingArticle from './TrendingArticle.vue';
import './styles.css';

export default {
  components: {
    GridLayout,
    ChipList,
    Chip,
    Calendar,
    RecommendedArticle,
    TrendingArticle,
  },
  data() {
    return {
      items: [
        { row: 1, col: 1, colSpan: 3, content: 'content1' },
        { row: 2, col: 1, content: 'content2' },
        { row: 2, col: 2, content: 'content3' },
        { row: 2, col: 3, content: 'content4' },
        { row: 3, col: 1, content: 'content5' },
        { row: 3, col: 2, content: 'content6' },
        { row: 3, col: 3, content: 'content7' },
        { row: 4, col: 1, colSpan: 2, content: 'content8' },
        { row: 5, col: 1, colSpan: 2, content: 'content9' },
        { row: 4, col: 3, content: 'content10' },
        { row: 5, col: 3, content: 'content11' },
      ],
      tags: tags,
      articles: articles,
      recommendedArticles: recommendedArticles,
      selectedDate: new Date(),
    };
  },
  methods: {
    handleValueChange(event) {
      this.selectedDate = new Date(event.value);
      this.articles = this.articles.sort(() => Math.random() - 0.5);
      this.recommendedArticles = this.recommendedArticles.sort(
        () => Math.random() - 0.5
      );
    },
  },
};
</script>
