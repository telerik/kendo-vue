---
title: Overview
description: 'Get an overview of the features of the Kendo UI for Vue Native Badge and how it can be used in Vue projects.'
slug: overview_badge
position: 1
---

# Kendo UI for Vue Badge Overview

The Badge component is a visual indicator for UI elements. It enables you to easily show statuses, notifications, and short messages in your app. Badges provide additional contextual information for other elements on the page.

The Kendo UI for Vue Badge is distributed through the [kendo-vue-indicators NPM package](https://www.npmjs.com/package/@progress/kendo-vue-indicators).

<div data-component="StartFreeTrialSection"></div>

A Badge in the Kendo UI for Vue Native suite can be defined using two approaches:

- The `Badge` component
- The `BadgeContainer` component

Both approaches are valid and can be used based on your personal preference or the complexity of the scenario you are working on.

## Using the Kendo UI for Vue Badge component

To use the Native Badge component, we have to add it after the DOM element to which we want it to be attached to. Two two DOM elements - the `Badge` and the target element - should be wrapped in a parent `div` or `span` element as in the following definition:

```jsx-no-run
<span class="badge">
  <SvgIcon :icon="vimeoIcon" :size="'xlarge'" style="color: #b3d062" />
  <Badge> 77 </Badge>
</span>
```

The `badge` class in the above snippet is defined as follows to position the `Badge` component correctly.

```jsx-no-run
.badge {
  position: relative;
  overflow: visible;
}
```

## Using the Kendo UI for Vue BadgeContainer component

The `BadgeContainer` uses a Slot template to define its content. Using this approach the configurations of the `Badge` are passed directly to the `BadgeContainer`.

```jsx-no-run
<BadgeContainer
  :content="'content'"
  :align="{
    vertical: 'bottom',
    horizontal: 'end',
  }"
  :theme-color="'tertiary'"
>
  <SvgIcon :icon="copyIcon" style="width: 36px; color: #4eb9ed" />
  <template #content> 11 </template>
</BadgeContainer>
```

# Basic Usage Demo

The below example shows selected scenarios that can be implemented with the `Badge` and the `BadgeContainer` components. The badges in the `SocialApps.vue` file are defined using the `BadgeContainer`. All other badges available in the demo use the `Badge` component approach.

{% meta height:480 %}
{% embed_file badge/overview/main.vue preview %}
{% embed_file badge/overview/Contacts.vue %}
{% embed_file badge/overview/SocialApps.vue %}
{% embed_file badge/overview/Status.vue %}
{% embed_file badge/overview/main.js %}
{% endmeta %}

> The `Badge` and the `BadgeContainer` components are part of the [Kendo UI for Vue Native Indicators]({% slug overview_indicators %}) library. The procedures for installing, importing, and using the Indicators are identical for all components in the package. To learn how to use the Badge, the BadgeContainer and the rest of the Indicators, see the [Getting Started with the Kendo UI for Vue Native Indicators]({% slug get_started_indicators %}) guide.

## Key Features

- [BadgeContainer]({% slug badgecontainer_badge %})&mdash;See how to use the `BadgeContainer` component and how to define its content.
- [Positioning]({% slug positioning_badge %})&mdash;You can position the Kendo UI for Vue Native Badge and BadgeContainer on different places of the targeted element.
- [Appearance]({% slug appearance_badge %})&mdash;You can quickly style the Badge and the BadgeContainer by choosing from the predefined styling options.

## Support and Learning Resources

- [Badge Homepage](https://www.telerik.com/kendo-vue-ui/badge)
- [Getting Started with the Kendo UI Vue Indicators](slug:get_started_indicators)
- [API Reference of the Badge](slug:api_indicators_badgeprops)
- [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
- [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
- [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
- [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
- [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
- [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
- [Badge Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=badge)
- [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
- [Kendo UI Productivity Tools extension for VS Code](slug:vue_vscode_overview)

## Additional Resources

- [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
- [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
