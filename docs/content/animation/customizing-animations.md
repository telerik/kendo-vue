---
title: Customization
description: "Customize the KendoVue Animations in Vue projects."
slug: customizing_animation
position: 10
---

# Customization

Animations enable you to customize their behavior by configuring the [`Animation`]({% slug api_animation_animationprops %}) component.

To update the Animation effect, use the [`transition-name`]({% slug api_animation_animationprops %}#toc-transitionname) property. The property defines the class name that is added to the enter or exit elements.

## Entering Animations

To configure the entering animation, define the CSS classes by using the following syntax:

```scss-no-run
  .{transitionName}-enter {
    /* The class that will be added on initial render of the element */
  }

  .{transitionName}-enter-active {
    /* The class that will be added after one time-frame(~16ms) to initiate the transition */
  }
```

The following example demonstrates how to create a custom entering animation.

{% meta height:250 %}
{% embed_file animations/entering/main.vue preview %}
{% embed_file animations/entering/main.js %}
{% embed_file animations/entering/styles.css %}
{% endmeta %}

## Exiting Animations

To configure the exiting animation, define the CSS classes by using the following syntax:

```scss-no-run
  .{transitionName}-exit {
    /* The class that will be added on initial render of the element */
  }

  .{transitionName}-exit-active {
    /* The class that will be added after one time-frame(~16ms) to initiate the transition */
  }
```

The following example demonstrates how to customize an exiting Slide Animation.

{% meta height:250 %}
{% embed_file animations/exiting/main.vue preview %}
{% embed_file animations/exiting/main.js %}
{% embed_file animations/exiting/styles.css %}
{% endmeta %}

## Suggested Links

* [Basic Configuration]({% slug configuration_animation %})
* [API Reference of the Animation Component]({% slug api_animation_animationprops %})
