<template>
  <div>
    <kendo-menu :items="items" @select="onSelect" :vertical="true" />
  </div>
</template>
<script>
import { Menu } from "@progress/kendo-vue-layout";
import { provideLocalizationService } from "@progress/kendo-vue-intl";
import {
  chartLineMarkersIcon,
  gridIcon,
  infoCircleIcon,
  userIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    "kendo-menu": Menu,
  },
  mounted() {
    this.selectedItemID = 1;
  },
  inject: {
    kendoLocalizationService: { default: null },
  },
  watch: {
    selectedItemID(e) {
      this.updateSelectedMenuItem(e);
    },
  },
  data() {
    return {
      teamClass: "",
      dashboardClass: "",
      profileClass: "",
      infoClass: "",
      selectedItemID: null,
    };
  },
  computed: {
    items() {
      return [
        {
          text: this.teamMessage,
          cssClass: this.teamClass,
          cssStyle: this.itemStyle,
          svgIcon: gridIcon,
          data: {
            path: "/",
          },
          id: 1,
        },
        {
          text: this.dashboardMessage,
          cssClass: this.dashboardClass,
          cssStyle: this.itemStyle,
          svgIcon: chartLineMarkersIcon,
          data: {
            path: "/Dashboard",
          },
          id: 2,
        },
        {
          text: this.profileMessage,
          cssClass: this.profileClass,
          cssStyle: this.itemStyle,
          svgIcon: userIcon,
          data: {
            path: "/Profile",
          },
          id: 3,
        },
        {
          text: this.infoMessage,
          cssClass: this.infoClass,
          cssStyle: {
            ...this.itemStyle,
            borderTop: "var(--kendo-spacing-1px) solid var(--kendo-color-border)",
          },
          svgIcon: infoCircleIcon,
          data: {
            path: "/Info",
          },
          itemStyle() {
            return {
              paddingBottom: "var(--kendo-spacing-2\\.5)",
              paddingTop: "var(--kendo-spacing-2\\.5)",
              paddingLeft: "var(--kendo-spacing-1\\.5)",
            };
          },
          id: 4,
        },
      ];
    },
    teamMessage() {
      return provideLocalizationService(this).toLanguageString("team", "Team");
    },
    dashboardMessage() {
      return provideLocalizationService(this).toLanguageString(
        "dashboard",
        "Dashboard"
      );
    },
    profileMessage() {
      return provideLocalizationService(this).toLanguageString(
        "profile",
        "Profile"
      );
    },
    infoMessage() {
      return provideLocalizationService(this).toLanguageString("info", "Info");
    },
  },
  methods: {
    onSelect(e) {
      this.$router.push(e.item.data);
      this.selectedItemID = e.item.id;
    },
    updateSelectedMenuItem(menuItemID) {
      this.teamClass =
        menuItemID === 1
          ? "k-state-selected"
          : "";
      this.dashboardClass =
        menuItemID === 2
          ? "k-state-selected"
          : "";
      this.profileClass =
        menuItemID === 3
          ? "k-state-selected"
          : "";
      this.infoClass =
        menuItemID === 4
          ? "k-state-selected"
          : "";
    },
  },
};
</script>
<style scoped>
</style>