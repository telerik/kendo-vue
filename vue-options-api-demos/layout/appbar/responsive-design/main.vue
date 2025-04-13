<template>
  <AppBar>
    <AppBarSection>
      <KButton :svg-icon="menuIcon" :fill-mode="'flat'" />
    </AppBarSection>

    <AppBarSpacer :width="4" />

    <AppBarSection>
      <h1 class="title">Kendo UI for Vue</h1>
    </AppBarSection>

    <AppBarSpacer :width="32" />

    <AppBarSection>
      <ul>
        <li>
          <span>What's New</span>
        </li>
        <li>
          <span>About</span>
        </li>
        <li>
          <span>Contacts</span>
        </li>
      </ul>
    </AppBarSection>

    <AppBarSpacer />

    <AppBarSection class="actions">
      <KButton :fill-mode="'flat'">
        <BadgeContainer
          :shape="'dot'"
          :themeColor="'info'"
          :size="'small'"
          :position="'inside'"
        >
          <SvgIcon :icon="bellIcon" />
        </BadgeContainer>
      </KButton>
    </AppBarSection>

    <AppBarSection>
      <span class="k-appbar-separator" />
    </AppBarSection>
    <AppBarSection>
      <KButton :fill-mode="'flat'">
        <SvgIcon :icon="menuIcon" />
      </KButton>
    </AppBarSection>

    <AppBarSection>
      <Avatar type="image">
        <img :src="kendokaAvatar" :alt="'Avatar Image'" />
      </Avatar>
    </AppBarSection>
  </AppBar>
</template>
<script>
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import { BadgeContainer } from "@progress/kendo-vue-indicators";
import { SvgIcon } from "@progress/kendo-vue-common";
import { menuIcon, bellIcon } from "@progress/kendo-svg-icons";

const kendokaAvatar = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/suite/kendoka-vue.webp';


export default {
  components: {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Avatar,
    BadgeContainer,
    KButton: Button,
    SvgIcon,
  },
  data() {
    return {
      kendokaAvatar,
      menuIcon,
      bellIcon,
    };
  },
};
</script>

<style>
body {
  background: #dfdfdf;
}

.title {
  font-size: 18px;
  margin: 0;
}

.k-badge-container {
  margin-right: 8px;
}

ul {
  font-size: 14px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  margin: 0 9px;
}

li:hover {
  cursor: pointer;
  color: #84cef1;
}

.k-appbar-section {
  display: flex;
}

.k-button.k-button-md.k-rounded-md.k-button-solid.k-button-solid-base {
  padding: 0 8px;
}

.content li {
  margin: 0;
  padding: 6px 5px;
}

.content ul {
  display: block;
}

.content {
  padding: 4px 8px;
}

@media only screen and (max-width: 600px) {
  .appbar-items,
  .user-actions,
  .k-avatar,
  .k-appbar-separator {
    display: none;
  }

  .overflow-button {
    display: block;
  }

  .content ul li:last-child {
    display: block;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .appbar-items,
  .user-actions .k-badge-container,
  .k-avatar,
  .k-appbar-separator {
    display: none;
  }

  .overflow-button {
    display: block;
  }

  .content ul li:last-child {
    display: none;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .appbar-items,
  .user-actions .k-badge-container,
  .k-appbar-separator,
  .k-avatar {
    display: block;
  }

  .overflow-button {
    display: none;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}
</style>
