---
title: FieldValidatorType
description: "Learn how to build custom functionality when working with the Vue Form by Kendo UI with the help of the FieldValidatorType."
api_reference: true
type: inner_api
slug: api_form_fieldvalidatortype
---

# FieldValidatorType
The validator function for the Field component. The function arguments are:

* value - The current value of the field.
* valueGetter - Function which can be used to get other fields value.
Usable when validator depends on more than one field. Supports field paths.
* fieldProps - Props of the Field component. Currently contains only the `name` prop.
Usable when one validator is used across multiple fields.

Returns `string` to signify error or `undefined` to signify validation success.



