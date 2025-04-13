<template>
    <div class="example">
      <fab
        :svg-icon="pencilIcon"
        :text="'Compose New'"
        :shape="'rectangle'"
        :theme-color="'info'"
        :items="contacts"
        :item="customItem"
        :popup-settings="{ animate: false, popupClass: 'contacts-list' }"
      >
        <template v-slot:myTemplate="{ props }">
          <custom :data-item="props.dataItem" />
        </template>
      </fab>
    </div>
  </template>
  <script>
  import { FloatingActionButton } from "@progress/kendo-vue-buttons";
  import { pencilIcon } from "@progress/kendo-svg-icons";
  import CustomItem from "./CustomItem.vue";

  const mallroyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/contacts/7.png';
  const miaImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/contacts/4.png';
  const darrelImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/contacts/1.png';

  const contacts = [
    {
        name: 'Mallory Gillian',
        image: mallroyImage,
        role: 'UX Designer'
    },
    {
        name: 'Mia Coldwell',
        image: miaImage,
        role: 'Senior Director'
    },
    {
        name: 'Darrel Solis',
        image: darrelImage,
        role: 'Product Manager'
    }
];

  export default {
    components: {
      fab: FloatingActionButton,
      custom: CustomItem,
    },
    data() {
      return {
        pencilIcon,
        contacts,
        customItem: "myTemplate",
      };
    },
  };
  </script>
  <style>
  .contacts-list li.k-fab-item {
    margin-bottom: 0;
    padding: 0;
    border: 1px solid #f1f1f1;
  }
  .contacts-list .k-fab-items {
    padding: 0;
    width: 145px;
  }
  .contact-item {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .contact-details {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    line-height: initial;
  }
  .contact-role {
    font-size: 10px;
    color: #0058e9;
  }
  </style>
