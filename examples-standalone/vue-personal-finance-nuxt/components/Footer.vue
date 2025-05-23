<template>
  <div :style="{ color: 'var(--kendo-color-subtle)', marginLeft: '80px' }" class="k-py-6.5 k-px-15 k-bg-surface-alt footer">
    <div class="k-p-2 k-gap-2">
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
          :style="{ width: '25px', height: '25px' }"
        />
        <span
          class="footerText"
          :style="{ fontSize: '14px', fontWeight: 400, letterSpacing: 'wider' }"
          >Get the Source Code</span
        >
      </a>
    </div>
    <div class="k-p-2 k-gap-0">
      <div :style="{ fontSize: '14px', fontWeight: 400, letterSpacing: 0 }">
        Copyright © 2025 Progress Software. All rights reserved.
      </div>
    </div>
  </div>
</template>
