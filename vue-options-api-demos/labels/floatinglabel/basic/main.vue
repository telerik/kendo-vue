<template>
  <div class="example-wrapper row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Input</p>
      <kinput :style="{ width: '230px' }"
        :id="editorId"
        :placeholder="'Enter your first name'"
        :label="'First Name:'"
        @change="onChangeInput"
      />
      <br />
      <br />
      <p>MaskedTextBox</p>
      <maskedtextbox :style="{ width: '230px' }"
        :mask="mask"
        :value="maskedTextBoxValue"
        :label="'Phone number:'"
        @change="onChangeMaskedTextBox"
      ></maskedtextbox>
      <br />
      <br />
      <p>NumericTextBox</p>
      <numerictextbox :style="{ width: '230px' }"
        :label="'Enter kilometers:'"
        v-model="numericTextBoxValue"
      >
      </numerictextbox>
      <br />
      <br />
      <p>DateInput</p>
      <dateinput :style="{ width: '230px' }"
        :label="'Enter date:'"
        @change="onChangeDateInput"
        @blur="onDateInputBlur"
        :placeholder="''"
      />
      <br />
      <br />
      <p>DatePicker</p>
      <datepicker :style="{ width: '230px' }"
        :label="'Select date:'"
        @change="onChangeDatePicker"
        :value="datePickerValue"
        :placeholder="''"
      >
      </datepicker>
      <br />
      <br />
      <p>TimePicker</p>
      <timepicker :style="{ width: '230px' }"
        :label="'Select time:'"
        @change="onChangeTimePicker"
        :value="timePickerValue"
        :placeholder="''"
      >
      </timepicker>
      <br />
      <br />
      <p>DateTimePicker</p>

      <datetimepicker :style="{ width: '230px' }"
        :label="'Select date and time:'"
        @change="onChangeDateTimePicker"
        :value="dateTimePickerValue"
        :placeholder="''"
      >
      </datetimepicker>
    </div>
    <div class="col-xs-12 col-md-6 example-col">
      <div>
        <p>AutoComplete</p>
        <autocomplete :style="{ width: '230px' }"
          :label="'Product'"
          :data-items="dataProducts"
          :text-field="'productName'"
        >
        </autocomplete>
      </div>
      <br />
      <div>
        <p>ComboBox</p>
         <combobox
          :style="{ width: '230px' }"
          :label="'Product'"
          :data-items="dataProducts"
          :text-field="'productName'"
        >
        </combobox>
      </div>
      <br />
      <div>
        <p>DropDownList</p>
         <dropdownlist
          :style="{ width: '230px' }"
          :label="'Product'"
          :data-items="dataProducts"
          :text-field="'productName'"
          :value-field="'productId'"
        >
        </dropdownlist>
      </div>
      <br />
      <div>
        <p>MultiSelect</p>
        <multiselect :style="{ width: '230px' }"
          :label="'Product'"
          :data-items="dataProducts"
          :text-field="'productName'"
          :value-field="'productId'"
        >
        </multiselect>
      </div>
    </div>
  </div>
</template>
<script>
import {
  DateInput,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from "@progress/kendo-vue-dateinputs";
import {
  Input,
  MaskedTextBox,
  NumericTextBox,
} from "@progress/kendo-vue-inputs";
import {
  AutoComplete,
  ComboBox,
  DropDownList,
  MultiSelect,
} from "@progress/kendo-vue-dropdowns";

export default {
  components: {
    kinput: Input,
    maskedtextbox: MaskedTextBox,
    numerictextbox: NumericTextBox,
    datepicker: DatePicker,
    datetimepicker: DateTimePicker,
    timepicker: TimePicker,
    dateinput: DateInput,
    autocomplete: AutoComplete,
    combobox: ComboBox,
    dropdownlist: DropDownList,
    multiselect: MultiSelect,
  },
  data: function () {
    return {
      value: undefined,
      mask: "(999) 000-00-00-00",
      maskedTextBoxValue: undefined,
      numericTextBoxValue: undefined,
      dateInputValue: undefined,
      datePickerValue: undefined,
      timePickerValue: undefined,
      dateTimePickerValue: undefined,
      dataProducts: [
        { productName: "Chai", productId: 1, categoryId: 1 },
        { productName: "Chang", productId: 2, categoryId: 1 },
        { productName: "Aniseed Syrup", productId: 3, categoryId: 2 },
        { productName: "Genen Shouyu", productId: 4, categoryId: 2 },
        { productName: "Ikura", productId: 5, categoryId: 3 },
      ],
    };
  },
  methods: {
    onChangeInput: function (e) {
      this.value = e.value;
    },
    onChangeMaskedTextBox: function (e) {
      this.maskedTextBoxValue = e.value;
    },
    onChangeDateInput: function (e) {
      this.dateInputValue = e.value;
    },
    onChangeDatePicker: function (e) {
      this.datePickerValue = e.value;
    },
    onChangeDateTimePicker: function (e) {
      this.dateTimePickerValue = e.value;
    },
    onChangeTimePicker: function (e) {
      this.timePickerValue = e.value;
    },
  },
};
</script>