<template>
  <div class="border-demo">
    <div class="page">
      <div class="example-config">
        <legend>Position mode settings</legend>
        <RadioGroup
          :data-items="contentTypes"
          v-model="positionMode"
          :layout="'horizontal'"
        />
        <span>* Scoll the page to see the position mode differences</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est, harum
        quibusdam praesentium voluptatibus et similique dolorum aliquid ab saepe
        enim numquam mollitia laborum alias doloremque impedit voluptates
        reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est, harum
        quibusdam praesentium voluptatibus et similique dolorum aliquid ab saepe
        enim numquam mollitia laborum alias doloremque impedit voluptates
        reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est, harum
        quibusdam praesentium voluptatibus et similique dolorum aliquid ab saepe
        enim numquam mollitia laborum alias doloremque impedit voluptates
        reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est, harum
        quibusdam praesentium voluptatibus et similique dolorum aliquid ab saepe
        enim numquam mollitia laborum alias doloremque impedit voluptates
        reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est, harum
        quibusdam praesentium voluptatibus et similique dolorum aliquid ab saepe
        enim numquam mollitia laborum alias doloremque impedit voluptates
        reprehenderit.
      </p>
      <BottomNavigation
        :positionMode="positionMode"
        :items="computedItems"
        @select="onSelect"
      />
    </div>
  </div>
</template>
<script>
import { BottomNavigation } from "@progress/kendo-vue-layout";
import { RadioGroup } from "@progress/kendo-vue-inputs";
import { calendarIcon, envelopIcon, userIcon } from "@progress/kendo-svg-icons";

export default {
  components: {
    BottomNavigation,
    RadioGroup,
  },
  computed: {
    computedItems() {
      return this.items.map((item, index) => ({
        ...item,
        selected: index === this.selected,
      }));
    },
  },
  data() {
    return {
      contentTypes: [
        {
          label: "Fixed",
          value: "fixed",
        },
        {
          label: "Sticky",
          value: "sticky",
        },
      ],
      positionMode: "fixed",
      selected: 0,
      items: [
        {
          text: "Inbox",
          id: 1,
          svgIcon: envelopIcon,
          selected: true,
        },
        {
          text: "Calendar",
          id: 2,
          svgIcon: calendarIcon,
        },
        {
          text: "Profile",
          id: 3,
          svgIcon: userIcon,
        },
      ],
    };
  },
  methods: {
    onSelect(ev) {
      this.selected = ev.itemIndex;
    },
  },
};
</script>
