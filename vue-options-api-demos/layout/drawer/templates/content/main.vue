<template>
  <div class="border-demo">
    <Drawer
      :expanded="stateVisible"
      :position="'start'"
      :mode="'push'"
      :navigation-header="'headerTemplate'"
      :navigation-footer="'footerTemplate'"
      :navigation-content="'contentTemplate'"
    >
      <template v-slot:headerTemplate="{ props }">
        <div class="custom-header" style="background-color: lightgreen">
          Header Content
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </template>
      <template v-slot:contentTemplate="{ props }">
        <div class="custom-content" style="background-color: lightyellow">
          <form>
            <label class="k-form-field">
              <span>First Name</span>
              <KInput placeholder="Your Name"></KInput>
            </label>
            <label class="k-form-field">
              <span>Last Name</span>
              <KInput placeholder="Your Last Name"></KInput>
            </label>
            <label class="k-form-field">
              <KButton @click="handleClick">Submit</KButton>
            </label>
          </form>
        </div>
      </template>
      <template v-slot:footerTemplate="{ props }">
        <div
          style="text-align: center; background-color: magenta"
          class="custom-footer"
        >
          Footer Content
          <KButton @click="handleClick">Collapse Drawer</KButton>
        </div>
      </template>
      <DrawerContent>
        <KButton class="expand-drawer-btn" @click="handleClick"
          >Toggle the drawer state</KButton
        >
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { bellIcon } from '@progress/kendo-svg-icons';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Input as KInput } from '@progress/kendo-vue-inputs';
import {
  Drawer,
  DrawerContent,
  DrawerNavigation,
} from '@progress/kendo-vue-layout';

export default {
  components: {
    Drawer,
    DrawerContent,
    DrawerNavigation,
    KButton,
    KInput,
  },
  data() {
    return {
      stateVisible: false,
    };
  },
  methods: {
    handleClick() {
      this.stateVisible = !this.stateVisible;
    },
  },
};
</script>
