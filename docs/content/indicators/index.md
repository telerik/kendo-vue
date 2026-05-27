---
title: Overview
description: "Get started with the Kendo UI for Vue Native Indicators package  and learn more about how to use the Indicators components in Vue projects."
slug: overview_indicators
position: 1
---

# Kendo UI for Vue Indicators Overview

The Kendo UI for Vue Native Indicators are used to decorate other elements or components, creating a visual indication for current status, on-going process or state change.

The Indicator components are part of the Kendo UI for Vue library, which provides native Vue components, and are available under the [kendo-vue-indicators NPM package](https://www.npmjs.com/package/@progress/kendo-vue-indicators).

<div data-component="StartFreeTrialSection"></div>

<Row>
    <Column count={12}>
        <Component href="{% slug overview_badge %}">
            <svg viewBox="0 0 24 24">
                <path  d="M17,18H2V7h9V5H0V20H19V10H17ZM13,4V8h7l4-4Z"/>
            </svg>
            <ComponentTitle>Badge</ComponentTitle>
            <ComponentDescription>A visual indicator component displaying notification or status.</ComponentDescription>
        </Component>
    </Column>
    <Column count={12}>
        <Component href="{% slug overview_loader %}">
            <svg viewBox="0 0 24 24">
                <path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10 S17.5,22,12,22z M13,6l-2-2v8l5.1,5h2.8L13,11.1V6z"/>
            </svg>
            <ComponentTitle>Loader</ComponentTitle>
            <ComponentDescription>A component that represents a visual indication of an indeterminate wait time.</ComponentDescription>
        </Component>
    </Column>
    <Column count={12}>
        <Component href="{% slug overview_skeleton %}">
            <svg viewBox="0 0 24 24">
                <path d="M24,4H8v2h14L24,4z M3,8c1.7,0,3-1.3,3-3S4.7,2,3,2S0,3.3,0,5S1.3,8,3,8z M0,22h24V10H0V22z"/>
            </svg>
            <ComponentTitle>Skeleton</ComponentTitle>
            <ComponentDescription>A component representing a visual indicator that is rendered initially on a page before actual content loads.</ComponentDescription>
        </Component>
    </Column>
</Row>

## Basic Usage

The following example demonstrates all available Indicator components in action.


{% meta height:500 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Key Features

The Kendo UI for Vue Native Indicators provide options to inform your users about an updated state of a web page (`Badge` component) or providing details that a process is currently working (`Loader` and `Skeleton` components).

### Appearance

The color and style of the Indicators are normally picked up by the current Kendo UI theme, but each aspect of the Indicators can be customized by theme variables or configuration options.
* [Read more about the appearance configuration of the Badge...]({% slug appearance_badge %})
* [Read more about the appearance configuration of the Loader...]({% slug appearance_loader %})
* [Read more about the appearance configuration of the Skeleton...]({% slug appearance_skeleton %})

### Globalization

The Kendo UI for Vue Indicators support globalization to ensure that each Indicators component can fit well in any application, no matter what languages and locales need to be supported. Additionally, the Indicators support rendering in a right-to-left (RTL) direction. [Read more about Indicators globalization...]({% slug rtl_indicators %})

## Kendo UI for Vue Native Trial Version and Commercial License

This Scheduler component is part of Kendo UI for Vue Native, a commercial UI library. You are welcome to explore its full functionality and get technical support from the team when you register for a free 30-day trial. To use it commercially, you need to [purchase a license](https://www.telerik.com/purchase/kendo-ui). Feel free to review the Kendo UI for Vue Native [License Agreement](https://www.telerik.com/purchase/license-agreement/kendo-ui) to get acquainted with the full terms of use.

Starting from `version 2.0.0`, using any of the UI components in the Kendo UI for Vue Native library requires either a commercial license key or an active trial license key. Follow the instructions on the [My License page]({% slug my_license %}) to activate your license.
## Support Options

For any questions about the Kendo UI for Vue Native Indicators, or any other [Kendo UI for Vue components](https://www.telerik.com/kendo-vue-ui/components/), you have these support options available:

* Kendo UI for Vue license holders and anyone in an active trial can take advantage of the outstanding customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).
* The [Kendo UI for Vue forums](https://www.telerik.com/forums/kendo-ui-vue) are part of the free support you can get from the community and from the Kendo UI for Vue team on all kinds of general issues.
* [Kendo UI for Vue Feedback Portal](https://feedback.telerik.com/kendo-vue-ui) and [Kendo UI for Vue Roadmap](https://www.telerik.com/kendo-vue-ui/roadmap/) provide information on the features in discussion and also those planned for release.

## Support and Learning Resources

* [Badge Homepage](https://www.telerik.com/kendo-vue-ui/badge)
* [Loader Homepage](https://www.telerik.com/kendo-vue-ui/loader)
* [Skeleton Homepage](https://www.telerik.com/kendo-vue-ui/skeleton)
* [Getting Started with the Kendo UI Vue Indicators](slug:get_started_indicators)
* [API Reference of the Indicators](slug:api_indicators)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Kendo UI for Vue Forum](https://www.telerik.com/forums/kendo-ui-vue)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
