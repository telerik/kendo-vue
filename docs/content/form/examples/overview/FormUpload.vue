<template>
  <FieldWrapper>
    <Label
      class="k-form-label"
      :editor-id="id"
      :optional="optional"
    >
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <Upload
        :id="id"
        :auto-upload="false"
        :show-action-buttons="false"
        :multiple="false"
        :files="value"
        @add="onAddHandler"
        @remove="onRemoveHandler"
        @blur="handleBlur"
        @focus="handleFocus"
      />
    </div>
  </FieldWrapper>
</template>

<script setup>
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Label } from '@progress/kendo-vue-labels';
import { Upload } from '@progress/kendo-vue-upload';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  label: String,
  id: String,
  optional: [Boolean, String],
  hint: String,
  value: { default: null },
  onImageUpload: Function
});

const emit = defineEmits(['change', 'blur', 'focus']);

function onAddHandler(e) {
  emit('change', { value: e.newState });
  if (e.newState && e.newState.length > 0 && e.newState[0].getRawFile) {
    const file = e.newState[0].getRawFile();
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (props.onImageUpload) props.onImageUpload(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
}

function onRemoveHandler(e) {
  emit('change', { value: e.newState });
  if (props.onImageUpload) props.onImageUpload(null);
}

function handleBlur(e) { emit('blur', e); }
function handleFocus(e) { emit('focus', e); }
</script>
