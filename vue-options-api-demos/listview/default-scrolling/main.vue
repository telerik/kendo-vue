<template>
    <div>
      <ListView
        :data-items="employees"
        :item="'ItemRender'"
        :header="'HeaderRender'"
        :style="{ width: '300px', height: '400px' }"
      >
        <template v-slot:HeaderRender="{ props }">
          <h3 class="header-title">Contacts</h3>
        </template>
        <template v-slot:ItemRender="{ props }">
          <div :style="{ padding: '10px' }">
            <Card class="contact-card" :style="{ width: '260px' }">
              <CardHeader class="k-hbox">
                <Avatar
                  :style="{ width: '40px', height: '40px' }"
                  :type="'image'"
                  :rounded="'full'"
                  :size="'medium'"
                >
                  <img :src="photoURL(props.dataItem)" :eager="true" :alt="'Avatar Image'"/>
                </Avatar>
                <div>
                  <CardTitle class="contact-name">
                    {{ props.dataItem.full_name }}
                  </CardTitle>
                  <CardSubtitle class="contact-phone">
                    {{ props.dataItem.phone }}
                  </CardSubtitle>
                </div>
              </CardHeader>
  
              <CardActions>
                <KButton style="width: 100%" :theme-color="'primary'"
                  >Call</KButton
                >
              </CardActions>
            </Card>
          </div>
        </template>
      </ListView>
    </div>
  </template>
  <script>
  import { ListView } from '@progress/kendo-vue-listview';
  import { Button } from '@progress/kendo-vue-buttons';
  import {
    Avatar,
    Card,
    CardHeader,
    CardTitle,
    CardImage,
    CardSubtitle,
    CardBody,
    CardActions,
  } from '@progress/kendo-vue-layout';
  import { employees } from './employees';
  import { images } from './images';
  
  export default {
    components: {
      Avatar,
      ListView,
      Card,
      CardHeader,
      CardTitle,
      CardImage,
      CardSubtitle,
      CardBody,
      CardActions,
      KButton: Button,
    },
    data() {
      return {
        employees: employees,
        images: images,
      };
    },
    methods: {
      photoURL(dataItem) {
        const code = dataItem.img_id + dataItem.gender;
        return images[code];
      },
    },
  };
  </script>
  
  <style>
  .k-listview {
    margin: auto;
  }
  
  .k-listview {
    border: 1px solid rgba(0, 0, 0, 0.08);
    color: #424242;
    background-color: #ffffff;
  }
  .header-title {
    text-align: center;
    font-size: 36px;
    margin: 0;
  }
  .contact-card .contact-name {
    font-size: 19px;
  }
  .contact-card .contact-phone {
    margin-top: 0;
    font-size: 12px;
  }
  </style>
  