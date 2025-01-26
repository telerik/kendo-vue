---
title: Adaptive Rendering
page_title: Adaptive Rendering - Scheduler - Kendo UI for Vue
description: "Configure adaptive rendering for the Kendo UI Scheduler."
slug: adaptive_rendering_scheduler_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/scheduler/"
position: 10
---

<div><WrapperBanner link="/kendo-vue-ui/components/scheduler"></WrapperBanner></div> 

# Adaptive Rendering

The Scheduler supports adaptive enhancements like changes in styling and behavior in order to remain consistent with the specific user device experience. For instance, when editing on a mobile device, the edit container will slide in a new screen for the user, which is a departure from the more desktop-like popup behaviors.

To enable the adaptive rendering feature, set the [`mobile`]({% slug api_schedulercomponent_wrapper %}#mobile) option to `true`,  `phone` or `tablet`:

* If set to `true`, the widget will use adaptive rendering when viewed on a mobile browser.
* If set to `phone` or `tablet`, the widget will be forced to use adaptive rendering regardless of the browser type.

 The example below demonstrates how to configure the adaptive rendering mode of the Scheduler.
 
{% meta height:665 %}
{% embed_file adaptive/main.vue preview %}
{% embed_file adaptive/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/scheduler/overview)
* [API Reference of the Scheduler Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler)