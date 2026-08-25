<template>
  <main class="login-page">
    <section class="login-card" aria-labelledby="login-title">
      <span class="brand-mark">CW</span>
      <h1 id="login-title">Sign in to Coffee Warehouse</h1>
      <p>Use your operations account to access warehouse planning and records.</p>
      <label>Email<input v-model="email" type="email" autocomplete="email" placeholder="you@coffeewarehouse.example" /></label>
      <label>Password<input v-model="password" type="password" autocomplete="current-password" placeholder="Enter your password" /></label>
      <router-link class="forgot-password" to="/help">Forgot password?</router-link>
      <router-link class="k-button k-button-solid k-button-solid-primary login-submit" to="/">Sign in</router-link>
      <p class="sso-divider"><span>or continue with</span></p>
      <button class="k-button k-button-solid k-button-solid-base" type="button">Company SSO</button>
    </section>
  </main>
</template>
<script>
export default { data() { return { email: "", password: "" }; } };
</script>
