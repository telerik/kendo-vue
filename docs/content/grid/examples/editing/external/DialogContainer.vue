<template>
  <KDialog @close="cancel">
    <div class="k-form k-form-horizontal">
      <div class="k-form-field">
        <label for="Product Name" class="k-form-label">Product Name</label>
        <div class="k-form-field-wrap">
          <KInput
            :style="{ width: '230px' }"
            type="text"
            :name="'ProductName'"
            v-model="productInEdit.ProductName"
          ></KInput>
        </div>
      </div>
      <div class="k-form-field">
        <label for="Product Name" class="k-form-label">Units In Stock</label>
        <div class="k-form-field-wrap">
          <NumericTextBox
            :style="{ width: '230px' }"
            :name="'UnitsInStock'"
            v-model="productInEdit.UnitsInStock"
          ></NumericTextBox>
        </div>
      </div>
      <div class="k-form-field">
        <KLabel :editor-id="'Discontinued'" class="k-checkbox-label"> Discontinued </KLabel>
        <div class="k-form-field-wrap">
          <span>
            <Checkbox
              :name="'Discontinued'"
              :id="'Discontinued'"
              v-model="productInEdit.Discontinued"
            />
          </span>
        </div>
      </div>
    </div>
    <DialogActionsBar :layout="'start'">
      <KButton :theme-color="'primary'" @click="save" :svg-icon="saveIcon"> Save </KButton>
      <KButton @click="cancel" :svg-icon="cancelIcon"> Cancel </KButton>
    </DialogActionsBar>
  </KDialog>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { Dialog as KDialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import { NumericTextBox, Input as KInput, Checkbox } from '@progress/kendo-vue-inputs';
import { Label as KLabel } from '@progress/kendo-vue-labels';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { cancelIcon, saveIcon } from '@progress/kendo-svg-icons';

const props = defineProps({
    dataItem: Object
});

const emit = defineEmits(['cancel', 'save']);

const productInEdit = ref({
    ProductName: '',
    UnitsInStock: 0,
    Discontinued: false
});

watchEffect(() => {
    if (props.dataItem) {
        productInEdit.value = { ...props.dataItem };
    }
});

const cancel = () => {
    emit('cancel');
};

const save = () => {
    emit('save', productInEdit.value);
};
</script>
