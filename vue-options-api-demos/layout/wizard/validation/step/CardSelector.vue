<template>
  <fieldwrapper>
      <klabel :class="'k-form-label'" :editor-id="id" :editor-valid="valid">
        {{ label }}
      </klabel>
      <div class="k-form-field-wrap">
        <ul
          class="k-radio-list k-list-horizontal"
          :style="{ display: 'flex', 'justify-content': 'space-between' }"
        >
          <li class="k-radio-item">
            <input
              @change="handleChange"
              @blur="handleBlur"
              @focus="handleFocus"
              :checked="value === 'visa'"
              :id="'visa'"
              :type="'radio'"
              :value="'visa'"
              :name="'paymentType'"
              :style="inputStyles"
            />
            <label
              @mouseenter="onMouseEnterLabel"
              @mouseleave="onMouseLeaveLabel"
              htmlFor="visa"
              :style="visaStyle"
            />
          </li>

          <li class="k-radio-item">
            <input
              @change="handleChange"
              @blur="handleBlur"
              @focus="handleFocus"
              :checked="value === 'masterCard'"
              :id="'masterCard'"
              :type="'radio'"
              :value="'masterCard'"
              :name="'paymentType'"
              :style="inputStyles"
            />
            <label
              @mouseenter="onMouseEnterLabel"
              @mouseleave="onMouseLeaveLabel"
              htmlFor="masterCard"
              :style="mastercardStyle"
            />
          </li>
          <li class="k-radio-item">
            <input
              @change="handleChange"
              @blur="handleBlur"
              @focus="handleFocus"
              :checked="value === 'paypal'"
              :id="'paypal'"
              :type="'radio'"
              :value="'paypal'"
              :name="'paymentType'"
              :style="inputStyles"
            />
            <label
              @mouseenter="onMouseEnterLabel"
              @mouseleave="onMouseLeaveLabel"
              htmlFor="paypal"
              :style="paypalStyle"
            />
          </li>
        </ul>
        <error v-if="showValidationMessage">
          {{ validationMessage }}
        </error>
        <hint v-else>{{ hint }}</hint>
    </div>
  </fieldwrapper>
</template>
<script>
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Hint, Label } from '@progress/kendo-vue-labels';

const filter = 'brightness(1.8) grayscale(1) opacity(.7)';
const filterHover = 'brightness(1.2) grayscale(.5) opacity(.9)';
const cardStyle = {
  cursor: 'pointer',
  backgroundSize: 'auto',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  display: 'inline-block',
  width: '138px',
  height: '70px',
  border: '1px solid',
};

const inputStyles = {
  visibility: 'hidden',
  position: 'absolute',
};

export default {
  props: {
    data: Object,
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: {
      type: String,
      default: '',
    },
  },
  components: {
    fieldwrapper: FieldWrapper,
    error: Error,
    hint: Hint,
    klabel: Label,
  },
  emits: {
    change: null,
    blur: null,
    focus: null,
  },
  computed: {
    visaStyle() {
      return {
        backgroundImage:
          'url(https://cdn-icons-png.flaticon.com/128/196/196578.png)',
        filter:
          this.value === 'visa'
            ? 'none'
            : this.cardHover === 'visa'
            ? filterHover
            : filter,
        ...cardStyle,
      };
    },
    mastercardStyle() {
      return {
        backgroundImage:
          'url(https://cdn-icons-png.flaticon.com/128/196/196561.png)',
        filter:
          this.value === 'masterCard'
            ? 'none'
            : this.cardHover === 'masterCard'
            ? filterHover
            : filter,
        ...cardStyle,
      };
    },
    paypalStyle() {
      return {
        backgroundImage:
          'url(https://cdn-icons-png.flaticon.com/128/196/196565.png)',
        filter:
          this.value === 'paypal'
            ? 'none'
            : this.cardHover === 'paypal'
            ? filterHover
            : filter,
        ...cardStyle,
      };
    },
    showValidationMessage() {
      return this.$props.touched && this.$props.validationMessage;
    },
    showHint() {
      return !this.showValidationMessage && this.$props.hint;
    },
    hintId() {
      return this.showHint ? `${this.$props.id}_hint` : '';
    },
    errorId() {
      return this.showValidationMessage ? `${this.$props.id}_error` : '';
    },
  },
  data() {
    return {
      cardHover: '',
      inputStyles,
    };
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e);
    },
    handleBlur(e) {
      this.$emit('blur', e);
    },
    handleFocus(e) {
      this.$emit('focus', e);
    },
    onMouseEnterLabel(event) {
      this.cardHover = event.currentTarget.getAttribute('for');
    },
    onMouseLeaveLabel(event) {
      this.cardHover = '';
    },
  },
};
</script>
