<template>
  <div>
      <div class="custom-toolbar">
        <kbutton :icon="'menu'" :look="'flat'" @click="handleClick" />
        <span class="title">Weather Forecast in Europe</span>
      </div>
      <Drawer
        :expanded="expanded"
        :mode="'push'"
        :mini="true"
        :width="175"
        :items="items.map((item) => ({
          ...item,
          selected: item.text === selected,
        }))"
        :item="'CustomItem'"
        @select="handleSelect"
      >
         <template v-slot:CustomItem="{props}">
            <DrawerItem v-bind="props" @click="props.onClick">
              <span :class="'k-icon flag ' + props.flag" />
              <div class="item-descr-wrap">
                <div>{{props.text}}</div>
                <span class="item-descr">Capital of {{props.country}}</span>
              </div>
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
        items: [
          {
            text: "Paris",
            selected: true,
            flag: "france-flag",
            country: "France",
            route: "/",
          },
          {
            separator: true,
          },
          {
            text: "Rome",
            flag: "italy-flag",
            country: "Italy",
            route: "/rome",
          },
          {
            separator: true,
          },
          {
            text: "Berlin",
            flag: "germany-flag",
            country: "Germany",
            route: "/berlin",
          },
          {
            separator: true,
          },
          {
            text: "Madrid",
            flag: "spain-flag",
            country: "Spain",
            route: "/madrid",
          },
        ] ,
        expanded: true,
        selectedItem: null,
        selected: 'Home'
      }
    },
    methods: {
        handleClick () {
             this.expanded = !this.expanded;
        },
        handleSelect(e) {
          console.log('select', e)
        }
    }
};

</script>
<style>
my-app { padding: 0 !important; }

.k-drawer-content { padding: 20px; }

.k-drawer-container {
    position: fixed;
    width: 100%;
    height: 100%;
}
.k-drawer-item {
    align-items: center;
    user-select: none;
}
.weather {
    margin: 0 auto 30px;
    text-align: center;
}
.weather-icon {
    display: block;
    margin: 30px auto 10px;
    width: 128px;
    height: 128px;
}
.k-drawer-container .k-drawer-items .k-icon {
    font-size: 20px;
    margin-right: 16px;
    height: 20px;
}
.custom-toolbar {
    width: 100%;
    background-color: #f6f6f6;
    line-height: 10px;
    border-bottom: inset;
    border-bottom-width: 1px;
    padding: 3px 8px;
    color: #656565;
}
.title {
    margin-left: 20px;
    font-weight: bold;
    font-size: 17px;
}
.sunny {
    background: url('https://demos.telerik.com/kendo-ui/content/web/tabstrip/weather.png') transparent no-repeat 0 0;
}
.cloudy {
    background: url('https://demos.telerik.com/kendo-ui/content/web/tabstrip/weather.png') transparent no-repeat -128px 0;
}
.item-descr {
    margin-top: -5px;
}
.item-descr-wrap > span {
    font-size: 70%;
}
.item-descr-wrap {
    display: flex;
    flex-direction: column;
}
.flag {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
}
.france-flag {
    background-image: url('https://demos.telerik.com/kendo-ui/content/web/drawer/france-flag.png');
}
.spain-flag {
    background-image: url('https://demos.telerik.com/kendo-ui/content/web/drawer/spain-flag.png');
}
.italy-flag {
    background-image: url('https://demos.telerik.com/kendo-ui/content/web/drawer/italy-flag.png');
}
.germany-flag {
    background-image: url('https://demos.telerik.com/kendo-ui/content/web/drawer/germany-flag.png');
}
</style>
