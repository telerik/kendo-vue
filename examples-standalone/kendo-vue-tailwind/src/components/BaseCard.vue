<template>
  <Card
    class="shadow-xl transition-shadow h-full flex flex-col justify-between"
  >
    <CardHeader class="border-b">
      <CardTitle>
        <span
          class="text-2xl font-semibold flex items-center justify-center space-x-2"
        >
          {{ title }}
        </span>
      </CardTitle>
    </CardHeader>

    <CardBody class="text-gray-700 text-sm flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
        class="w-48 h-48 text-primary"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1"
      >
        <component :is="image" />
      </svg>
    </CardBody>

    <CardFooter class="p-6 pb-0 h-20 border-t">
      {{ description }}
    </CardFooter>

    <CardActions layout="end">
      <a
        class="bg-info text-white rounded-lg w-25 m-1 p-1 hover:shadow-md hover:scale-105 transition-transform"
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
      >
        Try It
      </a>
    </CardActions>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  CardActions,
} from "@progress/kendo-vue-layout";

defineProps<{
  title: string;
  image: any;
  description: string;
  url: string;
}>();
</script>
