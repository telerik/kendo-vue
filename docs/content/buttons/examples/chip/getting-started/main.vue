<template>
  <div>
    <div class="container-fluid">
      <div class="row mb-3" :style="{ marginLeft: '20px' }">
        <Chip
          :text="'Chip component'"
          :value="'chip'"
          :rounded="'full'"
          :disabled="disabledValue"
          :svg-icon="
            iconValue === 'map-marker-target' ? mapMarkerTargetIcon : undefined
          "
          :avatar="iconValue === 'paula' ? 'avatar' : undefined"
          :theme-color="themeColorValue"
          :fill-mode="lookValue"
          :selected="selectValue"
          :selected-svg-icon="selectIconValue"
          :removable="removeValue"
          :remove-svg-icon="removeIconValue"
        >
          <template #avatar>
            <Avatar :type="'image'" :rounded="'full'" :size="'small'">
              <img
                :src="PaulaWilsonImage"
                alt="image"
              />
            </Avatar>
          </template>
        </Chip>
      </div>
      <div class="row">
        <div class="col-6 col-md-3 mb-3">
          <h5>Mode</h5>
          <div>
            <input
              type="radio"
              name="mode"
              id="mode"
              class="k-radio k-radio-md"
              :checked="!disabledValue"
              @change="handleModeChange"
            />
            <label class="k-radio-label" for="mode">enabled</label>
          </div>
          <div>
            <input
              type="radio"
              name="mode"
              id="mode1"
              class="k-radio k-radio-md"
              :checked="disabledValue"
              @change="handleModeChange"
            />
            <label class="k-radio-label" for="mode1">disabled</label>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <h5>Icon</h5>
          <div>
            <input
              type="radio"
              name="icon"
              id="icon"
              :value="''"
              class="k-radio k-radio-md"
              :checked="iconValue === ''"
              @change="handleIconChange"
            />
            <label class="k-radio-label" for="icon">none</label>
          </div>
          <div>
            <input
              type="radio"
              name="icon"
              id="icon1"
              :value="mapMarkerTargetIcon.name"
              class="k-radio k-radio-md"
              :checked="iconValue === mapMarkerTargetIcon.name"
              @change="handleIconChange"
            />
            <label class="k-radio-label" for="icon1">icon</label>
          </div>
          <div>
            <input
              type="radio"
              name="icon"
              id="icon2"
              :value="'paula'"
              class="k-radio k-radio-md"
              :checked="iconValue === 'paula'"
              @change="handleIconChange"
            />
            <label class="k-radio-label" for="icon2">avatar</label>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <h5>Type</h5>
          <div>
            <input
              type="radio"
              name="type"
              id="type"
              :value="''"
              class="k-radio k-radio-md"
              :checked="themeColorValue === 'base'"
              @change="handleTypeChange"
            />
            <label class="k-radio-label" for="type">none</label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              id="type1"
              :value="'success'"
              class="k-radio k-radio-md"
              :checked="themeColorValue === 'success'"
              @change="handleTypeChange"
            />
            <label class="k-radio-label" for="type1">success</label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              id="type2"
              :value="'warning'"
              class="k-radio k-radio-md"
              :checked="themeColorValue === 'warning'"
              @change="handleTypeChange"
            />
            <label class="k-radio-label" for="type2">warning</label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              id="type3"
              :value="'info'"
              class="k-radio k-radio-md"
              :checked="themeColorValue === 'info'"
              @change="handleTypeChange"
            />
            <label class="k-radio-label" for="type3">info</label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              id="type4"
              :value="'error'"
              class="k-radio k-radio-md"
              :checked="themeColorValue === 'error'"
              @change="handleTypeChange"
            />
            <label class="k-radio-label" for="type4">error</label>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <h5>Appearance</h5>
          <div>
            <input
              type="radio"
              name="look"
              id="look"
              :value="''"
              class="k-radio k-radio-md"
              :checked="lookValue === 'solid'"
              @change="handleLookChange"
            />
            <label class="k-radio-label" for="look">filled</label>
          </div>
          <div>
            <input
              type="radio"
              name="look"
              id="look1"
              :value="'outline'"
              class="k-radio k-radio-md"
              :checked="lookValue === 'outline'"
              @change="handleLookChange"
            />
            <label class="k-radio-label" for="look1">outlined</label>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <h5>Select Chip</h5>
          <div>
            <input
              type="radio"
              name="select"
              id="select"
              class="k-radio k-radio-md"
              :checked="!selectValue"
              @change="handleSelectChange"
            />
            <label class="k-radio-label" for="select">deselect</label>
          </div>
          <div>
            <input
              type="radio"
              name="select"
              id="select1"
              class="k-radio k-radio-md"
              :checked="selectValue"
              @change="handleSelectChange"
            />
            <label class="k-radio-label" for="select1">select</label>
          </div>
        </div>

        <div class="col-6 col-md-3 mb-3">
          <h5>Select icon</h5>
          <div>
            <input
              type="radio"
              name="selectIcon"
              :value="''"
              id="selectIcon"
              class="k-radio k-radio-md"
              :checked="selectIconValue === null"
              @change="handleSelectIconChange"
            />
            <label class="k-radio-label" for="selectIcon">default</label>
          </div>
          <div>
            <input
              type="radio"
              name="selectIcon"
              id="selectIcon1"
              :value="checkCircleIcon.name"
              class="k-radio k-radio-md"
              :checked="selectIconValue === checkCircleIcon.name"
              @change="handleSelectIconChange"
            />
            <label class="k-radio-label" for="selectIcon1">custom</label>
          </div>
        </div>

        <div class="col-6 col-md-3 mb-3">
          <h5>Allow remove</h5>
          <div>
            <input
              type="radio"
              name="remove"
              id="remove"
              :value="false"
              class="k-radio k-radio-md"
              :checked="removeValue === false"
              @change="handleRemoveChange"
            />
            <label class="k-radio-label" for="remove">do not remove</label>
          </div>
          <div>
            <input
              type="radio"
              name="remove"
              id="remove1"
              :value="true"
              class="k-radio k-radio-md"
              :checked="removeValue === true"
              @change="handleRemoveChange"
            />
            <label class="k-radio-label" for="remove1">remove</label>
          </div>
        </div>
        <div class="col-6 col-md-3 mb-3">
          <h5>Remove icon</h5>
          <div>
            <input
              type="radio"
              name="removeIcon"
              id="removeIcon"
              :value="'iconDefault'"
              class="k-radio k-radio-md"
              :checked="removeIconValue.name === 'x-circle'"
              @change="handleRemoveIconChange"
            />
            <label class="k-radio-label" for="removeIcon">default</label>
          </div>
          <div>
            <input
              type="radio"
              name="removeIcon"
              id="removeIcon1"
              :value="'cancel-icon'"
              class="k-radio k-radio-md"
              :checked="removeIconValue.name === 'cancel'"
              @change="handleRemoveIconChange"
            />
            <label class="k-radio-label" for="removeIcon1">custom 1</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Avatar } from "@progress/kendo-vue-layout";
import { Chip } from "@progress/kendo-vue-buttons";
import {
    mapMarkerTargetIcon,
    checkCircleIcon,
    xCircleIcon,
    cancelIcon,
} from "@progress/kendo-svg-icons";
import { ref } from 'vue';

const PaulaWilsonImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RATTC.jpg';

const disabledValue = ref(false);
const iconValue = ref("");
const themeColorValue = ref("base");
const lookValue = ref("solid");
const selectValue = ref(false);
const selectIconValue = ref(checkCircleIcon);
const removeValue = ref(false);
const removeIconValue = ref(xCircleIcon);

function handleModeChange() {
    disabledValue.value = !disabledValue.value;
}

function handleIconChange(event) {
    iconValue.value = event.target.value || undefined;
}

function handleTypeChange(event) {
    themeColorValue.value = event.target.value || undefined;
}

function handleLookChange(event) {
    lookValue.value = event.target.value || undefined;
}

function handleSelectChange() {
    selectValue.value = !selectValue.value;
}

function handleSelectIconChange(event) {
    const value = event.target.value;
    selectIconValue.value = value === "check-circle" ? checkCircleIcon : undefined;
}

function handleRemoveChange() {
    removeValue.value = !removeValue.value;
}

function handleRemoveIconChange(event) {
    const value = event.target.value;
    if (value === "iconDefault") {
        removeIconValue.value = xCircleIcon;
    } else if (value === "cancel-icon") {
        removeIconValue.value = cancelIcon;
    }
}
</script>

<style>
.col-3,
.col-6,
.col-4 {
  padding: 15px;
}
</style>
