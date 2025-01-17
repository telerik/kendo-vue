<template>
  <fieldwrapper>
    <klabel :editor-id="id" :editor-valid="valid">
      <avatar :rounded="'full'" :type="'image'" :size="'large'"
        :style="{ width: '80px', height: '80px', 'flex-basis': '80px' }">
        <img src="../../assets/images/user.jpg" />
      </avatar>
    </klabel>
    <div class="k-form-field-wrap">
      <span>
        <upload :valid="valid" :value="value" :id="id" :auto-upload="false" :multiple="false" :show-file-list="false"
          :show-action-buttons="false" :files="value" :restrictions="{
            allowedExtensions: ['.jpg', '.png'],
          }" @blur="handleBlur" @focus="handleFocus" @add="onAddHandler" @remove="onRemoveHandler" />
      </span>
      <error v-if="showValidationMessage">
        {{ validationMessage }}
      </error>
      <hint v-else>{{ hint }}</hint>
    </div>
  </fieldwrapper>
</template>
<script>
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { Upload } from "@progress/kendo-vue-upload";
import { Avatar } from "@progress/kendo-vue-layout";

export default {
  props: {
    touched: Boolean,
    optional: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: Array,
  },
  components: {
    fieldwrapper: FieldWrapper,
    error: Error,
    hint: Hint,
    klabel: Label,
    upload: Upload,
    avatar: Avatar,
  },
  computed: {
    showValidationMessage() {
      return this.$props.touched && this.$props.validationMessage;
    },
    showHint() {
      return !this.showValidationMessage && this.$props.hint;
    },
    hintId() {
      return this.showHint ? `${this.$props.id}_hint` : "";
    },
    errorId() {
      return this.showValidationMessage ? `${this.$props.id}_error` : "";
    },
  },
  emits: {
    change: null,
    blur: null,
    focus: null,
  },
  methods: {
    handleBlur(e) {
      this.$emit("blur", e);
    },
    handleFocus(e) {
      this.$emit("focus", e);
    },
    onAddHandler(e) {
      const avatars = document.querySelectorAll(".k-avatar .k-avatar-image");
      const reader = new FileReader();
      const file = e.newState[0].getRawFile();

      if (file) {
        reader.onloadend = function () {
          avatars.forEach((avatar) => {
            avatar.querySelector("img").setAttribute("src", reader.result);
            localStorage.setItem("avatar", reader.result.toString());
          });
        };
        reader.readAsDataURL(file);
      }

      this.$emit("change", {
        value: e.newState,
      });
    },
    onRemoveHandler(e) {
      this.$emit("change", {
        value: e.newState,
      });
    },
  },
};
</script>

<style scoped>
.k-form-field-wrap {
  margin: auto;
}
</style>