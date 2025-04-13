const tagMark = (tag) => ({
    // MarkSpec interface
    // https://prosemirror.net/docs/ref/#model.MarkSpec
    [tag]: {
        name: tag,
        inclusive: true,
        parseDOM: [
            {
                tag
            }
        ],
        toDOM: () => [tag, 0],
    }
});

export { tagMark };
