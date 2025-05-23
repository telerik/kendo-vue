<template>
  <header
    class="k-d-flex k-px-lg-15 k-px-md-15 k-px-sm-5 k-px-xs-5 k-py-6.5 k-gap-4 k-flex-wrap k-justify-content-between k-align-items-center"
  >
    <div
      class="k-d-flex-row k-shrink-0 k-flex-basis-0 k-flex-grow k-gap-2 k-align-items-center"
    >
      <Avatar :size="'large'" rounded="full">
        <img
          src="/images/avatar-image.jpeg"
          width="65"
          :style="{ verticalAlign: 'top' }"
        />
      </Avatar>
      <div
        class="k-d-flex k-d-flex-col k-flex-nowrap k-gap-3 k-align-items-start"
      >
        <span
          v-if="personalInfo"
          class="k-font-size-xl !k-m-0 k-font-bold k-white-space-nowrap k-h-6 k-align-middle"
        >
          Hi, {{ personalInfo.name }}
        </span>
        <span class="k-font-size-md !k-m-0 k-font-medium k-white-space-nowrap">
          Welcome back
        </span>
      </div>
    </div>
    <div class="k-flex-basis-0 k-shrink-0 k-flex-grow">
      <div class="k-d-flex">
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
      class="k-d-flex k-flex-basis-0 k-shrink-0 k-flex-grow k-justify-content-end k-justify-content-sm-start k-gap-4"
    >
      <Button
        :size="'small'"
        :fill-mode="'solid'"
        :theme-color="'primary'"
        :rounded="'large'"
        @click="navigateTo(6, 'ai-assistant')"
      >
        AI ASSISTANT
      </Button>
      <DropDownList
        :style="{
          backgroundColor: '#F5F5F5',
          width: '105px',
          border: '1px solid var(--kendo-color-opacity-border, var(--kendo-color-on-app-surface)A8)',
          fontSize: '16px',
          fontWeight: 400,
          color: '#000000',
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
import { searchIcon } from "@progress/kendo-svg-icons";

const personalInfo = ref(null);
const emit = defineEmits(["navigate", "currencyChange"]);
const searchValue = ref("");
const currency = ref("USD");

const searchItems = [
  { itemIndex: 2, text: "Transactions Overview", route: "/" },
  { itemIndex: 3, text: "Transactions Details", route: "/transactions" },
  { itemIndex: 4, text: "Investments", route: "/investments" },
  { itemIndex: 5, text: "Analytics", route: "/analytics" },
];

onBeforeMount(() => {
    personalInfo.value = checkLocalStorageData("personalInfo");
});

const onSearchChange = (event) => {
  searchValue.value = event.target.value;

  const dataItem = searchItems.find((item) => item.text === event.value);

  if (dataItem) {
    emit("navigate", {
      itemIndex: dataItem.itemIndex,
      itemTarget: dataItem.route,
    });
  }
};

const navigateTo = (itemIndex, itemTarget) => {
  emit("navigate", { itemIndex, itemTarget });
};

const onCurrencyChange = (event) => {
  currency.value = event.target.value;
  emit("currencyChange", event.target.value);
};
</script>
