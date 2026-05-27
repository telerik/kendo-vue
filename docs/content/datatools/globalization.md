---
title: Globalization
description: "Globalize the Kendo UI for Vue Data Tools in Vue projects by adapting to specific cultures, loading translated messages, or using the RTL support."
slug: globalization_datatools
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in Kendo UI for Vue, refer to the [overview article]({% slug overview_globalization %}).
The following example demonstrates how to localize the built-in messages of the Kendo UI for Vue Pager and Filter components.

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

* [Kendo UI for Vue documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Pager and Filter components support the localization of its messages by utilizing the [Kendo UI for Vue Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

|Message Key                                |Default Value                                                           |
|:----------------------------------------- |:---------------------------------------------------------------------- |
|`pager.itemsPerPage`                       | `items per page`                                                       |
|`pager.info`                               | `{0} - {1} of {2} items`                                               |
|`pager.firstPage`                          | `Go to the first page`                                                 |
|`pager.previousPage`                       | `Go to the previous page`                                              |
|`pager.nextPage`                           | `Go to the next page`                                                  |
|`pager.lastPage`                           | `Go to the last page`                                                  |
|`pager.page`                               | `Page`                                                                 |
|`pager.of`                                 | `of`                                                                   |
|`pager.totalPages`                         | `{0}`                                                                  |
|`filter.eqOperator`                        | `Is equal to`                                                          |
|`filter.notEqOperator`                     | `Is not equal to`                                                      |
|`filter.isNullOperator`                    | `Is null`                                                              |
|`filter.isNotNullOperator`                 | `Is not null`                                                          |
|`filter.isEmptyOperator`                   | `Is empty`                                                             |
|`filter.isNotEmptyOperator`                | `Is not empty`                                                         |
|`filter.startsWithOperator`                | `Starts with`                                                          |
|`filter.containsOperator`                  | `Contains`                                                             |
|`filter.notContainsOperator`               | `Does not contain`                                                     |
|`filter.endsWithOperator`                  | `Ends with`                                                            |
|`filter.gteOperator`                       | `Is greater than or equal to`                                          |
|`filter.gtOperator`                        | `Is greater than`                                                      |
|`filter.lteOperator`                       | `Is less than or equal to`                                             |
|`filter.ltOperator`                        | `Is less than`                                                         |
|`filter.isTrue`                            | `Is true`                                                              |
|`filter.isFalse`                           | `Is false`                                                             |
|`filter.afterOrEqualOperator`              | `Is after or equal to`                                                 |
|`filter.afterOperator`                     | `Is after`                                                             |
|`filter.beforeOperator`                    | `Is before`                                                            |
|`filter.beforeOrEqualOperator`             | `Is before or equal to`                                                |
|`filter.andLogic`                          | `And`                                                                  |
|`filter.orLogic`                           | `Or`                                                                   |
|`filter.addExpression`                     | `Add Expression`                                                       |
|`filter.addGroup`                          | `Add Group`                                                            |
|`filter.close`                             | `Close`                                                                |
|`columnMenu.filterClearButton`             | `Clear`                                                                |
|`columnMenu.filterSubmitButton`            | `Filter`                                                               |
|`columnMenu.filterTitle`                   | `Filter`                                                               |
|`columnMenu.sortAscending`                 | `Sort Ascending`                                                       |
|`columnMenu.sortDescending`                | `Sort Descending`                                                      |
|`columnMenu.filterEqOperator`              | `Is equal to`                                                          |
|`columnMenu.filterNotEqOperator`           | `Is not equal to`                                                      |
|`columnMenu.filterIsNullOperator`          | `Is null`                                                              |
|`columnMenu.filterIsNotNullOperator`       | `Is not null`                                                          |
|`columnMenu.filterIsEmptyOperator`         | `Is empty`                                                             |
|`columnMenu.filterIsNotEmptyOperator`      | `Is not empty`                                                         |
|`columnMenu.filterStartsWithOperator`      | `Starts with`                                                          |
|`columnMenu.filterContainsOperator`        | `Contains`                                                             |
|`columnMenu.filterNotContainsOperator`     | `Does not contain`                                                     |
|`columnMenu.filterEndsWithOperator`        | `Ends with`                                                            |
|`columnMenu.filterGteOperator`             | `Is greater than or equal to`                                          |
|`columnMenu.filterGtOperator`              | `Is greater than`                                                      |
|`columnMenu.filterLteOperator`             | `Is less than or equal to`                                             |
|`columnMenu.filterLtOperator`              | `Is less than`                                                         |
|`columnMenu.filterIsTrue`                  | `Is true`                                                              |
|`columnMenu.filterAfterOrEqualOperator`    | `Is after or equal to`                                                 |
|`columnMenu.filterAfterOperator`           | `Is after`                                                             |
|`columnMenu.filterBeforeOperator`          | `Is before`                                                            |
|`columnMenu.filterBeforeOrEqualOperator`   | `Is before or equal to`                                                |
|`columnMenu.filterAndLogic`                | `And`                                                                  |
|`columnMenu.filterOrLogic`                 | `Or`                                                                   |

The following example demonstrates how the language of the Pager & Filter components can be switched when the localization of the component is changed.

{% meta height:400 %}
{% embed_file globalization/basic-usage/main.vue preview %}
{% embed_file globalization/basic-usage/main.js %}
{% embed_file globalization/basic-usage/es.json %}
{% endmeta %}

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Pager & Filter components.

{% meta height:350 %}
{% embed_file globalization/rtl/main.vue preview %}
{% embed_file globalization/rtl/main.js %}
{% endmeta %}
## Suggested Links

* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})
