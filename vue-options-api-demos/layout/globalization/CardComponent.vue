<template>
    <card
      style='width: 300px; margin: auto;'
    >
      <cardImage :src="barcelonaImage" />
      <cardHeader>
        <cardTitle>Barcelona</cardTitle>
      </cardHeader>
      <cardBody>
        <p>
          Barcelona, the cosmopolitan capital of Spain's Catalonia region, is
          known for its art and architecture.
        </p>
        <p>
          The fantastical Sagrada FamÃ­lia church and other modernist landmarks
          designed by Antoni GaudÃ­ dot the city.
        </p>
      </cardBody>
      <cardActions>
        <span>
          <kbutton :theme-color="'primary'">Map</kbutton>
        </span>
        <span>
          <kbutton :theme-color="'primary'">Weather</kbutton>
        </span>
      </cardActions>
    </card>
</template>

<script>
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImage,
  CardActions,
} from "@progress/kendo-vue-layout";
import { Button } from '@progress/kendo-vue-buttons';

const barcelonaImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/card/barcelona.jpg';

export default {
  components:{
    card: Card,
    cardHeader: CardHeader,
    cardBody: CardBody,
    cardTitle: CardTitle,
    cardImage: CardImage,
    cardActions: CardActions,
      'kbutton': Button
  },
  data(){
    return {
      barcelonaImage
    }
  }
}

</script>
