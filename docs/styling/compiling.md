---
title: Compiling Themes
description: "Get started with the Kendo UI themes and learn how to compile them in your Vue project."
slug: compilingthemes
position: 20
category: styling
level: 0
---
# Compiling Themes

All kendo-themes are written in [sass](https://sass-lang.com/), using [scss syntax](https://sass-lang.com/documentation/syntax), and you need a sass compiler to compile them. We support both [node-sass](https://www.npmjs.com/package/node-sass) and [dart-sass](https://www.npmjs.com/package/dart-sass).

Due to the complexity of the themes, we rely on _postcss_, _autoprefixer_, and _postcss-calc_ to properly compile them.

## Using gulp

The following setup will generate `./dist/kendo-theme.css` from source `./sass/kendo-theme.scss`.

Please note:

* We include `/dist/all.scss`, which is a flattened single-file version of the theme for faster compilation.
* Prefixes will be generated for browsers with at least 10% market share.
* `sassOptions.precision` setting has no effect when using dart-sass.
* Make sure you install [gulp-sass](https://www.npmjs.com/package/gulp-sass), [node-sass](https://www.npmjs.com/package/node-sass), [dart-sass](https://www.npmjs.com/package/dart-sass), [gulp-postcss](https://www.npmjs.com/package/gulp-postcss), [autoprefixer](https://www.npmjs.com/package/autoprefixer), [postcss-calc](https://www.npmjs.com/package/postcss-calc), and [fibers](https://www.npmjs.com/package/fibers).

```scss
// assuming ./sass/kendo-theme.scss
@import "../node_modules/@progress/kendo-theme-default/dist/all.scss";
```


```js
const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const calc = require("postcss-calc");
const Fiber = require('fibers');

// Use node sass
sass.compiler = require('node-sass');
// Use dart-sass
// sass.compiler = require('dart-sass');

const postcssPlugins = [
    calc({
        precision: 10
    }),
    autoprefixer({
        overrideBrowserslist: [ '> 10%' ]
    })
];
const sassOptions = {
    precision: 10,
    outputStyle: 'expanded',
    fiber: Fiber
};
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass.sync(sassOptions).on('error', sass.logError))
        .pipe(postcss(postcssPlugins))
        .pipe(gulp.dest('./dist'));
});
```

## Using webpack

Make sure you install [style-loader](https://www.npmjs.com/package/style-loader), [sass-loader](https://www.npmjs.com/package/sass-loader), [node-sass](https://www.npmjs.com/package/node-sass), [dart-sass](https://www.npmjs.com/package/dart-sass), [postcss-loader](https://www.npmjs.com/package/postcss-loader), [autoprefixer](https://www.npmjs.com/package/autoprefixer), [postcss-calc](https://www.npmjs.com/package/postcss-calc), and [fibers](https://www.npmjs.com/package/fibers).

```scss
// assuming ./sass/kendo-theme.scss
@import "~@progress/kendo-theme-default/dist/all.scss";
```

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // PostCSS
                    {
                        loader: 'postcss-loader',
                        options: {
                            precision: 10,
                            plugins: [
                                require('autoprefixer')(),
                                require('postcss-calc')()
                            ]
                        }
                    },
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('node-sass'),
                            // implementation: require('dart-sass'),
                            sassOptions: {
                                precision: 10,
                                // fiber: require('fibers')
                            }
                        }
                    }
                ]
            }
        ]
    }
};
```

## Known Issues

Here is a list of common issues with kendo-themes and how to solve them.

### Compilation is slow

Since day one of the themes, we wanted the themes to "automagically" load the styles needed for a given component. In other words, if you need just the grid, the themes will load all the input components, because they are needed for the editing functionality. That leads to multiple and repetitive child imports, hence a hit in performance when compiling.

If you need the entire theme, instead of importing `/scss/all.scss`, you can import `/dist/all.scss`. That's a single-file version of the theme and compiles much much faster.

If you need to import multiple components, you can take a look at our [theme task](https://github.com/telerik/kendo-themes/blob/develop/packages/theme-tasks/gulpfile.js) and the [sassimporter](https://github.com/telerik/kendo-themes/blob/develop/packages/theme-tasks/lib/sassimporter.js) helper, which implements a sort of caching mechanism to avoid repetitive file processing.

> There is not much that can be done about dart-sass compiler, before we switch to [sass module system](https://sass-lang.com/blog/the-module-system-is-launched).

### Invalid nested calc expressions

Due the complexity of the themes, nested or otherwise invalid calc expressions could appear in the generated css. To handle this, use `postcss-calc` in your gulp or webpack workflow.

## Suggested Links

* [Styling Overview](slug:themesandstyles)
* [Customizing Themes](slug:customizingthemes)
* [Web Font Icons in Kendo UI for Vue Native](slug:icons)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Browse the Components](https://www.telerik.com/kendo-vue-ui/components/)