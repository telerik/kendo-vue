<template>
    <div style="display: flex; justify-content: space-evenly">
      <div style="width: 45%" class="k-card-list">
        <div>Actions Orientation</div>
        <hr />
        <card style="width: 200px">
          <cardBody>
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
        <card style="width: 200px">
          <cardBody>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </cardBody>
          <cardActions :orientation="'vertical'">
            <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 1</kbutton>
           <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 2</kbutton>
          </cardActions>
        </card>
      </div>
      <div style="width: 45%" class="k-card-list">
        <div>Actions Layout</div>
        <hr />
        <card style="width: 300px">
          <cardBody>
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
        <card style="width: 300px">
          <cardBody>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </cardBody>
          <cardActions :layout="'center'">
            <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 1</kbutton>
           <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 2</kbutton>
          </cardActions>
        </card>
        <card style="width: 300px">
          <cardBody>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </cardBody>
          <cardActions :layout="'end'">
            <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 1</kbutton>
           <kbutton :fill-mode="'flat'" :theme-color="'primary'">Action 2</kbutton>
          </cardActions>
        </card>
        <card style="width: 300px">
          <cardBody>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </cardBody>
          <cardActions :layout="'stretched'">
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

