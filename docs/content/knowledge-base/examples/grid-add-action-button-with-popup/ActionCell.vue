<template>
  <td style="text-align: center" @mouseleave="onCellFocusOut">
    <div>
      <button class="k-button" @click="onClick" ref="button">...</button>
      <Popup
        :anchor="'button'"
        :show="show"
        :popup-class="'popup-content'"
        @mouseleave="onFocusOut"
        @mouseenter="onMouseEnter"
      >
        <div class="action" id="accept" @click="onClickAction">
          Mark as ready for shipping
        </div>
        <div class="action" id="decline" @click="onClickAction">
          Mark as not ready for shipping
        </div>
      </Popup>
    </div>
  </td>
</template>

<script setup>
import { ref } from 'vue';
import { Popup } from '@progress/kendo-vue-popup';

const show = ref(false);
const mouseOverPopup = ref(false);

const props = defineProps({
    dataItem: Object,
});

function onClick() {
    show.value = true;
}

function onClickAction(e) {
    emit('actionselect', { dataItem: props.dataItem, action: e.target.id });
    show.value = !show.value;
}

function onFocusOut() {
    show.value = false;
    mouseOverPopup.value = false;
}

function onCellFocusOut() {
    setTimeout(() => {
        if (!mouseOverPopup.value) {
            show.value = false;
        }
        mouseOverPopup.value = false;
    });
}

function onMouseEnter() {
    mouseOverPopup.value = true;
}
</script>

<style>
.k-button {
  border-radius: 18px;
  background-color: grey;
  opacity: 0.7;
}

.action {
  margin: 10px 20px 10px 20px;
  cursor: pointer;
}
</style>
