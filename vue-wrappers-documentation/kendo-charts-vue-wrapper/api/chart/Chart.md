---
title: Chart API
description: "API Index | Chart"
api_reference: true
slug: api_chartcomponent_wrapper
---

# Chart

## Directive

`kendo-chart`

## Child Components

* [`kendo-chart-series-item`]({% slug api_chartseriesitemcomponent_wrapper %})

## Props

### auto-bind `Boolean`

If `auto-bind` is set to `false`, the Chart will not bind to the data source during initialization. In this case data binding will occur when the `change` event of the data source is fired. By default, the Chart will bind to the data source that is specified in the configuration ([`autoBind` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/autobind)).

### axis-defaults `Object`

The default options for all Chart axes ([`axisDefaults` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/axisdefaults)). Accepts the options supported by `categoryAxis`, `valueAxis`, `xAxis`, and `yAxis`. The supported composite props are available in [`AxisDefaultsProps`]({% slug api_chart_axisdefaultsprops_wrapper %}).

### category-axis `Array | Object`

The configuration options for the category axis ([`categoryAxis` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/categoryaxis)). The supported composite props are available in [`CategoryAxisProps`]({% slug api_chart_categoryaxisprops_wrapper %}).

### chart-area `Object`

The configuration options of the Chart area ([`chartArea` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/chartarea)). Represents the entire visible area of the Chart. The supported composite props are available in [`ChartAreaProps`]({% slug api_chart_chartareaprops_wrapper %}).

### data-source `Object | Array`

The data source of the Chart which is used to display the series ([`dataSource` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/datasource)).

You can set `data-source` to:

* A JavaScript object which represents any valid data source configuration.
* A JavaScript array.
* An existing `kendo.data.DataSource` instance.

If the `dataSource` option is set to a JavaScript object or an array, the Chart will initialize a new `kendo.data.DataSource` instance by using that value as a data source configuration. If the `dataSource` option is an existing `kendo.data.DataSource` instance, the Chart will use that instance and will not initialize a new one.

### legend `Object`

The configuration options for the Chart legend ([`legend` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/legend)). The supported composite props are available in [`LegendProps`]({% slug api_chart_legendprops_wrapper %}).

### panes `Array`

The Chart panes configuration ([`panes` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/panes)).

Panes split the Chart into two or more parts. The panes are ordered from top to bottom. Each axis can be associated with a pane by setting its `pane` option to the name of the desired pane. Axes that do not have specified `pane` are placed in the top (default) pane. Series are moved to the desired pane by associating them with an axis. The supported composite props are available in [`PanesProps`]({% slug api_chart_panesprops_wrapper %}).

### pannable `Boolean | Object`

Specifies if the Chart can be panned ([`pannable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/pannable)). The supported composite props are available in [`PannableProps`]({% slug api_chart_pannableprops_wrapper %}).

### pdf `Object`

Configures the export settings for the `saveAsPDF` method ([`pdf` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/pdf)). The supported composite props are available in [`PdfProps`]({% slug api_chart_pdfprops_wrapper %}).

### persist-series-visibility `Boolean`

Specifies if the series `visible` option will be persisted when the `dataSource` data changes ([`persistSeriesVisibility` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/persistseriesvisibility)).

### plot-area `Object`

The configuration options for the plot area ([`plotArea` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/plotarea)).

The plot area is the area which displays the series. The supported composite props are available in [`PlotAreaProps`]({% slug api_chart_plotareaprops_wrapper %}).

### render-as `String`

Sets the preferred rendering engine ([`renderAs` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/renderas)). If `render-as` is not supported by the browser, the Chart will switch to the first available mode.

The supported values are:

* `svg`&mdash;Renders the Chart as an inline SVG document if available.
* `canvas`&mdash;Renders the Chart as a `canvas` element if available.

### series `Array`

The configuration of the chart series ([`series` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/series)).

The series type is determined by the value of the type field. If a type value is missing, the type is assumed to be the one specified in `seriesDefaults`.

### series-colors `Array`

The default colors for the Chart series ([`seriesColors` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/seriescolors)). When all the colors are used, the colors start over again.

### series-defaults `Object`

The default options for all series ([`seriesDefaults` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/seriesdefaults)). The supported composite props are available in [`SeriesDefaultsProps`]({% slug api_chart_seriesdefaultsprops_wrapper %}).

### theme `String`

The theme of the Chart ([`theme` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/theme)).

`theme` can be either a built-in theme or a `sass` theme. When `theme` is set to `sass`, the Chart will read the variables from the SASS-based themes.

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

### title `String | Object`

The  configuration options for the Chart title or text ([`title` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/title)). The supported composite props are available in [`TitleProps`]({% slug api_chart_titleprops_wrapper %}).

### tooltip `Object`

The  configuration options for the tooltip of the Chart series ([`tooltip` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/tooltip)). The supported composite props are available in [`TooltipProps`]({% slug api_chart_tooltipprops_wrapper %}).

### transitions `Boolean`

If `transitions` is set to `true`, the Chart will play animations when it displays the series ([`transitions` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/transitions)). By default, animations are enabled.

### value-axis `Array | Object`

The configuration options for the value axis ([`valueAxis` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/valueaxis)). The supported composite props are available in [`ValueAxisProps`]({% slug api_chart_valueaxisprops_wrapper %}).

### x-axis `Array`

The configuration options for the X-axis of the Scatter Chart X-axis ([`xAxis` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/xaxis)). Supports all `valueAxis` options. The supported composite props are available in [`XAxisProps`]({% slug api_chart_xaxisprops_wrapper %}).

### y-axis `Array`

The configuration options for the Y-axis of the Scatter Chart ([`yAxis` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/yaxis)). Supports all `valueAxis` options. The supported composite props are available in [`YAxisProps`]({% slug api_chart_yaxisprops_wrapper %}).

### zoomable `Boolean | Object`

Specifies if the Chart can be zoomed ([`zoomable` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/zoomable)). The supported composite props are available in [`ZoomableProps`]({% slug api_chart_zoomableprops_wrapper %}).

## Events

### axislabelclick: `Function`

Fires when the user clicks an axis label ([`axisLabelClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/axislabelclick)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### databound: `Function`

Fires when the Chart is bound to data from its data source ([`dataBound` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/databound)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### drag: `Function`

Fires as long as the user is dragging the Chart by using the mouse or by swiping ([`drag` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/drag)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### dragend: `Function`

Fires when the user stops dragging the Chart ([`dragEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/dragend)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### dragstart: `Function`

Fires when the user starts dragging the Chart ([`dragStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/dragstart)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### legenditemclick: `Function`

Fires when a legend item is clicked and before the selected series visibility is toggled ([`legendItemClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/legenditemclick)). Can be cancelled.

### legenditemhover: `Function`

Fires when a legend item is hovered ([`legendItemHover` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/legenditemhover)).

### legenditemleave: `Function`

Fires when the cursor leaves a legend item ([`legendItemLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/legenditemleave)).

### noteclick: `Function`

Fires when the user clicks a note ([`noteClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/noteclick)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### notehover: `Function`

Fires when the user hovers over a note ([`noteHover` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/notehover)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### noteleave: `Function`

Fires when the cursor leaves a note ([`noteLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/noteleave)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### panerender: `Function`

Fires when a pane is rendered because the Chart is rendered, performs panning or zooming, or is exported with different options ([`paneRender` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/panerender)). You can use `panerender` to render custom visuals in the panes.

### plotareaclick: `Function`

Fires when the user clicks the plot area ([`plotAreaClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/plotareaclick)).

### plotareahover: `Function`

Fires when the user hovers over the plot area ([`plotAreaHover` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/plotareahover)).

### plotarealeave: `Function`

Fires when the cursor leaves the plot area ([`plotAreaLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/plotarealeave)).

### render: `Function`

Fires when the Chart is ready to render on-screen ([`render` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/render)). For example, `render` can be used to remove loading indicators. The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### select: `Function`

Fires when the user modifies the selection ([`select` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/select)).

The supported range units are:

* Generic axis&mdash;A category index (0-based).
* Date axis&mdash;A `date` instance.

The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### selectend: `Function`

Fires when the user completes modifying the selection ([`selectEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/selectend)).

The supported range units are:

* Generic axis&mdash;A category index (0-based).
* Date axis&mdash;A `date` instance.

The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### selectstart: `Function`

Fires when the user starts modifying the axis selection ([`selectStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/selectstart)).

The supported range units are:

* Generic axis&mdash;A category index (0-based).
* Date axis&mdash;A `date` instance.

The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### seriesclick: `Function`

Fires when the user clicks the Chart series ([`seriesClick` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/seriesclick)).

### serieshover: `Function`

Fires when the user hovers over the Chart series ([`seriesHover` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/serieshover)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### seriesover: `Function`

Fires when the cursor is over the Chart series ([`seriesOver` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/seriesover)).

### seriesleave: `Function`

Fires when the cursor leaves a Chart series ([`seriesLeave` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/seriesleave)).

### zoom: `Function`

Fires as long as the user is zooming the Chart with the mouse ([`zoom` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/zoom)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### zoomend: `Function`

Fires when the user stops zooming the Chart ([`zoomEnd` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/zoomend)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

### zoomstart: `Function`

Fires when the user uses the mouse to zoom the Chart ([`zoomStart` in Kendo UI for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/events/zoomstart)). The event handler function context, which is available through the this keyword, will be set to the Chart instance.

## Methods

For more details about the methods available in the component's API please check [its Kendo UI for jQuery API documentation](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#methods). 

### kendoWidget

##### returns

Returns the Kendo UI Chart instance.
