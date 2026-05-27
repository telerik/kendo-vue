---
title: Configuration
description: "Get started with the basic configuration options of the KendoVue Animation components in Vue projects."
slug: configuration_animation
position: 2
---

# Configuration

To perform CSS transitions and animations when a Vue component enters or exits the DOM, the Animations use the [`Vue transitions`](https://vuejs.org/v2/guide/transitions.html).

The Animations wrap all components which will be animated and enclose every child element in an `AnimationChild` component. 

## Default Setup

The following example demonstrates how to animate a `CONTENT` element which is added to the Slide Animation with an entering effect. When `CONTENT` is removed, the element acquires a special animation effect.

{% meta height:200 %}
{% embed_file configuration/main.vue preview %}
{% embed_file configuration/main.js %}
{% embed_file configuration/styles.css %}
{% endmeta %}

## Animating Elements and Components

The Animations provide options for animating:
* [Entering components](#toc-entering-components)
* [Exiting components](#toc-exiting-components)

### Entering Components

To the child component which enters the animation, the Animations set a `{transitionName}-enter` CSS class. Then, to start the animation, they add a `{transitionName}-enter-active` CSS class to the child.

The naming convention of the CSS class names is similar to the classes in the `Transition` component. For example, the Slide adds a `k-slide-down-enter` CSS class on enter and, in the next tick, adds a `k-slide-down-enter-active` to activate the transition.

### Exiting Components

To the child component which exits the animation, the Animations set a `{transitionName}-exit` CSS class. Then, to start the animation, they add a `{transitionName}-exit-active` CSS class to the child.

The naming convention of the CSS class names similar to the classes from the `Transition` component. For example, the Slide adds a `k-slide-down-exit` CSS class on exit and, in the next tick, adds a `k-slide-down-exit-active` to activate the transition.


## Suggested Links

* [Customizing the Animations]({% slug customizing_animation %})
* [API Reference of the Animation Package]({% slug api_animation_animationprops %})
