---
title: Special Scenarios
description: "Learn how to configure the icons provided by the Kendo UI for Vue Native suite or completely overwrite them."
slug: icon_settings
position: 5
---

# Kendo UI for Vue Native Icon Configuration

In real-world scenarios, not only the color, size, and type of icon used in the application need to be changed or dynamically updated at runtime. In this article, you will find more details about how to replace the built-in icons of the Kendo UI for Vue Native suite or replace them with custom ones.


## Changing the Built-In Icons in the Kendo UI for Vue Native Components

Some scenarios require the customization of the default Kendo UI for Vue components. When you need to change the icons inside the different components, this can be achieved by [providing](https://vuejs.org/guide/components/provide-inject.html#provide-inject) a custom kendoIcons definition as follows:

```jsx
provide() {
  return {
    kendoIcons: {
      type: 'svg',
      icons: {
        bold: starIcon,
        'chevron-down': starIcon,
      },
    },
  };
}
```

The following example uses the above definition and demonstrates how to change the default icon in the DropDownList component and also the icon of the `bold` button inside the Editor component.

{% meta height:640 %}
{% embed_file icon-config/change-icon/main.vue preview %}
{% embed_file icon-config/change-icon/main.js %}
{% endmeta %}

To identify the name of the icon you want to update, you can inspect the component and find a CSS class with a `k-iconname` structure(This inspection should be done before providing the new `kendoIcons` definition). Once the proper class is identified, the property name you need to pass in `kendoIcons` is the text after the `k-` prefix. 

## Suggested Links

* [Icon Homepage](https://www.telerik.com/kendo-vue-ui/vue-icons)
* [SVGIcon Homepage](https://www.telerik.com/kendo-vue-ui/svgicon)
* [API Reference of the Icon Component](slug:api_common_fonticonprops)
* [API Reference of the SVGIcon Component](slug:api_common_svgiconprops)
