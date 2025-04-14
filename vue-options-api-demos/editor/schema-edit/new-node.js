const iframe = {
    // NodeSpec interface
    // http://prosemirror.net/docs/ref/#model.NodeSpec
    attrs: {
        src: {
            default: null,
        },
        style: {
            default: null,
        },
    },
    group: 'block',
    selectable: false,
    parseDOM: [
        {
            tag: 'iframe',
            getAttrs: (dom) => ({
                src: dom.getAttribute('src'),
                style: dom.getAttribute('style'),
            }),
        },
    ],
    toDOM: (node) => {
        const attrs = {
            src: node.attrs.src,
            style: node.attrs.style,
            frameborder: '0',
            allowfullscreen: 'true',
        };
        return ['iframe', attrs];
    },
};
export { iframe };
