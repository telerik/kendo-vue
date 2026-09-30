<template>
  <header
    class="app-header"
  >
    <div
      class="profile-section"
    >
      <Avatar :size="'large'" rounded="full">
        <img
          src="/images/avatar-image.jpeg"
          alt=""
          width="65"
          :style="{ verticalAlign: 'top' }"
        />
      </Avatar>
      <div
        class="profile-greeting"
      >
        <span
          class="profile-name"
        >
          Hi, {{ personalInfo?.name || "Maria" }}
        </span>
        <span class="profile-welcome">
          Welcome back
        </span>
      </div>
    </div>
    <div class="search-section">
      <div class="search-control">
        <AutoComplete
          :style="{ width: '100%', minWidth: '215px', maxWidth: '360px' }"
          :size="'small'"
          :rounded="'large'"
          :fill-mode="'outline'"
          placeholder="Search pages..."
          :text-field="'text'"
          :data-item-key="'itemIndex'"
          :data-items="searchItems"
          @change="onSearchChange"
          :value="searchValue"
        />
      </div>
    </div>
    <div
      class="header-actions"
    >
      <Button
        :size="'small'"
        :fill-mode="'solid'"
        :theme-color="'primary'"
        :rounded="'large'"
        @click="navigateTo('ai-assistant')"
      >
        AI ASSISTANT
      </Button>
      <Button
        :fill-mode="'flat'"
        :svg-icon="bellIcon"
        aria-label="View notifications"
        title="View notifications"
        @click="navigateTo('notifications')"
      />
      <DropDownList
        :style="{
          backgroundColor: 'var(--kendo-color-base-subtle)',
          width: '105px',
          border: '1px solid var(--kendo-color-opacity-border, var(--kendo-color-on-app-surface)A8)',
          fontSize: '16px',
          fontWeight: 400,
          color: 'var(--kendo-color-on-app-surface)',
        }"
        rounded="large"
        :data-items="['USD', 'EUR']"
        :default-value="'USD'"
        :value="currency"
        @change="onCurrencyChange"
      />
    </div>
  </header>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { Avatar } from "@progress/kendo-vue-layout";
import { AutoComplete, DropDownList } from "@progress/kendo-vue-dropdowns";
import { Button } from "@progress/kendo-vue-buttons";
import { SvgIcon } from "@progress/kendo-vue-common";
import { checkLocalStorageData } from "@/data/localStorageUtils";
import { bellIcon } from "@progress/kendo-svg-icons";

const personalInfo = ref(null);
const emit = defineEmits(["navigate", "currencyChange"]);
const searchValue = ref("");
const currency = ref("USD");

const searchItems = [
  { text: "Dashboard", route: "/" },
{ text: "Account details", route: "/accounts/checking" },
{ text: "Transactions", route: "/transactions" },
{ text: "Cards", route: "/cards" },
{ text: "Statements", route: "/statements" },
  { text: "Transfer funds", route: "/transfers" },
  { text: "Budget planner", route: "/budgets" },
  { text: "Investments", route: "/investments" },
  { text: "Analytics", route: "/analytics" },
  { text: "Help & support", route: "/help" },
];

onBeforeMount(() => {
    personalInfo.value = checkLocalStorageData("personalInfo");
});

const onSearchChange = (event) => {
  searchValue.value = event.target.value;

  const dataItem = searchItems.find((item) => item.text === event.value);

  if (dataItem) {
    emit("navigate", {
      itemTarget: dataItem.route,
    });
  }
};

const navigateTo = (itemTarget) => {
  emit("navigate", { itemTarget: `/${itemTarget}` });
};

const onCurrencyChange = (event) => {
  currency.value = event.target.value;
  emit("currencyChange", event.target.value);
};
</script>
<style scoped>
.app-header { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: var(--kendo-spacing-4); padding-block: calc(6.5 * var(--kendo-spacing-base)); padding-inline: var(--kendo-spacing-5); }
.profile-section, .search-section, .header-actions { flex: 1 0 0; flex-shrink: 0; }
.profile-section { display: flex; flex-direction: row; align-items: center; gap: var(--kendo-spacing-2); }
.profile-greeting { display: flex; flex-direction: column; flex-wrap: nowrap; align-items: flex-start; gap: var(--kendo-spacing-3); }
.profile-name { height: var(--kendo-spacing-6); margin: 0; font-size: var(--kendo-font-size-xl); font-weight: var(--kendo-font-weight-bold); line-height: 1; vertical-align: middle; white-space: nowrap; }
.profile-welcome { margin: 0; font-size: var(--kendo-font-size-md); font-weight: var(--kendo-font-weight-medium); white-space: nowrap; }
.search-control, .header-actions { display: flex; }
.header-actions { justify-content: flex-end; gap: var(--kendo-spacing-4); }
@media (min-width: 576px) { .header-actions { justify-content: flex-start; } }
@media (min-width: 768px) { .app-header { padding-inline: var(--kendo-spacing-15); } }
@media (min-width: 992px) { .app-header { padding-inline: var(--kendo-spacing-15); } }
</style>
