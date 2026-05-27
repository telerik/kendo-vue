window.moduleDirectives = (window.moduleDirectives || []).concat([ {
    module: '@progress/kendo-vue-excel-export',
    main: 'dist/cdn/js/kendo-vue-excel-export.js',
    match: '(ExcelExport|ExcelExportColumn|ExcelExportColumnGroup|ExcelExportFooter|ExcelExportGroupFooter|ExcelExportGroupHeader)',
    import: 'ExcelExport, ExcelExportColumn, ExcelExportColumnGroup, ExcelExportFooter, ExcelExportGroupFooter, ExcelExportGroupHeader'
}, {
    module: '@progress/kendo-vue-treelist',
    main: 'dist/cdn/js/kendo-vue-treelist.js'
}, {
    module: '@progress/kendo-vue-intl',
    main: 'dist/cdn/js/kendo-vue-intl.js'
}, {
    module: '@progress/kendo-data-query',
    main: 'dist/cdn/js/kendo-data-query.js'
}, {
    module: '@progress/kendo-date-math',
    main: 'dist/cdn/js/kendo-date-math.js'
}, {
    module: '@progress/kendo-vue-grid',
    main: 'dist/cdn/js/kendo-vue-grid.js'
}, {
    module: '@progress/kendo-vue-indicators',
    main: 'dist/cdn/js/kendo-vue-indicators.js'
} ]);
