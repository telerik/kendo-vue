<template>
  <div class="row example-wrapper">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Kendo UI for Vue font icon</p>
      <SplitButton :items="iconItems" :svg-icon="saveIcon" :text="'Save'" />
      &nbsp;
      <SplitButton :items="iconItems" :svg-icon="saveIcon" />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>FontAwеsome icon</p>
      <SplitButton
        :items="iconClassItems"
        :iconClass="'fa fa-mail-reply fa-fw'"
        :text="'Reply'"
      />
      &nbsp;
      <SplitButton
        :items="iconClassItems"
        :iconClass="'fa fa-mail-reply fa-fw'"
      />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Image icon</p>
      <SplitButton :items="imageItems" :image-url="imageUrl" :text="'Save'" />
      &nbsp;
      <SplitButton :items="imageItems" :image-url="imageUrl" />
    </div>
  </div>
</template>

<script setup>
import { SplitButton } from "@progress/kendo-vue-buttons";
import { saveIcon, uploadIcon } from "@progress/kendo-svg-icons";

const saveImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") + "assets/buttons/toolbar/save.png";

const iconItems = [
    { text: "Save as" },
    { text: "Upload to drive", svgIcon: uploadIcon },
];

const iconClassItems = [
    { text: "Reply all", iconClass: "fa fa-mail-reply-all fa-fw" },
    { text: "Forward", iconClass: "fa fa-mail-forward fa-fw" },
    { text: "Reply & delete" },
];

const imageItems = [
    { text: "Save as" },
    { text: "Upload to drive", svgIcon: uploadIcon },
];

const imageUrl = saveImage;
</script>
