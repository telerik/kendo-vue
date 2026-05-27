---
title: SegmentedControlProps
description: "Learn how to build custom functionality when working with the Vue Buttons by Kendo UI with the help of the SegmentedControlProps."
api_reference: true
type: inner_api
slug: api_buttons_segmentedcontrolprops
---

# SegmentedControlProps
Represents the properties of the SegmentedControl component.

The SegmentedControl displays a horizontal set of mutually exclusive button segments,
allowing the user to select one option at a time.


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


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initially selected item value when the component is in uncontrolled mode (i.e., `value` is not provided).
Once set, subsequent changes to `defaultValue` are ignored.

```vue
<SegmentedControl :default-value="'option2'" :items="items" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### items?


</td>
<td type class="table-cell-type">


<code>


[SegmentedItemProps]({% slug api_buttons_segmenteditemprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the collection of items rendered as buttons inside the SegmentedControl.

```vue
<SegmentedControl :items="[{ value: 'opt1', text: 'Option 1' }, { value: 'opt2', text: 'Option 2' }]" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemTemplate?


</td>
<td type class="table-cell-type">


<code>


string | (itemData: [SegmentedItemProps]({% slug api_buttons_segmenteditemprops %})) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom template for the item content. When provided, it replaces the default rendering
(SVG icon + text span) entirely.

Accepts a string (slot name) or a render function. The slot receives `{ props: { item } }`
where `item` is the full item configuration object.

```vue
<SegmentedControl :items="items" :item-template="'myTemplate'">
    <template #myTemplate="{ props }">
        <span>{{ props.item.text }}</span>
    </template>
</SegmentedControl>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### layoutMode?


</td>
<td type class="table-cell-type">


<code>


"stretch" | "compact"


</code>


</td>
<td class="table-cell-default">


<code>


"compact"


</code>


</td>
<td class="table-cell-comment">


Specifies the layout mode of the SegmentedControl.

- `compact`: Items are sized based on their content (default).
- `stretch`: Items stretch to fill the available horizontal space, applying the `k-segmented-control-stretched` CSS class.




```vue
<SegmentedControl :layout-mode="'stretch'" :items="items" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "xs" | "large"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the size of the SegmentedControl items. The value is mapped through `kendoThemeMaps.sizeMap`
to the corresponding CSS size class.

The available options are:
- `xs`
- `small`
- `medium`
- `large`
- `null` — Does not set a size className.

```vue
<SegmentedControl :size="'large'" :items="items" />
```



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


The currently selected item value.
When provided, the component operates in controlled mode and the `change` event must be used to update this value.
The item whose `value` matches this prop receives the `k-selected` CSS class.

```vue
<SegmentedControl :value="selectedValue" @change="(val) => selectedValue = val" :items="items" />
```



</td>
</tr>
</tbody>
</table>



