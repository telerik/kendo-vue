---
title: Implementing MultiSelect with Select All and Checkboxes in Kendo UI for Vue
description: Learn how to implement a MultiSelect dropdown with checkboxes and a Select All option in Kendo UI for Vue.
type: how-to
page_title: Create MultiSelect with Select All in Kendo UI for Vue
meta_title: Create MultiSelect with Select All in Kendo UI for Vue
slug: multiselect-select-all-checkboxes
tags: multiselect, dropdownlist, select-all, checkboxes, kendo-ui-for-vue
res_type: kb
ticketid: 1690904
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> Kendo UI for Vue MultiSelect </td>
</tr>
<tr>
<td> Version </td>
<td> 7.0.0 </td>
</tr>
</tbody>
</table>

## Description

I want to implement a multi-select dropdown list with checkboxes and a Select All option using [Kendo UI for Vue MultiSelect](https://www.telerik.com/kendo-vue-ui/components/dropdowns/multiselect/). The component should:

-   Display checkboxes for individual item selection
-   Include a "Select All" option for bulk selection
-   Show the number of selected items when the count exceeds a threshold
-   Prevent the selected items from growing indefinitely in the display

This knowledge base article also answers the following questions:

-   How to add checkboxes to Kendo UI for Vue MultiSelect?
-   How to implement a Select All option in Kendo UI for Vue MultiSelect?
-   How to display the number of selected items in Kendo UI for Vue MultiSelect?
-   How to customize tag rendering in Kendo UI for Vue MultiSelect?

## Solution

To achieve this, use the Kendo UI for Vue MultiSelect component and customize its behavior using custom item rendering and tag management.

### Example Implementation

{% meta height:420 %}
{% embed_file multiselect-select-all-checkboxes/main.vue preview %}
{% embed_file multiselect-select-all-checkboxes/main.js %}
{% endmeta %}

## See Also

-   [Kendo UI for Vue MultiSelect Overview](https://www.telerik.com/kendo-vue-ui/components/dropdowns/multiselect/)
-   [Kendo UI for Vue MultiSelect API Reference](https://www.telerik.com/kendo-vue-ui/components/dropdowns/api/MultiSelectProps/)
-   [Kendo UI for Vue Checkbox Component](https://www.telerik.com/kendo-vue-ui/components/inputs/checkbox/)
-   [Kendo UI for Vue Dropdowns Overview](https://www.telerik.com/kendo-vue-ui/components/dropdowns/)
