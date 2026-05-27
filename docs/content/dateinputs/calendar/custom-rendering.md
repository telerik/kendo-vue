---
title: Customization
description: "Override or modify the default rendering for the child components of the Kendo UI for Vue Native Calendar."
slug: custom_rendering_calendar
position: 9
---

# Customization

The Kendo UI for Vue Native Calendar enables the user to render custom components instead of the default ones and, in this way, to customize most of the child Calendar components which are otherwise inaccessible.

The user can replace the following default Calendar components with custom ones:

- [`CalendarCell`](#toc-cells-inside-the-view)&mdash;Renders the cells inside the Calendar view.
- [`CalendarWeekCell`](#toc-cells-inside-the-week-column)&mdash;Renders the cells inside the Calendar week column.
- [`CalendarNavigationItem`](#toc-items-in-the-side-navigation)&mdash;Renders the items in the Navigation of the Calendar.
- [`CalendarHeaderTitle`](#toc-titles-of-current-views)&mdash;Renders the title for the current Calendar view.

## Cells inside the View

You can customize or replace each individual cell inside the Calendar view with a custom component by passing a [`cell`]({% slug api_dateinputs_calendarprops %}#toc-cell) property to the Calendar. The `cell` property accepts Vue component, a render function, or a named slot. The custom cell receives relevant information about the state of the cell through the [`props of the Calendar`]({% slug api_dateinputs_calendarcellprops %}).

### Modifying the Cells

To modify an individual cell inside the Calendar view, use the [`CalendarCell`]({% slug api_dateinputs_calendarcellprops %}) component from the `@progress/kendo-date-dateinputs` package. `CalendarCell` will acquire custom behavior and will modify only some of the cells.

> For the `CalendarCell` component to work properly, pass back all properties.

{% meta height:430 %}
{% embed_file calendar/custom/cell/main.vue preview %}
{% embed_file calendar/custom/cell/main.js %}
{% embed_file calendar/custom/cell/Cell.vue %}
{% endmeta %}

### Overriding the Default Properties

The `cell` property allows you to pass any `<td />` element as a `CalendarCell`. This approach is useful for gaining full control over the cell because the `CalendarCell` component will render additional elements for the default styling.

> For the custom cell to allow date selection, manually pass or handle the `onClick` event.


{% meta height:430 %}
{% embed_file calendar/custom/htmlcell/main.vue preview %}
{% embed_file calendar/custom/htmlcell/main.js %}
{% embed_file calendar/custom/htmlcell/Cell.vue %}
{% endmeta %}

## Other Child Components

Similar to the `cell` property, the Calendar allows you to modify or override other child element through its [`weekCell`]({% slug api_dateinputs_calendarprops %}#toc-weekcell) and [`headerTitle`]({% slug api_dateinputs_calendarprops %}#toc-headertitle).

### Cells inside the Week Column

The [`CalendarWeekCell`]({% slug api_dateinputs_calendarweekcellprops %}) component represents the week number. `CalendarWeekCell` is only visible in the `month` view of the Calendar and if the [`weekNumber`]({% slug api_dateinputs_calendarprops %}#toc-weeknumber) property is set to `true`. `CalendarWeekCell` will receive relevant information about its state through the [`CalendarWeekCellProps`]({% slug api_dateinputs_calendarweekcellprops %}).

### Titles of Current Views

The [`CalendarHeaderTitle`]({% slug api_dateinputs_calendarheadertitleprops %}) component represents the title of the current Calendar view and also functions as a button for changing the current view. `CalendarHeaderTitle` will receive relevant information about its state through the [`CalendarHeaderTitleProps`]({% slug api_dateinputs_calendarheadertitleprops %})

> For the `CalendarHeaderTitle` component to work properly, pass back all properties.

{% meta height:430 %}
{% embed_file calendar/custom/title/main.vue preview %}
{% embed_file calendar/custom/title/main.js %}
{% embed_file calendar/custom/title/Title.vue %}
{% endmeta %}

## Suggested Links

* [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
* [API Reference of the CalendarCell]({% slug api_dateinputs_calendarcellprops %})
* [API Reference of the CalendarWeekCell]({% slug api_dateinputs_calendarweekcellprops %})
* [API Reference of the CalendarHeaderTitle]({% slug api_dateinputs_calendarheadertitleprops %})
