<template>
    <div>
      <ToolbarStyleConfigurator
        :fill-mode="fillMode"
        @fillmodechange="setFillMode"
      />
      <p>Fill mode applied both to the ToolBar and its tools:</p>
      <Toolbar :fill-mode="fillMode">
        <ButtonGroup :class="'k-toolbar-button-group'">
          <KButton
            :class="'k-toolbar-button'"
            :svg-icon="boldIcon"
            :title="'Bold'"
            :togglable="true"
            :fill-mode="fillMode"
          />
          <KButton
            :class="'k-toolbar-button'"
            :svg-icon="italicIcon"
            :title="'Italic'"
            :togglable="true"
            :fill-mode="fillMode"
          />
          <KButton
            :class="'k-toolbar-button'"
            :svg-icon="underlineIcon"
            :title="'Underline'"
            :togglable="true"
            :fill-mode="fillMode"
          />
        </ButtonGroup>
        <ToolbarSeparator />
        <ButtonGroup :class="'k-toolbar-button-group'">
          <KButton
            :class="'k-toolbar-button'"
            :svg-icon="alignLeftIcon"
            :title="'Align Left'"
            :togglable="true"
            :fill-mode="fillMode"
          />
          <KButton
            :class="'k-toolbar-button'"
            :svg-icon="alignCenterIcon"
            :title="'Align Center'"
            :togglable="true"
            :fill-mode="fillMode"
          />
          <KButton
            :class="'k-toolbar-button'"
            :svg-icon="alignRightIcon"
            :title="'Align Right'"
            :togglable="true"
            :fill-mode="fillMode"
          />
          <KButton
            :class="'k-toolbar-button'"
            :svg-icon="alignJustifyIcon"
            :title="'Align Justify'"
            :togglable="true"
            :fill-mode="fillMode"
          />
        </ButtonGroup>
        <ToolbarSpacer />
        <KButton
          :class="'k-toolbar-button'"
          :svg-icon="cutIcon"
          :title="'Cut'"
          :fill-mode="fillMode"
        >
          Cut
        </KButton>
        <KButton
          :class="'k-toolbar-button'"
          :svg-icon="copyIcon"
          :title="'Copy'"
          :fill-mode="fillMode"
        >
          Copy
        </KButton>
        <DropDownButton
          :text="'Paste'"
          :svg-icon="clipboardIcon"
          :items="ddItems"
          :fill-mode="fillMode"
        />
        <ToolbarSeparator />
        <SplitButton
          :class="'k-toolbar-split-button'"
          :text="'Insert'"
          :items="splitItems"
          :fill-mode="fillMode"
        />
      </Toolbar>
      <p>Fill mode applied to the ToolBar only:</p>
      <Toolbar :fill-mode="fillMode">
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
        <ToolbarSeparator />
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
        <KButton
          :class="'k-toolbar-button'"
          :svg-icon="cutIcon"
          :title="'Cut'"
        >
          Cut
        </KButton>
        <KButton
          :class="'k-toolbar-button'"
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
          :class="'k-toolbar-split-button'"
          :text="'Insert'"
          :items="splitItems"
        />
      </Toolbar>
    </div>
  </template>

  <script>
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

  export default {
      components: {
          ToolbarStyleConfigurator,
          Toolbar,
          ToolbarSeparator,
          ToolbarSpacer,
          KButton,
          ButtonGroup,
          DropDownButton,
          SplitButton,
      },
      data() {
          return {
              fillMode: 'solid',
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
          setFillMode(event) {
              this.fillMode = event.value;
          },
      },
  };
  </script>
