<template>
  <div>
    <Dialog>
      <div :style="{ textAlign: 'center', margin: '30px' }">
        <h4>Enter your e-mail below to unlock.</h4>
        <p>
          <KInput placeholder="Your e-mail here" :style="{ width: '300px' }" />
        </p>
        <p>
          <KButton :theme-color="'primary'" :style="{ width: '300px' }">GET MY $10 OFF</KButton>
        </p>
        <a href="#">No thanks!</a>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { Dialog } from '@progress/kendo-vue-dialogs'
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { Input as KInput } from '@progress/kendo-vue-inputs'
</script>
