---
title: Overview
page_title: "Vue Chart Component & Overview | Kendo UI for Vue Native"
description: "Try our Kendo UI for Vue Native Chart Component and show variety of data using our different charts."
slug: overview_charts
position: 0
---

# Kendo UI for Vue Native Charts Overview

Our Kendo UI for Vue Native Charts package delivers a collection of 17 customizable [`charts and series types`](#toc-chart-types) for data visualization. Along with the most common Bar, Line, Donut & Pie charts the Native Vue suite also provides more specific charts like the StockChart and Sparkline.

All Charts are built from scratch with Vue and support all the features and benefits provided by the framework. The components are compatible with both Vue 2 and Vue 3.

> Historically, all Kendo UI for Vue Native components support both **Vue 2** and **Vue 3**, however Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

Based on our experience of making enterprise-ready components for almost 2 decades, the Native Vue Charts cover most of the specific scenarios and customizations one can need.

<div data-component="StartFreeTrialSection"></div>

## Kendo UI for Vue Native Charts Demo

{% meta height:900 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}


## Table of contents
- [Installation](#toc-installation)
- [Chart Types](#toc-chart-types)
- [Charts Features](#toc-charts-features)
- [Dependencies](#toc-dependencies)


## Installation

To initialize the Charts, either:

* [Use the CDN service](#toc-using-cdn), or
* [Use Webpack](#toc-initializing-with-webpack).

### Using CDN
To use the Kendo UI for Vue Native Charts with CDN, follow the below steps:

1. Reference the `charts`, `intl` and `drawing` packages.

```sh
  <script src="https://unpkg.com/@progress/kendo-vue-intl@latest/dist/cdn/js/kendo-vue-intl.js"></script>
  <script src="https://unpkg.com/@progress/kendo-drawing/dist/cdn/js/kendo-drawing.js">
  <script src="https://unpkg.com/@progress/kendo-vue-charts@latest/dist/cdn/js/kendo-vue-charts.js"></script>

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
       npm install --save @progress/kendo-vue-charts @progress/kendo-licensing @progress/kendo-vue-intl @progress/kendo-drawing
    ```

2. Once installed, import the package module.

   ```jsx-no-run
    // ES2015 module syntax
    import {
      ChartSeriesLabels, ChartSeriesMarkers, ChartLegend, ChartLegendTitle, ChartValueAxisTitle, ChartValueAxisLabels, Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartTitle, ChartTooltip, ChartValueAxis, ChartValueAxisItem,   ....... Other Chart sub-components
    } from "@progress/kendo-vue-charts";
    ```

    ```jsx-no-run
    // CommonJS format
    const {
      ChartSeriesLabels, ChartSeriesMarkers, ChartLegend, ChartLegendTitle, ChartValueAxisTitle, ChartValueAxisLabels, Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartTitle, ChartTooltip, ChartValueAxis, ChartValueAxisItem,   ....... Other Chart sub-components
    } = require('@progress/kendo-vue-charts');
    ```

3. You are required to install one of the Kendo UI for Vue themes to style your components. For more information on how to add the styles, refer to the article on [getting started]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles).

4. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.


## Chart Types

### Categorical

<Row>
    <Column count={4.8}>
        <Component href="{% slug area_seriestypes_charts %}">
            <svg id="area" viewBox="0 0 70 70">
                <path d="M53.85,27.68l-13.05-9L28.74,33.72l-12.92-7L3,39.59V60H67V13.44ZM16.18,29.23l13.08,7L41.2,21.35l12.95,9L65,18.56v6L53.81,34.81l-13.06-6-12,13L15.91,36.89,5,43.26V40.41ZM53.73,41l-13-1L28.81,48.89l-12.9-4L5,50.38V45.57l11.09-6.47,13.19,5.07,12-13,12.94,6L65,27.27v6.19Z" />
            </svg>
            <ComponentTitle>Area</ComponentTitle>
            <ComponentDescription>Area charts and Vertical Area charts are categorical charts, which are suitable for displaying quantitative data by using continuous lines.</ComponentDescription>
        </Component>
    </Column>
    <Column count={4.8}>
        <Component href="{% slug barcolumn_seriestypes_charts %}">
            <svg id="bar" viewBox="0 0 70 70">
                <path d="M12,60H9V29h3ZM24,36H21V60h3ZM36,20H33V60h3ZM48,33H45V60h3ZM60,21H57V60h3ZM6,36H3V60H6Zm12-3H15V60h3Zm12-4H27V60h3Zm12-3H39V60h3Zm12,2H51V60h3ZM66,15H63V60h3Z" />
            </svg>
            <ComponentTitle>Bar</ComponentTitle>
            <ComponentDescription>Bar charts and Column charts are categorical charts, which display data by using horizontal or vertical bars whose lengths vary according to their value.</ComponentDescription>
        </Component>
    </Column>
    <Column count={4.8}>
        <Component href="{% slug boxplot_seriestypes_charts %}">
            <svg id="boxplot" viewBox="0 0 70 70">
                <path class="cls-1" d="M26,28H24V11h2Zm2,1H22v8h6Zm-2,9H24V49h2ZM36,20H34v5h2Zm2,6H32V39h6ZM36,40H34V55h2ZM6,21H4v9H6ZM8,31H2V46H8ZM6,47H4v6H6ZM16,17H14v9h2Zm2,10H12V41h6ZM16,42H14V58h2ZM66,11H64V27h2Zm2,17H62V39h6ZM66,40H64v6h2ZM46,14H44V29h2Zm2,16H42V43h6ZM46,44H44v4h2ZM56,18H54v7h2Zm2,8H52V49h6ZM56,50H54V60h2Z" />
            </svg>
            <ComponentTitle>Box Plot</ComponentTitle>
            <ComponentDescription>Box Plot charts are categorical charts, which graphically render groups of numerical data through their quartiles.</ComponentDescription>
        </Component>
    </Column>
    <Column count={4.8}>
        <Component href="{% slug bullet_seriestypes_charts %}">
            <svg id="bullet" viewBox="0 0 70 70">
                <path d="M51,42v2H33V42ZM3,40v6H32V40Zm52,2v2H67V42Zm-3-4V48h2V38ZM26,56v2H40V56ZM3,54v6H25V54Zm41,2v2H67V56Zm-3-4V62h2V52Zm0-24v2h4V28ZM3,26v6H40V26Zm46,2v2H67V28Zm-3-4V34h2V24ZM28,14v2H57V14ZM3,12v6H27V12Zm58,2v2h6V14Zm-3-4V20h2V10Z" />
            </svg>
            <ComponentTitle>Bullet</ComponentTitle>
            <ComponentDescription>Bullet charts are categorical charts, which are a variation of the Bar charts.</ComponentDescription>
        </Component>
    </Column>
    <Column count={4.8}>
        <Component href="{% slug line_seriestypes_charts %}">
           <svg id="line" viewBox="0 0 70 70">
                <path d="M66,10a4,4,0,0,0-4,4,4,4,0,0,0,.62,2.12l-6.71,8.39a3.9,3.9,0,0,0-4.54.5l-6.62-5.67A4,4,0,0,0,45,18a4,4,0,1,0-7,2.67L30.75,33.42a3.88,3.88,0,0,0-3.82.18l-7.14-6.35A4,4,0,0,0,20,26a4,4,0,1,0-7.36,2.16L5.87,37.48A4,4,0,0,0,4,37a4,4,0,1,0,3.35,1.84l6.78-9.32a3.9,3.9,0,0,0,4.55-.57L25.54,35A4,4,0,0,0,25,37a4,4,0,1,0,7.3-2.26l7.41-13A3.85,3.85,0,0,0,43.62,21l6.62,5.67A4,4,0,0,0,50,28a4,4,0,0,0,8,0,4,4,0,0,0-.62-2.12l6.71-8.39A4,4,0,0,0,66,18a4,4,0,0,0,0-8ZM4,43a2,2,0,1,1,2-2A2,2,0,0,1,4,43ZM14,26a2,2,0,1,1,2,2A2,2,0,0,1,14,26ZM29,39a2,2,0,1,1,2-2A2,2,0,0,1,29,39ZM41,20a2,2,0,1,1,2-2A2,2,0,0,1,41,20ZM54,30a2,2,0,1,1,2-2A2,2,0,0,1,54,30ZM66,16a2,2,0,1,1,2-2A2,2,0,0,1,66,16Zm0,27a4,4,0,0,0-2.68,1.05l-5.4-2.31a4,4,0,1,0-7.69.55l-6,3.41A4,4,0,0,0,37,48a4,4,0,0,0,.22,1.25l-5.88,2.52a4,4,0,0,0-5.63,1l-6.1-3A4,4,0,0,0,20,48a4,4,0,0,0-8,0,4,4,0,0,0,.24,1.31L6.17,53.65A4,4,0,1,0,8,57a4,4,0,0,0-.48-1.86L13.35,51a3.94,3.94,0,0,0,4.94.29L25,54.64c0,.12,0,.24,0,.36a4,4,0,1,0,7.65-1.62l5.67-2.43A4,4,0,0,0,45,48a3.91,3.91,0,0,0,0-.4L51.33,44a3.94,3.94,0,0,0,5.73-.42l5.16,2.21A4,4,0,0,0,62,47a4,4,0,1,0,4-4ZM4,59a2,2,0,1,1,2-2A2,2,0,0,1,4,59Zm12-9a2,2,0,1,1,2-2A2,2,0,0,1,16,50Zm13,7a2,2,0,1,1,2-2A2,2,0,0,1,29,57Zm12-7a2,2,0,1,1,2-2A2,2,0,0,1,41,50Zm13-7a2,2,0,1,1,2-2A2,2,0,0,1,54,43Zm12,6a2,2,0,1,1,2-2A2,2,0,0,1,66,49Z" />
            </svg>
            <ComponentTitle>Line</ComponentTitle>
            <ComponentDescription>Line charts and Vertical Line charts are categorical charts, which display continuous data as lines that pass through points defined by the values of their items.</ComponentDescription>
        </Component>
    </Column>
    <Column count={4.8}>
        <Component href="{% slug radar_seriestypes_charts %}">
        <svg id="radar" viewBox="0 0 70 70">
            <path d="M35,2.67,7,18.83V51.17L35,67.33,63,51.17V18.83Zm1,2.89L60,19.41,52,24,36,14.79Zm1.9,32.27L40,39l-2.42,1.4ZM39,36.13l2-1.83v3Zm-1.69,6.79L42,40.2l8,4.62L36,52.87ZM43,38.46v-6l3-2.71,5-2.88V43.08ZM36,17.1l14,8.08-1.92,1.11-11.36.46L36,26.34ZM19,30l7.68,8.6L19,43.08Zm8.53,10.42,3.91,10.95L20,44.82Zm-5.77-16.3L34,17.1v9.24l-.36.21ZM34,5.56v9.24L18.79,23.58l-2.41-.48L10,19.41ZM9,21.14l4.22,2.44L17,27.81V44.24L9,48.86Zm1,29.44L18,46l14.48,8.36L34,58.59v5.85ZM36,64.44V55.21L52,46l8,4.62ZM61,48.86l-8-4.62V25.76l8-4.62Z" />
        </svg>
        <ComponentTitle>Radar</ComponentTitle>
        <ComponentDescription>Radar charts, also known as Spider charts, are categorical charts, which wrap the X axis in a circle or polygon.</ComponentDescription>
        </Component>
    </Column>
    <Column count={4.8}>
        <Component href="{% slug rangearea_seriestypes_charts %}">
        <svg id="area" viewBox="0 0 70 70">
            <path d="M3,58h64v2H3V58z M54,30l-13-8L29,36l-13-7L3,40.4v10L16,45l13,4l12-9l13,1l13-7.5V18.6L54,30z" />
        </svg>
        <ComponentTitle>Range Area</ComponentTitle>
        <ComponentDescription> Range Area charts are categorical charts, which represent a variation of the Area charts.</ComponentDescription>
        </Component>
    </Column>
    <Column count={4.8}>
        <Component href="{% slug rangebar_seriestypes_charts %}">
        <svg id="rangebar" viewBox="0 0 70 70">
            <path d="M12,60H9V29h3ZM24,36H21V53h3Zm12-2H33V60h3Zm12-7H45V54h3Zm12-6H57V46h3ZM6,36H3V54H6Zm12-3H15V48h3Zm12-4H27V46h3ZM42,16H39V50h3Zm12,4H51V56h3Zm12-5H63V50h3Z" />
        </svg>
        <ComponentTitle>Range Bar</ComponentTitle>
        <ComponentDescription>Range Bar charts are categorical charts, which represent a variation of the Bar charts.</ComponentDescription>
        </Component>
    </Column>
    <Column count={4.8}>
        <Component href="{% slug waterfall_seriestypes_charts %}">
            <svg id="waterfall" viewBox="0 0 70 70">
                <path d="M28,35H22V27h6ZM38,24H32V35h6ZM8,45H2V60H8ZM18,27H12V41h6Zm50-6H62v9h6ZM48,11H42v9h6Zm10,0H52V30h6ZM18,42H2v2H18ZM28,24H12v2H28ZM38,36H22v2H38ZM48,21H32v2H48ZM58,8H42v2H58ZM68,31H52v2H68Z" />
            </svg>
            <ComponentTitle>Waterfall</ComponentTitle>
            <ComponentDescription>Waterfall charts are categorical charts, which display the cumulative effect of sequentially introduced positive or negative values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={[24,6]}>
        <Component href="{% slug heatmap_seriestypes_charts %}">
            <svg id="heatmap" viewBox="0 0 24 24">
                <path d="M2,18H0v2v2v2h2h2h2v-2v-2v-2H4H2z M4,22H2v-2h2V22z M2,9H0v2v2v2h2h2h2v-2v-2V9H4H2z M4,13H2v-2h2V13z M0,6h6V0H0V6z
                M18,15h6V9h-6V15z M9,24h6v-6H9V24z M20,18h-2v2v2v2h2h2h2v-2v-2v-2h-2H20z M22,22h-2v-2h2V22z M22,0h-2h-2v2v2v2h2h2h2V4V2V0H22
                z M22,4h-2V2h2V4z M11,0H9v2v2v2h2h2h2V4V2V0h-2H11z M13,4h-2V2h2V4z M11,9H9v2v2v2h2h2h2v-2v-2V9h-2H11z M13,13h-2v-2h2V13z"/>
            </svg>
        <ComponentTitle>Heat Map</ComponentTitle>
        <ComponentDescription>Heatmap charts use colors to indicate the relative value of data points in two dimensions.</ComponentDescription>
    </Column>
</Row>

### Circular

<Row>
    <Column count={12}>
        <Component href="{% slug donut_seriestypes_charts %}">
        <svg id="donut" viewBox="0 0 70 70">
            <path d="M35,4A31,31,0,1,0,66,35,31,31,0,0,0,35,4Zm0,11A20,20,0,1,1,15,35,20,20,0,0,1,35,15ZM6,35A29,29,0,0,1,34,6v7A22,22,0,0,0,15.32,44.84h0l-6.06,3.5A28.81,28.81,0,0,1,6,35ZM35,64A29,29,0,0,1,10.24,50.08l6.06-3.5a22,22,0,0,0,37.41,0l6,3.49A29,29,0,0,1,35,64ZM27.34,33.93h1.38a3,3,0,0,0,2-.69,2.29,2.29,0,0,0,.75-1.8A2.24,2.24,0,0,0,29,28.9a2.63,2.63,0,0,0-1.9.68,2.38,2.38,0,0,0-.71,1.8H24.52a3.69,3.69,0,0,1,1.26-2.86A4.58,4.58,0,0,1,29,27.39a4.53,4.53,0,0,1,3.21,1.08,3.91,3.91,0,0,1,1.16,3,3.17,3.17,0,0,1-.61,1.83,3.69,3.69,0,0,1-1.66,1.32,3.56,3.56,0,0,1,1.84,1.25A3.48,3.48,0,0,1,33.57,38a4,4,0,0,1-1.27,3.09A4.77,4.77,0,0,1,29,42.26a4.89,4.89,0,0,1-3.31-1.1,3.66,3.66,0,0,1-1.28-2.91h1.85A2.37,2.37,0,0,0,27,40.07a2.84,2.84,0,0,0,2,.69,2.78,2.78,0,0,0,2-.7,2.68,2.68,0,0,0,.71-2A2.44,2.44,0,0,0,31,36.13a3.38,3.38,0,0,0-2.24-.7H27.34Zm11.43,0h1.38a3,3,0,0,0,2-.69,2.29,2.29,0,0,0,.75-1.8,2.24,2.24,0,0,0-2.54-2.54,2.63,2.63,0,0,0-1.9.68,2.38,2.38,0,0,0-.71,1.8H36a3.69,3.69,0,0,1,1.26-2.86,4.58,4.58,0,0,1,3.2-1.14,4.53,4.53,0,0,1,3.21,1.08,3.91,3.91,0,0,1,1.16,3,3.17,3.17,0,0,1-.61,1.83,3.69,3.69,0,0,1-1.66,1.32,3.56,3.56,0,0,1,1.84,1.25A3.48,3.48,0,0,1,45,38a4,4,0,0,1-1.27,3.09,4.77,4.77,0,0,1-3.31,1.14,4.89,4.89,0,0,1-3.31-1.1,3.66,3.66,0,0,1-1.28-2.91h1.85a2.37,2.37,0,0,0,.75,1.83,2.84,2.84,0,0,0,2,.69,2.78,2.78,0,0,0,2-.7,2.68,2.68,0,0,0,.71-2,2.44,2.44,0,0,0-.78-1.94,3.38,3.38,0,0,0-2.24-.7H38.77Z" />
        </svg>
        <ComponentTitle>Donut</ComponentTitle>
        <ComponentDescription>Donut charts are circular charts, which represent a variation of the Pie charts and are capable of displaying multiple nested series.</ComponentDescription>
        </Component>
    </Column>
    <Column count={12}>
        <Component href="{% slug pie_seriestypes_charts %}">
        <svg id="pie" viewBox="0 0 70 70">
            <path d="M39,6.55A25.76,25.76,0,0,1,61,44.3L39,31.57ZM7.53,49.34h0Zm54.95,0c-.31.59-.64,1.17-1,1.74a31,31,0,0,1-53,0c-.35-.57-.68-1.15-1-1.74h0A31,31,0,0,1,35,4l1,0v30Zm-53.21-1L34,34.05V6A29,29,0,0,0,9.26,48.33Zm50.5,1.75L35,35.78,10.24,50.08a29,29,0,0,0,49.52,0Z" />
        </svg>
        <ComponentTitle>Pie</ComponentTitle>
        <ComponentDescription>Pie charts are circular charts, which display data in the form of single-series sectors from a two-dimensional circle and are useful for rendering data as part of a whole.</ComponentDescription>
        </Component>
    </Column>
</Row>

### Freeform

<Row>
    <Column count={24}>
        <Component href="{% slug funnel_seriestypes_charts %}">
    <svg id="funnel" viewBox="0 0 70 70">
        <path d="M8,9,28,63H42L62,9Zm51.13,2L54.68,23H15.32L10.87,11ZM19.76,35H50.24L45.79,47H24.21ZM40.61,61H29.39L24.95,49h20.1Z" />
    </svg>
        <ComponentTitle>Funnel</ComponentTitle>
        <ComponentDescription>Funnel charts are freeform charts, which display a single series of data in progressively decreasing or increasing proportions that are organized in segments, where each segment represents the value for the particular item from the series.</ComponentDescription>
        </Component>
    </Column>
    <Column count={[24,6]}>
        <Component href="slug:pyramid_seriestypes_charts">
        <svg id="pyramid" viewBox="0 0 72 72">
            <path className="cls-1" d="m35.4 8.89c-9.09 18.1-18.2 36.1-27.3 54.2h53.8c-8.84-18.1-17.7-36.1-26.5-54.2zm-0.0512 4.77c1.53 3.16 3.06 6.31 4.59 9.47-3.1-0.0047-6.2-0.0093-9.3-0.014 1.57-3.15 3.14-6.3 4.71-9.46zm-5.58 11.2c3.67 5e-3 7.33 0.01 11 0.015 1.99 4.1 3.98 8.2 5.96 12.3h-23.1c2.05-4.11 4.1-8.21 6.14-12.3zm22.6 24c1.98 4.08 3.96 8.17 5.94 12.3h-46.6c2.03-4.07 4.06-8.14 6.09-12.2 11.5-0.0131 23.1-0.0262 34.6-0.0393z"></path>
        </svg>
        <ComponentTitle>Pyramid</ComponentTitle>
        <ComponentDescription>Pyramid charts are freeform charts, which display a single series of data as pyramid segments, where each segment represents the value for the particular item from the series. The values of the items can also influence the height of the corresponding segments.</ComponentDescription>
        </Component>
  </Column>
</Row>

### Scatter


<Row>
    <Column count={8}>
        <Component href="{% slug bubble_seriestypes_charts %}">
   <svg id="bubble" viewBox="0 0 70 70">
        <path d="M62.5,28A3.5,3.5,0,1,0,66,31.5,3.5,3.5,0,0,0,62.5,28Zm0,5A1.5,1.5,0,1,1,64,31.5,1.5,1.5,0,0,1,62.5,33ZM18,46a7,7,0,1,0,7,7A7,7,0,0,0,18,46Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,18,58Zm3-30.5A6.5,6.5,0,1,0,14.5,34,6.5,6.5,0,0,0,21,27.5Zm-11,0A4.5,4.5,0,1,1,14.5,32,4.51,4.51,0,0,1,10,27.5ZM21.5,37A3.5,3.5,0,1,0,25,40.5,3.5,3.5,0,0,0,21.5,37Zm0,5A1.5,1.5,0,1,1,23,40.5,1.5,1.5,0,0,1,21.5,42Zm32-23A4.5,4.5,0,1,0,49,14.5,4.5,4.5,0,0,0,53.5,19Zm0-7A2.5,2.5,0,1,1,51,14.5,2.5,2.5,0,0,1,53.5,12ZM53,31.76c0-.09,0-.17,0-.26A14.5,14.5,0,1,0,30,43.24c0,.09,0,.17,0,.26A14.5,14.5,0,1,0,53,31.76ZM46.5,55A2.5,2.5,0,1,1,49,52.5,2.5,2.5,0,0,1,46.5,55Zm4-.57A4.5,4.5,0,1,0,43.65,56,12.5,12.5,0,0,1,32,44.47a14.46,14.46,0,0,0,20.7-10.34,12.47,12.47,0,0,1-2.2,20.3Z" />
    </svg>
        <ComponentTitle>Bubble</ComponentTitle>
        <ComponentDescription>Bubble charts are scatter charts, which display data as points with coordinates and sizes that are defined by the value of their items.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug polar_seriestypes_charts %}">
        <svg id="polar" viewBox="0 0 70 70">
            <path d="M36,4C18.9,4,5,17.9,5,35c0,17.1,13.9,31,31,31s31-13.9,31-31C67,17.9,53.1,4,36,4z M65,34h-8c-0.3-7-4.1-13.1-9.6-16.7l4-6.9C59.3,15.4,64.6,24.1,65,34z M34.3,36l-3.6,6.2c-2-1.5-3.3-3.7-3.6-6.2H34.3z M36,37l3.6,6.2C38.5,43.7,37.3,44,36,44s-2.5-0.3-3.6-0.8L36,37z M36,33l-3.6-6.2c1.1-0.5,2.3-0.8,3.6-0.8s2.5,0.3,3.6,0.8L36,33z M17.1,36h8c0.3,3.3,2,6.2,4.6,8l-4,6.9C20.7,47.7,17.4,42.2,17.1,36z M36,24c-1.6,0-3.2,0.4-4.6,1l-4-6.9C30,16.8,32.9,16,36,16s6,0.8,8.6,2.1l-4,6.9C39.2,24.4,37.6,24,36,24z M46.9,34c-0.3-3.3-2-6.2-4.6-8l4-6.9c4.9,3.2,8.3,8.7,8.6,14.9H46.9z M49.6,9.4l-4,6.9C42.7,14.9,39.5,14,36,14s-6.7,0.9-9.6,2.3l-4-6.9C26.4,7.2,31.1,6,36,6S45.6,7.2,49.6,9.4z M20.6,10.4l4,6.9c-5.5,3.6-9.3,9.7-9.6,16.7H7C7.4,24.1,12.7,15.4,20.6,10.4z M22.4,60.6l4-6.9c2.9,1.5,6.1,2.3,9.6,2.3s6.7-0.9,9.6-2.3l4,6.9C45.6,62.8,40.9,64,36,64S26.4,62.8,22.4,60.6z M51.4,59.6l-4-6.9c5.5-3.6,9.3-9.7,9.6-16.7h8C64.6,45.9,59.3,54.6,51.4,59.6z" />
        </svg>
        <ComponentTitle>Polar</ComponentTitle>
        <ComponentDescription>Polar charts are scatter charts which display two-dimensional data series in polar coordinates.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug scatterline_seriestypes_charts %}">
       <svg id="scatter" viewBox="0 0 70 70">
            <path d="M19,42a4,4,0,1,1,4-4A4,4,0,0,1,19,42Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,19,36Zm8-2a4,4,0,1,1,4-4A4,4,0,0,1,27,34Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,27,28Zm9-3a4,4,0,1,1,4-4A4,4,0,0,1,36,25Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,36,19ZM47,29a4,4,0,1,1,4-4A4,4,0,0,1,47,29Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,47,23ZM27,51a4,4,0,1,1,4-4A4,4,0,0,1,27,51Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,27,45ZM64,21a4,4,0,1,1,4-4A4,4,0,0,1,64,21Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,64,15ZM6,61a4,4,0,1,1,4-4A4,4,0,0,1,6,61Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,6,55Zm11-3a4,4,0,1,1,4-4A4,4,0,0,1,17,52Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,17,46Zm13-3a4,4,0,1,1,4-4A4,4,0,0,1,30,43Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,30,37Zm8-3a4,4,0,1,1,4-4A4,4,0,0,1,38,34Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,38,28ZM49,39a4,4,0,1,1,4-4A4,4,0,0,1,49,39Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,49,33Zm9-2a4,4,0,1,1,4-4A4,4,0,0,1,58,31Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,58,25Z" />
        </svg>
        <ComponentTitle>Scatter Plot and Scatter Line</ComponentTitle>
        <ComponentDescription>Scatter Plot and Scatter Line charts are the two main variations of scatter charts and are suitable for displaying numerical data.</ComponentDescription>
        </Component>
    </Column>
</Row>


### Sparkline


<Row>
    <Column count={24}>
        <Component href="{% slug overview_sparkline_charts %}">
          <svg version="1.1" id="Layer_1" x="0px" y="0px"
            width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24">
          <path d="M12,12.172l-4,4l-8-8V11l8,8l4-4l6,6l6-6v-2.828l-6,6L12,12.172z M17,11.172l-5-5l-5.586,5.586l1.414,1.414
            L12,9l5,5l7-7V4.172L17,11.172z M0,18.172V21l3.586-3.586L2.172,16L0,18.172z"/>
          </svg>
        <ComponentTitle>Sparkline</ComponentTitle>
        <ComponentDescription>The Sparkline is a tiny chart that doesn't have axes, coordinates, legends, titles, or other chart-specific elements. The available Sparkline types are Line, Bar, Column, Area, Pie and Bullet.</ComponentDescription>
        </Component>
    </Column>
</Row>

### StockChart


<Row>
    <Column count={24}>
        <Component href="{% slug overview_stockchart_charts %}">
          <svg version="1.1" id="Layer_1" x="0px" y="0px"
            width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" >
          <path d="M0,20v2h22l2-2H0z M12,9h4v3h-4V9z M6,8h4v2H6V8z M0,9h4v5H0V9z M3,2L1,4v4h2V2z M9,3L7,5v2h2V3z M15,4l-2,2
            v2h2V4z M1,15h2v3H1V15z M7,11h2v4H7V11z M18,11h4v2h-4V11z M19,14h2v2h-2V14z M21,5l-2,2v3h2V5z M13,13h2v4h-2V13z"/>
          </svg>
        <ComponentTitle>StockChart</ComponentTitle>
        <ComponentDescription>
            The StockChart is a component for the financial industry. It visualizes the price movement of a financial instrument over a period of time.
        </ComponentDescription>
        </Component>
    </Column>
</Row>

## Charts Features

Among the many features, which this Kendo UI for Vue Native Chart library delivers are:

* **[Rendering modes]({% slug rendering_chart_charts %})**&mdash;The Kendo UI for Vue Charts can be rendered as SVG or Canvas.
* **[Export]({% slug export_chart_charts %})**&mdash;The Kendo UI for Vue Native Charts can be effortlessly  exported and saved to an image, PDF or SVG.
* **[Panning and Zooming]({% slug panzoom_chart_charts %})**&mdash;For scenarios when you need to focus on a specific data segment, the Kendo UI for Vue Native Chart provides the option to change the displayed range by panning and zooming.
* **[Appearance]({% slug appearance_chart_charts %})**&mdash; By default all Kendo UI for Vue components are styled by the [`three polished themes (Bootstrap, Material, and Default)`]({% slug themesandstyles %}) shipped with the Kendo UI for Vue suite. The Chart component provides options for easier configuration of parameters like dimensions, colors, range, etc.

## Dependencies

The Kendo UI for Vue Native Charts package requires you to install the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) in your application:

* vue 3.0.0*
* @progress/kendo-vue-intl
* @progress/kendo-licensing
* @progress/kendo-drawing

## Support and Learning Resources

* [Charts Homepage](https://www.telerik.com/kendo-vue-ui/charts)
* [API Reference of the Charts Component](slug:api_charts)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Charts Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=chart)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)



