<template>
  <div>
    <KButton @click="toggleDialog">{{ visible ? 'Close' : 'Open' }} Window</KButton>
    <Window v-if="visible" title="Status" @close="toggleDialog" :initial-height="350">
      <form class="k-form">
        <fieldset>
          <legend>User Details</legend>

          <label class="k-form-field">
            <span>First Name</span>
            <KInput placeholder="Your Name" />
          </label>
          <label class="k-form-field">
            <span>Last Name</span>
            <KInput placeholder="Your Last Name" />
          </label>
        </fieldset>

        <div class="text-right">
          <KButton @click="toggleDialog">Cancel</KButton>
          <KButton theme-color="primary" @click="toggleDialog">Submit</KButton>
        </div>
      </form>
    </Window>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Window } from '@progress/kendo-vue-dialogs'
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { Input as KInput } from '@progress/kendo-vue-inputs'

const visible = ref(true)

const toggleDialog = () => {
    visible.value = !visible.value
}
</script>
