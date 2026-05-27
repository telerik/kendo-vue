---
title: GridPagerType
description: "Learn how to build custom functionality when working with the Vue Datatools by Kendo UI with the help of the GridPagerType."
api_reference: true
type: inner_api
slug: api_data-tools_gridpagertype
---

# GridPagerType
The type of the Grid pager.

The available values are:
* `numeric`&mdash;Buttons with numbers.
* `input`&mdash;An input field for typing the page number.

```tsx-no-run

  <Grid
    :data-items="products"
    :columns="columns"
    :pageable="{ type: 'numeric'}">
  </Grid>
```


`type` GridPagerType = "numeric" | "input";
