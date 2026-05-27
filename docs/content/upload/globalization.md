---
title: Globalization
description: "Globalize the Kendo UI for Vue Upload in Vue projects by adapting to specific cultures, translating messages, or using the RTL support."
slug: globalization_upload
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

The following example demonstrates how to localize the built-in messages of the Kendo UI for Vue Upload.

{% meta height:280 %}
{% embed_file globalization/main.vue preview %}
{% embed_file globalization/main.js %}
{% endmeta %}


## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:
* [Kendo UI for Vue Native documentation on internationalization]({% slug overview_intl %})
* [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)
## Messages

The Upload supports the localization of its messages by utilizing the Kendo UI for Vue Internationalization package.

The following table lists the built-in message keys and their default values.

|Message Key                                |Default Value                                                           |
|:----------------------------------------- |:---------------------------------------------------------------------- |
|`upload.cancel`                            | `Cancel`                                                               |
|`upload.clearSelectedFiles`                | `Clear`                                                                |
|`upload.dropFileHere`                      | `Drop a file here to upload`                                           |
|`upload.dropFilesHere`                     | `Drop files here to upload`                                            |
|`upload.headerStatusUploaded`              | `Done`                                                                 |
|`upload.headerStatusUploading`             | `Uploading...`                                                         |
|`upload.invalidFileExtension`              | `File type not allowed.`                                               |
|`upload.invalidFiles`                      | `Invalid file(s). Please check file upload requirements.`              |
|`upload.invalidMaxFileSize`                | `File size too large.`                                                 |
|`upload.invalidMinFileSize`                | `File size too small.`                                                 |
|`upload.remove`                            | `Remove`                                                               |
|`upload.retry`                             | `Retry`                                                                |
|`upload.selectSingle`                      | `Select file...`                                                       |
|`upload.select`                            | `Select files...`                                                      |
|`upload.uploadSelectedFiles`               | `Upload`                                                               |
|`upload.total`                             | `Total`                                                                |
|`upload.files`                             | `files`                                                                |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Upload.

{% meta height:280 %}
{% embed_file rtl/main.vue preview %}
{% embed_file rtl/main.js %}
{% endmeta %}

## Suggested Links

* [Globalization]({% slug overview_globalization %})
* [Internationalization]({% slug overview_intl %})
* [Localization]({% slug localization_intl %})
