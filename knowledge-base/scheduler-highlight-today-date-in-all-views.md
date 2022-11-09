---
title: Highlight the 'today' slot in each Native Scheduler view. 
description: A sample project that demonstrates how define a custom template to highlight the today's slot in each Native Scheduler View. 
type: how-to
page_title: Learn how to customize the Native Scheduler's Slot template to highlight the today's slot in each View.
slug: scheduler-highlight-today-date-in-all-views
tags: scheduler, slot, template, custom, today, highlight, color, kendovue, native
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.6.3</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

This Knowledge base(KB) article shows how you can display the list of the parent nodes above the selected TreeView node. With the demonstrated approach you can get the 'path' from the root of the TreeView to the selected node. 


**KB sections**

* [Solution description](#toc-solution-description)
* [Runnable example](#toc-runnable-example)

## Solution description

### Define the custom template

To highlight the current date in all Native Scheduler Views, we need to customize its slot. The desired functionality can be achieved using the following custom `Slot template`. 

```js-no-run
<template v-slot:slotRender="{ props }">
  <SchedulerSlot
    v-bind="props"
    :style="{
      'background-color':
        new Date(props.start).toDateString() === new Date().toDateString()
          ? '#56ca85' // Define the color of AllDay slots
          : undefined,
    }"
    @showmoreitems="props.onShowmoreitems"
  >
  </SchedulerSlot>
</template>
```
> More details about the custom Slot templates you can find [on this Scheduler Custom Slot template documentation article]({% slug scheduler_custom_slot %}). 

### Pass the template to the Scheduler

To apply the above `slotRender` template is we have to pass it to the [slotRender]({% slug api_scheduler_schedulerprops %}#toc-slotrender) property of the Native Scheduler. 
```
:slot-render="'slotRender'"
```
### The result

By applying the shared above implementation the `today`'s cell in all Native Scheduler views will have a background with the **#56ca85** color.

### Runnable example
{% meta id:index height:800 %}
{% embed_file scheduler-highlight-today-date-in-all-views/main.vue preview %}
{% embed_file scheduler-highlight-today-date-in-all-views/events-utc.js %}
{% embed_file scheduler-highlight-today-date-in-all-views/main.js %}
{% endmeta %}
