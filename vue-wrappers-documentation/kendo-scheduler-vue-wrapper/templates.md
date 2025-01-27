---
title: Templates
page_title: Templates - Scheduler - Kendo UI for Vue
description: "Use the templates to display and customize the data from the data item of the Kendo UI Scheduler in Vue projects."
slug: template_scheduler_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/scheduler/customization/"
position: 4
---

<div><WrapperBanner link="/kendo-vue-ui/components/scheduler/customization"></WrapperBanner></div> 

# Templates

You can display additional information from the event data item by using the event template of the Scheduler.

To create an event template for the events of the Scheduler, use the `:event-template` setting. To create other types of templates, use the other template settings of the Scheduler such as `:all-day-even-template`, `:date-header-template`, `:group-header-template`, `:major-time-header-template`, and `:minor-time-header-template`.

Templates use a simple templating syntax where the hash (`#`) symbol marks template areas that will be replaced with data when the template is executed. The `#` character also signifies the beginning and end of the custom JavaScript code inside the template.

You can use the `#` syntax in the following ways:
* To render values as HTML, implement `#= #`.
* To use HTML encoding to display values, implement `#: #`.
* To execute arbitrary JavaScript code, use `# if (true) { # ... non-script content here ... # } #`.

For more information on how to use the native Vue templates, refer to the [Kendo UI Templates Overview]({% slug vue_templates %}) article.

The following example demonstrates how to customize the appearance of the Scheduler events.

```html-preview

<div id="vueapp" class="vue-app">
    <kendo-scheduler :data-source="localDataSource"
					 :date="date"
					 :start-time="startTime"
					 :end-time="endTime"
					 :height="600"
					 :event-template="eventTemplate"
					 :timezone="'Etc/UTC'">
      <kendo-scheduler-view :type="'day'" :selected="true"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'workWeek'"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'week'"></kendo-scheduler-view>

      <kendo-scheduler-view :type="'agenda'"></kendo-scheduler-view>
    </kendo-scheduler>
</div>
<style>
    .movie-template img {
        float: left;
        margin: 0 8px;
    }
    .movie-template p {
        margin: 5px 0 0;
    }
    .movie-template h3 {
        padding: 0 8px 5px;
        font-size: 12px;
    }
    .movie-template a {
        color: #ffffff;
        font-weight: bold;
        text-decoration: none;
    }
    .k-state-hover .movie-template a,
    .movie-template a:hover {
        color: grey;
    }
</style>

```
```js
Vue.use(SchedulerInstaller);

new Vue({
    el: "#vueapp",
    data () {
			return {
            eventTemplate: '<div class="movie-template"><p>#: kendo.toString(start, "hh:mm") # - #: kendo.toString(end, "hh:mm") #</p> <h3>#: title #</h3><a href="#= imdb #" target="_blank">Movie in IMDB</a></div>' ,
            date: new Date('2018/6/13'),
            startTime: new Date("2013/6/13 10:00"),
            endTime: new Date("2013/6/13 23:00"),
            localDataSource: [
            {
                title: "Fast and furious 6",
                image: "../content/web/scheduler/fast-and-furious.jpg",
                imdb: "http://www.imdb.com/title/tt1905041/",
                start: new Date("2018/6/13 17:00"),
                end: new Date("2018/6/13 18:30")
            },
            {
                title: "The Internship",
                image: "../content/web/scheduler/the-internship.jpg",
                imdb: "http://www.imdb.com/title/tt2234155/",
                start: new Date("2018/6/13 14:00"),
                end: new Date("2018/6/13 15:30")
            },
            {
                title: "The Perks of Being a Wallflower",
                image: "../content/web/scheduler/wallflower.jpg",
                imdb: "http://www.imdb.com/title/tt1659337/",
                start: new Date("2018/6/13 16:00"),
                end: new Date("2018/6/13 17:30")
            },
            {
                title: "The Help",
                image: "../content/web/scheduler/the-help.jpg",
                imdb: "http://www.imdb.com/title/tt1454029/",
                start: new Date("2018/6/13 12:00"),
                end: new Date("2018/6/13 13:30")
            },
            {
                title: "Now You See Me",
                image: "../content/web/scheduler/now-you-see-me.jpg",
                imdb: "http://www.imdb.com/title/tt1670345/",
                start: new Date("2018/6/13 10:00"),
                end: new Date("2018/6/13 11:30")
            },
            {
                title: "Fast and furious 6",
                image: "../content/web/scheduler/fast-and-furious.jpg",
                imdb: "http://www.imdb.com/title/tt1905041/",
                start: new Date("2018/6/13 19:00"),
                end: new Date("2018/6/13 20:30")
            }
					]
				}
		}
})

```

## Suggested Links

* [Kendo UI Scheduler for jQuery](https://docs.telerik.com/kendo-ui/controls/scheduling/scheduler/overview)
* [API Reference of the Scheduler Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/scheduler)
