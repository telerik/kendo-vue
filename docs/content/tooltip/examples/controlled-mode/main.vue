<template>
  <div>
    <Tooltip
      :anchor-element="'target'"
      :open="open"
      :target-element="targetElement"
      :open-delay="1"
      :append-to="wrapper"
    >
      <div ref="wrapper">
        <p>
          Click the button to show the tooltip with&nbsp;
          <a
            ref="firstElement"
            href="http://example.com/first"
            title="http://example.com/first"
          >
            first link
          </a>
          &nbsp; as an anchor.
          <KButton @click="showTooltip(firstElement)">
            Show Tooltip
          </KButton>
        </p>
        <p>
          Click the button to show the tooltip with&nbsp;
          <a
            ref="secondElement"
            href="http://example.com/second"
            title="http://example.com/second"
          >
            second link
          </a>
          &nbsp; as an anchor.
          <KButton @click="showTooltip(secondElement)">
            Show Tooltip
          </KButton>
        </p>
        <hr />
        <KButton @click="hideTooltip">Hide Tooltip</KButton>
      </div>
    </Tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Tooltip } from '@progress/kendo-vue-tooltip';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const wrapper = ref(null);
const open = ref(false);
const targetElement = ref(null);
const firstElement = ref(null);
const secondElement = ref(null);

function showTooltip(element) {
    open.value = true;
    targetElement.value = element;
}

function hideTooltip() {
    open.value = false;
    targetElement.value = null;
}
</script>
