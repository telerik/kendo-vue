<template>
  <div class="example-wrapper">
    <div class="example-col">
      <p>Button</p>
      <KButton :svg-icon="arrowRotateCwIcon" :dir="'rtl'"
        >Refresh &nbsp;</KButton
      >
      &nbsp;
      <KButton :svg-icon="searchIcon" :dir="'rtl'" :theme-color="'primary'"
        >Search &nbsp;</KButton
      >
    </div>
    <div class="example-col">
      <p>ButtonGroup</p>
      <ButtonGroup :dir="'rtl'">
        <KButton>Option A</KButton>
        <KButton>Option B</KButton>
        <KButton>Option C</KButton>
      </ButtonGroup>
    </div>
    <div class="example-col">
      <p>DropDownButton</p>
      <DropDownButton
        :dir="'rtl'"
        :text-field="'actionName'"
        :svg-icon="gearIcon"
        :items="dropDownButtonItems"
        :text="'Edit'"
      ></DropDownButton>
    </div>
    <div class="example-col">
      <p>SplitButton</p>
      <SplitButton
        :dir="'rtl'"
        :text="'Paste'"
        :svg-icon="clipboardIcon"
        :items="splitButtonItems"
      >
      </SplitButton>
    </div>
    <div class="example">
      <p>Toolbar</p>
      <Toolbar :dir="'rtl'">
        <ButtonGroup>
          <KButton
            :svg-icon="boldIcon"
            :title="'Bold'"
            :togglable="true"
          ></KButton>
          <KButton
            :svg-icon="italicIcon"
            :title="'Italic'"
            :togglable="true"
          ></KButton>
          <KButton
            :svg-icon="underlineIcon"
            :title="'Underline'"
            :togglable="true"
          ></KButton>
        </ButtonGroup>
        <ToolbarSeparator />
        <ButtonGroup>
          <KButton
            :svg-icon="alignLeftIcon"
            :title="'Align Left'"
            :togglable="true"
          ></KButton>
          <KButton
            :svg-icon="alignCenterIcon"
            :title="'Align Center'"
            :togglable="true"
          ></KButton>
          <KButton
            :svg-icon="alignRightIcon"
            :title="'Align Right'"
            :togglable="true"
          ></KButton>
          <KButton
            :svg-icon="alignJustifyIcon"
            :title="'Align Justify'"
            :togglable="true"
          ></KButton>
        </ButtonGroup>
        <ToolbarSeparator />
        <KButton :svg-icon="cutIcon" :title="'Cut'">Cut</KButton>
        <ToolbarSeparator />
        <KButton :svg-icon="copyIcon" :title="'Copy'">Copy</KButton>
        <ToolbarSeparator />
        <KButton :svg-icon="clipboardIcon" :title="'Paste'">Paste</KButton>
      </Toolbar>
    </div>
    <div class="example">
      <p>Chip and ChipList</p>
      <ChipList
        :dir="'rtl'"
        :selection="'single'"
        :data-items="[
          { text: 'Berry', value: 'berry' },
          { text: 'Apple', value: 'apple' },
          { text: 'Kiwi', value: 'kiwi' },
          { text: 'Banana', value: 'banana' },
        ]"
      />
    </div>
    <div class="example-col">
      <FloatingActionButton
        :svg-icon="checkIcon"
        :text="'Floating Action Button'"
        :dir="'rtl'"
      />
    </div>
  </div>
</template>
<script>
import {
  Button,
  ButtonGroup,
  ChipList,
  DropDownButton,
  FloatingActionButton,
  Toolbar,
  ToolbarSeparator,
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
  gearIcon,
  checkIcon,
  undoIcon,
  redoIcon,
  clipboardMarkdownIcon,
  clipboardHtmlIcon,
  arrowRotateCwIcon,
  searchIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    KButton: Button,
    ButtonGroup,
    DropDownButton,
    FloatingActionButton,
    ChipList,
    Toolbar,
    ToolbarSeparator,
    SplitButton,
  },
  data() {
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
      gearIcon,
      checkIcon,
      undoIcon,
      redoIcon,
      clipboardMarkdownIcon,
      clipboardHtmlIcon,
      arrowRotateCwIcon,
      searchIcon,
      chip: "myTemplate",
      dropDownButtonItems: [
        {
          actionName: "Undo",
          svgIcon: undoIcon,
        },
        {
          actionName: "Redo",
          svgIcon: redoIcon,
          disabled: true,
        },
        {
          actionName: "Cut",
          svgIcon: cutIcon,
        },
        {
          actionName: "Copy",
          svgIcon: copyIcon,
        },
        {
          actionName: "Paste",
          svgIcon: clipboardIcon,
        },
      ],
      splitButtonItems: [
        { text: "Keep Text Only", svgIcon: clipboardIcon },
        { text: "Paste as HTML", svgIcon: clipboardHtmlIcon },
        { text: "Paste Markdown", svgIcon: clipboardMarkdownIcon },
        { text: "Set Default Paste" },
      ],
    };
  },
};
</script>
