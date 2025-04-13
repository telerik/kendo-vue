<template>
    <div>
      <Slider
        v-bind="{ style: { width: '100%', display: 'block' }, buttons: false, min: 0, max: 100, largeStep: 1 }"
        :value="toolbarWidth"
        @change="handleToolbarWidthChange"
      />
      <Toolbar :overflow="'section'" :style="{ width: `${toolbarWidth}%` }">
        <ButtonGroup>
          <KButton
            class="k-toolbar-button"
            :svgIcon="boldIcon"
            title="Bold"
            :togglable="true"
          />
          <KButton
            class="k-toolbar-button"
            :svgIcon="italicIcon"
            title="Italic"
            :togglable="true"
          />
          <KButton
            class="k-toolbar-button"
            :svgIcon="underlineIcon"
            title="Underline"
            :togglable="true"
          />
        </ButtonGroup>

        <ToolbarSeparator />

        <ButtonGroup>
          <KButton
            class="k-toolbar-button"
            :svgIcon="alignLeftIcon"
            title="Align Left"
            :togglable="true"
          >
            Left
          </KButton>
          <KButton
            class="k-toolbar-button"
            :svgIcon="alignCenterIcon"
            title="Align Center"
            :togglable="true"
          >
            Center
          </KButton>
          <KButton
            class="k-toolbar-button"
            :svgIcon="alignRightIcon"
            title="Align Right"
            :togglable="true"
          >
            Right
          </KButton>
          <KButton
            class="k-toolbar-button"
            :svgIcon="alignJustifyIcon"
            title="Align Justify"
            :togglable="true"
          >
            Justify
          </KButton>
        </ButtonGroup>

        <ToolbarSeparator />

        <KButton class="k-toolbar-button" :svgIcon="cutIcon" title="Cut">
          Cut
        </KButton>
        <KButton class="k-toolbar-button" :svgIcon="copyIcon" title="Copy">
          Copy
        </KButton>
        <KButton class="k-toolbar-button" :svgIcon="clipboardIcon" title="Paste">
          Paste
        </KButton>
      </Toolbar>
    </div>
</template>

<script>
import { ref } from 'vue';
import {
    Toolbar,
    ToolbarSeparator,
    Button as KButton,
    ButtonGroup
} from "@progress/kendo-vue-buttons";
import { Slider } from "@progress/kendo-vue-inputs";
import {
    boldIcon,
    italicIcon,
    underlineIcon,
    alignLeftIcon,
    alignCenterIcon,
    alignRightIcon,
    alignJustifyIcon,
    cutIcon,
    copyIcon,
    clipboardIcon,
} from '@progress/kendo-svg-icons';

export default {
    components: {
        Toolbar,
        ToolbarSeparator,
        KButton,
        ButtonGroup,
        Slider
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
            toolbarWidth: 60
        };
    },
    methods: {
        handleToolbarWidthChange (event) {
            this.toolbarWidth = event.value;
        },
    }
};
</script>

