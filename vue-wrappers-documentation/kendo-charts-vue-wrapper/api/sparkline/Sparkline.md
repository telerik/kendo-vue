---
title: Sparkline API
description: "API Index | Sparkline"
api_reference: true
slug: api_sparklinecomponent_wrapper
---

# Sparkline

## Directive

`kendo-sparkline`

## Child Components

* [`kendo-sparkline-series-item`]({% slug api_sparklineseriesitemcomponent_wrapper %})

## Props

### axis-defaults `Object`

The default options for all chart axes ([`axisDefaults` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/axisdefaults)).

### category-axis `Array`

The configuration options for the category axis ([`categoryAxis` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/categoryaxis)). The supported composite props are available in [`CategoryAxisProps`]({% slug api_sparkline_categoryaxisprops_wrapper %}).

### chart-area `Object`

The configuration options for the chart area&mdash;the entire visible area of the chart ([`chartArea` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/chartarea)). The supported composite props are available in [`ChartAreaProps`]({% slug api_sparkline_chartareaprops_wrapper %}).

### data `Array`

The data for the default Sparkline series ([`data` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/data)). If series are supplied, `data` will be discarded.

### data-source `Object`

The configuration or instance of the DataSource ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/datasource)).

### auto-bind `Boolean`

Indicates whether the chart will initially call `read` on the data source ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/autobind)).

### plot-area `Object`

The configuration options for the plot area&mdash;the area which contains the plotted series ([`plotArea` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/plotarea)). The supported composite props are available in [`PlotAreaProps`]({% slug api_sparkline_plotareaprops_wrapper %}).

### point-width `Number`

The width that will be allocated for each data point ([`pointWidth` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/pointwidth)).

### render-as `String`

Sets the preferred rendering engine ([`renderAs` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/renderas)). If `render-as` is not supported by the browser, the Chart will switch to the first available mode.

The supported values are:

* `svg`&mdash;Renders the Chart as an inline SVG document if available.
* `canvas`&mdash;Renders the Chart as a `canvas` element if available.

### series `Array`

An array of series definitions ([`series` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/series)). The series type is determined by the value of the type field. If a type value is missing, the type is assumed to be the one specified in `seriesDefaults`. Each series type has a different set of options.

### series-colors `Array`

The default colors for the chart series ([`seriesColors` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/seriescolors)). When all the colors are used, the colors start over again.

### series-defaults `Object`

The default values for each series ([`seriesDefaults` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/seriesdefaults)). The supported composite props are available in [`SeriesDefaultsProps`]({% slug api_sparkline_seriesdefaultsprops_wrapper %}).

### theme `String`

The Sparkline theme ([`theme` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/theme)).

`theme` can be either a built-in theme or a `sass` theme. When `theme` is set to `sass`, the Sparkline will read the variables from the SASS-based themes.

The supported values are:

* `sass`&mdash;A special value.
* `black`
* `blueopal`
* `bootstrap`
* `default`
* `highcontrast`
* `metro`
* `metroblack`
* `moonlight`
* `silver`
* `uniform`

### tooltip `Object`

The configuration options for the data point tooltip ([`tooltip` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/tooltip)). The supported composite props are available in [`TooltipProps]({% slug api_sparkline_tooltipprops_wrapper %}).

### transitions `Boolean`

A value which indicates if transition animations will be played ([`transitions` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/transitions)).

### type `String`

The default series type ([`type` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/type)).

### value-axis `Array`

The configuration options for the value axis ([`valueAxis` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/configuration/valueaxis)). The supported composite props are available in [`ValueAxisProps`]({% slug api_sparkline_valueaxisprops_wrapper %}).

## Events

### axislabelclick: `Function`

Fires when an axis label is clicked ([`axisLabelClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/axislabelclick)).

### databound: `Function`

Fires when the Sparkline received data from the data source and is about to render it ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/databound)).

### dragstart: `Function`

Fires when the user has used the mouse or a swipe gesture to drag the Sparkline ([`dragStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/dragstart)). To prevent the drag operation, call `e.preventDefault()`.

### drag: `Function`

Fires as long as the user is dragging the Sparkline using the mouse or swipe gestures ([`drag` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/drag)).

### dragend: `Function`

Fires when the user stops dragging the Sparkline ([`dragEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/dragend)).

### panerender: `Function`

Fires when a pane is rendered because the chart is rendered, performs panning or zooming, or is exported with different options ([`paneRender` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/panerender)). You can use `panerender` to render custom visuals in the panes.

### plotareaclick: `Function`

Fires when plot area is clicked ([`plotAreaClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/plotareaclick)).

### plotareahover: `Function`

Fires when the user hovers over the plot area ([`plotAreaHover` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/plotareahover)).

### plotarealeave: `Function`

Fires when the cursor leaves the plot area ([`plotAreaLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/plotarealeave)).

### seriesclick: `Function`

Fires when chart series are clicked ([`seriesClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/seriesclick)).

### serieshover: `Function`

Fires when chart series are hovered over ([`seriesHover` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/serieshover)).

### seriesover: `Function`

Fires when the cursor is over the chart series ([`seriesOver` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/seriesover)).

### seriesleave: `Function`

Fires when the cursor leaves a chart series ([`seriesLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/seriesleave)).

### zoomstart: `Function`

Fires when the user uses the mouse to zoom the chart ([`zoomStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/zoomstart)). To abort the zoom operation, call `e.preventDefault()`.

### zoom: `Function`

Fires as long as the user is zooming the chart with the mouse ([`zoom` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/zoom)).

### zoomend: `Function`

Fires when the user stops zooming the chart ([`zoomEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline/events/zoomend)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/sparkline#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Sparkline instance.
