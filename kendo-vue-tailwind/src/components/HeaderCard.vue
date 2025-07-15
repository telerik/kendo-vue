<template>
  <Card
    class="header-card shadow-xl transition-shadow h-full flex flex-col justify-between"
  >
    <CardHeader class="p-4 border-b">
      <CardTitle>
        <span
          class="text-2xl font-bold flex items-center justify-center space-x-2"
        >
          Kendo UI for Vue
        </span>
      </CardTitle>
    </CardHeader>

    <CardBody
      class="p-4 text-gray-700 text-sm flex items-center justify-center"
    >
      <img :src="kendoka" class="w-48 h-48" alt="Kendoka" />
    </CardBody>

    <CardFooter class="p-4 h-20 font-semibold border-t">
      Design and Build Beautiful Vue UI with 110+ Components
    </CardFooter>

    <CardActions layout="end">
      <a
        class="action-button bg-primary text-white rounded-lg w-25 m-1 p-1 hover:shadow-md hover:scale-105 transition-transform"
        href="https://www.telerik.com/kendo-vue-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
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

import kendoka from "../assets/kendoka.svg";
</script>
