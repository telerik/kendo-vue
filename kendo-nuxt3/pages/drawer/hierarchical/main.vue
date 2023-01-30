<template>
  <div>
      <div class="custom-toolbar">
        <kbutton :icon="'menu'" :look="'flat'" @click="handleClick" />
        <span class="title">Categories</span>
      </div>
      <Drawer
        :expanded="drawerExpanded"
        :mode="'push'"
        :width="180"
        :items="dataItems"
        :item="'CustomItem'"
        @select="handleSelect"
      >
         <template v-slot:CustomItem="{props}">
         <DrawerItem v-if="props.visible!==false" v-bind="props" @click="props.onClick">
          <span :class="'k-icon ' + props.icon" />
          <span class="k-item-text">{{props.text}}</span>
          <span v-if="props['data-expanded'] !== undefined"
            :class="props['data-expanded'] ? downClass : rightClass"
            :style="{
              position: 'absolute',
              right: '10px',
            }"
          />
        </DrawerItem>
        </template>
        <DrawerContent>
          <slot />
        </DrawerContent>
      </Drawer>
    </div>
</template>

<script>

import {
  Drawer,
  DrawerContent,
  DrawerItem,
    } from '@progress/kendo-vue-layout';
import { Button } from "@progress/kendo-vue-buttons";

export default {
    components: {
        Drawer,
        DrawerContent,
        DrawerItem,
        'kbutton': Button
    },
    data () {
      return {
        downClass: 'k-icon k-i-arrow-chevron-down',
        rightClass: 'k-icon k-i-arrow-chevron-right',
        items: [
          {
            text: "Education",
            icon: "k-i-pencil",
            id: 1,
            selected: true,
            route: "/",
          },
          {
            separator: true,
          },
          {
            text: "Food",
            icon: "k-i-heart",
            id: 2,
            ["data-expanded"]: true,
            route: "/food",
          },
          {
            text: "Japanese Food",
            icon: "k-i-minus",
            id: 4,
            parentId: 2,
            route: "/food/japanese",
          },
          {
            text: "Italian Food",
            icon: "k-i-minus",
            id: 5,
            parentId: 2,
            route: "/food/italian",
          },
          {
            separator: true,
          },
          {
            text: "Travel",
            icon: "k-i-globe-outline",
            ["data-expanded"]: true,
            id: 3,
            route: "/travel",
          },
          {
            text: "Europe",
            icon: "k-i-minus",
            id: 6,
            parentId: 3,
            route: "/travel/europe",
          },
          {
            text: "North America",
            icon: "k-i-minus",
            id: 7,
            parentId: 3,
            route: "/travel/america",
          }
        ] ,
        drawerExpanded: true,
        selectedItem: null,
        selected: 'Home'
      }
    },
    computed: {
       dataItems() {
            const newItems = this.items.map((item) => {
              const { parentId, ...others } = item;

              if (parentId !== undefined) {
                const parent = this.items.find((parent) => parent.id === parentId);
                return { ...others, visible: parent["data-expanded"] };
              }

              return item;
            });
            return newItems;
       }
    },
    methods: {
        handleClick () {
             this.drawerExpanded = !this.drawerExpanded;
        },
        handleSelect(ev) {
          const currentItem = ev.itemTarget.props;
          const isParent = currentItem["data-expanded"] !== undefined;
          const nextExpanded = !currentItem["data-expanded"];
          const newData = this.items.map((item) => {
            const {
              selected,
              ["data-expanded"]: currentExpanded,
              id,
              ...others
            } = item;
            const isCurrentItem = currentItem.id === id;
            return {
              selected: isCurrentItem,
              ["data-expanded"]:
                isCurrentItem && isParent ? nextExpanded : currentExpanded,
              id,
              ...others,
            };
          });
         // props.history.push(ev.itemTarget.props.route);
          this.items = newData;
        }
    }
};

</script>