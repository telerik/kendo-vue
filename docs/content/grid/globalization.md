---
title: Globalization
page_title: Vue Grid - Globalization - Kendo UI Native DataGrid
description: "Get started with the globalization functionality of the native Vue Grid by Kendo UI and learn how to localize built-in messages."
slug: globalization_grid
position: 500
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

The following example demonstrates how to:
* Change the date format and month names to Spanish.
* Localize the built-in Grid messages.
* Localize the column header messages.

{% meta height:600 %}
{% embed_file globalization/main.vue preview %}
{% embed_file globalization/main.js %}
{% endmeta %}

The key points in the implementation of the above examples are as follows:
* Change Grid's built-in messages using the [LocalizationProvider]({% slug api_intl_localizationproviderprops %}) component and the [loadMessages]({% slug api_intl_loadmessages %}) function.

Using the `loadMessages` method as follows will assign the texts in the `esMessages` object to the '**es-ES**' language definition.

```jsx-no-run
    loadMessages(esMessages, 'es-ES');
```

Having the above, by changing between the `es-ES` and the default `es-EN` languages(the language prop of the LocalizationProvider), we can switch the built-in messages of the Grid.

```jsx-no-run
    <localization :language="spanish ? 'es-ES' : 'en-EN'">
            .................
    </localization>
```

* Change Grid's data formatting based on a specific country selection using the [IntlProvider]({% slug api_intl_intlproviderprops %}) component and the [load]({% slug api_intl_load %}) function.

Using the `load` function as follows will load the specific formatting for the Spanish language. You can notice that the **numbers**, **currencies**, **caGregorian**, **dateFields** and **timeZoneNames** are imported from file that has `es` in its URL. If we want to import the formatting configurations for French, for example, we need to update the URL from `es` to `fr`.

```jsx-no-run
    import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
    import currencyData from 'cldr-core/supplemental/currencyData.json';
    import weekData from 'cldr-core/supplemental/weekData.json';

    import numbers from 'cldr-numbers-full/main/es/numbers.json';
    import currencies from 'cldr-numbers-full/main/es/currencies.json';
    import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
    import dateFields from 'cldr-dates-full/main/es/dateFields.json';
    import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

    load(
        likelySubtags,
        currencyData,
        weekData,
        numbers,
        currencies,
        caGregorian,
        dateFields,
        timeZoneNames
    );
```

Having the above, by changing the `locale` prop of the `IntlProvider` component, we can switch between the loaded formatting configurations.
```jsx-no-run
    <intl :locale="spanish ? 'es' : 'en'">
        .............
    </intl>
```


* Change Grid's header messaged using computed properties passed to the title prop of each Grid column.

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:
* [Kendo UI for Vue Native documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)


## Messages

The following table lists the built-in message keys and their default values.

|Message Key                                |Default Value                                                           |
|:----------------------------------------- |:---------------------------------------------------------------------- |
|`grid.groupPanelEmpty`                     | `Drag a column header and drop it here to group by that column`        |
|`grid.pagerItemsPerPage`                   | `items per page`                                                       |
|`grid.pagerInfo`                           | `{0} - {1} of {2} items`                                               |
|`grid.pagerFirstPage`                      | `Go to the first page`                                                 |
|`grid.pagerPreviousPage`                   | `Go to the previous page`                                              |
|`grid.pagerNextPage`                       | `Go to the next page`                                                  |
|`grid.pagerLastPage`                       | `Go to the last page`                                                  |
|`grid.pagerPage`                           | `Page`                                                                 |
|`grid.pagerOf`                             | `of`                                                                   |
|`grid.filterClearButton`                   | `Clear`                                                                |
|`grid.filterEqOperator`                    | `Is equal to`                                                          |
|`grid.filterNotEqOperator`                 | `Is not equal to`                                                      |
|`grid.filterIsNullOperator`                | `Is null`                                                              |
|`grid.filterIsNotNullOperator`             | `Is not null`                                                          |
|`grid.filterIsEmptyOperator`               | `Is empty`                                                             |
|`grid.filterIsNotEmptyOperator`            | `Is not empty`                                                         |
|`grid.filterStartsWithOperator`            | `Starts with`                                                          |
|`grid.filterContainsOperator`              | `Contains`                                                             |
|`grid.filterNotContainsOperator`           | `Does not contain`                                                     |
|`grid.filterEndsWithOperator`              | `Ends with`                                                            |
|`grid.filterGteOperator`                   | `Is greater than or equal to`                                          |
|`grid.filterGtOperator`                    | `Is greater than`                                                      |
|`grid.filterLteOperator`                   | `Is less than or equal to`                                             |
|`grid.filterLtOperator`                    | `Is less than`                                                         |
|`grid.filterIsTrue`                        | `Is true`                                                              |
|`grid.filterIsFalse`                       | `Is false`                                                             |
|`grid.filterBooleanAll`                    | `(All)`                                                                |
|`grid.filterAfterOrEqualOperator`          | `Is after or equal to`                                                 |
|`grid.filterAfterOperator`                 | `Is after`                                                             |
|`grid.filterBeforeOperator`                | `Is before`                                                            |
|`grid.filterBeforeOrEqualOperator`         | `Is before or equal to`                                                |
|`grid.noRecords`                           | `No records available.`                                                |

## Suggested Links

* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})
* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
