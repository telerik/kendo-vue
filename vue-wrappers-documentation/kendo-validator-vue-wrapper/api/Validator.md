---
title: Validator API
description: "API Index | Validator"
api_reference: true
slug: api_validatordirective
---

# Validator

The Validator receives its options through the `v-kendo-validator` directive. All available options for the [Kendo Validator widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/validator) are available as options for the directive.

```html-no-run
<form id="ticketsForm" ref="myForm" v-kendo-validator="setup" @submit.prevent="onSubmit">
 ...
</form>

...

new Vue({
    data: {
        setup: {
            rules: {
                greaterdate (input) {
                    if (input.is("[name='RetireDate'") && input.val() != "") {
                        var date = kendo.parseDate(input.val()),
                                            otherDate = kendo.parseDate(kendo.jQuery("[name='HireDate']").val());
                        return otherDate == null || otherDate.getTime() < date.getTime();
                    }
                    return true;
                }
            },
            messages: {
                greaterdate: 'Retire date should be greater than Hire date'
            }
        }
});
```
