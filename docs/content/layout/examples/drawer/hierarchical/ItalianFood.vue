<template>
  <div
    id="ItalianFood"
    :style="{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '10px' }"
  >
    <div :style="{ width: '47%' }">
      <Card>
        <CardImage :src="pastaImage" />
        <div>
          <CardHeader>
            <CardTitle>Pasta</CardTitle>
            <CardSubtitle>
              <span class="reviews">
                <span class="k-icon k-i-star" :style="{ color: '#ffce2a' }" />
                <span class="k-icon k-i-star" :style="{ color: '#ffce2a' }" />
                <span class="k-icon k-i-star" :style="{ color: '#ffce2a' }" />
                <span class="k-icon k-i-star" :style="{ color: '#ffce2a' }" />
                <span class="k-icon k-i-star" />
                <div>4/5 (681)</div>
              </span>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              Pasta is a type of Italian food typically made from an unleavened
              dough of durum wheat flour mixed with water or eggs, and formed
              into sheets or various shapes, then cooked by boiling or baking.
            </p>
          </CardBody>
          <CardActions>
            <KButton fill-mode="flat" theme-color="primary">Review</KButton>
          </CardActions>
        </div>
      </Card>
    </div>
    <div :style="{ width: '47%' }">
      <Card>
        <CardImage :src="pizzaImage" />
        <div>
          <CardHeader>
            <CardTitle>Pizza</CardTitle>
            <CardSubtitle>
              <span class="reviews">
                <span class="k-icon k-i-star" :style="{ color: '#ffce2a' }" />
                <span class="k-icon k-i-star" :style="{ color: '#ffce2a' }" />
                <span class="k-icon k-i-star" :style="{ color: '#ffce2a' }" />
                <span class="k-icon k-i-star" :style="{ color: '#ffce2a' }" />
                <span class="k-icon k-i-star" />
                <div>4/5 (681)</div>
              </span>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              Though a slab of flat bread served with oil and spices was around
              long before the unification Italy, there’s perhaps no dish that is
              as common or as representative of the country as the humble pizza.
            </p>
          </CardBody>
          <CardActions>
            <KButton fill-mode="flat" theme-color="primary">Review</KButton>
          </CardActions>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup>
import {
    Card,
    CardImage,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardActions,
} from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const pizzaImage =
  (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") +
  "assets/layout/drawer/pizza.jpg";
const pastaImage =
  (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") +
  "assets/layout/drawer/pasta.jpg";
</script>
