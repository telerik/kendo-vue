---
title: Overview
page_title: Series Types Overview - Chart - Kendo UI for Vue
description: "Get started with the series types which the Kendo UI Charts package for Vue supports."
slug: overview_seriestypes_charts_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/charts/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/charts"></WrapperBanner></div>

# Series Types Overview

The Charts support a wide range of series types.

<div data-component="StartFreeTrialSection"></div>

## Categorical

Categorical charts provide built-in support for displaying dates. The categories represent unique values which are not mathematically related to each other.

<Row>
    <Column count={6}>
        <Component href="{% slug area_seriestypes_charts_wrapper %}">
        <svg id="area" viewBox="0 0 70 70">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ffab09" />
                        <stop offset="70%" stop-color="#ff6358" />
                        <stop offset="100%" stop-color="#dd3169" />
                    </linearGradient>
                </defs>
                <path d="M53.85,27.68l-13.05-9L28.74,33.72l-12.92-7L3,39.59V60H67V13.44ZM16.18,29.23l13.08,7L41.2,21.35l12.95,9L65,18.56v6L53.81,34.81l-13.06-6-12,13L15.91,36.89,5,43.26V40.41ZM53.73,41l-13-1L28.81,48.89l-12.9-4L5,50.38V45.57l11.09-6.47,13.19,5.07,12-13,12.94,6L65,27.27v6.19Z" />
            </svg>
            <ComponentTitle>Area</ComponentTitle>
        </Component>
    </Column>    
    <Column count={6}>
        <Component href="{% slug barcolumn_seriestypes_charts_wrapper %}">
       <svg id="bar" viewBox="0 0 70 70">
            <path d="M12,60H9V29h3ZM24,36H21V60h3ZM36,20H33V60h3ZM48,33H45V60h3ZM60,21H57V60h3ZM6,36H3V60H6Zm12-3H15V60h3Zm12-4H27V60h3Zm12-3H39V60h3Zm12,2H51V60h3ZM66,15H63V60h3Z" />
        </svg>
            <ComponentTitle>Bar</ComponentTitle>
        </Component>
    </Column>    
    <Column count={6}>
        <Component href="{% slug boxplot_seriestypes_charts_wrapper %}">
        <svg id="boxplot" viewBox="0 0 70 70">
                            <path class="cls-1" d="M26,28H24V11h2Zm2,1H22v8h6Zm-2,9H24V49h2ZM36,20H34v5h2Zm2,6H32V39h6ZM36,40H34V55h2ZM6,21H4v9H6ZM8,31H2V46H8ZM6,47H4v6H6ZM16,17H14v9h2Zm2,10H12V41h6ZM16,42H14V58h2ZM66,11H64V27h2Zm2,17H62V39h6ZM66,40H64v6h2ZM46,14H44V29h2Zm2,16H42V43h6ZM46,44H44v4h2ZM56,18H54v7h2Zm2,8H52V49h6ZM56,50H54V60h2Z" />
                        </svg>
            <ComponentTitle>Box Plot</ComponentTitle>
        </Component>
    </Column>
     <Column count={6}>
        <Component href="{% slug bullet_seriestypes_charts_wrapper %}">
        <svg id="bullet" viewBox="0 0 70 70">
                            <path d="M51,42v2H33V42ZM3,40v6H32V40Zm52,2v2H67V42Zm-3-4V48h2V38ZM26,56v2H40V56ZM3,54v6H25V54Zm41,2v2H67V56Zm-3-4V62h2V52Zm0-24v2h4V28ZM3,26v6H40V26Zm46,2v2H67V28Zm-3-4V34h2V24ZM28,14v2H57V14ZM3,12v6H27V12Zm58,2v2h6V14Zm-3-4V20h2V10Z" />
                        </svg>
            <ComponentTitle>Bullet</ComponentTitle>
        </Component>
    </Column>    
    <Column count={6}>
        <Component href="{% slug line_seriestypes_charts_wrapper %}">
      <svg id="line" viewBox="0 0 70 70">
                            <path d="M66,10a4,4,0,0,0-4,4,4,4,0,0,0,.62,2.12l-6.71,8.39a3.9,3.9,0,0,0-4.54.5l-6.62-5.67A4,4,0,0,0,45,18a4,4,0,1,0-7,2.67L30.75,33.42a3.88,3.88,0,0,0-3.82.18l-7.14-6.35A4,4,0,0,0,20,26a4,4,0,1,0-7.36,2.16L5.87,37.48A4,4,0,0,0,4,37a4,4,0,1,0,3.35,1.84l6.78-9.32a3.9,3.9,0,0,0,4.55-.57L25.54,35A4,4,0,0,0,25,37a4,4,0,1,0,7.3-2.26l7.41-13A3.85,3.85,0,0,0,43.62,21l6.62,5.67A4,4,0,0,0,50,28a4,4,0,0,0,8,0,4,4,0,0,0-.62-2.12l6.71-8.39A4,4,0,0,0,66,18a4,4,0,0,0,0-8ZM4,43a2,2,0,1,1,2-2A2,2,0,0,1,4,43ZM14,26a2,2,0,1,1,2,2A2,2,0,0,1,14,26ZM29,39a2,2,0,1,1,2-2A2,2,0,0,1,29,39ZM41,20a2,2,0,1,1,2-2A2,2,0,0,1,41,20ZM54,30a2,2,0,1,1,2-2A2,2,0,0,1,54,30ZM66,16a2,2,0,1,1,2-2A2,2,0,0,1,66,16Zm0,27a4,4,0,0,0-2.68,1.05l-5.4-2.31a4,4,0,1,0-7.69.55l-6,3.41A4,4,0,0,0,37,48a4,4,0,0,0,.22,1.25l-5.88,2.52a4,4,0,0,0-5.63,1l-6.1-3A4,4,0,0,0,20,48a4,4,0,0,0-8,0,4,4,0,0,0,.24,1.31L6.17,53.65A4,4,0,1,0,8,57a4,4,0,0,0-.48-1.86L13.35,51a3.94,3.94,0,0,0,4.94.29L25,54.64c0,.12,0,.24,0,.36a4,4,0,1,0,7.65-1.62l5.67-2.43A4,4,0,0,0,45,48a3.91,3.91,0,0,0,0-.4L51.33,44a3.94,3.94,0,0,0,5.73-.42l5.16,2.21A4,4,0,0,0,62,47a4,4,0,1,0,4-4ZM4,59a2,2,0,1,1,2-2A2,2,0,0,1,4,59Zm12-9a2,2,0,1,1,2-2A2,2,0,0,1,16,50Zm13,7a2,2,0,1,1,2-2A2,2,0,0,1,29,57Zm12-7a2,2,0,1,1,2-2A2,2,0,0,1,41,50Zm13-7a2,2,0,1,1,2-2A2,2,0,0,1,54,43Zm12,6a2,2,0,1,1,2-2A2,2,0,0,1,66,49Z" />
                        </svg>
            <ComponentTitle>Line</ComponentTitle>
        </Component>
    </Column>    
    <Column count={6}>
        <Component href="{% slug radar_seriestypes_charts_wrapper %}">
          <svg id="radar" viewBox="0 0 70 70">
                            <path d="M35,2.67,7,18.83V51.17L35,67.33,63,51.17V18.83Zm1,2.89L60,19.41,52,24,36,14.79Zm1.9,32.27L40,39l-2.42,1.4ZM39,36.13l2-1.83v3Zm-1.69,6.79L42,40.2l8,4.62L36,52.87ZM43,38.46v-6l3-2.71,5-2.88V43.08ZM36,17.1l14,8.08-1.92,1.11-11.36.46L36,26.34ZM19,30l7.68,8.6L19,43.08Zm8.53,10.42,3.91,10.95L20,44.82Zm-5.77-16.3L34,17.1v9.24l-.36.21ZM34,5.56v9.24L18.79,23.58l-2.41-.48L10,19.41ZM9,21.14l4.22,2.44L17,27.81V44.24L9,48.86Zm1,29.44L18,46l14.48,8.36L34,58.59v5.85ZM36,64.44V55.21L52,46l8,4.62ZM61,48.86l-8-4.62V25.76l8-4.62Z" />
                        </svg>
            <ComponentTitle>Radar</ComponentTitle>
        </Component>
    </Column>
      <Column count={6}>
        <Component href="{% slug rangearea_seriestypes_charts_wrapper %}">
            <svg id="area" viewBox="0 0 70 70">
                            <path d="M3,58h64v2H3V58z M54,30l-13-8L29,36l-13-7L3,40.4v10L16,45l13,4l12-9l13,1l13-7.5V18.6L54,30z" />
                        </svg>
            <ComponentTitle>Range Area</ComponentTitle>
        </Component>
    </Column>
      <Column count={6}>
        <Component href="{% slug rangebar_seriestypes_charts_wrapper %}">
          <svg id="rangebar" viewBox="0 0 70 70">
                            <path d="M12,60H9V29h3ZM24,36H21V53h3Zm12-2H33V60h3Zm12-7H45V54h3Zm12-6H57V46h3ZM6,36H3V54H6Zm12-3H15V48h3Zm12-4H27V46h3ZM42,16H39V50h3Zm12,4H51V56h3Zm12-5H63V50h3Z" />
                        </svg>
            <ComponentTitle>Range Bar</ComponentTitle>
        </Component>
    </Column>
      <Column count={6}>
        <Component href="{% slug waterfall_seriestypes_charts_wrapper %}">
          <svg id="waterfall" viewBox="0 0 70 70">
                            <path d="M28,35H22V27h6ZM38,24H32V35h6ZM8,45H2V60H8ZM18,27H12V41h6Zm50-6H62v9h6ZM48,11H42v9h6Zm10,0H52V30h6ZM18,42H2v2H18ZM28,24H12v2H28ZM38,36H22v2H38ZM48,21H32v2H48ZM58,8H42v2H58ZM68,31H52v2H68Z" />
                        </svg>
            <ComponentTitle>Waterfall</ComponentTitle>
        </Component>
    </Column>
</Row>

## Circular

Circular charts are divided in slices representing statistical data, which proportionally corresponds to the quantity input of each slice. Circular charts are widely used in the business world and the mass media.

<Row>
    <Column count={6}>
        <Component href="{% slug donut_seriestypes_charts_wrapper %}">
        <svg id="donut" viewBox="0 0 70 70">
                            <path d="M35,4A31,31,0,1,0,66,35,31,31,0,0,0,35,4Zm0,11A20,20,0,1,1,15,35,20,20,0,0,1,35,15ZM6,35A29,29,0,0,1,34,6v7A22,22,0,0,0,15.32,44.84h0l-6.06,3.5A28.81,28.81,0,0,1,6,35ZM35,64A29,29,0,0,1,10.24,50.08l6.06-3.5a22,22,0,0,0,37.41,0l6,3.49A29,29,0,0,1,35,64ZM27.34,33.93h1.38a3,3,0,0,0,2-.69,2.29,2.29,0,0,0,.75-1.8A2.24,2.24,0,0,0,29,28.9a2.63,2.63,0,0,0-1.9.68,2.38,2.38,0,0,0-.71,1.8H24.52a3.69,3.69,0,0,1,1.26-2.86A4.58,4.58,0,0,1,29,27.39a4.53,4.53,0,0,1,3.21,1.08,3.91,3.91,0,0,1,1.16,3,3.17,3.17,0,0,1-.61,1.83,3.69,3.69,0,0,1-1.66,1.32,3.56,3.56,0,0,1,1.84,1.25A3.48,3.48,0,0,1,33.57,38a4,4,0,0,1-1.27,3.09A4.77,4.77,0,0,1,29,42.26a4.89,4.89,0,0,1-3.31-1.1,3.66,3.66,0,0,1-1.28-2.91h1.85A2.37,2.37,0,0,0,27,40.07a2.84,2.84,0,0,0,2,.69,2.78,2.78,0,0,0,2-.7,2.68,2.68,0,0,0,.71-2A2.44,2.44,0,0,0,31,36.13a3.38,3.38,0,0,0-2.24-.7H27.34Zm11.43,0h1.38a3,3,0,0,0,2-.69,2.29,2.29,0,0,0,.75-1.8,2.24,2.24,0,0,0-2.54-2.54,2.63,2.63,0,0,0-1.9.68,2.38,2.38,0,0,0-.71,1.8H36a3.69,3.69,0,0,1,1.26-2.86,4.58,4.58,0,0,1,3.2-1.14,4.53,4.53,0,0,1,3.21,1.08,3.91,3.91,0,0,1,1.16,3,3.17,3.17,0,0,1-.61,1.83,3.69,3.69,0,0,1-1.66,1.32,3.56,3.56,0,0,1,1.84,1.25A3.48,3.48,0,0,1,45,38a4,4,0,0,1-1.27,3.09,4.77,4.77,0,0,1-3.31,1.14,4.89,4.89,0,0,1-3.31-1.1,3.66,3.66,0,0,1-1.28-2.91h1.85a2.37,2.37,0,0,0,.75,1.83,2.84,2.84,0,0,0,2,.69,2.78,2.78,0,0,0,2-.7,2.68,2.68,0,0,0,.71-2,2.44,2.44,0,0,0-.78-1.94,3.38,3.38,0,0,0-2.24-.7H38.77Z" />
                        </svg>
            <ComponentTitle>Donut</ComponentTitle>
        </Component>
    </Column>    
    <Column count={6}>
        <Component href="{% slug pie_seriestypes_charts_wrapper %}">
       <svg id="pie" viewBox="0 0 70 70">
                            <path d="M39,6.55A25.76,25.76,0,0,1,61,44.3L39,31.57ZM7.53,49.34h0Zm54.95,0c-.31.59-.64,1.17-1,1.74a31,31,0,0,1-53,0c-.35-.57-.68-1.15-1-1.74h0A31,31,0,0,1,35,4l1,0v30Zm-53.21-1L34,34.05V6A29,29,0,0,0,9.26,48.33Zm50.5,1.75L35,35.78,10.24,50.08a29,29,0,0,0,49.52,0Z" />
                        </svg>
            <ComponentTitle>Pie</ComponentTitle>
        </Component>
    </Column>    
</Row>

## Freeform

Freeform charts adopt different forms and use variously structured portions to display data.

<Row>
    <Column count={6}>
        <Component href="{% slug funnel_seriestypes_charts_wrapper %}">
       <svg id="funnel" viewBox="0 0 70 70">
                            <path d="M8,9,28,63H42L62,9Zm51.13,2L54.68,23H15.32L10.87,11ZM19.76,35H50.24L45.79,47H24.21ZM40.61,61H29.39L24.95,49h20.1Z" />
                        </svg>
            <ComponentTitle>Funnel</ComponentTitle>
        </Component>
    </Column>       
</Row>

## Scatter

Scatter charts are suitable for displaying and comparing different sets of numerical values, for showing the relationships between the values of the data sets, and for plotting two-dimensional data as a series of XY coordinates.

<Row>
    <Column count={6}>
        <Component href="{% slug bubble_seriestypes_charts_wrapper %}">
      <svg id="bubble" viewBox="0 0 70 70">
                            <path d="M62.5,28A3.5,3.5,0,1,0,66,31.5,3.5,3.5,0,0,0,62.5,28Zm0,5A1.5,1.5,0,1,1,64,31.5,1.5,1.5,0,0,1,62.5,33ZM18,46a7,7,0,1,0,7,7A7,7,0,0,0,18,46Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,18,58Zm3-30.5A6.5,6.5,0,1,0,14.5,34,6.5,6.5,0,0,0,21,27.5Zm-11,0A4.5,4.5,0,1,1,14.5,32,4.51,4.51,0,0,1,10,27.5ZM21.5,37A3.5,3.5,0,1,0,25,40.5,3.5,3.5,0,0,0,21.5,37Zm0,5A1.5,1.5,0,1,1,23,40.5,1.5,1.5,0,0,1,21.5,42Zm32-23A4.5,4.5,0,1,0,49,14.5,4.5,4.5,0,0,0,53.5,19Zm0-7A2.5,2.5,0,1,1,51,14.5,2.5,2.5,0,0,1,53.5,12ZM53,31.76c0-.09,0-.17,0-.26A14.5,14.5,0,1,0,30,43.24c0,.09,0,.17,0,.26A14.5,14.5,0,1,0,53,31.76ZM46.5,55A2.5,2.5,0,1,1,49,52.5,2.5,2.5,0,0,1,46.5,55Zm4-.57A4.5,4.5,0,1,0,43.65,56,12.5,12.5,0,0,1,32,44.47a14.46,14.46,0,0,0,20.7-10.34,12.47,12.47,0,0,1-2.2,20.3Z" />
                        </svg>
            <ComponentTitle>Bubble</ComponentTitle>
        </Component>
    </Column>  
    <Column count={6}>
        <Component href="{% slug polar_seriestypes_charts_wrapper %}">
         <svg id="scatter" viewBox="0 0 70 70">
                            <path d="M19,42a4,4,0,1,1,4-4A4,4,0,0,1,19,42Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,19,36Zm8-2a4,4,0,1,1,4-4A4,4,0,0,1,27,34Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,27,28Zm9-3a4,4,0,1,1,4-4A4,4,0,0,1,36,25Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,36,19ZM47,29a4,4,0,1,1,4-4A4,4,0,0,1,47,29Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,47,23ZM27,51a4,4,0,1,1,4-4A4,4,0,0,1,27,51Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,27,45ZM64,21a4,4,0,1,1,4-4A4,4,0,0,1,64,21Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,64,15ZM6,61a4,4,0,1,1,4-4A4,4,0,0,1,6,61Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,6,55Zm11-3a4,4,0,1,1,4-4A4,4,0,0,1,17,52Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,17,46Zm13-3a4,4,0,1,1,4-4A4,4,0,0,1,30,43Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,30,37Zm8-3a4,4,0,1,1,4-4A4,4,0,0,1,38,34Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,38,28ZM49,39a4,4,0,1,1,4-4A4,4,0,0,1,49,39Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,49,33Zm9-2a4,4,0,1,1,4-4A4,4,0,0,1,58,31Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,58,25Z" />
                        </svg>
            <ComponentTitle>ScatterPlot and ScatterLine</ComponentTitle>
        </Component>
    </Column> 
      <Column count={6}>
        <Component href="{% slug scatterline_seriestypes_charts_wrapper %}">
       <svg id="funnel" viewBox="0 0 70 70">
                            <path d="M8,9,28,63H42L62,9Zm51.13,2L54.68,23H15.32L10.87,11ZM19.76,35H50.24L45.79,47H24.21ZM40.61,61H29.39L24.95,49h20.1Z" />
                        </svg>
            <ComponentTitle>Funnel</ComponentTitle>
        </Component>
    </Column>      
</Row>

## Suggested Links

* [Kendo UI Chart for jQuery](https://docs.telerik.com/kendo-ui/controls/charts/overview)
* [API Reference of the Chart Widget](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
