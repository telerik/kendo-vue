---
title: Using CDN
page_title: Using CDN - Kendo UI for Vue
description: "Learn how to use the CDN service which are available for the wrappers when working with Kendo UI for Vue."
slug: using_cdn
use_runner: true
position: 1
toc: true
---

# Using CDN

The Kendo UI for Vue packages are available from a CDN service.

## Basic Usage

To use the Kendo UI wrappers for Vue, include the respective `<script>` element to your page. The following example demonstrates how to initialize the Calendar by using its Vue wrapper.

```html
<!--Load Kendo styles from the Kendo CDN service-->
<link rel="stylesheet" href="https://kendo.cdn.telerik.com/2023.1.314/styles/kendo.common.min.css"/>
<link rel="stylesheet" href="https://kendo.cdn.telerik.com/2023.1.314/styles/kendo.default.min.css"/>

<!--Load the required libraries - jQuery, Kendo, Babel and Vue-->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://kendo.cdn.telerik.com/2023.1.314/js/kendo.all.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!--Load the required Kendo Vue package(s)-->
<script src="https://unpkg.com/@progress/kendo-dateinputs-vue-wrapper/dist/cdn/kendo-dateinputs-vue-wrapper.min.js"></script>

<div id="vueapp" class="vue-app">
  <kendo-calendar :value="new Date()" selection></kendo-calendar>
</div>

<script>
  const { createApp } = Vue;
  createApp({
  	components: {
      'kendo-calendar':window.KendoDateinputsVueWrapper.Calendar
    }
  }).mount('#vueapp')
</script>
```

## Available Packages

Based on the similarities of their core functionalities, the Kendo UI components are grouped in packages which can be accessed by using the CDN services.

The following packages are available as CDN bundles:

| CDN Package | Components
|:---         |:---
| https://unpkg.com/@progress/kendo-barcodes-vue-wrapper/dist/cdn/kendo-barcodes-vue-wrapper.js       | Barcode and QRCode
| https://unpkg.com/@progress/kendo-buttons-vue-wrapper/dist/cdn/kendo-buttons-vue-wrapper.js         | Button, ButtonGroup, and ToolBar
| https://unpkg.com/@progress/kendo-charts-vue-wrapper/dist/cdn/kendo-charts-vue-wrapper.js           | Chart, all Chart series types, Sparkline, and StockChart
| https://unpkg.com/@progress/kendo-chat-vue-wrapper@2018.3.911/dist/cdn/kendo-chat-vue-wrapper.min.js  | Chat
| https://unpkg.com/@progress/kendo-datasource-vue-wrapper/dist/cdn/kendo-datasource-vue-wrapper.js   | DataSource, GanttDataSource, GanttDependencyDataSource, HierarchicalDataSource, PivotDataSource, SchedulerDataSource, and TreeListDataSource
| https://unpkg.com/@progress/kendo-dateinputs-vue-wrapper/dist/cdn/kendo-dateinputs-vue-wrapper.js   | Calendar, DateInput,  DatePicker, DateTimePicker, and TimePicker
| https://unpkg.com/@progress/kendo-diagram-vue-wrapper/dist/cdn/kendo-diagram-vue-wrapper.js         | Diаgram
| https://unpkg.com/@progress/kendo-dialog-vue-wrapper/dist/cdn/kendo-dialog-vue-wrapper.js           | Dialog
| https://unpkg.com/@progress/kendo-dropdowns-vue-wrapper/dist/cdn/kendo-dropdowns-vue-wrapper.js     | AutoComplete, ComboBox, DropDownList, and MultiSelect
| https://unpkg.com/@progress/kendo-dropdowntree-vue-wrapper@2018.3.911/dist/cdn/kendo-dropdowntree-vue-wrapper.min.js  | DropDownTree
| https://unpkg.com/@progress/kendo-editor-vue-wrapper/dist/cdn/kendo-editor-vue-wrapper.js           | Editor
| https://unpkg.com/@progress/kendo-gantt-vue-wrapper/dist/cdn/kendo-gantt-vue-wrapper.js             | Gantt
| https://unpkg.com/@progress/kendo-gauges-vue-wrapper/dist/cdn/kendo-gauges-vue-wrapper.js           | ArcGauge, LinearGauge, and RadialGauge
| https://unpkg.com/@progress/kendo-grid-vue-wrapper/dist/cdn/kendo-grid-vue-wrapper.js               | Grid
| https://unpkg.com/@progress/kendo-inputs-vue-wrapper/dist/cdn/kendo-inputs-vue-wrapper.js           | ColorPicker, MaskedTextBox, NumericTextBox, RangeSlider, Slider, and Switch
| https://unpkg.com/@progress/kendo-layout-vue-wrapper/dist/cdn/kendo-layout-vue-wrapper.js           | ContextMenu, Menu, PanelBar, Splitter, and TabStrip
| https://unpkg.com/@progress/kendo-listbox-vue-wrapper/dist/cdn/kendo-listbox-vue-wrapper.js         | ListBox
| https://unpkg.com/@progress/kendo-listview-vue-wrapper/dist/cdn/kendo-listview-vue-wrapper.js       | ListView and Pager
| https://unpkg.com/@progress/kendo-map-vue-wrapper/dist/cdn/kendo-map-vue-wrapper.js                 | Map
| https://unpkg.com/@progress/kendo-mediaplayer-vue-wrapper/dist/cdn/kendo-mediaplayer-vue-wrapper.js | MediaPlayer
| https://unpkg.com/@progress/kendo-pivotgrid-vue-wrapper/dist/cdn/kendo-pivotgrid-vue-wrapper.js     | PivotGrid
| https://unpkg.com/@progress/kendo-popups-vue-wrapper/dist/cdn/kendo-popups-vue-wrapper.js           | Notification and Tooltip
| https://unpkg.com/@progress/kendo-scheduler-vue-wrapper/dist/cdn/kendo-scheduler-vue-wrapper.js     | Scheduler
| https://unpkg.com/@progress/kendo-scrollview-vue-wrapper/dist/cdn/kendo-scrollview-vue-wrapper.js   | ScrollView
| https://unpkg.com/@progress/kendo-spreadsheet-vue-wrapper/dist/cdn/kendo-spreadsheet-vue-wrapper.js | Spreadsheet
| https://unpkg.com/@progress/kendo-treelist-vue-wrapper/dist/cdn/kendo-treelist-vue-wrapper.js       | TreeList
| https://unpkg.com/@progress/kendo-treemap-vue-wrapper/dist/cdn/kendo-treemap-vue-wrapper.js         | TreeMap
| https://unpkg.com/@progress/kendo-treeview-vue-wrapper/dist/cdn/kendo-treeview-vue-wrapper.js       | TreeView
| https://unpkg.com/@progress/kendo-upload-vue-wrapper/dist/cdn/kendo-upload-vue-wrapper.js           | Upload
| https://unpkg.com/@progress/kendo-validator-vue-wrapper/dist/cdn/kendo-validator-vue-wrapper.js     | Validator
| https://unpkg.com/@progress/kendo-window-vue-wrapper/dist/cdn/kendo-window-vue-wrapper.js           | Window

## Suggested Links

* [Configuring the Kendo UI Wrappers for Vue](slug:configuration_wrappers_vue)
* [Model Binding of the Kendo UI Wrappers for Vue](slug:modelbinding_wrappers_vue)
* [Getting Started with Kendo UI for Vue](slug:getting_started)
