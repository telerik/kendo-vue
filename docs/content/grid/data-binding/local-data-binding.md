---
title: Local data operations
page_title: Kendo UI for Vue Native Data Grid - Local data binding and operations
description: "Learn how you can implement CRUD data operations in the Native Vue Grid when working with local data binding"
slug: data_binding_crud_local_data
position: 10
---

# Local data operations

The current example describes in detail how you can:
* Bind the Grid to `local data`
* `Read`, `Create`, `Update` and `Delete` records
* `Sort`, `Filter` and `Page` Grid's data


In the current article you can go through the main implementation steps of the `Local Data binding demo` or directly test the ready example:

* [Implementation steps](#toc-implementation-steps)
* [Local Data binding CRUD, sort, filter and page operations demo](#toc-local-data-binding-crud-sort-filter-and-page-operations-demo)

## Implementation steps
The below description gives a broader perspective of what configurations must be applied to the Kendo UI for Vue Native Grid to activate the most used functionalities of the component.

1. Bind local data to the Grid

The Grid displays the data passed to its [data-items]({% slug api_grid_gridprops %}) property. The expected format of the passed data is array of text or Object values.

In the example you can see below, the data is defined as follows:
```jsx-no-run
gridData: [
{
    ProductID: 1,
    ProductName: 'Chai',
    UnitsInStock: 39,
    Discontinued: false,
    FirstOrderedOn: new Date(1996, 8, 20),
},
{
    ProductID: 2,
    ProductName: 'Chang',
    UnitsInStock: 17,
    Discontinued: false,
    FirstOrderedOn: new Date(1996, 7, 12),
}
.....................
```
The `gridData` property in the current example is used in a computed property that is passed to the `data-items` prop of the Grid. More details about the mentioned computed property, you can find below.

2. Create, Update and Delete data

The complete example below implements a Grid with `inline editing` functionality. More about the different editing modes available in the Grid, you can find in our [Grid Editing documentation]({% slug editing_grid %}).

To add new data items, edit or delete records, we need to add the below methods that handle the data changes.

```jsx-no-run
itemChange: function (e) {
  const data = this.gridData.slice();
  const index = data.findIndex((d) => d.ProductID === e.dataItem.ProductID);
  data[index] = { ...data[index], [e.field]: e.value };
  this.gridData = data;
  if (event.dataItem) {
    event.dataItem[e.field] = e.value;
  }
},
rowClick: function (e) {
  this.gridData.map((item) => (item.inEdit = false));
  this.editID = e.dataItem.ProductID;
  e.dataItem.inEdit = true;
},
closeEdit(e) {
  if (e.target === e.currentTarget) {
    this.editID = null;
  }
},
addRecord() {
  const newRecord = { ProductID: this.gridData.length + 1 };
  const data = this.gridData.slice();
  data.unshift(newRecord);
  this.gridData = data;
  this.editID = newRecord.ProductID;
}
```

The `addRecord` and `closeEdit` methods are triggered from the Grid Toolbar using the below code:
```jsx-no-run
<grid-toolbar>
  <div @click="closeEdit">
    <kbutton title="Add new" :theme-color="'primary'" @click="addRecord">
      Add new
    </kbutton>
  </div>
</grid-toolbar>
```

The `rowClick` and `itemChange` methods are executed when the [rowClick]({% slug api_grid_gridprops %}#toc-onrowclick) and [itemChange]({% slug api_grid_gridprops %}#toc-onitemchange) events are triggered.

3. Sort, Filter and Page Grid's data

To enable the data `sorting` in the Grid we have to define the [sortable]({% slug api_grid_gridprops %}#toc-sortable) and [sort]({% slug api_grid_gridprops %}#toc-sort) properties together with the [sortchange]({% slug api_grid_gridprops %}#toc-onsortchange) event.

```jsx-no-run
:sortable="true"
:sort="sort"
@sortchange="sortChangeHandler"
```

To enable the data `filtering` in the Grid we have to define the [filterable]({% slug api_grid_gridprops %}#toc-filterable) and [filter]({% slug api_grid_gridprops %}#toc-filter) properties together with the [filterchange]({% slug api_grid_gridprops %}#toc-onfilterchange) event.

```jsx-no-run
:filterable="true"
:filter="filter"
@filterchange="filterChangeHandler"
```

To enable the data `paging` in the Grid we have to define the [take]({% slug api_grid_gridprops %}#toc-take) and [skip]({% slug api_grid_gridprops %}#toc-skip) properties together with the [pagechange]({% slug api_grid_gridprops %}#toc-onpagechange) event.

```jsx-no-run
:take="take"
:skip="skip"
@pagechange="pageChangeHandler"
```

4. Define the values of the different properties and methods used by the Grid

Below is the definition of the data props related to the `sorting`, `filtering` and `paging`:
```jsx-no-run
sort: null,
filter: null,
skip: 0,
take: 3,
```

Here is the definition of the methods used by Grid events that handle the data `sorting`, `filtering` and `paging`:
```jsx-no-run
sortChangeHandler(event) {
  this.sort = event.sort;
},
filterChangeHandler(event) {
  this.filter = event.filter;
},
pageChangeHandler(event) {
  this.take = event.page.take;
  this.skip = event.page.skip;
}
```

5. The `process` method

The **process** method is part of the `@progress/kendo-data-query` package and plays important role in the data manipulations inside the Native Grid component.

The method transforms the Grid data based on the **sort**, **filter**, **take** and **skip** properties passed to it. Below is the way we use it in the context of our local data binding example. The `result` computed property is passed to the `data-items` of the Grid and have the value returned by the **process** method.

```jsx-no-run
result: {
  get: function () {
    return process(this.gridData, {
      sort: this.sort,
      filter: this.filter,
      take: this.take,
      skip: this.skip,
    });
  },
}
```

## Local Data binding CRUD, sort, filter and page operations demo
This example demonstrates how to perform multiple data operations in a Grid bound to local data.

{% meta height:380 %}
{% embed_file data-binding/local-data-operations/main.vue preview %}
{% embed_file data-binding/local-data-operations/main.js %}
{% endmeta %}


## Suggested Links

* [Grid Remote data operations]({% slug data_binding_crud_remote_data %})
* [Grid CRUD operations with OData v4]({% slug data_binding_crud_odata_v4 %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
