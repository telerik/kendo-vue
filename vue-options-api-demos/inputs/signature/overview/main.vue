<template>
  <div class="example">
    <div class="content-wrapper">
      <Toolbar>
        <ToolbarItem v-if="!showUpload" class="toolbar-tool">
          Brush:
          <ColorPicker :value="color" @change="onColorChange" />
        </ToolbarItem>
        <SplitButton
          v-if="!showUpload"
          :items="strokeWidthOptions"
          :text="strokeWidthText"
          :textField="'text'"
          @itemclick="onStrokeWidthChange"
        />
        <ToolbarSeparator v-if="!showUpload" />
        <ToolbarItem v-if="!showUpload" :key="3" class="toolbar-tool">
          Background:
          <ColorPicker
            :value="backgroundColor"
            @change="onBackgroundColorChange"
          />
        </ToolbarItem>
        <ToolbarItem v-if="showUpload" :key="4" class="toolbar-tool">
          Upload your signature:
          <localization :language="'en'">
            <Upload
              :autoUpload="false"
              :restrictions="{ allowedExtensions: ['png', 'jpeg'] }"
              :showFileList="false"
              :showActionButtons="false"
              @add="onFileSelect"
            />
          </localization>
        </ToolbarItem>
        <ToolbarSpacer />
        <ToolbarItem>
          <ButtonGroup>
            <KButton
              :togglable="true"
              :selected="!showUpload"
              @click="onDrawClick"
              :svg-icon="brushIcon"
            >
              Draw
            </KButton>
            <KButton
              :togglable="true"
              :selected="showUpload"
              @click="onUploadClick"
              :svg-icon="uploadIcon"
            >
              Upload
            </KButton>
          </ButtonGroup>
        </ToolbarItem>
      </Toolbar>
      <div class="signature-wrapper">
        <Signature
          v-if="!showUpload"
          :value="value"
          @change="onChange"
          :color="color"
          :background-color="backgroundColor"
          :stroke-width="strokeWidth"
          :smooth="true"
          :maximizable="false"
          :hide-line="true"
        />
        <div v-if="showUpload && !imageURL" class="placeholder">
          <Icon :name="'image'" :size="'xlarge'" />
          <span>Please, browse an image to preview here.</span>
        </div>

        <img
          v-if="showUpload && imageURL"
          :src="imageURL"
          :title="'Uploaded signature'"
          :draggable="false"
        />
      </div>
      <div class="notes">
        By using the Kendo UI for Vue signature component, you can enable your
        end-users to draw handwritten signatures using touch or pointer devices.
      </div>
      <Toolbar>
        <KButton
          :svg-icon="saveIcon"
          :themeColor="'primary'"
          :disabled="!value"
          @click="onSave"
        >
          Save
        </KButton>

        <KButton @click="onClear">Clear</KButton>
      </Toolbar>
    </div>
  </div>
</template>
<script>
import { saveAs } from "@progress/kendo-file-saver";
import {
  Button,
  ButtonGroup,
  SplitButton,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
  ToolbarSpacer,
} from "@progress/kendo-vue-buttons";
import { Icon } from "@progress/kendo-vue-common";
import { ColorPicker, Signature } from "@progress/kendo-vue-inputs";
import { loadMessages, LocalizationProvider } from "@progress/kendo-vue-intl";
import { Upload } from "@progress/kendo-vue-upload";
import { sampleSignature } from "./sample-signature";
import { brushIcon, uploadIcon, saveIcon } from "@progress/kendo-svg-icons";
import "./styles.css";
loadMessages(
  {
    upload: {
      dropFilesHere: "",
      select: "Browse Image...",
    },
  },
  "en"
);

export default {
  components: {
    ColorPicker,
    Signature,
    KButton: Button,
    ButtonGroup,
    SplitButton,
    Toolbar,
    ToolbarItem,
    ToolbarSeparator,
    ToolbarSpacer,
    Icon,
    localization: LocalizationProvider,
    Upload,
  },
  data() {
    return {
      brushIcon,
      uploadIcon,
      saveIcon,
      value: sampleSignature,
      color: undefined,
      backgroundColor: undefined,
      strokeWidth: 3,
      strokeWidthText: "Wide",
      showUpload: false,
      imageURL: undefined,
      strokeWidthOptions: [
        {
          text: "Normal",
          value: 1,
        },
        {
          text: "Wide",
          value: 3,
        },
      ],
    };
  },

  methods: {
    onChange(e) {
      this.value = e.value;
    },
    onColorChange(e) {
      this.color = e.value;
    },
    onStrokeWidthChange(e) {
      this.strokeWidth = e.item.value;
      this.strokeWidthText = e.item.text;
    },
    onBackgroundColorChange(e) {
      this.backgroundColor = e.value;
    },
    onDrawClick() {
      this.showUpload = false;
    },
    onUploadClick() {
      this.showUpload = true;
    },
    revokeImageURL() {
      if (this.imageURL) {
        URL.revokeObjectURL(this.imageURL);
        this.imageURL = undefined;
      }
    },
    readImage(file) {
      const reader = new FileReader();

      const onLoad = () => {
        this.value = reader.result;
        reader.removeEventListener("load", onLoad);
      };

      reader.addEventListener("load", onLoad);
      reader.readAsDataURL(file);
    },
    onFileSelect(e) {
      const entry = e.affectedFiles[0];
      if (entry && entry.getRawFile) {
        const file = entry.getRawFile();
        this.readImage(file);

        this.revokeImageURL();
        this.imageURL = URL.createObjectURL(file);
      }
    },
    onSave() {
      if (this.value) {
        saveAs(this.value, "signature.png");
      }
    },
    onClear() {
      this.value = null;
      this.revokeImageURL();
    },
  },
};
</script>
