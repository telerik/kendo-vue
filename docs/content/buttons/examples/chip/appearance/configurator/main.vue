<template>
  <div>
    <ChipStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :theme-color="themeColor"
      @themecolorchange="setThemeColor"
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <ChipList
      :data-items="people"
      :selection="'multiple'"
      @datachange="handleDataChange"
      :chip="'chipTemplate'"
    >
      <template #chipTemplate="{ props }">
        <Chip
          :data-item="props.dataItem"
          :text="props.text"
          :value="props.value"
          :size="size"
          :theme-color="themeColor"
          :fill-mode="fillMode"
          :rounded="rounded"
          :removable="true"
          :avatar="'avatar'"
        >
        <template #avatar>
          <Avatar :type="'image'" :rounded="'full'" :size="'small'">
            <img :src="props.dataItem.icon" alt="image" />
          </Avatar>
        </template>
        </Chip>
      </template>
    </ChipList>
  </div>
</template>

<script setup>
import { Chip, ChipList } from "@progress/kendo-vue-buttons";
import { Avatar } from "@progress/kendo-vue-layout";
import ChipStyleConfigurator from "./ChipStyleConfigurator.vue";
import { ref, shallowRef } from 'vue';

const pedroAfonsoImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/SPLIR.jpg';
const thomasHardyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';
const christinaBergImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/BERGS.jpg';
const paulaWilsonImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RATTC.jpg';

const people = shallowRef([
    {
        text: "Pedro Afonso",
        value: "pedro",
        icon: pedroAfonsoImage,
    },
    {
        text: "Thomas Hardy",
        value: "thomas",
        icon: thomasHardyImage,
    },
    {
        text: "Christina Berg",
        value: "christina",
        icon: christinaBergImage,
    },
    {
        text: "Paula Wilson",
        value: "paula",
        icon: paulaWilsonImage,
    },
]);

const size = ref("medium");
const themeColor = ref("base");
const fillMode = ref("solid");
const rounded = ref("medium");

function handleDataChange(event) {
    people.value = event.value;
}

function setSize(event) {
    size.value = event.value;
}

function setThemeColor(event) {
    themeColor.value = event.value;
}

function setFillMode(event) {
    fillMode.value = event.value;
}

function setRounded(event) {
    rounded.value = event.value;
}
</script>

<style>
.k-chip {
  margin-right: 10px;
}
.pedro, .thomas, .christina, .paula {
  background-size: contain;
}
.custom-style {
  color: #6200ee;
  background-color: #f3ebfe;
  border-color: #6200ee;
}
</style>
