---
title: Appearance
description: "Style the appearance of the Kendo Vue Animations in Vue projects."
slug: appearance_animation
position: 11
---

# Appearance

The Animations enable you to use their default styling options or to set custom CSS classes both to all wrapper Animation elements and to all their child elements.

## Default CSS Classes

By default, the parent component renders a `k-animation-container` CSS class and the child component renders a `k-child-animation-container` CSS class. You can use these CSS classes to style the components without the need to specify separate CSS classes.

{% meta height:200 %}
{% embed_file appearance/default/main.vue preview %}
{% embed_file appearance/default/main.js %}
{% embed_file appearance/default/styles.css %}
{% endmeta %}

## Customizing the Styles

By using custom CSS classes, you can customize:
* [Parent components](#toc-decorating-the-parent)
* [Child elements](#toc-decorating-the-child)

### Decorating the Parent

To set a custom CSS class to the parent Animation component, use either:
* The `class` property, or
* The `style` property.

{% meta height:300 %}
{% embed_file appearance/parent/main.vue preview %}
{% embed_file appearance/parent/main.js %}
{% embed_file appearance/parent/styles.css %}
{% endmeta %}

### Decorating the Child

To set a custom CSS class to the child Animation element, use either:
* The `component-child-class-name` property

{% meta height:250 %}
{% embed_file appearance/child/main.vue preview %}
{% embed_file appearance/child/main.js %}
{% embed_file appearance/child/styles.css %}
{% endmeta %}

## Suggested Links

* [Basic Configuration]({% slug configuration_animation %})
* [API Reference of the Animation Package]({% slug api_animation_animationprops %})
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
