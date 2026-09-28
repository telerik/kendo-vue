<template>
  <LocalizationProvider :language="localizationLanguage">
    <IntlProvider :locale="locale">
      <div class="app-shell">
        <Header ref="header" :navigation-open="navigationOpen" :current-locale="localizationLanguage" @toggle-navigation="toggleNavigation" @locale-change="onLocaleChange" />
        <div class="app-body">
          <MenuNavContainer ref="sidebar" :open="navigationOpen" @navigate="closeNavigation" />
          <button v-if="navigationOpen" class="nav-backdrop" type="button" aria-label="Close navigation menu" tabindex="-1" @click="closeNavigation"></button>
          <main class="app-content">
            <router-view />
          </main>
        </div>
      </div>
    </IntlProvider>
  </LocalizationProvider>
</template>

<script>
import Header from "./components/Header.vue";
import MenuNavContainer from "./components/MenuNavContainer.vue";
import { enComponentMessages, enCustomMessages } from "./messages/en-US";
import { esComponentMessages, esCustomMessages } from "./messages/es";
import { frComponentMessages, frCustomMessages } from "./messages/fr";
import { load, loadMessages, LocalizationProvider, IntlProvider } from "@progress/kendo-vue-intl";
import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";
import esNumbers from "cldr-numbers-full/main/es/numbers.json";
import esCurrencies from "cldr-numbers-full/main/es/currencies.json";
import esCaGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import esDateFields from "cldr-dates-full/main/es/dateFields.json";
import esTimeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";
import frNumbers from "cldr-numbers-full/main/fr/numbers.json";
import frCurrencies from "cldr-numbers-full/main/fr/currencies.json";
import frCaGregorian from "cldr-dates-full/main/fr/ca-gregorian.json";
import frDateFields from "cldr-dates-full/main/fr/dateFields.json";
import frTimeZoneNames from "cldr-dates-full/main/fr/timeZoneNames.json";

load(likelySubtags, currencyData, weekData, esNumbers, esCurrencies, esCaGregorian, esDateFields, esTimeZoneNames, frNumbers, frCurrencies, frCaGregorian, frDateFields, frTimeZoneNames);
for (const [language, custom, component] of [
  ["English", enCustomMessages, enComponentMessages],
  ["Spanish", esCustomMessages, esComponentMessages],
  ["French", frCustomMessages, frComponentMessages],
]) {
  loadMessages(custom, language);
  loadMessages(component, language);
}

export default {
  components: { Header, MenuNavContainer, LocalizationProvider, IntlProvider },
  data() {
    return { navigationOpen: false, navigationTrigger: null, localizationLanguage: "English" };
  },
  computed: {
    locale() {
      return { English: "en", French: "fr", Spanish: "es" }[this.localizationLanguage];
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleNavigationKeydown);
    window.addEventListener("resize", this.handleViewportChange);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleNavigationKeydown);
    window.removeEventListener("resize", this.handleViewportChange);
    document.body.style.overflow = "";
  },
  watch: {
    navigationOpen(open) {
      document.body.style.overflow = open && this.isMobileViewport() ? "hidden" : "";
      if (open) {
        this.$nextTick(() => this.$refs.sidebar?.focusFirstItem());
      }
    },
  },
  methods: {
    onLocaleChange(language) {
      this.localizationLanguage = language;
    },
    isMobileViewport() {
      return window.innerWidth < 768;
    },
    handleViewportChange() {
      if (!this.isMobileViewport() && this.navigationOpen) {
        this.navigationOpen = false;
      }
    },
    toggleNavigation() {
      if (this.navigationOpen) {
        this.closeNavigation();
        return;
      }
      this.navigationTrigger = document.activeElement;
      this.navigationOpen = true;
    },
    closeNavigation() {
      if (!this.navigationOpen) return;
      this.navigationOpen = false;
      this.$nextTick(() => {
        if (this.navigationTrigger?.isConnected) {
          this.navigationTrigger.focus();
        } else {
          this.$refs.header?.focusMenu();
        }
        this.navigationTrigger = null;
      });
    },
    handleNavigationKeydown(event) {
      if (!this.navigationOpen || !this.isMobileViewport()) return;
      if (event.key === "Escape") {
        event.preventDefault();
        this.closeNavigation();
        return;
      }
      if (event.key !== "Tab") return;
      const links = Array.from(this.$refs.sidebar?.$el.querySelectorAll(".nav-item") || []);
      if (!links.length) return;
      const first = links[0];
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
  },
};
</script>
