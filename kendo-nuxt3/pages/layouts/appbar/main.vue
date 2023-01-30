<template>
  <AppBar>
      <AppBarSection>
        <KButton :icon="'menu'" :fill-mode="'flat'" /> 
      </AppBarSection>

      <AppBarSpacer
        :width="4"
      />

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
        <button class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
          <BadgeContainer 
              :shape="'dot'"
              :themeColor="'info'"
              :size="'small'"
              :position="'inside'">
            <span class="k-icon k-i-bell" />
          </BadgeContainer>
        </button>
      </AppBarSection>

      <AppBarSection>
        <span class="k-appbar-separator" />
      </AppBarSection>

      <AppBarSection>
        <Avatar type="image">
          <img :src="kendokaAvatar" />
        </Avatar>
      </AppBarSection>
    </AppBar>
</template>
<style>
  .title {
      font-size: 18px;
      margin: 0;
  }
  ul {
      font-size: 14px;
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
  }
  li {
      margin: 0 10px;
  }
  li:hover {
      cursor: pointer;
      color: #84cef1;
  }
  .k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
      padding: 0;
  }
  .k-badge-container {
      margin-right: 8px;
  }
</style>
<script>
import {
AppBar,
AppBarSection,
AppBarSpacer,
Avatar,
} from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import { BadgeContainer } from "@progress/kendo-vue-indicators";
let kendokaAvatar =
"https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png";


export default {
  components: {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Avatar,
    BadgeContainer,
    KButton: Button
  },
  data() {
    return {
      kendokaAvatar
    };
  }
};

</script>

