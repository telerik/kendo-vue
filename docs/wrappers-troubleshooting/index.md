---
title: Troubleshooting
page_title: Troubleshooting - Kendo UI for Vue Wrappers
description: "Learn about the issues that may occur when using the Kendo UI for Vue Wrappers."
slug: troubleshooting_newsite
position: 960
category: troubleshooting
---

# Troubleshooting

This article provides solutions for issues you might encounter while working with the Kendo UI suite for Vue.

## Browsers Support

### I would like to enable IE 11 support for my Vue app

**Cause**

Internet Explorer 11 does not offer support for ECMAScript 2015 (ES 6). Therefore, it could not load properly any ES 6 modules.

**Solution**

You will need to install the `babel-polyfill` package:

```sh
npm install --save "babel-polyfill"
```

And import in the Vue app:
```js
import 'babel-polyfill'
```

## Vue Specific Syntax

### How should I attach the event handlers for the widgets. Using kebab-case does not work e.g.: v-on:data-bound

**Cause**

The Vue framework imposes a [limitation on the custom event emitted in Vue](https://github.com/vuejs/vue/issues/4688). 

**Solution**

Lower case should be used instead:

```html
<kendo-grid :data-source="localDataSource"
            v-on:databound="onDataBound">
</kendo-grid>
```

or:

```html
<kendo-grid :data-source="localDataSource"
            @databound="onDataBound">
</kendo-grid>
```

## Suggested Links

* [Kendo UI for Vue Configuration Basics](slug:configuration_wrappers_vue)
* [Using CDN for Kendo UI for Vue](slug:using_cdn)
* [Model Binding in Kendo UI for Vue](slug:modelbinding_wrappers_vue)
* [Kendo UI Components for Vue](https://www.telerik.com/kendo-vue-ui/components/)
