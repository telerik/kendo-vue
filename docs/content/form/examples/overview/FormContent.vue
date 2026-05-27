<template>
  <FormElement :style="{ maxWidth: '670px', margin: '0 auto' }">
    <FormFieldSet legend="Your Account" :cols="responsiveBreakpoints">
      <Avatar :size="'large'" :theme-color="'primary'" :type="avatarSrc ? 'image' : 'text'">
        <img v-if="avatarSrc" :src="avatarSrc" alt="avatar" />
        <span v-else>JS</span>
      </Avatar>

      <Field
        :col-span="responsiveBreakpoints"
        :id="'avatarUpload'"
        :name="'avatarUpload'"
        :label="'Upload picture'"
        :optional="'(Optional)'"
        :component="'uploadTemplate'"
        :on-image-upload="handleImageUpload"
      >
        <template #uploadTemplate="{ props }">
          <FormUpload v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>

      <Field :col-span="1" :name="'firstName'" :label="'First name'" :component="'inputTemplate'" :validator="nameValidator" :auto-complete="'username'">
        <template #inputTemplate="{ props }">
          <FormTextBox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field :col-span="1" :name="'lastName'" :label="'Last name'" :component="'inputTemplate'" :validator="nameValidator" :auto-complete="'username'">
        <template #inputTemplate="{ props }">
          <FormTextBox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field :col-span="1" :name="'password'" :label="'Password'" :hint="'Password must be at least 8 characters.'" :component="'inputTemplate'" :validator="passwordValidator" :type="'password'" :auto-complete="'new-password'">
        <template #inputTemplate="{ props }">
          <FormTextBox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field :col-span="1" :name="'confirm-password'" :label="'Confirm Password'" :hint="'Must be the same as Password.'" :component="'inputTemplate'" :validator="passwordValidator" :type="'password'" :auto-complete="'new-password'">
        <template #inputTemplate="{ props }">
          <FormTextBox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field :col-span="1" :name="'email'" :type="'email'" :label="'Email'" :component="'inputTemplate'" :validator="emailValidator" :placeholder="'your@email.com'" :auto-complete="'email'">
        <template #inputTemplate="{ props }">
          <FormTextBox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>

      <Field
        :col-span="responsiveBreakpoints"
        :name="'interests'"
        :label="'Interests'"
        :optional="'(Optional)'"
        :component="'multiSelectTemplate'"
        :data="interests"
        :default-value="defaultInterests"
        :text-field="'text'"
        :data-item-key="'value'"
      >
        <template #multiSelectTemplate="{ props }">
          <FormMultiSelect v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
    </FormFieldSet>

    <div class="k-form-buttons">
      <KButton :theme-color="'primary'" type="submit" :disabled="!kendoForm.allowSubmit">Login</KButton>
      <KButton type="button" @click="kendoForm.onFormReset()">Reset</KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { ref, inject } from 'vue';
import { FormElement, Field, FormFieldSet } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Avatar } from '@progress/kendo-vue-layout';
import FormTextBox from './FormTextBox.vue';
import FormMultiSelect from './FormMultiSelect.vue';
import FormUpload from './FormUpload.vue';
import { nameValidator, emailValidator, passwordValidator } from './validators';

const kendoForm = inject('kendoForm', {});
const avatarSrc = ref(null);

const responsiveBreakpoints = [
  { minWidth: 0, maxWidth: 499, value: 1 },
  { minWidth: 500, value: 2 }
];

const interests = [
  { text: 'Sports', value: 'sports' },
  { text: 'Music', value: 'music' },
  { text: 'Movies', value: 'movies' },
  { text: 'Books', value: 'books' },
  { text: 'Travel', value: 'travel' },
  { text: 'Technology & Gadgets', value: 'technology-and-gadgets' }
];

const defaultInterests = [
  { text: 'Music', value: 'music' },
  { text: 'Technology & Gadgets', value: 'technology-and-gadgets' }
];

function handleImageUpload(src) {
  avatarSrc.value = src;
}
</script>
