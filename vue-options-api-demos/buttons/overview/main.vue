<template>
  <div class="example-wrapper">
    <div class="example-col">
      <p>Button</p>
      <KButton>Default</KButton>
      <KButton :theme-color="'primary'">Primary</KButton>
      <KButton :disabled="true">Disabled</KButton>
    </div>
    <div class="example-col">
      <p>ButtonGroup</p>
      <ButtonGroup>
        <KButton :togglable="true"> Option A </KButton>
        <KButton :togglable="true"> Option B </KButton>
        <KButton :togglable="true"> Option C </KButton>
      </ButtonGroup>
    </div>
    <div class="example-col">
      <p>DropDownButton</p>
      <DropDownButton
        :text-field="'actionName'"
        :svg-icon="gearIcon"
        :items="dropDownButtonItems"
        :text="'Edit'"
      ></DropDownButton>
    </div>
    <div class="example-col">
      <p>SplitButton</p>
      <SplitButton
        :text="'Paste'"
        :svg-icon="clipboardIcon"
        :items="splitButtonItems"
      >
      </SplitButton>
    </div>
    <div>
      <p>Toolbar</p>
      <Toolbar>
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
      <p>Chip and ChipList</p>
      <ChipList
        :rounded="'full'"
        :default-data-items="people"
        :selection="'single'"
        :chip="chip"
      >
        <template v-slot:myTemplate="{ props }">
          <custom
            :data-item="props.dataItem"
            :value="props.value"
            :text="props.text"
          />
        </template>
      </ChipList>
    </div>
    <div class="example-col">
      <FloatingActionButton
        :svg-icon="checkIcon"
        :text="'Floating Action Button'"
        :align="{ horizontal: 'start', vertical: 'bottom' }"
      ></FloatingActionButton>
    </div>
  </div>
</template>
<script>
import {
  Button,
  ButtonGroup,
  ChipList,
  Toolbar,
  DropDownButton,
  FloatingActionButton,
  ToolbarSeparator,
  SplitButton,
} from '@progress/kendo-vue-buttons';

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
} from '@progress/kendo-svg-icons';
import CustomChip from './CustomChip.vue';

const PedroAfonsoImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/SPLIR.jpg';
const ThomasHardyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';
const ChristinaBergImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/BERGS.jpg';
const PaulaWilsonImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RATTC.jpg';

const people = [
  {
    text: 'Pedro Afonso',
    value: 'pedro',
    icon: 'pedro',
    imageURL: PedroAfonsoImage,
  },
  {
    text: 'Thomas Hardy',
    value: 'thomas',
    icon: 'thomas',
    imageURL: ThomasHardyImage,
  },
  {
    text: 'Christina Berg',
    value: 'christina',
    icon: 'christina',
    imageURL: ChristinaBergImage,
  },
  {
    text: 'Paula Wilson',
    value: 'paula',
    icon: 'k-chip-avatar paula',
    imageURL: PaulaWilsonImage,
  },
];

const editItems = [
  {
    actionName: 'Undo',
    svgIcon: undoIcon,
  },
  {
    actionName: 'Redo',
    svgIcon: redoIcon,
    disabled: true,
  },
  {
    actionName: 'Cut',
    svgIcon: cutIcon,
  },
  {
    actionName: 'Copy',
    svgIcon: copyIcon,
  },
  {
    actionName: 'Paste',
    svgIcon: clipboardIcon,
  },
];

const pasteItems = [
  { text: 'Keep Text Only', svgIcon: clipboardIcon },
  { text: 'Paste as HTML', svgIcon: clipboardHtmlIcon },
  { text: 'Paste Markdown', svgIcon: clipboardMarkdownIcon },
  { text: 'Set Default Paste' },
];

export default {
  components: {
    KButton: Button,
    ButtonGroup,
    FloatingActionButton,
    ChipList,
    custom: CustomChip,
    DropDownButton,
    Toolbar,
    ToolbarSeparator,
    SplitButton,
  },
  data() {
    return {
      undoIcon,
      boldIcon,
      underlineIcon,
      italicIcon,
      alignJustifyIcon,
      alignRightIcon,
      alignCenterIcon,
      alignLeftIcon,
      cutIcon,
      copyIcon,
      gearIcon,
      checkIcon,
      clipboardIcon,
      clipboardHtmlIcon,
      clipboardMarkdownIcon,
      people: people,
      chip: 'myTemplate',
      dropDownButtonItems: editItems,
      splitButtonItems: pasteItems,
    };
  },
};
</script>
