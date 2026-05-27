---
title: TreeListPDFExportProps
description: "Learn how to build custom functionality when working with the Vue Pdf by Kendo UI with the help of the TreeListPDFExportProps."
api_reference: true
type: inner_api
slug: api_pdf_treelistpdfexportprops
---

# TreeListPDFExportProps
Represents the props of the KendoVue PDFExport component.


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### author?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The author (metadata) of the PDF document.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### avoidLinks?


</td>
<td type class="table-cell-type">


<code>


string | boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A flag that indicates whether to produce actual hyperlinks in the exported PDF file.
It is also possible to set a CSS selector. All matching links will be ignored.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### creator?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"Kendo UI PDF Generator"


</code>


</td>
<td class="table-cell-comment">


The creator of the PDF document.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### date?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The date when the PDF document is created. Defaults to `new Date()`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fileName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"export.pdf"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the exported PDF file.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### forcePageBreak?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An optional CSS selector that specifies the elements which cause the page breaks.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### forceProxy?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the content is forwarded to `proxyURL` even if the
browser supports local saving of files.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### imageResolution?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The forced resolution of the images in the exported PDF document.
By default, the images are exported at their full resolution.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### keepTogether?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An optional CSS selector that specifies the elements which should not be split across the pages.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### keywords?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The keywords (metadata) of the PDF document.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### landscape?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


A flag that indicates if the page will be in a landscape orientation.
By default, the page is in a portrait orientation.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### margin?


</td>
<td type class="table-cell-type">


<code>


string | number | PageMargin


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the margins of the page.

The supported units are:
* `"mm"`
* `"cm"`
* `"in"`
* `"pt"` (default).

> Numbers are considered to be points (`"pt"`).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageTemplate?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A Vue functional or class component which is used as a template that is inserted
into each page of the PDF document. The number of the current page (`pageNum`)
and the total number of pages (`totalPages`) are passed to the component as properties.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### paperSize?


</td>
<td type class="table-cell-type">


<code>


PaperSize


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the paper size of the PDF document. Defaults to `"auto"` which means that the paper size
is determined by the content.
The size of the content in pixels matches the size of the output in points (1 pixel = 1/72 inch).

If set, the content will be split across multiple pages.
This enables the `repeatHeaders` and `scale` options, and allows you to specify a template.

The supported values are:
* A predefined size. The supported paper sizes are: `A0-A10`, `B0-B10`, `C0-C10`,
`Executive`, `Folio`, `Legal`, `Letter`, `Tabloid`.
* An array of two numbers which specify the width and height in points (1pt = 1/72in).
* An array of two strings which specify the width and height in units.
The supported units are `"mm"`, `"cm"`, `"in"`, and `"pt"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### producer?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The producer (metadata) of the PDF document.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### proxyData?


</td>
<td type class="table-cell-type">


<code>


{[key: string]: string}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A key/value dictionary of form values which will be sent to the proxy.
Can be used to submit Anti-Forgery tokens and other metadata.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### proxyTarget?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"_self"


</code>


</td>
<td class="table-cell-comment">


A name or keyword which indicates where to display the document that is returned from the proxy.
To display the document in a new window or iframe,
the proxy has to have the `"Content-Disposition"` header set to `inline; filename="<fileName.pdf>"`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### proxyURL?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The URL of the server-side proxy which streams the file to the end user.
You need to use a proxy if the browser is not capable of saving files locally&mdash;
for example, Internet Explorer 9 and Safari.
It is your responsibility to implement the server-side proxy.

In the request body, the proxy receives a POST request with the following parameters:

- `"contentType"`&mdash;The MIME type of the file.
- `"base64"`&mdash;The base-64 encoded file content.
- `"fileName"`&mdash;The file name, as requested by the caller.

The proxy returns the decoded file with the `"Content-Disposition"` header set to `attachment;
filename="<fileName.pdf>"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### repeatHeaders?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the `<thead>` elements of the tables will be repeated on each page.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scale?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


1


</code>


</td>
<td class="table-cell-comment">


A scale factor.
The text size on the screen might be too big for printing.
To scale down the output in PDF, use this option.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### subject?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The subject (metadata) of the PDF document.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title (metadata) of the PDF document.


</td>
</tr>
</tbody>
</table>



