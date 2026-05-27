---
title: Customization
description: 'Customize Kendo UI for Vue Native Tooltip behavior by attaching host-level handlers and rendering the Tooltip as a standalone instance.'
slug: customization_tooltip
position: 7
---

# Customization

You can attach Tooltip handlers to a host element and keep the `Tooltip` instance separate from its targets.
The host forwards events to a Tooltip ref, while the standalone `Tooltip` is configured with [`anchor-element="anchor"`]({% slug api_tooltip_tooltipprops %}#toc-anchorelement) and [`parent-title`]({% slug api_tooltip_tooltipprops %}#toc-parenttitle).

For this setup to work as expected:

- Attach `mouseover` and `mouseout` handlers to the container element.
- Forward these events to `handleMouseOver` and `handleMouseOut` through a Tooltip ref.
- Keep focusable targets inside the container and add a `title` attribute to each target.

In the following demo, the handlers are attached to the highlighted container.

{% meta height:180 %}
{% embed_file customization/main.vue preview %}
{% embed_file customization/main.js %}
{% endmeta %}

## Suggested Links

- [API Reference of the Tooltip]({% slug api_tooltip %})
