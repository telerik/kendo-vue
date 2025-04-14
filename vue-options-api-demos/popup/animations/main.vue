<template>
  <div>
    <div class="example-config">
      <input
        id="animate"
        type="checkbox"
        class="k-checkbox k-checkbox-md k-rounded-md"
        v-model="animate"
      />
      <label for="animate" class="k-checkbox-label">Animate</label>
      <hr />
      <knumerictextbox
        id="animationDuration"
        :min="0"
        :disabled="!animate"
        v-model.number="animationDuration"
        :style="{ width: '100px' }"
      />
      <label for="animationDuration" class="k-label"
        >&nbsp;Animation duration</label
      >
      <hr />
    </div>
    <kbutton @click="onClick" ref="button">
      {{ buttonText }}
    </kbutton>
    <Popup
      :anchor="'button'"
      :show="show"
      :animate="computedAnimate"
      :popup-class="'popup-content'"
    >
      Popup content.
    </Popup>
  </div>
</template>
<script>
import "./styles.css";
import { Popup } from "@progress/kendo-vue-popup";
import { Button } from "@progress/kendo-vue-buttons";
import { NumericTextBox } from "@progress/kendo-vue-inputs";

export default {
  components: {
    Popup: Popup,
    kbutton: Button,
    knumerictextbox: NumericTextBox,
  },
  data: function () {
    return {
      show: false,
      animate: true,
      animationDuration: 300,
    };
  },
  computed: {
    buttonText: function () {
      return this.show ? "Hide" : "Show";
    },
    computedAnimate: function () {
      return this.animate
        ? {
            openDuration: this.animationDuration,
            closeDuration: this.animationDuration,
          }
        : false;
    },
  },
  mounted() {
    this.show = true;
  },
  methods: {
    onClick() {
      this.show = !this.show;
    },
  },
};
</script>
