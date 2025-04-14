<template>
  <div>
    <Toolbar @resize="onToolbarResize">
      <ButtonGroup :class="'k-toolbar-button-group'">
        <Button
          :class="'k-toolbar-button'"
          :svg-icon="boldIcon"
          :title="'Bold'"
          :togglable="true"
        />
        <Button
          :class="'k-toolbar-button'"
          :svg-icon="italicIcon"
          :title="'Italic'"
          :togglable="true"
        />
        <Button
          :class="'k-toolbar-button'"
          :svg-icon="underlineIcon"
          :title="'Underline'"
          :togglable="true"
        />
      </ButtonGroup>
      <ButtonGroup :class="'k-toolbar-button-group'">
        <Button
          :class="'k-toolbar-button'"
          :svg-icon="alignLeftIcon"
          :title="'Align Left'"
          :togglable="true"
        />
        <Button
          :class="'k-toolbar-button'"
          :svg-icon="alignCenterIcon"
          :title="'Align Center'"
          :togglable="true"
        />
        <Button
          :class="'k-toolbar-button'"
          :svg-icon="alignRightIcon"
          :title="'Align Right'"
          :togglable="true"
        />
        <Button
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
      >
      </SplitButton>
      <ToolbarSeparator />
      <Button :class="'k-toolbar-button'" :svg-icon="cutIcon" :title="'Cut'">
        Cut
      </Button>
      <Button :class="'k-toolbar-button'" :svg-icon="copyIcon" :title="'Copy'">
        Copy
      </Button>
      <SplitButton
        :class="'k-toolbar-split-button'"
        :text="'Insert'"
        :items="splitItems"
      >
      </SplitButton>
    </Toolbar>
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script>
import {
  Toolbar,
  ToolbarSeparator,
  ToolbarSpacer,
  Button,
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
  copyIcon,
  clipboardIcon,
} from "@progress/kendo-svg-icons";

import Logger from "./Logger.vue";

export default {
  components: {
    Toolbar,
    ToolbarSeparator,
    ToolbarSpacer,
    Button,
    ButtonGroup,
    SplitButton,
    Logger,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data: function () {
    return {
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
      events: [],
      ddItems: [
        { icon: "text", text: "Plain Text" },
        { icon: "html", text: "HTML" },
      ],
      splitItems: [
        { icon: "image", text: "Image" },
        { icon: "table", text: "Table" },
      ],
    };
  },
  methods: {
    onToolbarResize() {
      this.events.unshift("Resize event triggered");
    },
  },
};
</script>
