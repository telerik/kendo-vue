<template>
  <div>
    <div class="row example-wrapper">
      <div class="col-xs-12 col-sm-6 example-col">
        <p>Default Button</p>
        <DropDownButton :text="'User Settings'" :items="items" />
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <p>Primary Button</p>
        <DropDownButton
          :text="'User Settings'"
          :items="items"
          :theme-color="'primary'"
        />
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <p>Outline Button</p>
        <DropDownButton
          :text="'User Settings'"
          :items="items"
          :fill-mode="'outline'"
        />
      </div>
      <div class="col-xs-12 col-sm-6 example-col">
        <p>Flat Button</p>
        <DropDownButton :text="'User Settings'" :items="items" :fill-mode="'flat'" />
      </div>
    </div>
  </div>
</template>

<script>
import { DropDownButton } from "@progress/kendo-vue-buttons";

export default {
  components: {
    DropDownButton,
  },
  data: function () {
    return {
      items: [
        "My Profile",
        "Friend Requests",
        "Account Settings",
        "Support",
        "Log Out",
      ],
    };
  },
};
</script>

