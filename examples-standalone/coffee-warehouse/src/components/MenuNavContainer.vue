<template>
  <aside class="sidebar" :class="{ 'sidebar-open': open }">
    <nav aria-label="Primary navigation">
      <p class="nav-label">Warehouse</p>
      <router-link v-for="item in warehouseItems" :key="item.to" :to="item.to" @click="$emit('navigate')">{{ item.label }}</router-link>
      <p class="nav-label">Operations</p>
      <router-link v-for="item in operationItems" :key="item.to" :to="item.to" @click="$emit('navigate')">{{ item.label }}</router-link>
      <p class="nav-label">Account</p>
      <router-link v-for="item in accountItems" :key="item.to" :to="item.to" @click="$emit('navigate')">{{ item.label }}</router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  props: { open: Boolean },
  emits: ["navigate"],
  data() {
    return {
      warehouseItems: [
        { label: "Dashboard", to: "/" },
        { label: "Inventory", to: "/inventory" },
        { label: "Purchase orders", to: "/purchase-orders" },
        { label: "Sales orders", to: "/sales-orders" },
        { label: "Suppliers", to: "/suppliers" },
      ],
      operationItems: [
        { label: "Planning", to: "/planning" },
        { label: "Warehouse operations", to: "/operations" },
        { label: "Assets", to: "/assets" },
        { label: "Manufacturing", to: "/manufacturing" },
        { label: "Financial reporting", to: "/finance" },
      ],
      accountItems: [
        { label: "Notifications", to: "/notifications" },
        { label: "Profile", to: "/profile" },
        { label: "Settings", to: "/settings" },
        { label: "Help & support", to: "/help" },
      ],
    };
  },
};
</script>
