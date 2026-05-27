---
title: Remote data operations
page_title: Kendo UI for Vue Native Data Grid - Remote data binding and operations
description: "Learn how you can implement CRUD data operations in the Native Vue Grid when working with remote server data"
slug: data_binding_crud_remote_data
position: 15
---

# Remote data operations

The `Kendo UI for Vue Native Grid` can work with both `local` and `remote` data. The way we work with remote data binding is pretty much the same as the way we work with local data. The configurations of the Grid are the same as those used in the [Local data operations]({% slug data_binding_crud_local_data %}).

The difference when working with remote data is the implementation of the logic that reads and edits the records.

> What the Grid expects is an array of the data it should display. It is up to each developer's implementation how this data will be fetched and how Grid's data state will be maintained. The implementation of the logic that reads and edits the remote records depends on the backend service your data is handled by.

When implementing remote data binding, what you can do is to use the Local data operations example as a basis. At the points where a given operation is performed over the local data array:
1. You can make the needed calls to the remote service and wait for a response
2. Once you have a confirmation from the server, update the data array used by Grid
3. With the update of the array, the new data will be reactively displayed in the Grid

In the cases when you `edit`, `create`, `update` or `delete` data it is up to each developer/team to decide:
* If after the remote operation is completed, the whole updated dataset will be fetched from the server
* Or the executed operation will be applied directly to data available on the client.

## Data specifics

There are scenarios in which the data we can fetch from our remote service is not fully compatible with the Native Grid. In other projects, often we need to format our data in a specific way. In such scenarios, we can use the client to transform the available data to a format expected by the Grid.

For example the below code formats the `orderDate` and `shippedDate` fields in specific format. Also if the value of the `shippedDate` field is '**null**', it will be changed to '**undefined**'.

```jsx-no-run
const DATE_FORMAT = 'yyyy-mm-dd hh:mm:ss.SSS';
const intl = new IntlService();

orders.forEach((o) => {
    o.orderDate = intl.parseDate(o.orderDate, DATE_FORMAT);
    o.shippedDate =
        o.shippedDate === 'NULL'
            ? undefined
            : intl.parseDate(o.shippedDate, DATE_FORMAT);
});
```

## Suggested Links

* [Grid Local data operations]({% slug data_binding_crud_local_data %})
* [Grid CRUD operations with OData v4]({% slug data_binding_crud_odata_v4 %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
