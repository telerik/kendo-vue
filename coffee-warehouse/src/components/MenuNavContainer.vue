<template>
  <kendo-menu :items="items" @select="onSelect" :vertical="true" />
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
    this.$router.push(this.items[0].data);
    this.setSelectedState(
      this.selectedMenuItem,
      this.currentTheme.toLowerCase()
    );
  },
  inject: {
    kendoLocalizationService: { default: null },
  },
  watch: {
    currentTheme(currentTheme) {
      this.setSelectedState(this.selectedMenuItem, currentTheme.toLowerCase());
    },
  },
  data() {
    return {
      selectedMenuItem: 1,
      teamClass: "",
      dashboardClass: "",
      profileClass: "",
      infoClass: "",
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
            path: "/Team",
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
    setSelectedState(id, theme) {
      if (id === 1) {
        this.teamClass = theme + " k-state-selected";
        this.dashboardClass = theme;
        this.profileClass = theme;
        this.infoClass = theme;
        this.selectedMenuItem = id;
      } else if (id === 2) {
        this.teamClass = theme;
        this.dashboardClass = theme + " k-state-selected";
        this.profileClass = theme;
        this.infoClass = theme;
        this.selectedMenuItem = id;
      } else if (id === 3) {
        this.teamClass = theme;
        this.dashboardClass = theme;
        this.profileClass = theme + " k-state-selected";
        this.infoClass = theme;
        this.selectedMenuItem = id;
      } else if (id === 4) {
        this.teamClass = theme;
        this.dashboardClass = theme;
        this.profileClass = theme;
        this.infoClass = theme + " k-state-selected";
        this.selectedMenuItem = id;
      }
    },
    onSelect(e) {
      this.$router.push(e.item.data);
      this.setSelectedState(e.item.id, this.currentTheme.toLowerCase());
    },
  },
};
</script>
<style scoped>
</style>