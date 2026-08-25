<template>
  <div :style="{ color: 'var(--kendo-color-subtle)', marginLeft: '80px' }" class="footer">
    <div class="footer-source">
      <a
        class="k-link k-avatar k-primary"
        href="https://github.com/telerik/kendo-vue/tree/master/examples-standalone/vue-personal-finance-nuxt"
        :style="{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'white',
        }"
      >
        <img
          src="/images/github-logo.png"
          alt=""
          :style="{ width: '25px', height: '25px' }"
        />
        <span
          class="footerText"
          :style="{ fontSize: '14px', fontWeight: 400, letterSpacing: 'wider' }"
          >Get the Source Code</span
        >
      </a>
    </div>
    <div class="footer-copyright">
      <div :style="{ fontSize: '14px', fontWeight: 400, letterSpacing: 0 }">
        Copyright © 2025 Progress Software. All rights reserved.
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer { padding-block: calc(6.5 * var(--kendo-spacing-base)); padding-inline: var(--kendo-spacing-15); background-color: var(--kendo-color-surface-alt); }
.footer-source { padding: var(--kendo-spacing-2); gap: var(--kendo-spacing-2); }
.footer-copyright { padding: var(--kendo-spacing-2); gap: var(--kendo-spacing-0); }
</style>
