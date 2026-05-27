---
title: Overview
description: "Get started with the Kendo UI for Vue Native Form package by Kendo and learn more about how to use the component in Vue projects."
slug: overview_form
position: 0
---

# Kendo UI for Vue Native Form Overview

Kendo UI for Vue Native Form is a small and fast package for form state management with zero dependencies.

The component [integrates with all Kendo UI for Vue components]({% slug custom_components_form %}). The content of the Form should be defined in a separate component. The "content" component then should be nested inside the Form. With this nesting, the Form will provide all needed properties to the nested "content" component.

To use the provided Form functionality, the [KendoFrom Injected Property]({% slug api_form_fieldinjectedprops %}) should be [injected](https://v3.vuejs.org/guide/component-provide-inject.html) in the child "content" component using the below code.

```jsx-no-run
    inject: {
        kendoForm: { default: {} },
    }
```

For creating form layouts the `Form package` provides the:
* [Kendo UI for Vue FormElement component]({% slug api_form_formelementprops %})
* [Kendo UI for Vue FieldWrapper component]({% slug api_form_fieldwrapperprops %})

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Form and Field components in action. You will see the way the `FormContent` custom component defines the Form fields.

{% meta height:480 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/FormContent.vue %}
{% embed_file shared/FormInput.vue %}
{% embed_file basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Custom components]({% slug custom_components_form %})
* [Advanced configuration]({% slug common_scenarios_form %})
* [Validation]({% slug validation_form %})
* [Layout]({% slug layout_form %})
* [Labels]({% slug labels_form %})

## Installation
To initialize the Form, either:

* [Use the CDN service](#toc-using-cdn), or
* [Use Webpack](#toc-initializing-with-webpack).

### Using CDN
To use the Kendo UI for Vue Native Form with CDN, follow the below steps:

1. Reference the `form` package.

```sh
  <script src="https://unpkg.com/@progress/kendo-vue-form@latest/dist/cdn/js/kendo-vue-form.js"></script>
```

2. Reference one of the Kendo UI themes to style your components.

```sh
    // Load the Kendo Default Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css">

    // Load the Kendo Bootstrap Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-bootstrap@latest/dist/all.css">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    // To load the Kendo Material Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-material@latest/dist/all.css">

    // To load the Kendo Fluent Theme
    <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-fluent@latest/dist/all.css">
```


3. Follow the instructions in [this article]({% slug my_license %}#toc-set-license-key-when-using-cdn-scripts) to activate your product license. You can skip this step if your application already contains a license key.

### Initializing with Webpack

1. Download and install the package. Use Node.js v5.0.0 or later.

    ```sh
       npm install --save @progress/kendo-vue-form @progress/kendo-licensing @progress/kendo-svg-icons
    ```

2. Once installed, import the package module.

   ```jsx-no-run
    // ES2015 module syntax
    import { Form, Field } from '@progress/kendo-vue-form';
    ```

    ```jsx-no-run
    // CommonJS format
    const { Form, Field } = require('@progress/kendo-vue-form');
    ```

3. You are required to install one of the Kendo UI for Vue themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles).

4. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

The Form package requires the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) that have to be installed by your application:

* vue 3.0.0*
* @progress/kendo-licensing
* @progress/kendo-svg-icons

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Support and Learning Resources

* [Form Homepage](https://www.telerik.com/kendo-vue-ui/vue-form)
* [API Reference of the Form Component](slug:api_form_formprops)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Form Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=form)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
