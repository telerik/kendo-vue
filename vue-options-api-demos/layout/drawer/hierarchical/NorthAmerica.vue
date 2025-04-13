<template>
  <div
    id="NorthAmerica"
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
          :src="newYorkImage"
        />
        <div>
          <CardHeader>
            <CardTitle>New York holiday</CardTitle>
            <CardSubtitle>
              <span className="reviews">
                <span
                  className="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  className="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  className="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  className="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span className="k-icon k-i-star-outline" />
                <div>4/5 (2523)</div>
              </span>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              New York holidays are the ideal way to explore one of the most
              iconic destinations. Offering both return flights and
              accommodation, they offer great value and fantastic savings.
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
          :src="lasvegasImage"
        />
        <div>
          <CardHeader>
            <CardTitle>Las Vegas holiday</CardTitle>
            <CardSubtitle>
              <span className="reviews">
                <span
                  className="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  className="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  className="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  className="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <span
                  className="k-icon k-i-star"
                  :style="{
                    color: '#ffce2a',
                  }"
                />
                <div>5/5 (357)</div>
              </span>
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <p>
              With its famous casinos, gourmet restaurants and glitzy shows, Las
              Vegas is truly a must-see destination. Explore the famous hotels
              and casinos that are home to the best restaurants and clubs.
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

const lasvegasImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/las-vegas.jpg';
const newYorkImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/new-york.jpg';

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
      lasvegasImage,
      newYorkImage
    }
  }
};
</script>
