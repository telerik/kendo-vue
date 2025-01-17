<template>
  <div class="header header-bg">
    <div class="nav-container">
      <div class="title">
        <h1>{{ warehouseMessage }}</h1>
        <span class="vl"></span>
        <h2>{{ teamMessage }}</h2>
      </div>
      <DropDownList :style="{ width: '230px', height: '30px' }" class="localeDropDownList" :value="currentLocale"
        :text-field="'language'" @change="localeChange" :data-items="locales">
      </DropDownList>
      <DropDownList :data-items="themes" :text-field="'text'" :popup-settings="themesPopupSettings"
        :value-render="myDropDownValueTemplate" class="ddl-theme" @change="onThemeChange">
        <template v-slot:myDropDownValueTemplate="{}">
          <div style="margin: auto 8px auto 10px">
            <span class="k-icon k-i-palette"> </span>
          </div>
        </template>
      </DropDownList>
      <Avatar :rounded="'full'" :type="'image'" :style="{ width: '40px', height: '40px', 'flex-basis': '40px' }">
        <img src="../assets/images/user.jpg" />
      </Avatar>
    </div>
  </div>
</template>
<script>
import { Avatar } from "@progress/kendo-vue-layout";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { provideLocalizationService } from "@progress/kendo-vue-intl";

export default {
  components: {
    Avatar,
    DropDownList,
  },
  emits: {
    localeChange: null,
    themeChange: null,
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
      const linkTag = document.getElementById("theme-link");
      linkTag.setAttribute(
        "href",
        `${process.env.BASE_URL}/static/themes/kendo-theme-${this.theme}/all.css`
      );
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
      theme: "default",
      themes: [
        {
          href: "default",
          text: "Default",
        },
        {
          href: "bootstrap",
          text: "Bootstrap",
        },
        {
          href: "material",
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
  min-width: 60px;
}

.localeDropDownList {
  min-width: 100px;
  margin: 10px;
}

.k-dropdownlist {
  min-height: 30px;
}
</style>