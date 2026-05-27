---
title: Collapse Mode
description: "Use the Kendo UI for Vue Breadcrumb with the collapseMode prop."
slug: collapse_modes_breadcrumb
position: 6
---

# Collapse Mode

To specify the way the Breadcrumb items are visualized when their total width is larger than the width of the component, use the collapseMode property.

The Breadcrumb supports the following options for setting its collapse mode:
 * `auto` (default) — Items are automatically collapsed based on the width of the Breadcrumb. First and last item always remain visible.
 * `wrap` — Items are wrapped on multiple rows when their total width is greater than the width of the BreadCrumb.
 * `none` — All items are expanded on the same row. This scenario is useful when the Breadcrumb needs to be scrolled.

{% meta height:300 %}
{% embed_file breadcrumb/collapse-mode/main.vue preview %}
{% embed_file breadcrumb/collapse-mode/main.js %}
{% endmeta %}


## Suggested Links

-   [API Reference of the Breadcrumb]({% slug api_layout_breadcrumbprops %})
