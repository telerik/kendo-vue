<template>
  <link rel="stylesheet" :href="theme" />
  <div class="header header-bg">
    <div class="nav-container">
      <div class="title">
        <h1>{{ warehouseMessage }}</h1>
        <span class="vl"></span>
        <h2>{{ teamMessage }}</h2>
      </div>
      <dropdownlist
        class="localeDropDownList"
        :value="currentLocale"
        :text-field="'language'"
        @change="localeChange"
        :data-items="locales"
      >
      </dropdownlist>
      <dropdownlist
        :data-items="themes"
        :text-field="'text'"
        :popup-settings="themesPopupSettings"
        :value-render="myDropDownValueTemplate"
        class="ddl-theme"
        @change="onThemeChange"
      >
        <template v-slot:myDropDownValueTemplate="{}">
          <div style="margin: auto 8px auto 10px">
            <span class="k-icon k-i-palette"> </span>
          </div>
        </template>
      </dropdownlist>
      <avatar
        :shape="'circle'"
        :type="'image'"
        :style="{ width: '40px', height: '40px', 'flex-basis': '40px' }"
      >
        <img src="../assets/images/user.jpg" />
      </avatar>
    </div>
  </div>
</template>
<script>
import { Avatar } from "@progress/kendo-vue-layout";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { provideLocalizationService } from "@progress/kendo-vue-intl";

export default {
  components: {
    avatar: Avatar,
    dropdownlist: DropDownList,
  },
  emits: {
    localeChange: null,
    themeChange: null
  },
  inject: {
    kendoLocalizationService: { default: null },
  },
  computed: {
    warehouseMessage() {
      return provideLocalizationService(this).toLanguageString(
        "warehouse",
        "Coffee Warehouse"
      );
    },
    teamMessage() {
      return provideLocalizationService(this).toLanguageString("team", "Team");
    },
  },
  methods: {
    onThemeChange(e) {
      this.theme = e.value.href;
      this.$emit("themeChange", e.value.text);
    },
    localeChange(e) {
      this.currentLocale = e.target.value;
      this.$emit("localeChange", this.currentLocale);
    },
  },
  created() {
    this.currentLocale = this.locales[0];
  },
  data() {
    return {
      theme:
        "https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css",

      themes: [
        {
          href: "https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css",
          text: "Default",
        },
        {
          href: "https://unpkg.com/@progress/kendo-theme-bootstrap@latest/dist/all.css",
          text: "Bootstrap",
        },
        {
          href: "https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css",
          text: "Material",
        },
      ],
      myDropDownValueTemplate: "myDropDownValueTemplate",
      themesPopupSettings: {
        width: "150px",
      },
      currentLocale: null,
      locales: [
        {
          language: "English",
          locale: "en",
        },
        {
          language: "French",
          locale: "fr",
        },
        {
          language: "Spanish",
          locale: "es",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ddl-theme {
  width: 60px;
}

.k-widget.k-dropdown{
  min-height: 30px;
}
</style>