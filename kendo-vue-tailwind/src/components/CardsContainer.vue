<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-center mb-8">
      Explore Kendo UI for Vue
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-center"
    >
      <HeaderCard />
      <BaseCard
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :image="card.image"
        :description="card.description"
        :url="card.url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderCard from "./HeaderCard.vue";
import BaseCard from "./BaseCard.vue";
import { h } from "vue";

const cards = [
  {
    title: "Grid",
    image: h("path", {
      d: "M0.0,0.0V72.0H60.0l12.0-12.0V0.0ZM66.0,57.52,57.52,66.0H6.0V6.0H66.0ZM18.0,60.0l6.0-6.0h9.0v6.0l6.0-6.0h9.0v6.0l12.0-12.0H54.0V39.0l6.0-6.0H54.0V24.0l6.0-6.0H54.0V12.0H48.0V18.0H39.0V12.0H33.0V18.0H24.0V12.0H18.0V18.0H12.0V24.0H18.0v9.0H12.0v6.0H18.0v9.0H12.0v6.0H18.0ZM39.0,24.0h9.0v9.0H39.0Zm0.0,15.0h9.0v9.0H39.0ZM24.0,24.0h9.0v9.0H24.0Zm0.0,15.0h9.0v9.0H24.0Z",
    }),
    description:
      "The Grid covers everything from edit, sort, group, filter, export to virtualization, accessibility and styling.",
    url: "https://www.telerik.com/kendo-vue-ui/components/grid/",
  },
  {
    title: "Chart",
    image: h("path", {
      d: "M18,27V57h12V27ZM12,42H0v15H12ZM0,69H66l6-6H0ZM63,6.3S63,6,63,6a3,3,0,0,0-6,0,0.76,0.76,0,0,0,0,0.48L43.02,18.21A3,3,0,0,0,42,18a2.82,2.82,0,0,0-1.62,0.54L27,11.79A3,3,0,0,0,21,12a2.79,2.79,0,0,0,0,0.72L6.72,27.15A2.79,2.79,0,0,0,6,27a3.48,3.48,0,0,0-1.11,0.21L0,23.43V27.24l3,2.4S3,30,3,30a3,3,0,0,0,6,0,2.79,2.79,0,0,0,0-0.72L23.28,15A2.79,2.79,0,0,0,24,15a3,3,0,0,0,1.59-0.51L39,21.18A3,3,0,0,0,45,21a2.7,2.7,0,0,0,0-0.48l14.07-11.73A3,3,0,0,0,60,9a2.7,2.7,0,0,0,1.2-0.27L72,16.65V12.96ZM54,21V57h12V21Zm-18,15V57h12V36Z",
    }),

    description:
      "Visualize your data with the collection of 15 series types provided by the Chart component.",
    url: "https://www.telerik.com/kendo-vue-ui/components/charts/",
  },
  {
    title: "Scheduler",
    image: h("path", {
      d: "M60,57.516L51.516,66H12V15H6v51v6h6h42l12-12V15h-6V57.516z M45,0h6v12h-6V0z M21,0h6v12h-6V0z M0,3h18v6H0V3z M54,3v6h12l6-6H54z M30,3h12v6H30V3z M18,24v6h3v6H18v6h3v6H18v6h3v6l6-6h6v6l6-6h6v6l6-6l6-6h-6v-6l6-6h-6v-6l6-6h-6V21h-6v3h-6V21h-6v3H27V21H21v3H18z M27,48v-6h6v6H27z M45,48h-6v-6h6V48z M45,30v6h-6v-6H45z M33,30v6H27v-6H33z",
    }),
    description:
      "A component that helps you organize your daily calendar. Offers multiple calendar views, events editing, time zones, and recurrent events.",
    url: "https://www.telerik.com/kendo-vue-ui/components/scheduler/",
  },
  {
    title: "Editor",
    image: h("path", {
      d: "M12,48H24l6-6H12Zm42,9.51L45.51,66H6V6H54V18l6-6V0H0V72H48l12-12V39l-6,6ZM42,30H12v6h24ZM12,18V24h24l6-6Zm18,33.51h0L21.51,60H30L72,18V9.51Z",
    }),
    description:
      "A features-rich WYSIWYG editor that gives you the freedom to create or edit text content everywhere in your application.",
    url: "https://www.telerik.com/kendo-vue-ui/components/editor/",
  },
  {
    title: "Form",
    image: h("path", {
      d: "M66,15v8.4L36,54l-18-18h8.4l9.6,9.6v0L66,15z M66,6V0H6v72h48l12-12v-27l-6,6v18.6L51.6,66H12V6h48v6L66,6z",
    }),
    description:
      "Control the state of the HTML form. Integrate different components in it and easily implement your scenario.",
    url: "https://www.telerik.com/kendo-vue-ui/components/form/",
  },
];
</script>
