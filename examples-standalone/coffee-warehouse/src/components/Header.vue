<template>
  <header class="app-header">
    <button class="menu-toggle" type="button" aria-label="Open navigation menu" @click="$emit('toggle-navigation')">
      &#9776;
    </button>
    <router-link class="brand" to="/">
      <span class="brand-mark">CW</span>
      <span>Coffee Warehouse</span>
    </router-link>
    <div class="header-actions">
      <input class="global-search" type="search" aria-label="Search warehouse records" placeholder="Search orders, inventory, suppliers" />
      <router-link class="notification-link" to="/notifications" aria-label="Notifications: 3 unread">
        Notifications <span class="notification-count">3</span>
      </router-link>
      <router-link class="profile-link" to="/profile">
        <Avatar :rounded="'full'" :type="'image'" :style="{ width: '32px', height: '32px' }">
          <img src="../assets/images/user.jpg" alt="Peter Douglas" />
        </Avatar>
        <span>Peter Douglas</span>
      </router-link>
      <span class="locale">EN &#9662;</span>
    </div>
  </header>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";

export default {
  components: { Avatar },
  emits: ["toggle-navigation"],
};
</script>
