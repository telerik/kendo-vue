<template>
    <td v-if="!dataItem.inEdit">{{ dataItem[field] }}</td>
    <td v-else>
      <textbox
        ref="nameInput"
        :value="dataItem[field]"
        @input="onInput"
        @change="change"
        :valid="isValidLength"
      >
      </textbox>
      <Popup
        :anchor="'nameInput'"
        :show="!isValidLength && touched"
        :popup-class="'popup-content'"
      >
        <span class="errorMessage">Should be more than 3 symbols.</span>
      </Popup>
    </td>
  </template>
  
  <script>
  import { TextBox } from '@progress/kendo-vue-inputs';
  import { Popup } from '@progress/kendo-vue-popup';
  
  export default {
    components: {
      textbox: TextBox,
      Popup: Popup,
    },
    props: {
      field: String,
      dataItem: Object,
    },
    data() {
      return {
        touched: false,
      };
    },
    computed: {
      isValidLength() {
        return this.dataItem[this.field] && this.dataItem[this.field].length > 3;
      },
    },
    methods: {
      onInput(e) {
        this.dataItem[this.field] = e.value;
        this.touched = true;
      },
      change(e) {
        this.dataItem[this.field] = e.value;
        this.touched = true;
        this.$emit('change', e);
      },
    },
  };
  </script>
  