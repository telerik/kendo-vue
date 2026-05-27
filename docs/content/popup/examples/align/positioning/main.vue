<template>
  <div>
    <div class="example-config row">
      <div class="col-sm-4 col-xs-12">
        <h4>Anchor align point</h4>
        <p>
          Horizontal <br />
          <DropDownList
            :style="{ width: '230px' }"
            name="anchorHorizontal"
            v-model="anchorHorizontal"
            :data-items="horizontalOptions"
          />
        </p>
        <p>
          Vertical <br />
          <DropDownList
            :style="{ width: '230px' }"
            name="anchorVertical"
            v-model="anchorVertical"
            :data-items="verticalOptions"
          />
        </p>
      </div>
      <div class="col-sm-4 col-xs-12">
        <h4>Popup align point</h4>
        <p>
          Horizontal <br />
          <DropDownList
            :style="{ width: '230px' }"
            name="popupHorizontal"
            v-model="popupHorizontal"
            :data-items="horizontalOptions"
          />
        </p>
        <p>
          Vertical <br />
          <DropDownList
            :style="{ width: '230px' }"
            name="popupVertical"
            v-model="popupVertical"
            :data-items="verticalOptions"
          />
        </p>
      </div>
      <div class="col-sm-4 col-xs-12">
        <h4>Popup action</h4>
        <br />
        <KButton @click="onClick">
          {{ buttonText }}
        </KButton>
      </div>
    </div>
    <span
      ref="anchor"
      class="anchor content"
    >
      ANCHOR
    </span>

    <Popup
      :anchor="'anchor'"
      :show="show"
      :anchor-align="anchorAlign"
      :popup-align="popupAlign"
    >
      <div class="content popup-inner-content">
        <p>Popup content.</p>
      </div>
    </Popup>
  </div>
</template>

<script setup>
import './styles.css';
import { ref, computed } from 'vue';
import { Popup } from '@progress/kendo-vue-popup';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const anchorHorizontal = ref('left');
const anchorVertical = ref('bottom');
const popupHorizontal = ref('right');
const popupVertical = ref('top');
const show = ref(false);

const horizontalOptions = ['left', 'center', 'right'];
const verticalOptions = ['top', 'middle', 'bottom'];

const buttonText = computed(() => (show.value ? 'Hide' : 'Show'));
const anchorAlign = computed(() => ({
    horizontal: anchorHorizontal.value,
    vertical: anchorVertical.value,
}));
const popupAlign = computed(() => ({
    horizontal: popupHorizontal.value,
    vertical: popupVertical.value,
}));

function onClick() {
    show.value = !show.value;
}
</script>
