<template>
  <div>
    <KButton :style="{ marginBottom: '10px' }" @click="onClick">
      {{ isDisabled ? 'Enable' : 'Disable' }}
    </KButton>
    <Upload
      :disabled="isDisabled"
      :default-files="[]"
      :batch="false"
      :multiple="true"
      :with-credentials="false"
      :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
      :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Upload } from '@progress/kendo-vue-upload';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const isDisabled = ref(true);

function onClick() {
    isDisabled.value = !isDisabled.value;
}
</script>
