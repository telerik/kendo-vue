---
title: Known Limitations
page_title: Vue Grid - Known Limitations in PDF - Kendo UI Native DataGrid
description: "Get started with the PDF export functionality of the native Vue Grid by Kendo UI and learn about its use cases as well as limitations."
slug: limitations_pdfexport_grid
position: 8
---

# Known Limitations

Due to its implementation specifics, the PDF export of the native Vue Grid by Kendo UI has certain limitations.

* The rendition of right-to-left content is not supported.
* The PDF export of hierarchical Grids is not supported.
* Images that are hosted on different domains might not be rendered unless the server provides the permissive [Cross-Origin HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image). Similarly, it might not be possible for fonts to load across domains.

    Even if the proper CORS headers are provided, Internet Explorer 9 will not be able to load images or fonts from another domain, which might raise an uncatchable security exception. To support Internet Explorer 9, host the images and fonts on the same domain as the application.

* When a named slot template is used in the Grid, the PDF export functionality will not export the cells that have an applied template. 
* The PDF 1.5 specification limits the maximum PDF document size to 5,080 x 5,080 millimeters (which equals to 200x200 inches). Larger files might not open in all viewers.
* Older browsers, such as Internet Explorer 9 and Safari, require you to implement a server proxy.

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
