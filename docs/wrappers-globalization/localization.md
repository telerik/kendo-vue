---
title: Localization
page_title: Localization Overview - Kendo UI for Vue
description: "Learn how to use the localization files and change the default messages of Kendo UI components for Vue."
slug: localization_wrappers_vue
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/intl/localization"
position: 2
---

<WrapperBanner link="/kendo-vue-ui/components/intl/localization"></WrapperBanner>

# Localization Overview

Localization is the process of adapting software to meet the requirements of local markets and different languages.

You can change the messages that are displayed in any Kendo UI component for Vue by including an additional script file in the application.

## Setting the Current Language

By default, all Kendo UI components for Vue display their messages in US English. To replace the default text messages, import a language specific `kendo.messages.<language>.js` file in your application.

> Some of the localization files do not contain translations for every language. For more information on the full list of available translations, refer to the [section on contributing](#toc-contribution).

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Scheduler package for Vue.

    ```sh
    npm install --save @progress/kendo-scheduler-vue-wrapper
    ```

1. Import the Kendo UI packages and the required messages script to the Vue application, as demonstrated in the following example.

    ```js
    import $ from 'jquery';

    import '@progress/kendo-ui'
    import '@progress/kendo-theme-default/dist/all.css'

    import '@progress/kendo-ui/js/messages/kendo.messages.de-DE.js'

    import { Scheduler, SchedulerInstaller } from '@progress/kendo-scheduler-vue-wrapper'
    ```

1. Initialize the Vue application which contains a Scheduler component.

    ```html
    <div id="vueapp" class="vue-app row example-wrapper">
        <kendo-scheduler></kendo-scheduler>
    </div>
    ```
    ```js
    Vue.use(SchedulerInstaller);

    new Vue({
        el: '#vueapp'
    })
    ```

## Creating New Localization Files

The localization script replaces default messages in the component prototype with their equivalent translations. The file has to be named following the `kendo.messages.<language>.js` convention. A [language code identifier list](https://msdn.microsoft.com/en-us/library/cc233965.aspx) is available for download from the Microsoft developer network website.

> The `kendo.messages.en-US.js` contains all component messages and may be used as a reference when you create a new localization file. The easiest way to get started is to copy the file, rename it, and translate the messages.

The following example demonstrates how to create a new localization file.

```js
/* <Widget-name> messages */

if (kendo.ui.<Widget-name>) {
kendo.ui.<Widget-name>.prototype.options.messages =
$.extend(true, kendo.ui.<Widget-name>.prototype.options.messages,{
    "<message-name>": "<translation",
    //...
});
}
```

## Contribution

Currently, some of the localization files may be incomplete because they do not contain translations for every language. The full list of currently available translations can be found in the [Kendo UI Core repository](https://github.com/telerik/kendo-ui-core/tree/master/src/messages).

If you notice messages that are not available in the localization files or would like to add localization files for your language, do not hesitate to:

1. Fork the repository.
1. Apply the respective changes.
1. [Submit a pull request](https://github.com/telerik/kendo-ui-core/blob/master/CONTRIBUTING.md#3-submit-a-pull-request).

## Suggested Links

* [Configuration of Kendo UI Components for Vue](slug:configuration_wrappers_vue)
* [Globalization of Kendo UI Components for Vue](slug:globalization_wrappers_vue)
