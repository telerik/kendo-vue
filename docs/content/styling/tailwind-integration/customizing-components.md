---
title: Customizing Components
description: 'Learn how to customize Telerik and Kendo UI Themes with Tailwind CSS in a Kendo UI for Vue project.'
slug: tailwind_customization
position: 20
---

# Customizing Components

This article demonstrates how to integrate Tailwind CSS with the Kendo UI Themes, showcasing the seamless use of utility classes alongside KendoReact components for a consistent and customizable design system.

<iframe src="https://telerik.github.io/kendo-vue/kendo-vue-tailwind/"  width="100%" height="720px" style="border: 1px solid rgba(0, 0, 0, 0.12);"></iframe>

The source code of the application is located in [this GitHub repository](https://github.com/telerik/kendo-vue/tree/master/kendo-vue-tailwind).

> [Open the sample in a new tab](https://telerik.github.io/kendo-vue/kendo-vue-tailwind/) to explore its responsive design, built with Tailwind CSS utility classes.

## Customizing Kendo UI for Vue Components with Tailwind CSS

Since Kendo UI for Vue components do not natively utilize Tailwind CSS utility classes in their markup, you cannot style them directly using Tailwind CSS class names. Instead, you can customize their visual appearance by overriding the corresponding Kendo UI theme variables with default Tailwind CSS variables or with your own custom variables.

```css
/* Custom variables */
--custom-tw-green: #42b883;
--custom-tw-lightgreen: #00884b;
```

```css
/* Override Kendo UI Theme variables */
:root {
  --kendo-color-primary: var(--custom-tw-green);
  --kendo-color-info: var(--custom-tw-lightgreen);
}

/* Customize kendo component styles */
.k-card.header-card {
  border: var(--custom-tw-green) solid 1px;
}

.action-button {
  --kendo-color-primary: var(--custom-tw-lightgreen);
}

```

## Suggested Links

- [Getting Started with Kendo UI for Vue and Tailwind CSS](slug:tailwind_getting_started)
- [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
- [Get Started with Telerik and Kendo UI themes](https://www.telerik.com/design-system/docs/themes/get-started/introduction/)
