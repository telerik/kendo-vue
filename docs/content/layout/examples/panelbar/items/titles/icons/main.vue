<template>
  <div class="panelbar-wrapper">
    <PanelBar :items="items" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PanelBar } from '@progress/kendo-vue-layout';
import {
    fileIcon,
    filePdfIcon,
    folderIcon,
    imageIcon,
} from '@progress/kendo-svg-icons';
import './styles.css';

const items = ref([
    {
        title: 'My Web Site',
        svgIcon: folderIcon,
        expanded: true,
    },
    {
        title: 'images',
        svgIcon: folderIcon,
        expanded: true,
        items: [
            { title: 'logo.png', svgIcon: imageIcon },
            { title: 'body-back.png', svgIcon: imageIcon },
            { title: 'my-photo.png', svgIcon: imageIcon },
        ],
    },
    {
        title: 'resources',
        svgIcon: folderIcon,
        expanded: true,
        items: [
            {
                title: 'pdf',
                svgIcon: folderIcon,
                expanded: false,
                items: [
                    { title: 'prices.pdf', svgIcon: filePdfIcon },
                    { title: 'brochure.pdf', svgIcon: filePdfIcon },
                ],
            },
        ],
    },
    {
        title: 'zip',
        svgIcon: folderIcon,
        items: [
            { title: 'about.html', svgIcon: fileIcon },
            { title: 'contacts.html', svgIcon: fileIcon },
            { title: 'index.html', svgIcon: fileIcon },
            { title: 'portfolio.html', svgIcon: fileIcon },
        ],
    },
]);
</script>
