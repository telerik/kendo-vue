---
title: SplitterPane API
description: "API Index | SplitterPane"
api_reference: true
slug: api_splitterpanecomponent_wrapper
---

# PanesProps

## Directive

`kendo-splitter-pane`

## Parent Components

* [`kendo-splitter`]({% slug api_splittercomponent_wrapper %})

## Props

### collapsed `Boolean`

If `collapsed` is set to `true`, a pane will be initially collapsed, and if `collapsed` is set to `false`, a pane will be initially expanded.

### collapsed-size `String`

Specifies the size (in pixels or in percentage) of a collapsible pane when the pane is collapsed. When a pane is collapsed, a `.k-state-collapsed` class is added to the pane to facilitate its styling. The `collapsed-size` value must be less than `panes.max` and more than `panes.min`.

### collapsible `Boolean`

If `collapsible` is set to `true`, a pane is collapsible, and if `collapsible` is set to `false`, a pane is not collapsible.

### content-url `String`

Specifies the URL from which the content of a pane will be loaded.

### max `String`

Specifies the maximum size (in pixels or in percentage) of a pane. The size of a resized pane cannot exceed its defined maximum size.

### min `String`

Specifies the minimum size (in pixels or in percentage) of a pane. The size of a resized pane cannot be less than its defined minimum size.

### resizable `Boolean`

If `resizable` is set to `true`, a pane is resizable, and if `resizable` is set to `false`, a pane is not resizable.

### scrollable `Boolean`

If `scrollable` is set to `true`, a pane is scrollable, and if `scrollable` is set to `false`, a pane is not scrollable.

### size `String`

Specifies the size (in pixels or in percentage) of a pane. The best practice is that one of the panes has to be without a size so that it compensates changes in the viewport size. The `size` value must be less than `panes.max` and more than `panes.min`.

## Suggested Links

* [`Panes` in Kendo UI Splitter for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/splitter/configuration/panes)
