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
      <template v-slot:chipTemplate="{ props }">
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
        <template v-slot:avatar>
          <Avatar :type="'image'" :rounded="'full'" :size="'small'">
            <img :src="props.dataItem.icon" alt="image" />
          </Avatar>
        </template>
        </Chip>
      </template>
    </ChipList>
  </div>
</template>

<script>
import { Chip, ChipList } from "@progress/kendo-vue-buttons";
import { Avatar } from "@progress/kendo-vue-layout";
import ChipStyleConfigurator from "./ChipStyleConfigurator.vue";

const pedroAfonsoImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/SPLIR.jpg';
const thomasHardyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';
const christinaBergImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/BERGS.jpg';
const paulaWilsonImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RATTC.jpg';

export default {
  components: {
    ChipStyleConfigurator,
    Chip,
    ChipList,
    Avatar,
  },
  data() {
    return {
      people: [
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
      ],
      size: "medium",
      themeColor: "base",
      fillMode: "solid",
      rounded: "medium",
    };
  },
  methods: {
    handleDataChange(event){
      this.people = event.value;
    },
    setSize(event) {
      this.size = event.value;
    },
    setThemeColor(event) {
      this.themeColor = event.value;
    },
    setFillMode(event) {
      this.fillMode = event.value;
    },
    setRounded(event) {
      this.rounded = event.value;
    },
  },
};
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
