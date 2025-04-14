<template>
  <div>
      <div class="example-config">
          <h6>Change taps position: </h6>
           <dropdownlist
          :style="{ width: '230px' }" 
              :data-items='data'
              :default-value="'k-card-deck'"
              @change="handleChange"
          >
          </dropdownlist>
      </div>
      <hr />
      <div :class="currentLayout">
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
      </div>
  </div>
</template>
<script>
import {
  Card,
  CardBody,
  CardTitle,
  CardActions,
} from "@progress/kendo-vue-layout";
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'card': Card,
        'cardBody': CardBody, 
        'cardTitle': CardTitle,
        'cardActions': CardActions,
        'dropdownlist': DropDownList,
      'kbutton': Button
    },
    data: function(){
        return {
            currentLayout: 'k-card-deck',
            data: ["k-card-list", "k-card-group", "k-card-deck"]
        }
    },
    methods:{
        handleChange: function(e){
            this.currentLayout = e.value;
        }
    }
};

</script>

