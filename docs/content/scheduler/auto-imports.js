window.moduleDirectives = (window.moduleDirectives || []).concat(
    [
        {
            module: '@progress/kendo-vue-scheduler',
            main: 'dist/cdn/js/kendo-vue-scheduler.js',
            match: '(Scheduler|AgendaView|TimelineView|DayView|WeekView|WorkWeekView|MonthView)',
            import: 'Scheduler, AgendaView, TimelineView, DayView, WeekView, WorkWeekView, MonthView'
        }, {
            module: '@progress/kendo-vue-intl',
            main: 'dist/cdn/js/kendo-vue-intl.js'
        }, {
            module: '@progress/kendo-vue-popup',
            main: 'dist/cdn/js/kendo-vue-popup.js'
        }, {
            module: '@progress/kendo-vue-dateinputs',
            main: 'dist/cdn/js/kendo-vue-dateinputs.js'
        }, {
            module: '@progress/kendo-vue-animation',
            main: 'dist/cdn/js/kendo-vue-animation.js'
        }, {
            module: '@progress/kendo-vue-inputs',
            main: 'dist/cdn/js/kendo-vue-inputs.js'
        }, {
            module: '@progress/kendo-vue-buttons',
            main: 'dist/cdn/js/kendo-vue-buttons.js'
        }, {
            module: '@progress/kendo-vue-dropdowns',
            main: 'dist/cdn/js/kendo-vue-dropdowns.js'
        }, {
            module: '@progress/kendo-vue-dialogs',
            main: 'dist/cdn/js/kendo-vue-dialogs.js'
        }, {
            module: '@progress/kendo-vue-common',
            main: 'dist/cdn/js/kendo-vue-common.js'
        }, {
            module: '@progress/kendo-vue-layout',
            main: 'dist/cdn/js/kendo-vue-layout.js'
        }, {
            module: '@progress/kendo-vue-treeview',
            main: 'dist/cdn/js/kendo-vue-treeview.js'
        },{
            module: '@progress/kendo-vue-labels',
            main: 'dist/cdn/js/kendo-vue-labels.js'
        }, {
            module: '@progress/kendo-vue-form',
            main: 'dist/cdn/js/kendo-vue-form.js'
        }, {
            module: '@progress/kendo-date-math',
            main: 'dist/cdn/main.js'
        }, {
            module: '@progress/kendo-drawing',
            main: 'dist/cdn/main.js'
        },
        {
            module: '@progress/kendo-svg-icons',
            main: 'dist/index.js'
        }
    ]
);
