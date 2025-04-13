<template>
  <div>
    <div
      class="demo-app"
      :style="{
        position: 'relative',
      }"
    >
      <div
        id="city"
        class="demo-view"
        :style="{
          position: 'absolute',
        }"
      >
        <div class="title">
          <h3>Current City</h3>
        </div>
        <div class="cards-container">
          <Card>
            <CardHeader>
              <CardTitle>Rome</CardTitle>
              <CardSubtitle>Capital of Italy</CardSubtitle>
            </CardHeader>
            <img
              class="k-card-image"
              :src="romeImage"
              alt="Rome image"
            />
            <CardBody>
              <p>
                Rome is a sprawling, cosmopolitan city with nearly 3,000 years
                of globally influential art, architecture and culture on
                display.
              </p>
              <p>
                Ancient ruins such as the Forum and the Colosseum evoke the
                power of the former Roman Empire.
              </p>
            </CardBody>
          </Card>
        </div>
        <KButton :id="'openActionSheetBttn'" @click="openHandler">
          OPEN ACTION SHEET
        </KButton>
        <ActionSheet
          :expand="open"
          :title="title"
          :items="items"
          @close="handleClose"
          @itemselect="handleItemSelect"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Button } from "@progress/kendo-vue-buttons";
import {
  ActionSheet,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "@progress/kendo-vue-layout";
import {
  cancelIcon,
  heartIcon,
  pencilIcon,
  uploadIcon,
} from "@progress/kendo-svg-icons";
const items = [
  {
    title: "Edit Item",
    description: "Click to edit",
    tabIndex: 0,
    svgIcon: pencilIcon,
  },
  {
    title: "Add to Favorites",
    tabIndex: 0,
    svgIcon: heartIcon,
  },
  {
    title: "Upload New",
    svgIcon: uploadIcon,
    disabled: true,
  },
  {
    title: "Cancel",
    tabIndex: 0,
    svgIcon: cancelIcon,
    group: "bottom",
  },
];

const romeImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") + "assets/layout/actionsheet/rome.jpg";

export default {
  components: {
    KButton: Button,
    ActionSheet,
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardBody,
  },
  data() {
    return {
      romeImage,
      cancelIcon,
      pencilIcon,
      heartIcon,
      uploadIcon,
      items,
      title: "Select an item",
      open: false,
    };
  },
  methods: {
    openHandler() {
      this.open = true;
    },
    handleClose() {
      this.open = false;
    },
    handleItemSelect() {
      this.open = false;
    },
  },
};
</script>
<style>
.demo-view {
  transform: scale(1);
  overflow: hidden;
}

.k-actionsheet-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.k-actionsheet-container > .k-overlay {
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.k-card {
  width: 285px;
  margin: 5%;
}

#openActionSheetBttn {
  margin: 0 auto;
  display: block;
}

.demo-app {
  margin: auto;
  width: 380px;
  height: 700px;
  background: #ffffff;
  box-shadow: 0px 10px 20px #00000016;
  border-radius: 30px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}
.demo-app .title {
  width: 100%;
}

#city {
  background: #f9f9f9;
  height: inherit;
  width: inherit;
  border-radius: 30px;
  border: 10px solid white;
  box-sizing: border-box;
}

.demo-app h3 {
  padding-top: 24px;
  text-align: center;
  font-size: 28px;
  letter-spacing: 0.28px;
  color: #3d57d8;
  font-weight: 400;
}
</style>
