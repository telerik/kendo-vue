<template>
  <div>
    <Toolbar @resize="onToolbarResize">
      <ButtonGroup :class="'k-toolbar-button-group'">
        <KButton
          :class="'k-toolbar-button'"
          :svg-icon="boldIcon"
          :title="'Bold'"
          :togglable="true"
        />
        <KButton
          :class="'k-toolbar-button'"
          :svg-icon="italicIcon"
          :title="'Italic'"
          :togglable="true"
        />
        <KButton
          :class="'k-toolbar-button'"
          :svg-icon="underlineIcon"
          :title="'Underline'"
          :togglable="true"
        />
      </ButtonGroup>
      <ButtonGroup :class="'k-toolbar-button-group'">
        <KButton
          :class="'k-toolbar-button'"
          :svg-icon="alignLeftIcon"
          :title="'Align Left'"
          :togglable="true"
        />
        <KButton
          :class="'k-toolbar-button'"
          :svg-icon="alignCenterIcon"
          :title="'Align Center'"
          :togglable="true"
        />
        <KButton
          :class="'k-toolbar-button'"
          :svg-icon="alignRightIcon"
          :title="'Align Right'"
          :togglable="true"
        />
        <KButton
          :class="'k-toolbar-button'"
          :svg-icon="alignJustifyIcon"
          :title="'Align Justify'"
          :togglable="true"
        />
      </ButtonGroup>
      <ToolbarSpacer />
      <SplitButton
        :class="'k-toolbar-split-button'"
        :text="'Insert'"
        :items="splitItems"
      />
      <ToolbarSeparator />
      <KButton :class="'k-toolbar-button'" :svg-icon="cutIcon" :title="'Cut'">
        Cut
      </KButton>
      <KButton :class="'k-toolbar-button'" :svg-icon="copyIcon" :title="'Copy'">
        Copy
      </KButton>
      <SplitButton
        :class="'k-toolbar-split-button'"
        :text="'Insert'"
        :items="splitItems"
      />
    </Toolbar>
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Toolbar,
    ToolbarSeparator,
    ToolbarSpacer,
    Button as KButton,
    ButtonGroup,
    SplitButton,
} from "@progress/kendo-vue-buttons";
import {
    boldIcon,
    underlineIcon,
    italicIcon,
    alignJustifyIcon,
    alignRightIcon,
    alignCenterIcon,
    alignLeftIcon,
    cutIcon,
    copyIcon
} from "@progress/kendo-svg-icons";

import Logger from "./Logger.vue";

const events = ref([]);
const splitItems = [
    { icon: "image", text: "Image" },
    { icon: "table", text: "Table" },
];

function onToolbarResize() {
    events.value.unshift("Resize event triggered");
}
</script>
