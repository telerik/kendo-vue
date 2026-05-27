---
title: Appearance
description: "Specify the appearance of the Kendo UI for Vue Native Skeleton component in Vue projects."
slug: appearance_skeleton
position: 3
---

# Appearance

The Skeleton component provides various predefined appearance options such as shapes and animations.

## Shape

The Skeleton allows you to set different shapes.

The available [`shape`]({% slug api_indicators_skeletonprops %}#toc-shape) values are:
* `circle`&mdash;Renders a circular Skeleton.
* `text`&mdash;Renders a line Skeleton.
* `rectangle`&mdash;Renders a rectangular Skeleton.

{% meta height:250 %}
{% embed_file skeleton/shape/main.vue preview %}
{% embed_file skeleton/shape/main.js %}
{% endmeta %}

## Animation

The Skeleton allows you to set different animation settings.

The available [`animation`]({% slug api_indicators_skeletonprops %}#toc-animation) keys are:
* `type`&mdash;Defines the type of the Skeleton animation.
  * `wave`&mdash;Shows a wave animation effect.
  * `pulse`&mdash;Shows a pulse animation effect.

To disable the animation, set the property to `false`.

{% meta height:390 %}
{% embed_file skeleton/animation/main.vue preview %}
{% embed_file skeleton/animation/main.js %}
{% endmeta %}

## Suggested Links

* [API Reference of the SkeletonProps]({% slug api_indicators_skeletonprops %})
* [Creating Custom Styles with ThemeBuilder]({% slug themebuilder %})
