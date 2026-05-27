---
title: Overview
page_title: Kendo UI for Vue Wizard functionality | Kendo UI for Vue Native
description: 'Use the combination of the Kendo UI for Vue Native Stepper and Form components to create a Wizard inside a Vue project.'
slug: overview_wizard
position: 1
---

# Kendo UI for Vue Native Wizard Overview

The Kendo UI for Vue Native Wizard consists of one or more steps. Each step contains a [Form]({% slug overview_form %}) with a set of components. The different steps can have their own custom layout that doesn't depend on the other steps.

A common use-case scenario for the `Wizard` component is a longer Form which is organized into multiple steps. Talking with real-life examples imagine a payment details form where one page is asking for personal information, another of the card information, and so on.

The main advantage of `Wizard` is allowing customers and leads to complete their information in smaller chunks, which creates a positive user experience and increases conversions.

> The Kendo UI for Vue Wizard is not a separate component that can provide the `Wizard` functionality out of the box. However, using the combination of the Native [Form]({% slug overview_form %}) and [Stepper]({% slug overview_stepper %}) components, we can effortlessly achieve the functionality of a virtual Wizard component.

The Kendo UI for Vue Native [Form]({% slug overview_form %}) and [Stepper]({% slug overview_stepper %}) components are part of the Kendo UI for Vue library of Native Vue UI components. Each of the components is distributed through NPM under the following packages:

- Stepper - [kendo-vue-layout package](https://www.npmjs.com/package/@progress/kendo-vue-layout).
- Form - [kendo-vue-form package](https://www.npmjs.com/package/@progress/kendo-vue-form).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Virtual Wizard component in action.

{% meta height:520 %}
{% embed_file wizard/basic/main.vue preview %}
{% embed_file wizard/basic/AccountDetails.vue %}
{% embed_file wizard/basic/PersonalDetails.vue %}
{% embed_file wizard/basic/Register.vue %}
{% embed_file wizard/basic/main.js %}
{% embed_file wizard/basic/FormInput.vue %}
{% embed_file wizard/basic/validators.js %}
{% endmeta %}

## Functionality and Features

- [Wizard data validation]({% slug wizard_validation %})
- [Using the Wizard functionality with router]({% slug wizard_router %})
- [Content positioning]({% slug wizard_positioning %})

## Suggested Links

- [Getting started with the Form component]({% slug overview_form %})
- [API Reference of the Form]({% slug api_form %})
- [Getting started with the Stepper component]({% slug overview_stepper %})
- [API Reference of the Stepper]({% slug api_layout_stepper %})
- [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
