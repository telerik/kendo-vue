---
title: Header & Footer
description: "Get started with the Kendo UI for Vue Native Scheduler and learn how to customize the header and footer of the component."
slug: overview_header_footer_scheduler
position: 30
---

# Header & Footer Customization

The Kendo UI for Vue Native Scheduler allows us to edit its `header` and `footer` while keeping the build-in functionalities of the component. 

To redefine the built-in `header` and `footer` we have to use the [header]({% slug api_scheduler_schedulerprops %}#toc-header) and [footer]({% slug api_scheduler_schedulerprops %}#toc-footer) properties of the Scheduler. The two properties accept `slot` templates inside which we define the custom content of the two elements.


## Add custom elements to header and footer

The following example demonstrates how to conditionally render the `header` and `footer` components, based on user configuration. In color, you can see the elements that are added among the default **Scheduler** `header` and `footer` elements. We can also add custom DropDowns or pickers, based on the application requirements. 


{% meta height:870 %}
{% embed_file custom-templates/header-footer/main.vue preview %}
{% embed_file custom-templates/header-footer/main.js %}
{% embed_file shared/events-utc.js  %}
{% endmeta %}


The above example uses the following components that are used under the hood with the default `Scheduler` configuration: 
* SchedulerNavigation(used in the header) - Displays the Navigation buttons in the header.
* NavigationDatePicker(used in the header) - Displays the DatePicker in the header. 
* ToolbarSpacer (used in the header) - Adds empty space in the header.
* SchedulerViewSelector(used in the header) - Displays the list of Views available in the Scheduler. 
* BusinessHours(used in the footer) - Displays the "Show full day" button available in some Scheduler views.

## Suggested Links

* [API Reference of the Scheduler]({% slug api_scheduler_schedulerprops %})
