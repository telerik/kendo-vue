<template>
  <div>
    <div>
      <kendo-menu :items="items" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Menu as KendoMenu } from "@progress/kendo-vue-layout";
import {
    folderIcon,
    fileIcon,
    fileImageIcon,
    filePdfIcon,
} from "@progress/kendo-svg-icons";

const items = ref([
    {
        text: "My Web Site",
        svgIcon: folderIcon,
        items: [
            {
                text: "images",
                svgIcon: folderIcon,
                items: [
                    { text: "logo.png", svgIcon: fileImageIcon },
                    { text: "body-back.png", svgIcon: fileImageIcon },
                    { text: "my-photo.png", svgIcon: fileImageIcon },
                ],
            },
            {
                text: "resources",
                svgIcon: folderIcon,
                items: [
                    {
                        text: "pdf",
                        svgIcon: folderIcon,
                        items: [
                            { text: "prices.pdf", svgIcon: filePdfIcon },
                            { text: "brochure.pdf", svgIcon: filePdfIcon },
                        ],
                    },
                    { text: "zip", svgIcon: folderIcon },
                ],
            },
            { text: "about.html", svgIcon: fileIcon },
            { text: "contacts.html", svgIcon: fileIcon },
            { text: "index.html", svgIcon: fileIcon },
            { text: "portfolio.html", svgIcon: fileIcon },
        ],
    },
]);
</script>
