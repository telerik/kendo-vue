<template>
  <k-dialog @close="cancel">
    <div class="k-form k-form-horizontal">
      <div class="k-form-field">
        <label for="Product Name" class="k-form-label">Product Name</label>
        <div class="k-form-field-wrap">
          <k-input
            :style="{ width: '230px' }"
            type="text"
            :name="'ProductName'"
            v-model="productInEdit.ProductName"
          ></k-input>
        </div>
      </div>
      <div class="k-form-field">
        <label for="Product Name" class="k-form-label">Units In Stock</label>
        <div class="k-form-field-wrap">
          <numerictextbox
            :style="{ width: '230px' }"
            :name="'UnitsInStock'"
            v-model="productInEdit.UnitsInStock"
          ></numerictextbox>
        </div>
      </div>
      <div class="k-form-field">
        <klabel :editor-id="'Discontinued'" class="k-checkbox-label"> Discontinued </klabel>
        <div class="k-form-field-wrap">
          <span>
            <checkbox
              :name="'Discontinued'"
              :id="'Discontinued'"
              v-model="productInEdit.Discontinued"
            />
          </span>
        </div>
      </div>
    </div>
    <dialog-actions-bar :layout="'start'">
      <kbutton :theme-color="'primary'" @click="save" :svg-icon="saveIcon"> Save </kbutton>
      <kbutton @click="cancel" :svg-icon="cancelIcon"> Cancel </kbutton>
    </dialog-actions-bar>
  </k-dialog>
</template>
<script>
import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import { NumericTextBox, Input, Checkbox } from '@progress/kendo-vue-inputs';
import { Label } from '@progress/kendo-vue-labels';
import { Button } from '@progress/kendo-vue-buttons';
import { cancelIcon, saveIcon } from '@progress/kendo-svg-icons';

export default {
  components: {
    'k-input': Input,
    numerictextbox: NumericTextBox,
    'k-dialog': Dialog,
    'dialog-actions-bar': DialogActionsBar,
    kbutton: Button,
    checkbox: Checkbox,
    klabel: Label,
  },
  props: {
    dataItem: Object,
  },
  data: function () {
    return {
      cancelIcon, saveIcon,
      productInEdit: {
        ProductName: '',
        UnitsInStock: 0,
        Discontinued: false,
      },
    };
  },
  created: function () {
    if (this.$props.dataItem) {
      this.productInEdit = this.$props.dataItem;
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    save() {
      this.$emit('save');
    },
  },
};
</script>
