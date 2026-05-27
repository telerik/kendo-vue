window.moduleDirectives = (window.moduleDirectives || []).concat([{
    module: '@progress/kendo-vue-tooltip',
    main: 'dist/cdn/js/kendo-vue-tooltip.js',
    match: '(Tooltip| TooltipItem |DialogActionsBar)',
    import: 'Tooltip'
}, {
    module: '@progress/kendo-vue-grid',
    main: 'dist/cdn/js/kendo-vue-grid.js',
    match: '(Grid)',
    import: 'Grid, GridColumn, GridCellProps, GridCell, GridEditCell, GridToolbar, GridDetailRow, GridNoRecords'
}, {
    module: '@progress/kendo-vue-intl',
    main: 'dist/cdn/js/kendo-vue-intl.js'
}]);
