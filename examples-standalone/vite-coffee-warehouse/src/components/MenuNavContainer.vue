<template>
  <div>
    <kendo-menu :items="items" @select="onSelect" :vertical="true" />
  </div>
</template>
<script>
import { Menu } from "@progress/kendo-vue-layout";
import { provideLocalizationService } from "@progress/kendo-vue-intl";

export default {
  props: {
    currentTheme: String,
  },
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
    currentTheme() {
      this.updateSelectedMenuItem(this.selectedItemID);
    },
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
          cssStyle: {
            paddingBottom: "10px",
            paddingTop: "10px",
            paddingLeft: "5px",
          },
          icon: "k-icon k-i-grid",
          data: {
            path: "/",
          },
          id: 1,
        },
        {
          text: this.dashboardMessage,
          cssClass: this.dashboardClass,
          cssStyle: {
            paddingBottom: "10px",
            paddingTop: "10px",
            paddingLeft: "5px",
          },
          icon: "k-icon k-i-chart-line-markers",
          data: {
            path: "/Dashboard",
          },
          id: 2,
        },
        {
          text: this.profileMessage,
          cssClass: this.profileClass,
          cssStyle: {
            paddingBottom: "10px",
            paddingTop: "10px",
            paddingLeft: "5px",
          },
          icon: "k-icon k-i-user",
          data: {
            path: "/Profile",
          },
          id: 3,
        },
        {
          text: this.infoMessage,
          cssClass: this.infoClass,
          cssStyle: {
            borderTop: "1px solid red",
            paddingBottom: "10px",
            paddingTop: "10px",
            paddingLeft: "5px",
          },
          icon: "k-icon k-i-info",
          data: {
            path: "/Info",
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
      const themeName =
        this.currentTheme === "kendo-theme-default"
          ? "default"
          : this.currentTheme === "kendo-theme-bootstrap"
          ? "bootstrap"
          : "material";
      this.teamClass =
        menuItemID === 1
          ? themeName + " k-state-selected"
          : themeName;
      this.dashboardClass =
        menuItemID === 2
          ? themeName + " k-state-selected"
          : themeName;
      this.profileClass =
        menuItemID === 3
          ? themeName + " k-state-selected"
          : themeName;
      this.infoClass =
        menuItemID === 4
          ? themeName + " k-state-selected"
          : themeName;
    },
  },
};
</script>
<style scoped>
</style>