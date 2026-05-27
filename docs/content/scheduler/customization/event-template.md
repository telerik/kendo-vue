---
title: Event Templates
description: "Learn hot to customize the event templates in the Native Scheduler component. Edit text, change colors or add images."
slug: scheduler_custom_event
position: 10
---

# Event Templates

With the Kendo UI for Vue Native Scheduler, you can customize the event templates in a way that best fits your requirements.

Below you will find examples how you can:
* [Define custom colors for the 'All-day' and regular event](#toc-event-templates)
* [Display image in the event template](#toc-display-image-in-the-event-template)
* [Display resources in the event template](#toc-display-resources-in-the-event-template)


## Custom colors

The below example demonstrates how the `colors` of the **regular** and **all-day** events can be defined using the **item property** of the Native Scheduler.

{% meta height:770 %}
{% embed_file custom-templates/events/color/main.vue preview %}
{% embed_file custom-templates/events/color/main.js %}
{% embed_file shared/events-utc.js %}
{% endmeta %}

The way we control the look of the different events in the above example is through the slot template passed to the item property. Here is the definition of the used template:

```jsx-no-run
<template #itemRender="{ props }">
  <SchedulerItem
    v-bind="props"
    :itemStyle="{
      backgroundColor: props.isAllDay ? 'green' : 'blue',
    }"
  >
    <div class="k-event-template">
      {{ props.title }}
    </div>
  </SchedulerItem>
</template>
```

## Display image in the event template

The below example demonstrates how we can display an `image` in the events of the Native Scheduler.

{% meta height:770 %}
{% embed_file custom-templates/events/image/main.vue preview %}
{% embed_file custom-templates/events/image/main.js %}
{% embed_file custom-templates/events/image/events-utc.js %}
{% endmeta %}


The slot template passed to the item property in the above example is defined as follows:

```jsx-no-run
<template #itemRender="{ props }">
  <SchedulerItem v-bind="props">
    <div class="k-event-template" v-if="!props.isAllDay">
      {{ props.title }}
      <div :style="{ 'padding-top': '5px', display: 'flex' }">
        <img :src="props.dataItem.image" :style="{ width: '120px' }" :alt="'Event Image'" />
        <span :style="{ 'padding-left': '5px' }">{{
          props.description
        }}</span>
      </div>
    </div>
    <div class="k-event-template" v-else>
      <img
        :src="'https://static4.depositphotos.com/1004274/315/v/450/depositphotos_3152530-stock-illustration-eco-icon.jpg'"
        :style="{ width: '18px', 'padding-bottom': '5px' }"
        :alt="'Eco Icon'"
      />
      {{ props.title }}
    </div>
  </SchedulerItem>
</template>
```

## Display resources in the event template

The below example demonstrates how we can display `resources` information in the events of the Native Scheduler.

{% meta height:770 %}
{% embed_file custom-templates/events/resources/main.vue preview %}
{% embed_file custom-templates/events/resources/main.js %}
{% embed_file custom-templates/events/resources/events-utc.js %}
{% endmeta %}


## Suggested Links
* [API Reference of the Scheduler]({% slug api_scheduler_schedulerprops %})
* [API Reference of the SchedulerItem]({% slug api_scheduler_scheduleritemprops %})
