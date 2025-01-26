---
title: Overview
page_title: MaskedTextBox Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI MaskedTextBox wrapper for Vue delivers and use the component in Vue projects."
slug: overview_maskedtextbox_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/inputs/maskedtextbox/"
position: 1
---

<div><WrapperBanner link="/kendo-vue-ui/components/inputs/maskedtextbox"></WrapperBanner></div>    

# MaskedTextBox Overview

The MaskedTextBox uses a mask to control the input of the user.

You can define the specific format by using the [`mask`](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox#configuration-mask) option of the component. Each mask can contain mask rules and mask literals. The mask literals are automatically entered for the user and cannot be removed. When the MaskedTextBox initializes, it decorates the `<input>` element with a `k-textbox` CSS class.

The MaskedTextBox supports the following predefined rules:
- Required or optional digit input.
- Required or optional letter input.
- Required or optional character input (allows any character).

The MaskedTextBox wrapper for Vue is a client-side wrapper for the [Kendo UI MaskedTextBox](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the MaskedTextBox in action.

{% meta height:100 %}
{% embed_file maskedtextbox/basic/main.vue preview %}
{% embed_file maskedtextbox/basic/main.js %}
{% endmeta %}

## Functionality and Features

* [Mask rules]({% slug mask_rules_maskedtextbox_wrapper %})
* [Literals]({% slug literals_maskedtextbox_wrapper %})
* [Customized masked rules]({% slug customized_mask_rules_maskedtextbox_wrapper %})
* [RTL support]({% slug right_to_left_support_maskedtextbox_wrapper %})

## Suggested Links

* [Kendo UI MaskedTextBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/maskedtextbox/overview)
* [API Reference of the MaskedTextBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/maskedtextbox)
