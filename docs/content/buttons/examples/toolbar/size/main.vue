<template>
  <div>
    <ToolbarStyleConfigurator :size="size" @sizechange="setSize" />
    <Toolbar :size="size">
      <ButtonGroup class="k-toolbar-button-group">
        <KButton
          class="k-toolbar-button"
          :svg-icon="boldIcon"
          :title="'Bold'"
          :togglable="true"
        />
        <KButton
          class="k-toolbar-button"
          :svg-icon="italicIcon"
          :title="'Italic'"
          :togglable="true"
        />
        <KButton
          class="k-toolbar-button"
          :svg-icon="underlineIcon"
          :title="'Underline'"
          :togglable="true"
        />
      </ButtonGroup>
      <ToolbarSeparator />
      <ButtonGroup class="k-toolbar-button-group">
        <KButton
          class="k-toolbar-button"
          :svg-icon="alignLeftIcon"
          :title="'Align Left'"
          :togglable="true"
        />
        <KButton
          class="k-toolbar-button"
          :svg-icon="alignCenterIcon"
          :title="'Align Center'"
          :togglable="true"
        />
        <KButton
          class="k-toolbar-button"
          :svg-icon="alignRightIcon"
          :title="'Align Right'"
          :togglable="true"
        />
        <KButton
          class="k-toolbar-button"
          :svg-icon="alignJustifyIcon"
          :title="'Align Justify'"
          :togglable="true"
        />
      </ButtonGroup>
      <ToolbarSpacer />
      <KButton
        class="k-toolbar-button"
        :svg-icon="cutIcon"
        :title="'Cut'"
      >
        Cut
      </KButton>
      <KButton
        class="k-toolbar-button"
        :svg-icon="copyIcon"
        :title="'Copy'"
      >
        Copy
      </KButton>
      <DropDownButton
        :text="'Paste'"
        :svg-icon="clipboardIcon"
        :items="ddItems"
      />
      <ToolbarSeparator />
      <SplitButton
        class="k-toolbar-split-button"
        :text="'Insert'"
        :items="splitItems"
      />
    </Toolbar>
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
    DropDownButton,
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
    copyIcon,
    clipboardIcon,
} from "@progress/kendo-svg-icons";
import ToolbarStyleConfigurator from "./ToolbarStyleConfigurator.vue";

const size = ref('medium');
const ddItems = [
    { icon: "text", text: "Plain Text" },
    { icon: "html", text: "HTML" },
];
const splitItems = [
    { icon: "image", text: "Image" },
    { icon: "table", text: "Table" },
];

const setSize = (event) => {
    size.value = event.value;
};
</script>
