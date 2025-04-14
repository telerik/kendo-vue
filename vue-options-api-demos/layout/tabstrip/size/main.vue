<template>
  <div>
    <div class="example-config">
      <legend>Layout Settings</legend>
      <span>TabStrip Size:</span>
      <RadioGroup
        :data-items="radioGroupItems"
        :layout="'horizontal'"
        :value="size"
        @change="handleChange"
      />
    </div>
    <hr />
    <TabStrip
      :selected="selected"
      @select="onSelect"
      :size="size"
      :tabs="tabs"
    >
      <template v-slot:Paris>
        <div class="weather">
          <h4>17<span>&ordm;C</span></h4>
          <p>Rainy weather in Paris.</p>
        </div>
      </template>
      <template v-slot:NewYork>
        <div class="weather">
          <h4>29<span>&ordm;C</span></h4>
          <p>Sunny weather in New York.</p>
        </div>
      </template>
      <template v-slot:London>
        <div class="weather">
          <h4>21<span>&ordm;C</span></h4>
          <p>Sunny weather in London.</p>
        </div>
      </template>
      <template v-slot:Moscow>
        <div class="weather">
          <h4>16<span>&ordm;C</span></h4>
          <p>Cloudy weather in Moscow.</p>
        </div>
      </template>
    </TabStrip>
  </div>
</template>

<script>
import { TabStrip } from '@progress/kendo-vue-layout';
import { RadioGroup } from '@progress/kendo-vue-inputs';

export default {
  components: {
    TabStrip,
    RadioGroup,
  },
  data: function () {
    return {
      selected: 0,
      size: 'large',
      tabs: [
        { title: 'Paris', content: 'Paris' },
        { title: 'New York', content: 'NewYork' },
        { title: 'London', content: 'London' },
        { title: 'Moscow', content: 'Moscow' },
      ],
      radioGroupItems: [
        {
          label: 'small',
          value: 'small',
        },
        {
          label: 'medium',
          value: 'medium',
        },
        {
          label: 'large',
          value: 'large',
        },
        {
          label: 'null',
          value: null,
        },
      ],
    };
  },
  methods: {
    onSelect: function (e) {
      this.selected = e.selected;
    },
    handleChange(e) {
      this.size = e.value;
    },
  },
};
</script>

<style>
.weather {
  margin: 30px;
  text-align: center;
}
</style>
