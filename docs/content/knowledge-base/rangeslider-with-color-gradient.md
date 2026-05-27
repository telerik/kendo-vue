---
title: Creating a Color Gradient on RangeSlider in Kendo UI for Vue
description: Learn how to style the RangeSlider component to display a color gradient representing a controlled color temperature range.
type: how-to
page_title: How to Add a Color Gradient to RangeSlider in Vue Applications
slug: rangeslider-with-color-gradient
tags: rangeslider, vue, color-gradient, styling, custom-styles
res_type: kb
ticketid: 1663769
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>current</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® Kendo UI for Vue RangeSlider</td>
        </tr>
    </tbody>
</table>

## Description

This KB article answers the following questions:

-   How to customize the RangeSlider in Vue with a color gradient?
-   How to represent a color temperature range using the RangeSlider in Vue?
-   How to style the RangeSlider track and selection with custom colors in Vue?

## Solution

You can display a color gradient on the [RangeSlider](slug://overview_rangeslider) component in a Vue application by customizing its default CSS styles. Apply a linear gradient to the slider's element and adjust the drag handle and selection background for a cohesive look. Here's how to achieve this styling:

```css
.k-slider.myRangeSlider {
    .k-slider-track {
        background: rgb(255, 199, 37);
        background: linear-gradient(90deg, rgba(255, 199, 37, 1) 19%, rgba(154, 208, 223, 1) 84%);
    }
    div.k-slider-selection {
        background-color: transparent;
    }

    .k-draghandle {
        background-color: white;
        border-width: 2px;
    }
}
```

By following these steps, you can successfully add a color gradient to the RangeSlider component in your Vue application.

## See Also

-   [Official RangeSlider Documentation](slug://overview_rangeslider)
-   [Customizing Component Styles in Vue](slug://themesandstyles)
-   [Vue RangeSlider API](slug://api_inputs_rangesliderprops)
