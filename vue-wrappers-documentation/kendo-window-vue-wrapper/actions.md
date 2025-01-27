---
title: Actions
page_title: Customizing Actions - Window - Kendo UI for Vue
description: "Use the predefined and create custom user actions when working with the Kendo UI Window wrapper for Vue."
slug: actions_window_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dialogs/window/"
position: 4
---

<div><WrapperBanner link="/kendo-vue-ui/components/dialogs/window"></WrapperBanner></div>    

# Actions

The following example demonstrates how to create a modal Window with a predefined position and enable all user actions.

## Predefined User Actions

The order of the values in the `actions` array determines the order in which the action buttons are rendered in the title of a Window. The `maximize` action serves both as a button for expanding a Window to fill the screen and as a button to restore a Window to its previous size. The `minimize` action collapses a Window to its title.

{% meta height:370 %}
{% embed_file actions/predefined/main.vue preview %}
{% embed_file actions/predefined/main.js %}
{% endmeta %}

## Custom User Actions

If the user supplies a non-recognized action name, the Window treats that action name as a custom action. As a result, the Window renders the `k-icon` and `k-i-actionname` (all lowercase) CSS classes for it and does not automatically attach a `click` event handler. By default, the Kendo UI stylesheets provide an icon for `"custom"`-named actions&mdash;however, you can use any other name for the non-recognized action and then capture and handle the `click` events in a standard way.

{% meta height:370 %}
{% embed_file actions/custom/main.vue preview %}
{% embed_file actions/custom/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Window for jQuery](https://docs.telerik.com/kendo-ui/controls/layout/window/overview)
* [API Reference of the Window Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/window)
