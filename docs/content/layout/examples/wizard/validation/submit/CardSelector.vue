<template>
  <FieldWrapper>
    <div class="k-form-field-wrap">
      <Label :editor-id="id" :editor-valid="valid">
        {{ label }}
      </Label>
      <ul
        class="k-radio-list k-list-horizontal"
        :style="{ display: 'flex', justifyContent: 'space-between' }"
      >
        <li class="k-radio-item">
          <input
            @change="handleChange"
            @blur="handleBlur"
            @focus="handleFocus"
            :checked="value === 'visa'"
            id="visa"
            type="radio"
            value="visa"
            name="paymentType"
            :style="inputStyles"
          />
          <label
            @mouseenter="onMouseEnterLabel"
            @mouseleave="onMouseLeaveLabel"
            for="visa"
            :style="visaStyle"
          />
        </li>

        <li class="k-radio-item">
          <input
            @change="handleChange"
            @blur="handleBlur"
            @focus="handleFocus"
            :checked="value === 'masterCard'"
            id="masterCard"
            type="radio"
            value="masterCard"
            name="paymentType"
            :style="inputStyles"
          />
          <label
            @mouseenter="onMouseEnterLabel"
            @mouseleave="onMouseLeaveLabel"
            for="masterCard"
            :style="mastercardStyle"
          />
        </li>
        <li class="k-radio-item">
          <input
            @change="handleChange"
            @blur="handleBlur"
            @focus="handleFocus"
            :checked="value === 'paypal'"
            id="paypal"
            type="radio"
            value="paypal"
            name="paymentType"
            :style="inputStyles"
          />
          <label
            @mouseenter="onMouseEnterLabel"
            @mouseleave="onMouseLeaveLabel"
            for="paypal"
            :style="paypalStyle"
          />
        </li>
      </ul>
      <Error v-if="showValidationMessage">
        {{ validationMessage }}
      </Error>
      <Hint v-else>{{ hint }}</Hint>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { ref, computed } from 'vue';
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

const props = defineProps({
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
});

const emit = defineEmits(['change', 'blur', 'focus']);

const cardHover = ref('');

const visaStyle = computed(() => ({
    backgroundImage: 'url(https://cdn-icons-png.flaticon.com/128/196/196578.png)',
    filter:
    props.value === 'visa'
        ? 'none'
        : cardHover.value === 'visa'
            ? filterHover
            : filter,
    ...cardStyle,
}));

const mastercardStyle = computed(() => ({
    backgroundImage: 'url(https://cdn-icons-png.flaticon.com/128/196/196561.png)',
    filter:
    props.value === 'masterCard'
        ? 'none'
        : cardHover.value === 'masterCard'
            ? filterHover
            : filter,
    ...cardStyle,
}));

const paypalStyle = computed(() => ({
    backgroundImage: 'url(https://cdn-icons-png.flaticon.com/128/196/196565.png)',
    filter:
    props.value === 'paypal'
        ? 'none'
        : cardHover.value === 'paypal'
            ? filterHover
            : filter,
    ...cardStyle,
}));

const showValidationMessage = computed(() => props.touched && props.validationMessage);

function handleChange(e) {
    emit('change', e);
}

function handleBlur(e) {
    emit('blur', e);
}

function handleFocus(e) {
    emit('focus', e);
}

function onMouseEnterLabel(event) {
    cardHover.value = event.currentTarget.getAttribute('for');
}

function onMouseLeaveLabel() {
    cardHover.value = '';
}
</script>
