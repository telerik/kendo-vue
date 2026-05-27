<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">Async Validators equivalent demo (debouncing included):</legend>
      <Field :name="'username'" :label="'Username'" :component="'usernameTemplate'">
        <template #usernameTemplate="{ props }">
          <FormUsernameInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <div class="k-form-hint">Try: "admin" or "test" (taken), or enter &lt; 3 characters</div>
    </fieldset>
    <div class="k-form-buttons">
      <KButton
        type="submit"
        :theme-color="'primary'"
        :disabled="!kendoForm.allowSubmit || validating"
      >
        {{ validating ? 'Validating...' : 'Submit' }}
      </KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from 'vue';
import { FormElement, Field } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import FormUsernameInput from './FormUsernameInput.vue';

defineProps({
  validating: Boolean
});

const kendoForm = inject('kendoForm', {});
</script>
