<template>
  <div :key="dataItem.ProductID">
    <Card :orientation="'horizontal'" :style="{ borderWidth: '0px 0px 1px' }">
      <CardBody v-if="dataItem.edit">
        <div class="k-hbox k-justify-content-between k-flex-wrap">
          <div style="{ width: '40%', padding: '5px 0px' }">
            <label :style="{ display: 'block' }">Name:</label>
            <KInput
              :value="dataItem.ProductName"
              @input="(e) => handleChange(e, 'ProductName')"
            />
            <label :style="{ display: 'block' }">Category:</label>
            <DropDownList
              :data-items="dropDownData"
              :text-field="'CategoryName'"
              :value="dataItem.Category"
              @change="(e) => handleChange(e, 'Category')"
            />
          </div>
          <div :style="{ width: '35%', padding: '5px 0px' }">
            <label :style="{ display: 'block' }">Price:</label>
            <NumericTextBox
              :value="dataItem.UnitPrice"
              :format="'c2'"
              @change="(e) => handleChange(e, 'UnitPrice')"
            />
            <label :style="{ display: 'block' }">Available:</label>
            <NumericTextBox
              :value="dataItem.UnitsInStock"
              @change="(e) => handleChange(e, 'UnitsInStock')"
            />
          </div>
          <div :style="{ width: '25%', padding: '5px 0px' }">
            <KButton
              :style="{ marginRight: '5px' }"
              @click="handleSave(dataItem)"
            >
              Save
            </KButton>
            <KButton
              @click="cancelEdit(dataItem)"
            >
              Cancel
            </KButton>
          </div>
        </div>
      </CardBody>
      <CardBody v-else>
        <div class="k-hbox k-justify-content-between k-flex-wrap">
          <div :style="{ width: '40%', padding: '5px 0px' }">
            <CardTitle :style="{ fontSize: '16px' }">
              {{ dataItem.ProductName }}
            </CardTitle>
            <CardSubtitle>{{ dataItem.Category.CategoryName }}</CardSubtitle>
          </div>
          <div :style="{ width: '35%', padding: '5px 0px' }">
            <div>
              Price: {{ formattedPrice }}
            </div>
            <div>Available units: {{ dataItem.UnitsInStock }}</div>
          </div>
          <div :style="{ width: '25%', padding: '5px 0px' }">
            <KButton
              rounded="medium"
              fill="solid"
              theme-color="primary"
              :style="{ marginRight: '5px' }"
              @click="enterEdit"
            >
              Edit
            </KButton>
            <KButton
              rounded="medium"
              fill="solid"
              @click="handleDelete(dataItem)"
            >
              Delete
            </KButton>
          </div>
        </div>
      </CardBody>
    </Card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
    Card,
    CardTitle,
    CardSubtitle,
    CardBody,
} from '@progress/kendo-vue-layout';
import { Input as KInput, NumericTextBox } from '@progress/kendo-vue-inputs';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { provideIntlService } from '@progress/kendo-vue-intl';

const props = defineProps({
    dataItem: Object,
});

const emit = defineEmits(['saveitem', 'deleteitem']);
const originalDataItem = ref(null);

const dropDownData = [
    { CategoryName: 'Beverages', CategoryID: 1 },
    { CategoryName: 'Condiments', CategoryID: 2 },
    { CategoryName: 'Confections', CategoryID: 3 },
    { CategoryName: 'Dairy Products', CategoryID: 4 },
    { CategoryName: 'Grains/Cereals', CategoryID: 5 },
    { CategoryName: 'Meat/Poultry', CategoryID: 6 },
    { CategoryName: 'Produce', CategoryID: 7 },
    { CategoryName: 'Seafood', CategoryID: 8 },
];

const formattedPrice = computed(() =>
    provideIntlService({}).formatNumber(props.dataItem.UnitPrice, 'c')
);

function enterEdit() {
    originalDataItem.value = { ...props.dataItem };
    emit('enterEdit', props.dataItem);
}

function cancelEdit() {
    Object.assign(props.dataItem, originalDataItem.value);
    emit('exitEdit', props.dataItem);
}

function handleChange(e, field) {
    emit('handleChange', {...props.dataItem, [field]: e.value});
}

function handleSave(ev) {
    emit('saveitem', ev);
}

function handleDelete(ev) {
    emit('deleteitem', ev);
}
</script>
