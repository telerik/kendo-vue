---
title: Overview
page_title: AdaptiveModeProvider & Overview | Kendo UI for Vue
description: 'Get a free 30-day trial of the Vue AdaptiveModeProvider by Kendo UI for Vue. Add custom breakpoints to all your components and make them more responsive and adaptive.'
slug: overview_adaptive_mode
position: 1
---

# Kendo UI for Vue AdaptiveModeProvider Overview

The increasing variety of mobile devices requires an adaptive rendering for your application that covers all different screen resolutions and ensures a smooth user experience. You can customize the adaptive rendering of the Kendo UI for Vue components by modifying the default adaptive breakpoints.

<div data-component="StartFreeTrialSection"></div>

## AdaptiveModeProvider

The AdaptiveModeProvider is based on Vue provide and inject pattern that provides a global configuration for adaptive rendering across various components. It lets you define breakpoints for small and medium screen sizes. This provider is essential for implementing responsive layouts, where UI components such as DatePicker, DropDownList, ComboBox, and others may need to adapt.

The provider itself provides small and medium breakpoints. You should wrap your components in a `AdaptiveModeProvider` to pass these values down the component tree:

-   [`small`]({% slug api_common_adaptivemodeprovidertype %}#small)&mdash;Sets the horizontal screen width in pixels up to which the component will display as a full-screen modal. The default value is `500`.
-   [`medium`]({% slug api_common_adaptivemodeprovidertype %}#medium)&mdash;Sets the horizontal screen width in pixels up to which the component will display as a docked-to-the-bottom modal. The default value is `768`.

The following example demonstrates how to customize the adaptive settings of the Kendo UI for Vue ComboBox component.

{% meta height:300 %}
{% embed_file adaptive-mode/main.vue preview %}
{% embed_file adaptive-mode/main.js %}
{% endmeta %}

## Suggested Links

-   [Getting Started with Kendo UI for Vue]({% slug getting_started_javascript_composition_api %})
-   [API Reference of the AdaptiveModeProvider]({% slug api_common_adaptivemodeprovider %})
-   [API Reference of the AdaptiveModeProviderType]({% slug api_common_adaptivemodeprovidertype %})
