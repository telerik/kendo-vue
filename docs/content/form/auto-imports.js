window.moduleDirectives = (window.moduleDirectives || []).concat(
    [
        {
            module: '@progress/kendo-vue-form',
            main: 'dist/cdn/js/kendo-vue-form.js',
            match: '(Form|Field|FieldWrapper|FormElement)',
            import: 'Form, Field, FieldWrapper, FormElement'
        }, {
            module: '@progress/kendo-vue-labels',
            main: 'dist/cdn/js/kendo-vue-labels.js',
            match: '(Label|FloatingLabel|Error|Hint)',
            import: 'Label, FloatingLabel, Error, Hint'
        }, {
            module: '@progress/kendo-vue-inputs',
            main: 'dist/cdn/js/kendo-vue-inputs.js',
            match: '(Input|NumericTextBox)',
            import: 'Input, NumericTextBox'
        }, {
            module: '@progress/kendo-vue-dateinputs',
            main: 'dist/cdn/js/kendo-vue-dateinputs.js',
            match: '(DatePicker|DateTimePicker|DateInput|TimePicker|DateRangePicker)',
            import: 'DatePicker, DateTimePicker, DateInput, TimePicker, DateRangePicker'
        }, {
            module: '@progress/kendo-vue-buttons',
            main: 'dist/cdn/js/kendo-vue-buttons.js',
            match: '(Button)',
            import: 'Button'
        },{
            module: '@progress/kendo-vue-treeview',
            main: 'dist/cdn/js/kendo-vue-treeview.js'
        }, {
            module: '@progress/kendo-vue-dropdowns',
            main: 'dist/cdn/js/kendo-vue-dropdowns.js',
            match: '(DropDownList|ComboBox|AutoComplete|MultiSelect)',
            import: 'DropDownList, ComboBox, AutoComplete, MultiSelect'
        }, {
            module: '@progress/kendo-vue-upload',
            main: 'dist/cdn/js/kendo-vue-upload.js',
            match: '(Upload)',
            import: 'Upload'
        }, {
            module: '@progress/kendo-vue-layout',
            main: 'dist/cdn/js/kendo-vue-layout.js',
            match: '(Stepper)',
            import: 'Stepper'
        }, {
            module: '@progress/kendo-vue-grid',
            main: 'dist/cdn/js/kendo-vue-grid.js',
            match: '(Grid)',
            import: 'Grid'
        }, {
            module: '@progress/kendo-vue-common',
            main: 'dist/cdn/js/kendo-vue-common.js',
            match: '(getter)',
            import: 'getter'
        }, {
            module: '@progress/kendo-vue-data-tools',
            main: 'dist/cdn/js/kendo-vue-data-tools.js'
        }, {
            module: '@progress/kendo-vue-intl',
            main: 'dist/cdn/js/kendo-vue-intl.js'
        }, {
            module: '@progress/kendo-drawing',
            main: 'dist/cdn/main.js'
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
