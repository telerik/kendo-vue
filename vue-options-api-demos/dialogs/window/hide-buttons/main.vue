<template>
  <div>
    <kbutton @click="toggleDialog">
      {{ visible ? "Close" : "Open" }} Window
    </kbutton>
    <window
      v-if="visible"
      :initial-height="350"
      :title="'Status'"
      :close-button="() => null"
      :maximize-button="() => null"
      :minimize-button="() => null"
      @close="toggleDialog"
    >
      <form class="k-form">
        <fieldset>
          <legend>User Details</legend>

          <label class="k-form-field">
            <span>First Name</span>
            <kinput :placeholder="'Your Name'" />
          </label>
          <label class="k-form-field">
            <span>Last Name</span>
            <kinput :placeholder="'Your Last Name'" />
          </label>
        </fieldset>

        <div class="text-right">
          <kbutton @click="toggleDialog"> Cancel </kbutton>
          <kbutton :theme-color="'primary'" @click="toggleDialog">
            Submit
          </kbutton>
        </div>
      </form>
    </window>
  </div>
</template>
<script>
import { Button } from "@progress/kendo-vue-buttons";
import { Input } from "@progress/kendo-vue-inputs";
import { Window } from "@progress/kendo-vue-dialogs";

export default {
  components: {
    window: Window,
    kbutton: Button,
    kinput: Input,
  },
  data: function () {
    return {
      visible: true,
    };
  },
  methods: {
    toggleDialog() {
      this.visible = !this.visible;
    },
  },
};
</script>
