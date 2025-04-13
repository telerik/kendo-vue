<template>
  <div>
    <div
      id="JapaneseFood"
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
            :src="sushiImage"
          />
          <div>
            <CardHeader>
              <CardTitle>Sushi</CardTitle>
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
                  <div>5/5 (203)</div>
                </span>
              </CardSubtitle>
            </CardHeader>
            <CardBody>
              <p>
                Sushi is a Japanese dish of prepared vinegared rice,
                accompanying with seafood, vegetables, and occasionally tropical
                fruits.
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
            :src="ramenImage"
          />
          <div>
            <CardHeader>
              <CardTitle>Ramen</CardTitle>
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
                  <div>5/5 (653)</div>
                </span>
              </CardSubtitle>
            </CardHeader>
            <CardBody>
              <p>
                Ramen is a Japanese dish with a translation of "pulled noodles".
                It consists of wheat noodles served in a meat or fish-based
                broth.
              </p>
            </CardBody>
            <CardActions>
              <kbutton :fill-mode="'flat'" :theme-color="'primary'" >Review</kbutton>
            </CardActions>
          </div>
        </Card>
      </div>
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

const sushiImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/sushi.jpg';
const ramenImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/ramen.jpg';

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
  data(){
    return {
      sushiImage,
      ramenImage,
    };
  },
};
</script>
