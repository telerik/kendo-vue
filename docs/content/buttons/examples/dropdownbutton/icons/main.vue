<template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />

    <div class="row example-wrapper">
      <div class="col-xs-12 col-sm-6 example-col">
        <p>Kendo UI for Vue font icon</p>
        <DropDownButton
          :items="settings"
          :svg-icon="gearIcon"
          :text="'User Settings'"
        />
        <DropDownButton :items="settings" :svg-icon="gearIcon" />
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <p>FontAwеsome icon</p>
        <DropDownButton
          :items="settings"
          :icon-class="'fa fa-cog fa-fw'"
          :text="'User Settings'"
        />
        <DropDownButton :items="settings" :icon-class="'fa fa-cog fa-fw'" />
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <p>Image icon</p>
        <DropDownButton
          :items="bookmarks"
          :imageUrl="imageUrl"
          :text="'Bookmarks'"
        />
        <DropDownButton :items="bookmarks" :image-url="imageUrl" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DropDownButton } from "@progress/kendo-vue-buttons";
import { gearIcon } from "@progress/kendo-svg-icons";

const starIcon = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/panelbar/icons/star.png';

const settings = ref([
    {
        text: "My Profile",
    },
    {
        text: "Friend Requests",
    },
    {
        text: "Account Settings",
    },
    {
        text: "Support",
    },
    {
        text: "Log Out",
    },
]);

const imageUrl = ref(starIcon);
const bookmarks = ref([
    {
        text: "Show All",
    },
    {
        text: "Bookmark This Page",
    },
    {
        text: "Import",
    },
    {
        text: "Export",
    },
]);
</script>

