---
title: Overview
description: "Learn how to add Font or SVG icon to your Vue project, using the Kendo UI for Vue Native Icons components."
slug: overview_icons
position: 0
---

# Kendo UI for Vue Icons Overview

The Kendo UI for Vue Native Icons package provides components by which you can display `font` or `SVG` icons.

<div data-component="StartFreeTrialSection"></div>

<Row>
    <Column count={6}>
        <Component href="slug:overview_icon">
            <ComponentIcon>
                <path
                    fill="#808080"
                    d="M11,16h2V9h-2V16z M12,0C5.9,0,1,4.9,1,11c0,5.3,3.8,9.7,8.8,10.8L12,24l2.2-2.2c5-1,8.8-5.5,8.8-10.8
	C23,4.9,18.1,0,12,0z M13.8,19.8l-0.6,0.1l-0.4,0.4L12,21.2l-0.8-0.8l-0.4-0.4l-0.6-0.1C6,19,3,15.3,3,11c0-5,4-9,9-9c5,0,9,4,9,9
	C21,15.3,18,19,13.8,19.8z M12,5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,5,12,5z"
                ></path>
            </ComponentIcon>
            <ComponentTitle>Icon</ComponentTitle>
            <ComponentDescription>A component which displays font icons.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="slug:overview_svgicon">
            <ComponentIcon>
                <path d="M11.9,11.7l-1-3.7H9.8l1.6,4.9h1L14,8.1h-1.1L11.9,11.7z M7.8,8.8c0.2,0,0.4,0.1,0.6,0.2c0.1,0.1,0.2,0.3,0.2,0.5h0.9
                c0-0.3-0.1-0.6-0.2-0.8C9.2,8.5,9,8.3,8.7,8.2C8.5,8.1,8.2,8,7.8,8C7.5,8,7.2,8.1,7,8.2C6.7,8.3,6.5,8.5,6.4,8.7
                C6.2,8.9,6.1,9.1,6.1,9.4c0,0.5,0.3,0.9,0.8,1.2c0.2,0.1,0.5,0.2,0.8,0.3C8,11,8.3,11.1,8.4,11.2c0.1,0.1,0.2,0.2,0.2,0.4
                c0,0.2-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.1-0.5,0.1c-0.6,0-0.9-0.3-0.9-0.8H6c0,0.3,0.1,0.6,0.2,0.8s0.4,0.4,0.7,0.6
                c0.3,0.1,0.6,0.2,1,0.2c0.5,0,0.9-0.1,1.2-0.4c0.3-0.2,0.5-0.6,0.5-1c0-0.4-0.1-0.7-0.4-0.9c-0.2-0.3-0.6-0.5-1.2-0.6
                C7.7,10,7.5,9.9,7.3,9.8C7.2,9.7,7.1,9.5,7.1,9.4c0-0.2,0.1-0.3,0.2-0.4C7.4,8.9,7.6,8.8,7.8,8.8z M15.5,9.2
                c0.2-0.3,0.4-0.4,0.7-0.4c0.3,0,0.5,0.1,0.6,0.2c0.1,0.1,0.2,0.3,0.3,0.6H18c-0.1-0.5-0.2-0.9-0.5-1.2C17.1,8.1,16.7,8,16.2,8
                c-0.4,0-0.7,0.1-1,0.3s-0.5,0.5-0.7,0.8c-0.2,0.4-0.2,0.8-0.2,1.3v0.3c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.4,0.6,0.7,0.8
                c0.3,0.2,0.6,0.3,1,0.3c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.7-0.5v-1.9h-1.8v0.7h0.9V12c-0.2,0.2-0.4,0.2-0.8,0.2
                c-0.4,0-0.6-0.1-0.8-0.4c-0.2-0.3-0.3-0.6-0.3-1.2v-0.3C15.2,9.8,15.3,9.4,15.5,9.2z M12,0C5.9,0,1,4.9,1,11
                c0,5.3,3.8,9.7,8.8,10.8L12,24l2.2-2.2c5-1,8.8-5.5,8.8-10.8C23,4.9,18.1,0,12,0z M13.8,19.8l-0.6,0.1L12,21.2l-1.2-1.2l-0.6-0.1
                C6,19,3,15.3,3,11c0-5,4-9,9-9s9,4,9,9C21,15.3,18,19,13.8,19.8z"/>
            </ComponentIcon>
            <ComponentTitle>SVGIcon</ComponentTitle>
            <ComponentDescription>A component which displays SVG icons.</ComponentDescription>
        </Component>
    </Column>
</Row>

## Basic Usage

The following example demonstrates how the define one and the same icon using

{% meta height:130 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Key Features

### Appearance

The color and style of the Icons are normally picked up by the current Kendo UI theme, but each aspect of the Icons can be customized by theme variables or configuration options. [Read more about the appearance of the Icon...]({% slug appearance_icon %})

## Licensing

The Kendo UI for Vue Icons are part of the Kendo UI for Vue Native library. To test the Icons and all other Kendo UI for Vue components you can register for a 30-day trial with a version of the library that has no restrictions or limitations. What’s more, you are eligible for full technical support during your trial period in case you have any questions. To sign up for a free 30-day trial, go [here](https://www.telerik.com/try/kendo-vue-ui).


## Support Options

For any questions about the Kendo UI for Vue Icons, or any other [Kendo UI for Vue components](https://www.telerik.com/kendo-vue-ui/components/), you have these support options available:

* Kendo UI for Vue license holders and everyone with an active trial license can benefit from the outstanding Kendo UI for Vue customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).
* The [Kendo UI for Vue forums](https://www.telerik.com/forums/kendo-ui-vue) are part of the free support you can get from the community and from the Kendo UI for Vue team on all kinds of general issues.
* [Kendo UI for Vue Feedback Portal](https://feedback.telerik.com/kendo-vue-ui) and [Kendo UI for Vue Native Roadmap](https://www.telerik.com/kendo-vue-ui/roadmap/) provides information on the features in discussion and also those planned for release.
* Need a unique solution that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you need.

## Support and Learning Resources

* [Icon Homepage](https://www.telerik.com/kendo-vue-ui/vue-icons)
* [SVGIcon Homepage](https://www.telerik.com/kendo-vue-ui/svgicon)
* [Getting Started with the Kendo UI Vue Icons](slug:get_started_icons)
* [API Reference of the Icon Component](slug:api_common_fonticonprops)
* [API Reference of the SVGIcon Component](slug:api_common_svgiconprops)
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
