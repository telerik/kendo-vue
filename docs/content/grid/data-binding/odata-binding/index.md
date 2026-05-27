---
title: CRUD operations with OData v4
page_title: Kendo UI for Vue Native Data Grid - OData remote data binding
description: "Learn how you can implement CRUD data operations in the Native Vue Grid when working with remote OData binding"
slug: data_binding_crud_odata_v4
position: 1
---

# OData CRUD operations with remote data binding

The Kendo UI for Vue Native Grid can display data from different types of sources, including the OData protocol. The below example demonstrates how we can implement CRUD operations in the Native Grid, using OData v4.

In the current article you can go through the main implementation steps of the `OData CRUD demo` or directly test the ready example:

* [Implementation steps](#toc-implementation-steps)
* [OData CRUD operations ready for test demo](#toc-odata-crud-operations-demo)

## Implementation steps

1. Add editing functionality to the Native Grid.
For details how to add editing functionality to the Native Grid, please refer to [this Inline Editing documentation]({% slug editing_inline_grid %}) article. Use the linked example as a starting point for the implementation of the functionality.
2. Configure the `Read data` functionality with an implementation like this:
```jsx-no-run
getData: function (initial) {
  const that = this;
  fetch(
    this.baseUrl + '?' + toODataString(this.dataState) + '&$count=true',
    this.init
  )
    .then((response) => response.json())
    .then((json) => {
      const total = json['@odata.count'];
      const data = json['value'];
      that.total = total;
      that.updatedData = [...data];
      that.gridData = data;
    });
}
```
3. Configure the method that will handle the `changes` in the remote data:
```jsx-no-run
updateService(action = '', item) {
  const that = this;
  const idIfNeeded =
    action === 'DELETE' || action === 'PUT' ? `(${item.ProductID})` : '';
  const url = this.baseUrl + idIfNeeded;
  const body =
    action === 'POST' || action === 'PUT'
      ? JSON.stringify({
          ProductID: item.ProductID,
          ProductName: item.ProductName,
          QuantityPerUnit: item.QuantityPerUnit,
          Discontinued: item.Discontinued,
          UnitPrice: item.UnitPrice,
          UnitsInStock: item.UnitsInStock,
        })
      : {};
  fetch(url, {
    method: action,
    accept: 'application/json',
    headers: {
      'Content-type': 'application/json',
    },
    body: body,
  }).then((response) => {
    if (response.ok) {
      that.getData();
    } else {
      alert('request failed');
    }
  });
},
```
4. Update the `save`, `remove` and `cancelChanges` methods as follows:
```jsx-no-run
save: function (e) {
    let index = this.gridData.findIndex(
    (p) => p.ProductID === e.dataItem.ProductID
    );
    let item = this.gridData[index];
    this.updateService(item.ProductID ? 'PUT' : 'POST', item);
},
remove(e) {
    e.dataItem.inEdit = undefined;
    this.updateService('DELETE', e.dataItem);
},
cancelChanges() {
    this.getData();
},
```

## OData CRUD operations demo
The following example demonstrates we can `read`, `create`, `update` and `delete` remote data using the **Grid** component and the **OData v4** protocol.

{% meta height:730 %}
{% embed_file data-binding/odata4-crud/main.vue preview %}
{% embed_file data-binding/odata4-crud/main.js %}
{% embed_file data-binding/odata4-crud/CommandCell.vue %}
{% endmeta %}

> You can find the implementation of the backend service used in the above example[here](https://github.com/telerik/kendo-ui-demos-service/tree/master/odata-v4).


## Suggested Links

* [Grid Local data operations]({% slug data_binding_crud_local_data %})
* [Grid Remote data operations]({% slug data_binding_crud_remote_data %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
