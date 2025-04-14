<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Default k-buttons</p>
      <p>
        <KButton>Browse</KButton>
        <KButton :svg-icon="folderIcon">Browse</KButton>
        <KButton :svg-icon="folderIcon"></KButton>
      </p>
      <p>
        <KButton :disabled="true">Browse</KButton>
        <KButton :svg-icon="folderIcon" :disabled="true">Browse</KButton>
        <KButton :svg-icon="folderIcon" :disabled="true"></KButton>
      </p>
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
      <p>Default k-buttons (Primary)</p>
      <p>
        <KButton :theme-color="'primary'">Browse</KButton>
        <KButton :svg-icon="folderIcon" :theme-color="'primary'"
          >Browse</KButton
        >
        <KButton :svg-icon="folderIcon" :theme-color="'primary'"></KButton>
      </p>
      <p>
        <KButton :theme-color="'primary'" :disabled="true">Browse</KButton>
        <KButton
          :svg-icon="folderIcon"
          :theme-color="'primary'"
          :disabled="true"
          >Browse</KButton
        >
        <KButton
          :svg-icon="folderIcon"
          :theme-color="'primary'"
          :disabled="true"
        ></KButton>
      </p>
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
      <p>Flat k-buttons</p>
      <p>
        <KButton :fill-mode="'flat'">Browse</KButton>
        <KButton :svg-icon="folderIcon" :fill-mode="'flat'">Browse</KButton>
        <KButton :svg-icon="folderIcon" :fill-mode="'flat'"></KButton>
      </p>
      <p>
        <KButton :fill-mode="'flat'" :disabled="true">Browse</KButton>
        <KButton :svg-icon="folderIcon" :fill-mode="'flat'" :disabled="true"
          >Browse</KButton
        >
        <KButton
          :svg-icon="folderIcon"
          :fill-mode="'flat'"
          :disabled="true"
        ></KButton>
      </p>
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
      <p>Flat k-buttons (Primary)</p>
      <p>
        <KButton :theme-color="'primary'" :fill-mode="'flat'">Browse</KButton>
        <KButton
          :svg-icon="folderIcon"
          :theme-color="'primary'"
          :fill-mode="'flat'"
          >Browse</KButton
        >
        <KButton
          :svg-icon="folderIcon"
          :theme-color="'primary'"
          :fill-mode="'flat'"
        ></KButton>
      </p>
      <p>
        <KButton :theme-color="'primary'" :fill-mode="'flat'" :disabled="true"
          >Browse</KButton
        >
        <KButton
          :svg-icon="folderIcon"
          :theme-color="'primary'"
          :fill-mode="'flat'"
          :disabled="true"
          >Browse</KButton
        >
        <KButton
          :svg-icon="folderIcon"
          :theme-color="'primary'"
          :fill-mode="'flat'"
          :disabled="true"
        ></KButton>
      </p>
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
      <p>Outline k-buttons</p>
      <p>
        <KButton :fill-mode="'outline'">Browse</KButton>
        <KButton :svg-icon="folderIcon" :fill-mode="'outline'">Browse</KButton>
        <KButton :svg-icon="folderIcon" :fill-mode="'outline'"></KButton>
      </p>
      <p>
        <KButton :fill-mode="'outline'" :disabled="true">Browse</KButton>
        <KButton :svg-icon="folderIcon" :fill-mode="'outline'" :disabled="true"
          >Browse</KButton
        >
        <KButton
          :svg-icon="folderIcon"
          :fill-mode="'outline'"
          :disabled="true"
        ></KButton>
      </p>
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
      <p>Outline k-buttons (Primary)</p>
      <p>
        <KButton :theme-color="'primary'" :fill-mode="'outline'"
          >Browse</KButton
        >
        <KButton
          :svg-icon="folderIcon"
          :theme-color="'primary'"
          :fill-mode="'outline'"
          >Browse</KButton
        >
        <KButton
          :svg-icon="folderIcon"
          :theme-color="'primary'"
          :fill-mode="'outline'"
        ></KButton>
      </p>
      <p>
        <KButton
          :theme-color="'primary'"
          :fill-mode="'outline'"
          :disabled="true"
          >Browse</KButton
        >
        <KButton
          :svg-icon="folderIcon"
          :theme-color="'primary'"
          :fill-mode="'outline'"
          :disabled="true"
          >Browse</KButton
        >
        <KButton
          :svg-icon="folderIcon"
          :theme-color="'primary'"
          :fill-mode="'outline'"
          :disabled="true"
        ></KButton>
      </p>
    </div>

    <div class="col-xs-12 example-col">
      <p>Icon Types</p>
      <KButton :svg-icon="calendarIcon">Kendo UI for Vue Font Icon</KButton>
      <KButton
        :image-url="snowboardingImage"
        >Image Icon</KButton
      >
    </div>
  </div>
</template>
<script>
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { folderIcon, calendarIcon } from "@progress/kendo-svg-icons";

export default {
  components: {
    KButton,
  },
  data() {
    return {
      folderIcon,
      calendarIcon,
      snowboardingImage: (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") + "assets/buttons/button/snowboarding.png"
    };
  },
};
</script>
<style scoped>
.k-button {
  margin-right: 3px;
}

.k-button > .k-image {
  width: 20px;
  height: 20px;
}
</style>
