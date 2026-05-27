---
title: Customization
description: "Customize the appearance of the Kendo Ui for Vue SvgIcon component in Vue projects."
slug: customization_svgicon
position: 40
---

# Custom SVG Icons

The SvgIcon component allows you to display custom SVG icons (not available in the Kendo UI for Vue default icons set). You could provide the inner SVG elements as [`icons`]({% slug api_common_svgiconprops %}#icon) to the SvgIcon. SVG element has default viewBox set to `0 0 24 24`. This can be customized with the [`viewBox`]({% slug api_common_svgiconprops %}#viewBox) property.

> Custom SVG icons also allow setting all predefined appearance options such as different sizes, theme colors and flipping.

{% meta height:160 %}
{% embed_file svg-icons/customization/custom-icons/main.vue preview %}
{% embed_file svg-icons/customization/custom-icons/main.js %}
{% endmeta %}

## Built-in SVG Icons customization

You can also customize the SVG icons which are already embedded into the components by replacing the values of the desired icons in the returned `kendoIcons` collection.

```tsx
  kendoIcons: {
    type: 'svg',
    icons: {
      bold: customBold,
      'chevron-down': starIcon,
    },
  }
```

 In the example below you can see how to replace:
  - the arrow icons of the DropDownList components with an icon taken from the *@progress/kendo-svg-icons* package and
  - the Bold icon of the Editor's toolbar with a custom SVG object.

{% meta height:380 %}
{% embed_file svg-icons/customization/built-in-icons/main.vue preview %}
{% embed_file svg-icons/customization/built-in-icons/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the SVGIcon](slug:api_common_svgiconprops)
* [SVGIcon List](slug:svgicon_list)
