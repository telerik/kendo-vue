---
title: Direction
description: "Set the direction of the KendoVue Animations in Vue projects."
slug: direction_animation
position: 8
---

# Direction

Except for the Fade Animation, the Animations provide a set of the predefined directions which allow you to control their entering and exiting effects.

> The Fade Animation does not feature a configurable direction because it represents a transition in the opacity of the element.

To define the direction of the entering and exiting animations, use the `direction` property of each Animation type.
- [`ExpandDirection`]({% slug api_animation_expanddirection %})
- [`PushDirection`]({% slug api_animation_pushdirection %})
- [`RevealDirection`]({% slug api_animation_revealdirection %})
- [`SlideDirection`]({% slug api_animation_slidedirection %})

## Expand

The Expand Animation supports the following predefined directions:
- (Default) `vertical`&mdash;Expands the content from center to top and bottom, and vice-versa.
- `horizontal`&mdash;Expands the content from center to left and right, and vice-versa.

{% meta height:250 %}
{% embed_file direction/expand/main.vue preview %}
{% embed_file direction/expand/main.js %}
{% embed_file direction/expand/styles.css %}
{% endmeta %}

## Push

The Push Animation supports the following predefined directions:
- (Default) `right`&mdash;Pushes the content from left to right.
- `up`&mdash;Pushes the content from bottom to top.
- `down`&mdash;Pushes the content from top to bottom.
- `left`&mdash;Pushes the content from right to left.

{% meta height:300 %}
{% embed_file direction/push/main.vue preview %}
{% embed_file direction/push/main.js %}
{% embed_file direction/push/styles.css %}
{% endmeta %}

## Reveal

The Reveal Animation supports the following predefined directions:
- (Default) `vertical`&mdash;Reveals the height of the content.
- `horizontal`&mdash;Reveals the width of the content.

{% meta height:250 %}
{% embed_file direction/reveal/main.vue preview %}
{% embed_file direction/reveal/main.js %}
{% embed_file direction/reveal/styles.css %}
{% endmeta %}

## Slide

The Slide Animation supports the following predefined directions:
- (Default) `down`&mdash;Slides the content from top to bottom, and vice-versa.
- `up`&mdash;Slides the content from bottom to top, and vice-versa.
- `left`&mdash;Slides the content from right to left, and vice-versa.
- `right`&mdash;Slides the content from left to right, and vice-versa.

{% meta height:300 %}
{% embed_file direction/slide/main.vue preview %}
{% embed_file direction/slide/main.js %}
{% embed_file direction/slide/styles.css %}
{% endmeta %}

## Zoom

The Zoom Animation supports the following predefined directions:
- (Default) `in`&mdash;Zooms the content from the outside to the inside.
- `out`&mdash;Zooms the content from the inside to the outside.

{% meta height:250 %}
{% embed_file direction/zoom/main.vue preview %}
{% embed_file direction/zoom/main.js %}
{% embed_file direction/zoom/styles.css %}
{% endmeta %}

## Suggested Links

* [Basic Configuration]({% slug configuration_animation %})
* [API Reference of the Animation Package]({% slug api_animation_animationprops %})
