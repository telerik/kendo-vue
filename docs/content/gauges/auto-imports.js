window.moduleDirectives = (window.moduleDirectives || []).concat([ {
    module: '@progress/kendo-vue-gauges',
    main: 'dist/cdn/js/kendo-vue-gauges.js',
    match: '(ArcGauge|LinearGauge|RadialGauge)',
    import: 'ArcGauge,LinearGauge,RadialGauge'
}, {
    module: '@progress/kendo-vue-popup',
    main: 'dist/cdn/js/kendo-vue-popup.js'
}, {
    module: '@progress/kendo-vue-dropdowns',
    main: 'dist/cdn/js/kendo-vue-dropdowns.js',
    match: '(ComboBox|DropDownList)',
    import: 'ComboBox, DropDownList'
}, {
    module: '@progress/kendo-vue-treeview',
    main: 'dist/cdn/js/kendo-vue-treeview.js'
},{
    module: '@progress/kendo-vue-labels',
    main: 'dist/cdn/js/kendo-vue-labels.js'
},{
    module: '@progress/kendo-vue-inputs',
    main: 'dist/cdn/js/kendo-vue-inputs.js'
}, {
    module: '@progress/kendo-vue-intl',
    main: 'dist/cdn/js/kendo-vue-intl.js'
}, {
    module: '@progress/kendo-data-query',
    main: 'dist/cdn/js/kendo-data-query.js'
}, {
    module: '@progress/kendo-drawing',
    main: 'dist/es/main.js'
}, {
    module: '@progress/kendo-file-saver',
    main: 'dist/npm/main.js'
}, {
    module: '@progress/kendo-vue-buttons',
    main: 'dist/cdn/js/kendo-vue-buttons.js',
    match: '(Button)',
    import: 'Button'
} ]);
