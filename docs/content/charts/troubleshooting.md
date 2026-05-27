---
title: Troubleshooting
description: "Learn about the issues that may occur when using the Kendo UI for Vue Native Charts in Vue projects."
slug: troubleshooting_charts
position: 125
---

# Troubleshooting

This article provides solutions for issues you might encounter while working with the Kendo UI for Vue Native Charts.

## HammerJS Dependency

> Applies to @progress/kendo-vue-charts version 5.0.0 or older. Starting from version 5.1.0, HammerJS is no longer required.

When I try to use the Chart component, a Hammer.js-related error occurs

The `Chart` component requires Hammer.js to be installed as a [dependency]({% slug overview_charts %}#dependencies). The error occurs because Hammer.js is not loaded.

**Solution**

Install the [Hammer.js](https://www.npmjs.com/package/hammerjs) package and import it by using the `import 'hammerjs';` command.

## Suggested Links

* [Get Started with the Chart]({% slug overview_charts %})
