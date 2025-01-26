---
title: StockChart API
description: "API Index | StockChart"
api_reference: true
slug: api_stockchartcomponent_wrapper
---

# StockChart

## Directive

`kendo-stockchart`

## Child Components

* [`kendo-chart-series-item`]({% slug api_chartseriesitemcomponent_wrapper %})

## Props

### date-field `String`

The field which contains the point date ([`dateField` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/datefield)). Used as a default `categoryField` for all series.

The supported values for the data item field are:

* A date instance
* A string that is parsable by `new Date([field value])`
* A string in ASP.NET JSON format&mdash;for example, `\/Date(1320825600000-0800)\/`.

### navigator `Object`

The data navigator configuration options ([`navigator` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/navigator)). The supported composite props are available in [`NavigatorProps`]({% slug api_stockchart_navigatorprops_wrapper %}).

### axis-defaults `Object`

The default options for all chart axes ([`axisDefaults` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/axisdefaults)).

### category-axis `Array`

The category axis configuration options ([`categoryAxis` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/categoryaxis)). The supported composite props are available in [`CategoryAxisProps`]({% slug api_stockchart_categoryaxisprops_wrapper %}).

### chart-area `Object`

The chart area configuration options&mdash;the entire visible area of the chart ([`chartArea` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/chartarea)). The supported composite props are available in [`ChartAreaProps`]({% slug api_stockchart_chartareaprops_wrapper %}).

### data-source `Object`

The DataSource configuration or instance ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/datasource)).

### auto-bind `Boolean`

Indicates whether the chart will initially call `read` on the data source ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/autobind)).

### legend `Object`

The chart legend configuration options ([`legend` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/legend)). The supported composite props are available in [`LegendProps`]({% slug api_stockchart_legendprops_wrapper %}).

### panes `Array`

The chart panes configuration ([`panes` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/panes)). Panes split the chart in two or more parts and are ordered from top to bottom. Each axis can be associated with a pane by setting its `pane` option to the name of the desired pane. Axis without a specified pane are placed in the top (default) pane. Series are moved to the desired pane by associating them with an axis. The supported composite props are available in [`PanesProps`]({% slug api_stockchart_panesprops_wrapper %}).

### pdf `Object`

Configures the export settings for the `saveAsPDF` method ([`pdf` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/pdf)). The supported composite props are available in [`PdfProps`]({% slug api_stockchart_pdfprops_wrapper %}).

### persist-series-visibility `Boolean`

Specifies if the series `visible` option will be persisted when changing the dataSource data ([`persistSeriesVisibility` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/persistseriesvisibility)).

### plot-area `Object`

The plot area configuration options&mdash;the area which contains the plotted series ([`plotArea` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/plotarea)). The supported composite props are available in [PlotAreaProps]({% slug api_stockchart_plotareaprops_wrapper %})

### render-as `String`

Sets the preferred rendering engine ([`renderAs` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/renderas)). If `render-as` is not supported by the browser, the Chart will switch to the first available mode.

The supported values are:

* `svg`&mdash;Renders the StockChart as an inline SVG document if available.
* `canvas`&mdash;Renders the StockChart as a Canvas element if available.

### series `Array`

An array of series definitions ([`series` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/series)). The series type is determined by the value of the type field. If a type value is missing, the type is assumed to be the one specified in `seriesDefaults`. Each series type has a different set of options.

### series-colors `Array`

The default colors for the chart series ([`seriesColors` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/seriescolors)). When all the colors are used, the colors start over again.

### series-defaults `Object`

The default values for each series ([`seriesDefaults` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/seriesdefaults)). The supported composite props are available in [`SeriesDefaultsProps`]({% slug api_stockchart_seriesdefaultsprops_wrapper %}).

### theme `String`

The chart theme ([`theme` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/theme)).

`theme` can be either a built-in theme or a `sass` theme. When `theme` is set to `sass`, the StockChart will read the variables from the SASS-based themes.

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

### title `Object`

The chart title configuration options or text ([`title` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/title)). The supported composite props are available in [`TitleProps`]({% slug api_stockchart_titleprops_wrapper %}).

### tooltip `Object`

The data point tooltip configuration options ([`tooltip` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/tooltip)). The supported composite props are available in [`TooltipProps`]({% slug api_stockchart_tooltipprops_wrapper %}).

### transitions `Boolean`

A value which indicates if transition animations will be played ([`transitions` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/transitions)).

### value-axis `Array`

The value axis configuration options ([`valueAxis` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/configuration/valueaxis)). The supported composite props are available in [`ValueAxisProps`]({% slug api_stockchart_valueaxisprops_wrapper %}).

## Events

### axislabelclick: `Function`

Fires when an axis label is clicked ([`axisLabelClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/axislabelclick)).

### databound: `Function`

Fires when the chart received data from the data source and is about to render it ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/databound)).

### dragstart: `Function`

Fires when the user dragged the chart with the mouse or by swiping ([`dragStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/dragstart)). To abort the drag operation, call `e.preventDefault()`.

### drag: `Function`

Fires as long as the user is dragging the chart by using the mouse or by swiping ([`drag` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/drag)).

### dragend: `Function`

Fires when the user stops dragging the chart ([`dragEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/dragend)).

### legenditemclick: `Function`

Fires when an legend item is clicked and before the selected series visibility is toggled ([`legendItemClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/legenditemclick)). Can be cancelled.

### legenditemhover: `Function`

Fires when a legend item is hovered over ([`legendItemHover` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/legenditemhover)).

### legenditemleave: `Function`

Fires when the cursor leaves a legend item ([`legendItemLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/legenditemleave)).

### noteclick: `Function`

Fires when the user clicks one of the notes ([`noteClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/noteclick)). The event handler function context (available through the this keyword) will be set to the StockChart instance.

### notehover: `Function`

Fires when the user hovers over one of the notes ([`noteHover` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/notehover)). The event handler function context (available through the this keyword) will be set to the StockChart instance.

### noteleave: `Function`

Fires when the cursor leaves a note ([`noteLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/noteleave)). The event handler function context (available through the this keyword) will be set to the StockChart instance.

### panerender: `Function`

Fires when a pane is rendered because the chart is rendered, performs panning or zooming, or is exported with different options ([`paneRender` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/panerender)). You can use `panerender` to render custom visuals in the panes.

### plotareaclick: `Function`

Fires when the plot area is clicked ([`plotAreaClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/plotareaclick)).

### plotareahover: `Function`

Fires when the user hovers over the plot area ([`plotAreaHover` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/plotareahover)).

### plotarealeave: `Function`

Fires when the cursor leaves the plot area ([`plotAreaLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/plotarealeave)).

### render: `Function`

Fires when the StockChart is ready to render on screen ([`render` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/render)). Can be used, for example, to remove loading indicators. Changes to options will be ignored. The event handler function context (available through the this keyword) will be set to the StockChart instance.

### select: `Function`

Fires when the user modifies the selection ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/select)). The event handler function context (available through the this keyword) will be set to the StockChart instance.

### selectend: `Function`

Fires when the user completes modifying the selection ([`selectEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/selectend)). The event handler function context (available through the this keyword) will be set to the StockChart instance.

### selectstart: `Function`

Fires when the user starts modifying the axis selection ([`selectStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/selectstart)). The event handler function context (available through the this keyword) will be set to the StockChart instance.

### seriesclick: `Function`

Fires when chart series are clicked ([`seriesClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/seriesclick)).

### serieshover: `Function`

Fires when chart series are hovered over ([`seriesHover` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/serieshover)).

### seriesover: `Function`

Fires when the cursor is over the chart series ([`seriesOver` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/seriesover)).

### seriesleave: `Function`

Fires when the cursor leaves a chart series ([`seriesLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/seriesleave)).

### zoomstart: `Function`

Fires when the user uses the mouse to zoom the chart ([`zoomStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/zoomstart)). To abort the zoom operation, call `e.preventDefault()`.

### zoom: `Function`

Fires as long as the user is zooming the chart by using the mousewheel ([`zoom` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/zoom)).

### zoomend: `Function`

Fires when the user stops zooming the chart ([`zoomEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart/events/zoomend)).

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart#methods). 

### kendoWidget

##### returns

Returns the Kendo UI StockChart instance.
