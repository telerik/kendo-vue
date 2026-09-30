<template>
  <main class="login-page">
    <Card class="login-card">
      <h1>Welcome back</h1>
      <p>Sign in to manage your accounts securely.</p>
      <label>Email address <input class="k-input k-input-md" type="email" autocomplete="username" /></label>
      <label>Password <input class="k-input k-input-md" type="password" autocomplete="current-password" /></label>
      <label class="remember"><input type="checkbox" /> Remember this device</label>
      <Button theme-color="primary">Sign in</Button>
      <Button fill-mode="flat">Forgot password?</Button>
    </Card>
  </main>
</template>

<script setup>
import { Button } from "@progress/kendo-vue-buttons";
import { Card } from "@progress/kendo-vue-layout";
</script>

<style scoped>
.login-page { display: grid; min-height: 70vh; place-items: center; padding: var(--kendo-spacing-5); }
.login-card { display: grid; width: min(100%, 420px); gap: var(--kendo-spacing-4); padding: var(--kendo-spacing-8); border-radius: var(--kendo-border-radius-xl); }
h1, p { margin: 0; }
p { color: var(--kendo-color-subtle); }
label { display: grid; gap: var(--kendo-spacing-2); font-weight: var(--kendo-font-weight-medium); }
.remember { grid-template-columns: auto 1fr; align-items: center; }
</style>
