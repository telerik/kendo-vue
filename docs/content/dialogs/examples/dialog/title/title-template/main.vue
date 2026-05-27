<template>
  <div>
    <Dialog :title-render="customTitleBar">
      <p :style="{ margin: '30px', textAlign: 'center' }">A sample print dialog.</p>
      <template #myTemplate>
        <div class="custom-title" :style="{ fontSize: '18px', lineHeight: '1.3em' }">
          <span class="k-icon k-i-print" />Print this page
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog } from '@progress/kendo-vue-dialogs'

const customTitleBar = ref('myTemplate')
</script>
