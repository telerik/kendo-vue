<template>
    <div style="display: flex; justify-content: space-evenly">
      <div class="k-card-list">
        <card style="width: 200px">
          <cardBody>
            <cardTitle>Card Title</cardTitle>
            <cardTitle>Card Subtitle</cardTitle>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </cardBody>
          <cardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 1</kbutton>
           <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 2</kbutton>
          </cardActions>
        </card>
        <card style="width: 200px" :type="'primary'">
          <cardBody>
            <cardTitle>Card Title</cardTitle>
            <cardTitle>Card Subtitle</cardTitle>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </cardBody>
          <cardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 1</kbutton>
           <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 2</kbutton>
          </cardActions>
        </card>
      </div>
      <div class="k-card-list">
        <card style="width: 200px" :type="'info'">
          <cardBody>
            <cardTitle>Card Title</cardTitle>
            <cardTitle>Card Subtitle</cardTitle>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </cardBody>
          <cardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 1</kbutton>
           <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 2</kbutton>
          </cardActions>
        </card>
        <card style="width: 200px" :type="'success'">
          <cardBody>
            <cardTitle>Card Title</cardTitle>
            <cardTitle>Card Subtitle</cardTitle>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </cardBody>
          <cardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 1</kbutton>
           <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 2</kbutton>
          </cardActions>
        </card>
      </div>
    <div class="k-card-list">
        <card style="width: 200px" :type="'warning'">
          <cardBody>
            <cardTitle>Card Title</cardTitle>
            <cardTitle>Card Subtitle</cardTitle>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </cardBody>
          <cardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 1</kbutton>
           <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 2</kbutton>
          </cardActions>
        </card>
        <card style="width: 200px" :type="'error'">
          <cardBody>
            <cardTitle>Card Title</cardTitle>
            <cardTitle>Card Subtitle</cardTitle>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </cardBody>
          <cardActions>
            <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 1</kbutton>
           <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 2</kbutton>
          </cardActions>
        </card>
      </div>
    </div>
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

export default {
    components: {
        'card': Card,
        'cardHeader': CardHeader,
        'cardBody': CardBody, 
        'cardTitle': CardTitle,
        'cardImage': CardImage, 
        'cardActions': CardActions,
      'kbutton': Button
    }
};

</script>

