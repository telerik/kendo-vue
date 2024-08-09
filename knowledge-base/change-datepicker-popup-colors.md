---
title: Customize the Colors inside the DatePicker Popup
description: An example on how you can customize the colors inside the popup of the Kendo UI for Vue Native DatePicker.
type: how-to
page_title: Customize the DatePicker Popup Colors - Kendo UI for Vue Native DatePicker
slug: change-datepicker-popup-color
tags: datepicker, popup, change, customize, color, kendovue
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.0.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>


## Description

How to customize the colors of the different elements inside the popup of the Kendo UI for Vue Native DatePicker?

## Solution

Use the [`popup`](slug:api_dateinputs_datepickerprops#toc_popup) prop to pass a [`custom`](slug:custom_rendering_datepicker#toc-customizing-the-popup) popup template to the DatePicker. 

In the custom popup template we must use the [`Popup`](slug:overview_popup) component and its [`popupClass`](slug:api_popup_popupprops#toc_popupclass) property. 

Once the value of the `popupClass` property is defined, we can use this value to apply styles to the different DOM elements inside the popup. Here are the styles used in the below example:

```html
<style>
/* Set the background of the Popup */
.inner-wrapper .k-calendar,
.inner-wrapper .k-calendar table {
	background-color: #8bc34a;
}

/* Set the text color of the different elements inside the Popup */
.inner-wrapper .k-calendar,
.inner-wrapper .k-calendar table thead,
.inner-wrapper .k-calendar,
.inner-wrapper .k-calendar table td {
	color: #ffff00;
}

/* Style the current date and the "Today" button */
.inner-wrapper .k-calendar table td.k-today span.k-link,
.inner-wrapper .k-calendar div.k-calendar-header span {
	color: #0000ff;
}
</style>
```

{% meta id:index height:400 %}
{% embed_file change-datepicker-popup-colors/main.vue preview %}
{% embed_file change-datepicker-popup-colors/CustomPopup.vue %}
{% embed_file change-datepicker-popup-colors/styles.css %}
{% embed_file change-datepicker-popup-colors/main.js %}
{% endmeta %}
