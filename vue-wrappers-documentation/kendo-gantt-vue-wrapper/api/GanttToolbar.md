---
title: GanttToolbar API
description: "API Index | GanttToolbar"
api_reference: true
slug: api_gantttoolbarcomponent
---

# GanttToolbar

## Directive

`kendo-gantt-toolbar-item`

## Parent Components

* [`kendo-gantt`]({% slug api_ganttcomponent %})

## Props

### name `String`

The name of the toolbar command which can be set to the `append` or `pdf` built-in, or to a custom value. The name is reflected in one of the CSS classes which is applied to the button (`k-gantt-name`). You can use this class to obtain reference to the button after the Gantt initialies and attaches the click handlers.

### template `String | Function`

The template for rendering the command. By default, `template` renders a button.

### text `String`

The text which is displayed by the command button. If `text` is not set, the `name` option will be used as the button text instead.

## Suggested Links

* [`Toolbar` in Kendo UI Gantt for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/configuration/toolbar)
