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
      <Avatar :rounded="'full'" :type="'image'" :style="{ width: '40px', height: '40px', 'flex-basis': '40px' }">
        <img src="../assets/images/user.jpg" alt="" />
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
    DropDownList
  },
  emits: {
    localeChange: null,
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
      year: '2025',
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
.localeDropDownList {
  min-width: 100px;
  margin: 10px;
}

.k-dropdownlist {
  min-height: 30px;
}
</style>