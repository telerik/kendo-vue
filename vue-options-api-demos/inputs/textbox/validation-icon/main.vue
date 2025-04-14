<template>
  <div>
    <div>Message:</div>
    <KTextBox
      :value="value"
      :placeholder="'Type message'"
      :input-prefix="'prefix'"
      :input-suffix="'suffix'"
      :required="true"
      :valid="valid"
      :style="{
        width: '300px',
      }"
      @input="handleInput"
    >
      <template v-slot:prefix>
        <Icon
          v-if="valid && recommended"
          :name="'check'"
          :theme-color="'success'"
        />
        <Icon v-else-if="valid" :name="'warning'" :theme-color="'warning'" />
        <Icon v-else :name="'error'" :theme-color="'error'" />
      </template>
      <template v-slot:suffix>
        {{ `${String(value).length}/${MAX_LENGTH}` }} &nbsp;
      </template>
    </KTextBox>
    <Hint>Recommended size is between at least 5 characters</Hint>
  </div>
</template>
<script>
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";
import { Icon } from "@progress/kendo-vue-common";
import { Hint } from "@progress/kendo-vue-labels";

const EMPTY_VALUE = "";
const matchMinimum = (value) =>
  new RegExp(/^[a-zA-Z0-9]{1,10}$/g).test(String(value));
const matchRecommended = (value) =>
  new RegExp(/^[a-zA-Z0-9]{5,10}$/g).test(String(value));

export default {
  components: {
    KTextBox,
    Icon,
    Hint,
  },
  computed: {
    valid() {
      return matchMinimum(this.value);
    },
    recommended() {
      return matchRecommended(this.value);
    },
  },
  data() {
    return {
      value: EMPTY_VALUE,
      MAX_LENGTH: 10,
    };
  },
  methods: {
    handleInput(event) {
      this.value = event.target.value;
    },
  },
};
</script>
