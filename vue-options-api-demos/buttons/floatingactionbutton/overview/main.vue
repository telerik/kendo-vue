<template>
  <div class="example-wrap">
    <div class="k-card k-card-vertical">
      <img
        :src="grassImage"
        class="k-card-media"
        :alt="'Card Image'"
      />
      <div class="k-card-body">
        <fab
          :text="'Add to Queue'"
          :svg-icon="added ? checkIcon : undefined"
          :align="{ horizontal: 'end', vertical: 'top' }"
          :alignOffset="{ y: 175 }"
          :positionMode="'absolute'"
          @click="handleClick"
        />
        <h2 class="k-card-title">Summer Mix 2020</h2>
        <p class="k-card-subtitle">DJ Peril</p>
      </div>
    </div>
    <div class="notes-wrap k-block">
      <div v-if="open" class="k-overlay" />
      <h2 class="title">Notes:</h2>
      <ktextarea :value="text" />
      <fab
        :svg-icon="open ? xIcon : shareIcon"
        :items="contacts"
        :item="customItem"
        :position-mode="'absolute'"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-slot:myTemplate="{ props }">
          <custom :data-item="props.dataItem" />
        </template>
      </fab>
    </div>
  </div>
</template>
<script>
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { TextArea } from "@progress/kendo-vue-inputs";
import { checkIcon, xIcon, shareIcon } from "@progress/kendo-svg-icons";
import CustomItem from "./CustomItem.vue";

const grassImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/5.jpg';
const mallroyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/contacts/7.png';
const miaImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/contacts/4.png';
const darrelImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/contacts/1.png';

const contacts = [
  {
    name: "Mallory Gillian",
    image: mallroyImage,
  },
  {
    name: "Mia Coldwell",
    image: miaImage,
  },
  {
    name: "Darrel Solis",
    image: darrelImage,
  },
];

export default {
  components: {
    fab: FloatingActionButton,
    custom: CustomItem,
    ktextarea: TextArea,
  },
  data() {
    return {
      grassImage,
      checkIcon,
      xIcon,
      shareIcon,
      contacts,
      added: true,
      open: false,
      text:
        'I renamed my iPod The Titanic, so when I plug in it, it says "The Titanic is syncing."',
      customItem: "myTemplate",
    };
  },
  methods: {
    handleClick() {
      this.added = !this.added;
    },
    handleOpen() {
      this.open = true;
    },
    handleClose() {
      this.open = false;
    },
  },
};
</script>
<style>
.example-wrap {
  display: flex;
  justify-content: space-around;
}
.k-card {
  width: 350px;
  height: auto;
  position: relative;
}
.k-card-media {
  height: 200px;
}
.k-card button.k-fab:focus {
  outline: none;
}
.title {
  font-size: 18px;
  color: #656565;
}
.notes-wrap {
  padding: 50px 20px 50px 20px;
  position: relative;
  height: 300px;
}
.notes-wrap textarea.k-textarea {
  height: 100px;
  resize: none;
}
.k-overlay {
  position: absolute;
}
.notes-wrap .k-pos-absolute,
.k-animation-container {
  z-index: 10003;
}
</style>
