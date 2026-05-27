window.moduleDirectives = (window.moduleDirectives || []).concat([{
    module: '@progress/kendo-vue-notification',
    main: 'dist/cdn/js/kendo-vue-notification.js',
    match: '(Notification|NotificationGroup)',
    import: 'Notification, NotificationGroup'
}, {
    module: '@progress/kendo-vue-animation',
    main: 'dist/cdn/js/kendo-vue-animation.js',
    match: '(Animation|Expand|Fade|Push|Slide|Zoom|Reveal)',
    import: 'Animation, Expand, Fade, Push, Slide, Zoom, Reveal'
}]);
