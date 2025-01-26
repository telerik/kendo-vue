---
title: Overview
page_title: Scheduler Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Scheduler wrapper for Vue delivers and use the component in Vue projects."
slug: overview_scheduler_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/scheduler/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/scheduler"></WrapperBanner></div> 

# Scheduler Overview

The Scheduler displays a set of events&mdash;appointments or tasks.

It provides the option to render scheduled events in different views&mdash;as a single day, a whole week, or month, or as a list of tasks which needs to be accomplished.

The Scheduler wrapper for Vue is a client-side wrapper for the [Kendo UI Scheduler](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Scheduler.

{% meta height:665 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the Scheduler, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Scheduler package for Vue.

    ```sh
    npm install --save @progress/kendo-scheduler-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.scheduler' // Imports only the Scheduler script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

	import { Scheduler } from '@progress/kendo-scheduler-vue-wrapper'
    import { SchedulerResource } from '@progress/kendo-scheduler-vue-wrapper'
    import { SchedulerView } from '@progress/kendo-scheduler-vue-wrapper'
    import { SchedulerInstaller } from '@progress/kendo-scheduler-vue-wrapper'

    Vue.use(SchedulerInstaller)

    new Vue({
        el: '#app',
        components: {
            Scheduler
        }
    })
    ```

## Functionality and Features

* [Data binding]({% slug databinding_scheduler_wrapper %})
* [Resources]({% slug resources_scheduler_wrapper %})
* [Selection]({% slug selection_scheduler_wrapper %})
* [Templates]({% slug template_scheduler_wrapper %})
* [Restrictions]({% slug restriction_scheduler_wrapper %})
* [Moving and resizing]({% slug snap_move_scheduler_wrapper %})
* [PDF export]({% slug pdf_export_scheduler_wrapper %})
* [Keyboard navigation]({% slug resources_scheduler_wrapper %})
* [RTL support]({% slug right_to_left_support_scheduler_wrapper %})

## Events

The following example demonstrates basic Scheduler events. You can subscribe to [all Scheduler events](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-scheduler :data-source="localDataSource"
					 :date="date"
					 :height="600"
					 :timezone="'Etc/UTC'"
					 @change="onChange"
                     @edit="onEdit"
                     @add="onAdd"
                     @cancel="onCancel"
                     @dataBound="onDataBound"
                     @move="onMove"
                     @navigate="onNavigate"
                     @resize="onResize"
                     @save="onSave">
      <kendo-scheduler-view :type="'day'"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'workWeek'" :selected="true"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'week'"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'month'"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'agenda'"></kendo-scheduler-view>
    </kendo-scheduler>
</div>
```
```js
Vue.use(SchedulerInstaller);

new Vue({
    el: "#vueapp",
	data: {
		date: new Date('2013/6/6'),
		localDataSource: [
			{
			  id: 1,
			  start: new Date("2013/6/6 08:00 AM"),
			  end: new Date("2013/6/6 09:00 AM"),
			  title: "Interview"
			},
			{
			  id: 2,
			  start: new Date("2013/6/6 08:00 AM"),
			  end: new Date("2013/6/6 09:00 AM"),
			  title: "Meeting"
			}
		]
	},
	methods: {
        onChange: function (ev) {
            console.log("Event :: change");
        },
        onEdit: function (ev) {
            console.log("Event :: edit");
        },
        onAdd: function (ev) {
            console.log("Event :: add");
        },
        onCancel: function (ev) {
            console.log("Event :: cancel");
        },
        onDataBound: function (ev) {
            console.log("Event :: dataBound");
        },
        onMove: function (ev) {
            console.log("Event :: move");
        },
        onNavigate: function (ev) {
            console.log("Event :: navigate");
        },
		onResize: function (ev) {
            console.log("Event :: resize");
        },
        onSave: function (ev) {
            console.log("Event :: save");
        }
    }
})
```

## Suggested Links

* [Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/scheduler/overview)
* [API Reference of the Scheduler Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler)
