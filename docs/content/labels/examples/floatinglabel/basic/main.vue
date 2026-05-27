<template>
    <div class="example-wrapper row">
        <div class="col-xs-12 col-md-6 example-col">
            <p>Input</p>
            <KInput
                :style="{ width: '230px' }"
                :placeholder="'Enter your first name'"
                :label="'First Name:'"
                @change="onChangeInput"
            />
            <br />
            <br />
            <p>MaskedTextBox</p>
            <MaskedTextBox
                :style="{ width: '230px' }"
                :mask="mask"
                :value="maskedTextBoxValue"
                :label="'Phone number:'"
                @change="onChangeMaskedTextBox"
            />
            <br />
            <br />
            <p>DateInput</p>
            <DateInput
                :style="{ width: '230px' }"
                :label="'Enter date:'"
                @change="onChangeDateInput"
                :placeholder="''"
            />
            <br />
            <br />
            <p>DatePicker</p>
            <DatePicker
                :style="{ width: '230px' }"
                :label="'Select date:'"
                @change="onChangeDatePicker"
                :value="datePickerValue"
                :placeholder="''"
            />
            <br />
            <br />
            <p>TimePicker</p>
            <TimePicker
                :style="{ width: '230px' }"
                :label="'Select time:'"
                @change="onChangeTimePicker"
                :value="timePickerValue"
                :placeholder="''"
            />
            <br />
            <br />
            <p>DateTimePicker</p>
            <DateTimePicker
                :style="{ width: '230px' }"
                :label="'Select date and time:'"
                @change="onChangeDateTimePicker"
                :value="dateTimePickerValue"
                :placeholder="''"
            />
        </div>
        <div class="col-xs-12 col-md-6 example-col">
            <p>NumericTextBox</p>
            <NumericTextBox :style="{ width: '230px' }" :label="'Enter kilometers:'" v-model="numericTextBoxValue" />
            <br />
            <br />
            <div>
                <p>AutoComplete</p>
                <AutoComplete
                    :style="{ width: '230px' }"
                    :label="'Product'"
                    :data-items="dataProducts"
                    :text-field="'productName'"
                />
            </div>
            <br />
            <div>
                <p>ComboBox</p>
                <ComboBox
                    :style="{ width: '230px' }"
                    :label="'Product'"
                    :data-items="dataProducts"
                    :text-field="'productName'"
                />
            </div>
            <br />
            <div>
                <p>DropDownList</p>
                <DropDownList
                    :style="{ width: '230px' }"
                    :label="'Product'"
                    :data-items="dataProducts"
                    :text-field="'productName'"
                    :value-field="'productId'"
                />
            </div>
            <br />
            <div>
                <p>MultiSelect</p>
                <MultiSelect
                    :style="{ width: '230px' }"
                    :label="'Product'"
                    :data-items="dataProducts"
                    :text-field="'productName'"
                    :value-field="'productId'"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { DateInput, DatePicker, TimePicker, DateTimePicker } from '@progress/kendo-vue-dateinputs';
import { Input as KInput, MaskedTextBox, NumericTextBox } from '@progress/kendo-vue-inputs';
import { AutoComplete, ComboBox, DropDownList, MultiSelect } from '@progress/kendo-vue-dropdowns';

const value = ref(undefined);
const mask = '(999) 000-00-00-00';
const maskedTextBoxValue = ref(undefined);
const dateInputValue = ref(undefined);
const datePickerValue = ref(undefined);
const numericTextBoxValue = ref(undefined);
const timePickerValue = ref(undefined);
const dateTimePickerValue = ref(undefined);
const dataProducts = [
    { productName: 'Chai', productId: 1, categoryId: 1 },
    { productName: 'Chang', productId: 2, categoryId: 1 },
    { productName: 'Aniseed Syrup', productId: 3, categoryId: 2 },
    { productName: 'Genen Shouyu', productId: 4, categoryId: 2 },
    { productName: 'Ikura', productId: 5, categoryId: 3 },
];

function onChangeInput(e) {
    value.value = e.value;
}

function onChangeMaskedTextBox(e) {
    maskedTextBoxValue.value = e.value;
}

function onChangeDateInput(e) {
    dateInputValue.value = e.value;
}

function onChangeDatePicker(e) {
    datePickerValue.value = e.value;
}

function onChangeDateTimePicker(e) {
    dateTimePickerValue.value = e.value;
}

function onChangeTimePicker(e) {
    timePickerValue.value = e.value;
}
</script>
