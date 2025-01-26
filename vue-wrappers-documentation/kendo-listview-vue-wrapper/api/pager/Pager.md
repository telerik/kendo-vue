---
title: Pager API
description: "API Index | Pager"
api_reference: true
slug: api_pagercomponent_wrapper
---

# Pager

## Directive

`kendo-pager`

## Props

### auto-bind `Boolean`

Indicates whether the `refresh` method of the Pager will be called during its initialization ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/autobind)).

### button-count `Number`

The number of buttons that are displayed in the numeric Pager ([`buttonCount` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/buttoncount)).

### data-source `Object`

An instance of the Kendo UI DataSource ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/datasource). The setting of the `data-source` option is mandatory because the Pager manages paging over the DataSource and also gets values, such as the page size and the total count of items, from the DataSource.

### select-template `String`

The template for the link of the selected page number ([`selectTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/selecttemplate)).

### link-template `String`

The template for the links of the page numbers ([`linkTemplate` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/linktemplate)).

### info `Boolean`

Defines if the label which shows the current paging information will be displayed ([`info` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/info)).

### input `Boolean`

Defines if an input element which allows the user to navigate to a given page will be displayed ([`input` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/input)).

### numeric `Boolean`

Defines if a numeric portion of the Pager will be shown ([`numeric` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/numeric)).

### page-sizes `Boolean | Array`

If `page-sizes` is set to `true`, the Pager will display a drop-down list which will allow the user to pick a page size ([`pageSizes` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/pagesizes)). By default, the drop-down list for the page size is not displayed. To override the default list, set `page-sizes` to an array of predefined page sizes. If `page-sizes` is set to `all`, the page size will be set to the total number of records. If a `pageSize` setting is provided for the data source, then the `page-sizes` value will be initially selected.

### previous-next `Boolean`

Defines if the Pager will display buttons for navigating to the first or last, previous or next pages ([`previousNext` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/previousnext)).

### refresh `Boolean`

Defines if the Pager will display a **Refresh** button ([`refresh` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/refresh)). Clicking on the **Refresh** button will call the `read()` method of the DataSource to get the actual data.

### responsive `Boolean`

Defines if the pager will be responsive ([`responsive` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/responsive)).

### messages `Object`

Defines the texts that will be displayed within the Pager ([`messages` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/configuration/messages)). Used for customization and localization of the Pager messages. The supported composite props are available in [`MessagesProps`]({% slug api_pager_messagesprops_wrapper %}).

## Events

### change: `Function`

Fires when the current page was changed ([`change` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager/events/change)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/ui/pager#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Pager instance.
