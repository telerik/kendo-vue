---
title: Persist state
description: "Learn how to save the current Kendo UI for Vue Native Grid state and load it back when needed."
slug: persist_state_grid
position: 220
---

# Persisting the State of the Kendo UI for Vue Grid

A common requirement for web apps is to save the user customization and settings when interacting with your app, and then restore them once the user comes back at some point in the future. The Kendo UI for Vue Grid exposes the capability to save and restore settings that were previously applied.

The following example demonstrates how to persist the Grid state.

{% meta height:780 %}
{% embed_file persist-state/main.vue preview %}
{% embed_file persist-state/main.js %}
{% endmeta %}

## Setup

To persist the state of the Grid:

1. Keep the initial skip, take and sort settings inside the `dataState`:

    ```jsx-no-run
        const dataState = ref({
            sort: [{ field: 'orderDate', dir: 'desc' }],
            skip: 0,
            take: 20,
            filter: { logic: 'and', filters: [] }
        });
    ```

1. Define the column configuration and restore the column state from `localStorage`:

    ```jsx-no-run
    const columns = ref([
        { field: 'customerID', width: 200 },
        { field: 'orderDate', width: 200 },
        { field: 'shipName', width: 200 },
        { field: 'freight', width: 200 },
        { field: 'shippedDate', width: 200 },
        { field: 'employeeID', width: 200 },
        { field: 'orderID', width: 200 }
    ]);

    const loadedColumns = localStorage.getItem('gridColumns');
    const columnsState = ref<any>(loadedColumns ? JSON.parse(loadedColumns) : null);
    ```

1. Create a `saveStateToLocalStorage` function that retrieves the current state and sets it in the localStorage:

    ```jsx-no-run
      const saveStateToLocalStorage = () => {
        const state = {
            dataState: dataState.value,
            columnsState: columnsState.value
        };
        localStorage.setItem('gridState', JSON.stringify(state));
        };
    ```

1. Create a `loadStateFromLocalStorage` function that retrieves the saved state from localStorage and sets the new data to the Grid:

    ```jsx-no-run
      const loadStateFromLocalStorage = () => {
            const savedState = localStorage.getItem('gridState');

            if (savedState) {
                const { dataState: savedDataState, columnsState: savedColumns } = JSON.parse(savedState);
                dataState.value = savedDataState;
                columnsState.value = savedColumns;
            }
        };
    ```

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
