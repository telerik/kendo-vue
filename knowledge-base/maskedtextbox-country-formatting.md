---
title: Dynamically Format Phone Numbers by Country in Kendo UI for Vue Native MaskedTextBox
description: Learn how to dynamically format phone numbers based on selected country codes using the Kendo UI for Vue Native MaskedTextBox
type: how-to
page_title: How to implement dynamic phone number formatting in the Kendo UI for Vue MaskedTextBox
slug: maskedtextbox-country-formatting
tags: maskedtextbox, dynamic, phone, number, formatting, masking, code
ticketid: 1660190
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.2.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native</td>
	    </tr>
    </tbody>
</table>

## Description

How can I dynamically format a phone number based on a country code selected from a DropDownList using the MaskedTextBox?

## Solution

1. Define a list of countries with their corresponding phone number masks and prefixes:

```jsx
  const countries = [
    { name: 'Andorra', code: '🇦🇩', mask: '000-000-000', prefix: '+376' },
    { name: 'Germany', code: '🇩🇪', mask: '0000-0000000', prefix: '+49' },
  ];
```

2. Handle the [onChange]({% slug api_dropdowns_dropdownlistprops %}#toc-onChange) event of the DropDownList to update the selected country and mask format:


```jsx
  methods: {
    handleCountryChange(event) {
      this.selectedCountry = event.target.value;
      this.mask = this.selectedCountry ? this.selectedCountry.mask : '';
      this.value = '';
      this.formattedValue = '';
    },
  },
```

3. Handle the [onChange]({% slug api_inputs_maskedtextboxprops %}#toc-onChange) event of the MaskedTextBox to update the input value, apply the mask format and dynamically format the phone number:

```jsx
  methods: {
    handleOnChange(event) {
      const newValue = event.target.value;
      this.value = newValue;
      const cleanValue = newValue.replace(/[^0-9]/g, '');
      if (this.selectedCountry) {
        this.formattedValue = `${this.selectedCountry.prefix}${cleanValue}`;
      } else {
        this.formattedValue = newValue;
      }
    }
  }
```

{% meta id:index height:500 %}
{% embed_file maskedtextbox-country-formatting/main.vue preview %}
{% embed_file maskedtextbox-country-formatting/main.js %}
{% endmeta %}

