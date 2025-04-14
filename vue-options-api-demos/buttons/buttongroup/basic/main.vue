<template>
    <div class="row">
      <div class="col-xs-12 col-sm-6 example-col">
        <p>Text only</p>
        <ButtonGroup>
          <KButton :togglable="true"> Bold </KButton>
          <KButton :togglable="true"> Italic </KButton>
          <KButton :togglable="true"> Underline </KButton>
        </ButtonGroup>
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <p>Icons only</p>
        <ButtonGroup>
          <KButton
            :togglable="true"
            :disabled="true"
            :svg-icon="boldIcon"
          ></KButton>
          <KButton :togglable="true" :svg-icon="italicIcon"></KButton>
          <KButton :togglable="true" :svg-icon="underlineIcon"></KButton>
        </ButtonGroup>
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <p>Text + Icons</p>
        <ButtonGroup :disabled="true">
          <KButton :togglable="true" :svg-icon="boldIcon">Bold</KButton>
          <KButton :togglable="true" :svg-icon="italicIcon">Italic</KButton>
          <KButton :togglable="true" :svg-icon="underlineIcon">Underline</KButton>
        </ButtonGroup>
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <p>k-buttons with responsive width</p>
        <ButtonGroup width="300px">
          <KButton :togglable="true" :svg-icon="boldIcon">Bold</KButton>
          <KButton :togglable="true" :svg-icon="italicIcon">Italic</KButton>
          <KButton :togglable="true" :svg-icon="underlineIcon">Underline</KButton>
        </ButtonGroup>
      </div>
    </div>
  </template>
  <script>
  import { Button as KButton, ButtonGroup } from "@progress/kendo-vue-buttons";
  import { boldIcon, italicIcon, underlineIcon } from "@progress/kendo-svg-icons";
  export default {
    components: {
      KButton,
      ButtonGroup,
    },
    data() {
      return {
        boldIcon,
        italicIcon,
        underlineIcon,
      };
    },
  };
  </script>
  