window.moduleDirectives = (window.moduleDirectives || []).concat([ {
    module: '@progress/kendo-vue-listview',
    main: 'dist/cdn/js/kendo-vue-listview.js',
    match: 'ListView',
    import: 'ListView'
}, {
    module: '@progress/kendo-vue-layout',
    main: 'dist/cdn/js/kendo-vue-layout.js',
    match: '(TabStrip|TabStripTab|PanelBar|PanelBarItem|PanelBarUtils|Menu|MenuItem|MenuItemModel|MenuItemLink|MenuItemArrow|Splitter|Drawer|DrawerNavigation|DrawerContent|Card|CardHeader|CardTitle|CardBody|CardActions|CardImage|Avatar)',
    import: 'TabStrip, TabStripTab, PanelBar, PanelBarItem, PanelBarUtils, Menu, MenuItem, MenuItemModel, MenuItemLink, MenuItemArrow, Splitter, Drawer, DrawerNavigation, DrawerContent, Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, Avatar'
}, {
    module: '@progress/kendo-vue-intl',
    main: 'dist/cdn/js/kendo-vue-intl.js'
}, {
    module: '@progress/kendo-drawing',
    main: 'dist/cdn/js/kendo-drawing.js'
}, {
    module: '@progress/kendo-date-math',
    main: 'dist/cdn/js/kendo-date-math.js'
}, {
    module: '@progress/kendo-vue-data-tools',
    main: 'dist/cdn/js/kendo-vue-data-tools.js'
}, {
    module: '@progress/kendo-vue-inputs',
    main: 'dist/cdn/js/kendo-vue-inputs.js'
}, {
    module: '@progress/kendo-vue-dropdowns',
    main: 'dist/cdn/js/kendo-vue-dropdowns.js'
}, {
    module: '@progress/kendo-vue-treeview',
    main: 'dist/cdn/js/kendo-vue-treeview.js'
},
{
    module: '@progress/kendo-vue-labels',
    main: 'dist/cdn/js/kendo-vue-labels.js'
}, {
    module: '@progress/kendo-data-query',
    main: 'dist/cdn/js/kendo-data-query.js',
    import: 'process'
} ]);
