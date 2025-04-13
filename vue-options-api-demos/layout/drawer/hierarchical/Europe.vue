<template>
  <div
    id="Europe"
    :style="{
      display: 'flex',
      justifyContent: 'space-evenly',
      marginBottom: 10,
    }"
  >
    <div
      :style="{
        width: '47%',
      }"
    >
      <Card>
        <CardImage
          :src="amsterdamImage"
        />
        <div>
          <CardHeader>
            <CardTitle>Amsterdam holiday</CardTitle>
            <CardSubtitle>
              <span class="reviews">
                <span
                  class="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  class="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  class="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  class="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span class="k-icon k-i-star-outline" />
                <div>4/5 (391)</div>
              </span>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              Amsterdam is the perfect place for a great holiday, with its great
              museums and galleries, lovely eateries, picturesque winding
              streets and canals, and lively nightlife scene.
            </p>
          </CardBody>
          <CardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'" >Review</kbutton>
          </CardActions>
        </div>
      </Card>
    </div>
    <div
      :style="{
        width: '47%',
      }"
    >
      <Card>
        <CardImage
          :src="budapestImage"
        />
        <div>
          <CardHeader>
            <CardTitle>Budapest holiday</CardTitle>
            <CardSubtitle>
              <span class="reviews">
                <span
                  class="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  class="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  class="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  class="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  class="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <div>5/5 (1023)</div>
              </span>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              Discover why Budapest has long been a much-loved destination. Take
              an evening summer stroll along the banks of the Danube River, and
              enjoy the view from Castle Hill.
            </p>
          </CardBody>
          <CardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'" >Review</kbutton>
          </CardActions>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardActions,
} from "@progress/kendo-vue-layout";
import { Button } from '@progress/kendo-vue-buttons';

const amsterdamImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/amsterdam.jpg';
const budapestImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/budapest.jpg';

export default {
  components: {
    Card,
    CardImage,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardActions,
      'kbutton': Button
  },
  data() {
    return {
      amsterdamImage,
      budapestImage,
    };
  },
};
</script>
