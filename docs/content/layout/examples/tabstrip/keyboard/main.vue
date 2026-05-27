<template>
  <div>
    <div class="example-config">
      <legend>Layout Settings</legend>
      <span>TabPosition:</span>
      <RadioGroup
        :data-items="radioGroupItems"
        :layout="'horizontal'"
        :value="position"
        @change="handleChange"
      />
    </div>
    <hr />
    <TabStrip
      :selected="selected"
      @select="onSelect"
      :tab-position="position"
      :tabs="tabs"
    >
      <template #Paris>
        <div class="weather">
          <h4>17<span>&ordm;C</span></h4>
          <p>Rainy weather in Paris.</p>
        </div>
      </template>
      <template #NewYork>
        <div class="weather">
          <h4>29<span>&ordm;C</span></h4>
          <p>Sunny weather in New York.</p>
        </div>
      </template>
      <template #London>
        <div class="weather">
          <h4>21<span>&ordm;C</span></h4>
          <p>Sunny weather in London.</p>
        </div>
      </template>
      <template #Moscow>
        <div class="weather">
          <h4>16<span>&ordm;C</span></h4>
          <p>Cloudy weather in Moscow.</p>
        </div>
      </template>
    </TabStrip>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabStrip } from "@progress/kendo-vue-layout";
import { RadioGroup } from "@progress/kendo-vue-inputs";

const selected = ref(0);
const position = ref("top");
const tabs = ref([
    { title: "Paris", content: "Paris" },
    { title: "New York", content: "NewYork" },
    { title: "London", content: "London" },
    { title: "Moscow", content: "Moscow" },
]);
const radioGroupItems = ref([
    { label: "Left", value: "left" },
    { label: "Right", value: "right" },
    { label: "Top", value: "top" },
    { label: "Bottom", value: "bottom" },
]);

const onSelect = (e) => {
    selected.value = e.selected;
};

const handleChange = (e) => {
    position.value = e.value;
};
</script>

<style>
.weather {
  margin: 30px;
  text-align: center;
}
</style>
