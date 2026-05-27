---
title: Basics
description: "Get started with the Kendo UI for Vue Native Scheduler component and configure the available views it delivers."
slug: views_scheduler
position: 0
---

# Views Basics

The Kendo UI for Vue Native Scheduler accepts a collection of Scheduler views as children but renders only the currently active view.

<div data-component="StartFreeTrialSection"></div>

## View Types

Currently, the Scheduler component supports the following built-in views:

* [**Timeline** view](slug:timeline_view_scheduler)
* [**Day** view](slug:day_view_scheduler)
* [**Week** view](slug:week_views_scheduler)
* [**Month** view](slug:month_view_scheduler)
* [**Agenda** view](slug:agenda_view_scheduler)

## Getting Started

To render the desired views, import them from the `@progress/kendo-vue-scheduler` package.

```jsx-no-run
import { Scheduler } from '@progress/kendo-vue-scheduler';
```

To specify the available views and set their configuration options, use the `views` property of the [Scheduler]({% slug api_scheduler_schedulerprops %}) component.

```jsx-no-run
<Scheduler
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
>
</Scheduler>
```

The following example demonstrates how to render the **Day**, **Week**, and **Month** Scheduler views.

{% meta height:700 %}
{% embed_file views/getting-started/main.vue preview %}
{% embed_file views/getting-started/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}


## Setting the Default View

To set the initially selected view, set the [`defaultView`]({% slug api_scheduler_schedulerprops %}#toc-defaultview) property to the `name` of the desired view.

{% meta height:700 %}
{% embed_file views/default-view/main.vue preview %}
{% embed_file views/default-view/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

## Controlling the Selected View

To control the view selection, provide a pair of the [`view`]({% slug api_scheduler_schedulerprops %}#toc-view) and [`onViewChange`]({% slug api_scheduler_schedulerprops %}#toc-onviewchange) properties. Providing only the `view` property will render the Scheduler in a read-only view state.

The following example demonstrates how to control the view state based on an external source.



{% meta height:780 %}
{% embed_file views/controlled-state/main.vue preview %}
{% embed_file views/controlled-state/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}


## Suggested Links

* [Timeline View]({% slug timeline_view_scheduler %})
* [Day View]({% slug day_view_scheduler %})
* [Week View]({% slug week_views_scheduler %})
* [Month View]({% slug month_view_scheduler %})
* [Agenda View]({% slug agenda_view_scheduler %})
