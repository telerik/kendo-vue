<template>
 <div>
       <ScrollView
         :style="{
            width: '512px',
            height: '384px'
          }"
          :data-items="items"
          :content="'content'"
      >
       <template v-slot:content="{props}">
            <div class="image-with-text">
              <p>
                Showing image {{props.item.position}} of {{props.items.length}}.
              </p>
              <img
                :src="props.item.url"
                :alt="`Photo ${props.item.position}`"
                :style="{
                  width: '512px',
                  height: '384px'
                }"
                :draggable="false"
              />
            </div>
         </template>
      </ScrollView>
      </div>
</template>

<script>
import {
 ScrollView
    } from '@progress/kendo-vue-scrollview';

export default {
    components: {
      ScrollView
    },
    data(){
      return {
         items: [
            {
              position: 1,
              url: "https://demos.telerik.com/blazor-ui/images/photos/1.jpg",
            },
            {
              position: 2,
              url: "https://demos.telerik.com/blazor-ui/images/photos/2.jpg",
            },
            {
              position: 3,
              url: "https://demos.telerik.com/blazor-ui/images/photos/3.jpg",
            },
            {
              position: 4,
              url: "https://demos.telerik.com/blazor-ui/images/photos/4.jpg",
            },
            {
              position: 5,
              url: "https://demos.telerik.com/blazor-ui/images/photos/5.jpg",
            },
          ]
      };
    },
    methods: {
      onToggle(flag){
         this[flag] = !this[flag];
      },
      onClose(flag){
         this[flag] = false;
      }
    }
};

</script>

