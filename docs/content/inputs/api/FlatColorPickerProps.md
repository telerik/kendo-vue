---
title: FlatColorPickerProps
description: "Learn how to build custom functionality when working with the Vue Inputs by Kendo UI with the help of the FlatColorPickerProps."
api_reference: true
type: inner_api
slug: api_inputs_flatcolorpickerprops
---

# FlatColorPickerProps
Represents the properties of [FlatColorPicker](% slug api_inputs_flatcolorpickerprops %) component.


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether the FlatColorPicker is disabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### footer?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets custom footer component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gradientSettings?


</td>
<td type class="table-cell-type">


<code>


[ColorGradientProps]({% slug api_inputs_colorgradientprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the ColorGradient that is displayed in the ColorPicker popup.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets custom header component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `id` property of the top `div` element of the FlatColorPicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### modelRgbaValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The model rgba value of the FlatColorPicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### modelValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the color model value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ColorPickerChangeEvent]({% slug api_inputs_colorpickerchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the user edits the value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onViewchange?


</td>
<td type class="table-cell-type">


<code>


(event: [FlatColorPickerViewChangeEvent]({% slug api_inputs_flatcolorpickerviewchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event handler that will be fired when the view is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### paletteSettings?


</td>
<td type class="table-cell-type">


<code>


[ColorPickerPaletteSettings]({% slug api_inputs_colorpickerpalettesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the ColorPalette that is displayed in the ColorPicker popup.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### prevValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the previous color value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedView?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the FlatColorPicker selected view index. The default is `0`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showButtons?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether action buttons will be rendered in the footer.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showClearButton?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether clear button will be rendered in the header.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showPreview?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether preview and revert color boxes will be rendered in the header.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the FlatColorPicker.

The available options are:
- `small`
- `medium`
- `large`





</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` property of the FlatColorPicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the color value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### view?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the FlatColorPicker view. The default is `combo`.


</td>
</tr>
</tbody>
</table>



