<template>
  <div>
    <span v-if="!visibleDialog">
      <KButton @click="toggleDialog">Open Dialog</KButton>
    </span>
    <Dialog
      v-if="visibleDialog"
      :width="450"
      :height="340"
      @close="toggleDialog"
    >
      <p :style="{ margin: '25px', textAlign: 'center' }">
        Add Delivery Address
      </p>
      <div>
        <div class="mb-3">
          <KLabel
            :editor-id="'street'"
            :style="{
              display: 'inline-block',
              width: '50px',
              textAlign: 'right',
              paddingRight: '0.5em',
              marginLeft: '1.5em',
            }"
          >
            Street:
          </KLabel>
          <KInput :style="{ maxWidth: '300px' }" :id="'street'" />
        </div>
        <div class="mb-3">
          <KLabel
            :editor-id="'city'"
            :style="{
              display: 'inline-block',
              width: '50px',
              textAlign: 'right',
              paddingRight: '0.5em',
              marginLeft: '1.5em',
            }"
          >
            City:
          </KLabel>
          <KInput :style="{ maxWidth: '300px' }" :id="'city'" />
        </div>
        <div class="mb-3">
          <KLabel
            :editor-id="'state'"
            :style="{
              display: 'inline-block',
              width: '50px',
              textAlign: 'right',
              paddingRight: '0.5em',
              marginLeft: '1.5em',
            }"
          >
            State:
          </KLabel>
          <KInput :style="{ maxWidth: '300px' }" :id="'state'" />
        </div>
        <div class="mb-3">
          <KLabel
            :editor-id="'zipcode'"
            :style="{
              display: 'inline-block',
              width: '50px',
              textAlign: 'right',
              paddingRight: '0.5em',
              marginLeft: '1.5em',
            }"
          >
            Zip:
          </KLabel>
          <KInput :style="{ maxWidth: '300px' }" :id="'zipcode'" />
        </div>
      </div>
      <DialogActionsBar>
        <KButton>Verify Address</KButton>
        <KButton>Add</KButton>
        <KButton :theme-color="'primary'">Cancel</KButton>
      </DialogActionsBar>
    </Dialog>
  </div>
</template>
<script>
import { Dialog, DialogActionsBar } from "@progress/kendo-vue-dialogs";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { Input as KInput } from "@progress/kendo-vue-inputs";
import { Label as KLabel } from "@progress/kendo-vue-labels";
import { FieldWrapper } from "@progress/kendo-vue-form";

export default {
  components: {
    Dialog,
    DialogActionsBar,
    KButton,
    KInput,
    KLabel,
    FieldWrapper,
  },
  data: function () {
    return {
      visibleDialog: false,
    };
  },
  methods: {
    toggleDialog() {
      this.visibleDialog = !this.visibleDialog;
    },
  },
};
</script>
