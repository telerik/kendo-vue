---
title: Getting Started
description: "Get started with the Kendo UI for Vue Internationalization package and learn how to use it in Vue projects."
slug: get_started_intl
position: 10
---

# Getting Started with Kendo UI for Vue Native Internationalization

This guide provides the information you need to start using the Kendo UI for Vue Internationalization component—it includes instructions about the available installation approaches, the required dependencies, the code for running the project, and links to additional resources.

After the completion of this guide, you will be able to achieve an end result as demonstrated in the following example.

{% meta height:200 %}
{% embed_file internationalization/getting-started/main.vue preview %}
{% embed_file internationalization/getting-started/main.js %}
{% endmeta %}

## Setting Up Your Vue Project

Before you install the Kendo UI for Vue Internationalization, make sure that you have a running Vue project. The easiest way to set up a Vue project is to use the approach described in the [Set up the Vue project]({% slug getting_started_javascript_composition_api %}#toc-1-set-up-the-vue-project) section of the [First Steps with JavaScript ]({% slug getting_started_javascript_composition_api %}) article.

## Installing the Package

To install the Kendo UI for Vue Native Internationalization package, run the following command in the root of your Vue project:

```sh
  npm install @progress/kendo-vue-intl @progress/kendo-licensing
```
## Using the Package

1. After successfully installing the Internationalization package, use [`provideIntlService`]({% slug api_intl_provideintlservice %}) to access the internationalization service.

```jsx
import { provideIntlService } from '@progress/kendo-vue-intl';
```

2. Create a `computed` property and use the `formatNumber` function:

```jsx
  computed: {
    formattedNumber() {
      return provideIntlService(this).formatNumber(this.decimal, 'n2');
    },
  }
```
3. Call the computed property in the template:

```jsx
<h5>Result: {{ formattedNumber }}</h5>
```

## Activating Your License Key

Using any of the UI components in the Kendo UI for Vue Native library requires either a commercial license key or an active trial license key.

Follow the instructions on the [My License page]({% slug my_license %}) to activate your trial or commercial license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Next Steps

* [Loading Default and Additional Locale Data](slug:loadingdata_intl)
* [Changing the Current Locale at Runtime](slug:reacting_to_locale_changes_intl)
* [Services](slug:services_intl )
* [API Reference of the Internationalization](slug:api_intl)

## Dependencies

The Internationalization package requires the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) that have to be installed by your application:

* @progress/kendo-licensing

The following dependencies are required only when you apply internationalization to a locale that is different from the default `en-US` one.

* cldr-core
* cldr-dates-full
* cldr-numbers-full

The following dependencies will be installed automatically:

* @telerik/kendo-intl

## Learning Resources

* [Internationalization Overview]({% slug overview_intl %})
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
