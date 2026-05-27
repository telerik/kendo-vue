---
title: Loading Data
description: "Load default and additional locale data when working with the Kendo UI for Vue Native Internationalization component in Vue projects."
slug: loadingdata_intl
position: 20
---

# Loading Data

The Internationalization package enables you to load default and additional locale data.

## Default Locale Data

The default `IntlService` service implementation supports basic operations in the `en-US` locale. Some operations, such as the parsing and formatting of currencies other than USD, require you to load the full locale information. For more details, refer to the [following section on loading additional locale data](#toc-additional-locale-data).

## Additional Locale Data

When you parse and format dates and numbers for a locale that is different from the default `en-US` one, you have to [load CLDR data](#toc-loading-cldr-data).

The CLDR data is available in the following locations:

1. CLDR data is split into functional groupings among the [cldr-core](https://www.npmjs.com/package/cldr-core), [cldr-numbers-full](https://www.npmjs.com/package/cldr-numbers-full), [cldr-dates-full](https://www.npmjs.com/package/cldr-dates-full), and other packages which directly download the CLDR data files.

    > The Kendo UI for Vue components use the cldr-core, cldr-dates-full, and cldr-numbers-full packages. For more information about the available CLDR packages, refer to the article on [JSON packing](http://cldr.unicode.org/development/development-process/design-proposals/json-packaging).

1. CLDR data is combined in the [cldr-data](https://www.npmjs.com/package/cldr-data) NPM package which unzips the files in your `node_modules` folder through a post-installation script.

### Loading CLDR Data

As a data reference for all locales, the following examples use the [cldr-core](https://www.npmjs.com/package/cldr-core), [cldr-numbers-full](https://www.npmjs.com/package/cldr-numbers-full), and [cldr-dates-full](https://www.npmjs.com/package/cldr-dates-full) packages.

1. Install the needed CLDR packages by running the following command:

    ```sh-no-run
    npm install --save cldr-core cldr-numbers-full cldr-dates-full
    ```

1. Import and load the required files in your component from the following locations:

    - `cldr-core/supplemental/LOCALE_FILE.json`
    - `cldr-PACKAGE_NAME/main/LOCALE_NAME/LOCALE_FILE.json`

You can also import the data from the cldr-data package at the `cldr-data/main/LOCALE_NAME/LOCALE_FILE.json` location.

The following example demonstrates how to load the locale files in your component.


{% meta height:300 %}
{% embed_file load-prebuild-data/main.vue preview %}
{% embed_file load-prebuild-data/main.js %}
{% embed_file load-prebuild-data/DateFormatter.vue %}
{% endmeta %}

The Internationalization package provides options for loading locale data to the following projects:
- Applications that are [created with vue create](#toc-vue-create-applications)

### vue-create Applications

If you work with applications that are created with `vue create`, load the desired locales and the supplemental data. For more information on which files are required for specific features, refer to the [documentation on the Kendo UI for Vue Native Internationalization package](https://github.com/telerik/kendo-intl/blob/master/docs/cldr/index.md#prerequisites).

The following example demonstrates the sample configuration for loading locale data in applications that are created with [`vue create`](https://cli.vuejs.org/guide/creating-a-project.html).

```jsx-no-run
<template>
    <intl :locale="'es'">
        /* your content here*/
    </intl>
</template>

<script>
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import localCurrency from 'cldr-numbers-full/main/es/currencies.json';
import numbers from 'cldr-numbers-full/main/es/numbers.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';

import { IntlProvider, load } from '@progress/kendo-vue-intl';

load(
    likelySubtags,
    currencyData,
    weekData,
    localCurrency,
    numbers,
    caGregorian,
    dateFields,
);

export default {
    components: {
        'intl': IntlProvider,
    }
};
</script>
```

## Suggested Links

- [IntlService API Reference]({% slug api_intl_intlservice %})
- [Troubleshooting]({% slug troubleshooting_intl %})
