---
title: Disabled Animations
description: "Enable or disable any of the KendoVue Animation components in Vue projects."
slug: disabledstate_animation
position: 4
---

# Disabled Animations

The Animations allow you to enable or disable their showing or hiding effect.

The control over the disabled animation state results in an instant element display or its disappearance. By default, the Expand, Push, Reveal and Slide animations apply the showing or hiding effect. To disable these effects, set the [`enter`]({% slug api_animation_animationprops %}#toc-enter) or, respectively, the [`exit`]({% slug api_animation_animationprops %}#toc-exit) property to `false`.

{% meta height:300 %}
{% embed_file disabled/main.vue preview %}
{% embed_file disabled/main.js %}
{% embed_file disabled/styles.css %}
{% endmeta %}

## Suggested Links

* [Basic Configuration]({% slug configuration_animation %})
* [API Reference of the Animation Package]({% slug api_animation_animationprops %})
