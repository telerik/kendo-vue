---
title: Create a custom validation error
description: An example on how to create a custom validation error for the Kendo UI for Vue Native Upload
type: how-to
page_title: Create a custom validation error - Kendo UI for Vue Native Upload
slug: upload-custom-validation-error
tags: upload, kendovue, validation, error, custom
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.3.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® Kendo UI for Vue Native Upload</td>
	    </tr>
    </tbody>
</table>

## Description

This Knowledge base(KB) article demonstrates how we can add a custom validation error for the Upload component.


## Solution

1. Import the [`LocalizationProvider`](slug:api_intl_localizationprovider) and wrap the Upload component in it:

```js-no-run
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from '@progress/kendo-vue-intl';

<localization :language="'en-US'">
    <upload
      :batch="false"
      :multiple="true"
      :files="files"
      @add="onAdd"
      @remove="onRemove"
      @progress="onProgress"
      @statuschange="onStatusChange"
      :with-credentials="false"
      :save-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/save'"
      :remove-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'"
    />
  </localization>
```

2. Add the text for the custom error and pass it to the `loadMessages` method:
```js-no-run
const enMessages = {
  upload: {
    customerror: 'Custom Error',
  },
};
loadMessages(enMessages, 'en-US');
```

3. Inside the `onAdd` event handler set the `customerror`
```js-no-run
event.newState[0].validationErrors
```
### Runnable example

{% meta id:index height:480 %}
{% embed_file upload-custom-validation-error/main.vue preview %}
{% embed_file upload-custom-validation-error/main.js %}
{% endmeta %}
