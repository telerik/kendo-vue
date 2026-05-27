---
title: Globalization
description: "Globalize the Kendo UI for Vue Date Inputs in Vue projects by adapting to specific cultures, loading translated messages, or using the RTL support."
slug: globalization_dateinputs
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

The following example demonstrates how to use the Spanish date format and month names in the available Date Inputs and how to localize their built-in messages.

{% meta height:720 %}
{% embed_file globalization/main.vue preview %}
{% embed_file globalization/main.js %}
{% embed_file globalization/es.json %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:
* [Kendo UI for Vue Native documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)


## Messages

The Date Inputs support the localization of their messages by utilizing the Kendo UI for Vue Internationalization package.

The following table lists the built-in message keys and their default values.

|Message Key                                |Default Value                  |
|:----------------------------------------- |:------------------------------|
|`dateinput.increment`                      | `Increase value`              |
|`dateinput.decrement`                      | `Decrease value`              |
|`calendar.today`                           | `TODAY`                       |
|`datepicker.toggleCalendar`                | `Toggle calendar`             |
|`datetimepicker.date`                      | `Date`                        |
|`datetimepicker.time`                      | `Time`                        |
|`datetimepicker.toggleDateTimeSelector`    | `Toggle date-time selector`   |
|`datetimepicker.cancel`                    | `Cancel`                      |
|`datetimepicker.set`                       | `Set`                         |
|`timepicker.now`                           | `NOW`                         |
|`timepicker.selectNow`                     | `Select Now`                  |
|`timepicker.cancel`                        | `Cancel`                      |
|`timepicker.set`                           | `Set`                         |
|`timepicker.toggleTimeSelector`            | `Toggle TimeSelector`         |
|`timepicker.toggleClock`                   | `Toggle Clock`                |
|`calendar.prevView`                        | `Navigate to previous view`   |
|`calendar.nextView`                        | `Navigate to next view`       |

## Right-to-Left Support

The Date Inputs do not provide RTL support.

## Suggested Links

* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})