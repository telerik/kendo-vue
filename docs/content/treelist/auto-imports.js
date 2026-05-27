window.moduleDirectives = (window.moduleDirectives || []).concat(
    [
        {
            module: '@progress/kendo-vue-treelist',
            main: 'dist/cdn/js/kendo-vue-treelist.js',
            match: '(TreeList|TreeListToolbar|extendDataItem|removeItems|modifySubItems|orderBy|filterBy|mapTree|' +
                'TreeListTextEditor|TreeListNumericEditor|TreeListDateEditor|TreeListBooleanEditor' +
                'TreeListTextFilter|TreeListNumericFilter|TreeListDateFilter|TreeListBooleanFilter|' +
                'getSelectedState|getSelectedStateFromKeyDown)',
            import: 'TreeList, TreeListToolbar, extendDataItem, removeItems, modifySubItems, orderBy, filterBy, mapTree, ' +
                'TreeListTextEditor, TreeListNumericEditor, TreeListDateEditor, TreeListBooleanEditor, ' +
                'TreeListTextFilter, TreeListNumericFilter, TreeListDateFilter, TreeListBooleanFilter,' +
                'getSelectedState, getSelectedStateFromKeyDown'
        }, {
            module: '@progress/kendo-vue-intl',
            main: 'dist/cdn/js/kendo-vue-intl.js'
        }, {
            module: '@progress/kendo-vue-dateinputs',
            main: 'dist/cdn/js/kendo-vue-dateinputs.js'
        }, {
            module: '@progress/kendo-vue-common',
            main: 'dist/cdn/js/kendo-vue-common.js'
        }, {
            module: '@progress/kendo-data-query',
            main: 'dist/cdn/js/kendo-data-query.js',
            import: 'process'
        }, {
            module: '@progress/kendo-drawing',
            main: 'dist/cdn/js/kendo-drawing.js'
        }, {
            module: '@progress/kendo-vue-inputs',
            main: 'dist/cdn/js/kendo-vue-inputs.js'
        }, {
            module: '@progress/kendo-vue-dropdowns',
            main: 'dist/cdn/js/kendo-vue-dropdowns.js'
        }, {
            module: '@progress/kendo-vue-treeview',
            main: 'dist/cdn/js/kendo-vue-treeview.js'
        },{
            module: '@progress/kendo-vue-labels',
            main: 'dist/cdn/js/kendo-vue-labels.js'
        },{
            module: '@progress/kendo-vue-data-tools',
            main: 'dist/cdn/js/kendo-vue-data-tools.js'
        }, {
            module: '@progress/kendo-vue-dialogs',
            main: 'dist/cdn/js/kendo-vue-dialogs.js'
        }, {
            module: '@progress/kendo-vue-buttons',
            main: 'dist/cdn/js/kendo-vue-buttons.js'
        }, {
            module: '@progress/kendo-vue-excel-export',
            main: 'dist/cdn/js/kendo-vue-excel-export.js'
        }, {
            module: '@progress/kendo-vue-pdf',
            main: 'dist/cdn/js/kendo-vue-pdf.js'
        }, {
            module: '@progress/kendo-date-math',
            main: 'dist/cdn/js/kendo-date-math.js'
        },
        {
            module: '@progress/kendo-svg-icons',
            main: 'dist/index.js'
        }
    ]
);
