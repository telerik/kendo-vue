<template>
  <Card style="width: 300px; margin: auto">
    <CardImage :src="barcelonaImage" />
    <CardHeader>
      <CardTitle>Barcelona</CardTitle>
    </CardHeader>
    <CardBody>
      <p>
        Barcelona, the cosmopolitan capital of Spain's Catalonia region, is
        known for its art and architecture.
      </p>
      <p>
        The fantastical Sagrada Família church and other modernist landmarks
        designed by Antoni Gaudí dot the city.
      </p>
    </CardBody>
    <CardActions>
      <span>
        <KButton theme-color="primary">Map</KButton>
      </span>
      <span>
        <KButton theme-color="primary">Weather</KButton>
      </span>
    </CardActions>
  </Card>
</template>

<script setup>
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardImage,
    CardActions,
} from '@progress/kendo-vue-layout';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const barcelonaImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/card/barcelona.jpg';
</script>
