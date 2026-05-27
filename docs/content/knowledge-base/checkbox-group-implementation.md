---
title: Creating a Checkbox Group in Kendo UI for Vue
description: Learn how to create a custom Checkbox Group in Kendo UI for Vue by iterating over an array and rendering individual checkboxes.
type: how-to
page_title: Implementing Checkbox Group in Kendo UI for Vue
meta_title: Implementing Checkbox Group in Kendo UI for Vue
slug: checkbox-group-implementation
tags: checkbox, kendo-ui-for-vue, checkbox-group, custom-group
res_type: kb
ticketid: 1701684
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> Kendo UI for Vue Checkbox </td>
</tr>
<tr>
<td> Version </td>
<td> 7.0.0 </td>
</tr>
</tbody>
</table>

## Description

I want to create a Checkbox Group in [Kendo UI for Vue](https://www.telerik.com/kendo-vue-ui/components/inputs/checkbox/). The framework does not include a built-in CheckboxGroup component, so I need an alternative solution for achieving the desired functionality.

This knowledge base article also answers the following questions:

-   How to implement a Checkbox Group in Kendo UI for Vue?
-   How to iterate over an array to create multiple checkboxes in Vue?
-   How to add mass selection logic in a custom Checkbox Group?
-   How to limit the number of selected checkboxes?

## Solution

To create a Checkbox Group, implement a custom solution by iterating over an array to render individual Kendo UI Checkbox components.

### Basic Implementation

1. Define an array containing the options for the checkboxes.
2. Use Vue's `v-for` directive to loop over the array elements and render a Checkbox for each element.
3. Add custom logic for mass selection and define conditions to disable checkboxes based on your requirements.

### Example with Select All and Limited Selection

The following example demonstrates:

-   A "Select All" checkbox that controls all individual checkboxes
-   Individual checkboxes for each option
-   Logic to limit selection to a maximum of 2 items (unless "Select All" is used)
-   Automatic disabling of unselected checkboxes when the limit is reached

{% meta height:620 %}
{% embed_file checkbox-group-implementation/main.vue preview %}
{% embed_file checkbox-group-implementation/main.js %}
{% endmeta %}

## Notes

-   This implementation uses the Kendo UI for Vue `Checkbox` component, which provides consistent styling and behavior.
-   The selection limit (2 in this example) can be easily adjusted by modifying the condition in the `:disabled` binding.
-   You can extend this pattern to add validation, custom styling, or integration with forms.

## See Also

-   [Kendo UI for Vue Checkbox Overview](https://www.telerik.com/kendo-vue-ui/components/inputs/checkbox/)
-   [Kendo UI for Vue Checkbox API Reference](https://www.telerik.com/kendo-vue-ui/components/inputs/api/CheckboxProps/)
-   [Vue.js Composition API Documentation](https://vuejs.org/guide/extras/composition-api-faq.html)
