---
title: Parsing and Formatting of Dates and Numbers
description: "Load default and additional locale data when working with the Kendo UI for Vue Native Internationalization component"
slug: parsingandformatting_intl
position: 40
---

# Parsing and Formatting of Dates and Numbers

The Kendo UI for Vue Internationalization package utilizes the [Kendo UI Internationalization modules](https://github.com/telerik/kendo-intl/tree/master#readme) for date and number parsing and formatting, and builds on top of them to adapt them to the Vue context.

For more information on parsing and formatting date and number options, refer to the [kendo-intl](https://github.com/telerik/kendo-intl/tree/master#readme) GitHub repository.

## Using CLDR-JSON Data

When you parse and format dates and numbers for a locale that is different from the default `en-US` one, you have to [load CLDR data](#toc-loading-cldr-data).

The CLDR data is available in the following locations:

1. CLDR data is split into functional groupings among the [cldr-core](https://www.npmjs.com/package/cldr-core), [cldr-numbers-full](https://www.npmjs.com/package/cldr-numbers-full), [cldr-dates-full](https://www.npmjs.com/package/cldr-dates-full), and other packages which directly download the CLDR data files.

    > The Kendo UI for Vue components use the cldr-core, cldr-dates-full, and cldr-numbers-full packages. For more information about the available CLDR packages, refer to the article on [JSON packing](https://cldr.unicode.org/development/development-process/design-proposals/json-packaging-approved-by-the-cldr-tc-on-2015-03-25).

1. CLDR data is combined in the [cldr-data](https://www.npmjs.com/package/cldr-data) NPM package which unzips the files in your `node_modules` folder through a post-installation script.

As a data reference for all locales, the following examples use the [cldr-core](https://www.npmjs.com/package/cldr-core), [cldr-numbers-full](https://www.npmjs.com/package/cldr-numbers-full), and [cldr-dates-full](https://www.npmjs.com/package/cldr-dates-full) packages.

1. Install the needed CLDR packages by running the following command:

    ```sh-no-run
    npm install --save cldr-core cldr-numbers-full cldr-dates-full
    ```

1. Import and load the required files in your component from the following locations:

    - `cldr-core/supplemental/LOCALE_FILE.json`
    - `cldr-PACKAGE_NAME/main/LOCALE_NAME/LOCALE_FILE.json`

You can also import the data from the cldr-data package at the `cldr-data/main/LOCALE_NAME/LOCALE_FILE.json` location.

## Date Parsing

Date parsing converts a string into a `Date` object by using the specific settings of the locale. For more information on date parsing, refer to the `kendo-intl` [Date Parsing section](https://github.com/telerik/kendo-intl/blob/develop/docs/date-parsing/index.md).


{% meta height:250 %}
{% embed_file date-parsing/main.vue preview %}
{% embed_file date-parsing/main.js %}
{% endmeta %}

## Date Formatting

Date formatting converts a `Date` object into a human-readable string by using the specific settings of the locale. For more information on date formatting, refer to the `kendo-intl` [Date Formatting section](https://github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md).

{% meta height:300 %}
{% embed_file date-formatting/main.vue preview %}
{% embed_file date-formatting/main.js %}
{% endmeta %}

## Number Parsing

Number parsing converts a string into a `Number` object by using the specific settings of the locale. For more information on number parsing, refer to the `kendo-intl` [Number Parsing section](https://github.com/telerik/kendo-intl/blob/develop/docs/num-parsing/index.md).

{% meta height:350 %}
{% embed_file number-parsing/main.vue preview %}
{% embed_file number-parsing/main.js %}
{% endmeta %}

## Number Formatting

Number formatting converts a `Number` object into a human-readable string using the specific settings of the locale. For more information on number formatting, refer to the `kendo-intl` [Number Formatting section](https://github.com/telerik/kendo-intl/blob/develop/docs/num-formatting/index.md).

{% meta height:380 %}
{% embed_file number-formatting/main.vue preview %}
{% embed_file number-formatting/main.js %}
{% endmeta %}

## General Formatting

General formatting provides methods for independent placeholder and type formatting by using the specific settings of the locale. For more information on general formatting, refer to the `kendo-intl` [General Formatting section](https://github.com/telerik/kendo-intl/blob/develop/docs/general-formatting/index.md).

{% meta height:300 %}
{% embed_file general-formatting/main.vue preview %}
{% embed_file general-formatting/main.js %}
{% endmeta %}

## Suggested Links

* [Globalization Support]({% slug globalization_support %})
* [API Reference of the Internationalization]({% slug api_intl %})
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
