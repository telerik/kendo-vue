export function reorderData(event, items, activeItem, dropPosition) {
    const dropItemProductID = getDroppedProductID(event.originalEvent.target);
    let reorderedData = items;

    if (dropItemProductID) {
        const activeItemIndex = reorderedData.findIndex(
            i => i.ProductID === activeItem.ProductID
        );
        const hoveredItemIndex = reorderedData.findIndex(
            i => i.ProductID === dropItemProductID
        );

        if (activeItemIndex !== hoveredItemIndex) {
            reorderedData.splice(activeItemIndex, 1);

            if (
                dropPosition === 'above' &&
                hoveredItemIndex !== 0 &&
                hoveredItemIndex < activeItemIndex
            ) {
                reorderedData.splice(hoveredItemIndex, 0, {
                    ...activeItem
                });
            } else if (dropPosition === 'above' && hoveredItemIndex === 0) {
                reorderedData.unshift({ ...activeItem });
            } else if (
                dropPosition === 'above' &&
                hoveredItemIndex !== 0 &&
                hoveredItemIndex > activeItemIndex
            ) {
                reorderedData.splice(hoveredItemIndex - 1, 0, {
                    ...activeItem
                });
            } else if (
                dropPosition === 'below' &&
                hoveredItemIndex !== 0 &&
                hoveredItemIndex < activeItemIndex
            ) {
                reorderedData.splice(hoveredItemIndex + 1, 0, {
                    ...activeItem
                });
            } else if (
                dropPosition === 'below' &&
                hoveredItemIndex !== 0 &&
                hoveredItemIndex > activeItemIndex
            ) {
                reorderedData.splice(hoveredItemIndex, 0, {
                    ...activeItem
                });
            }
        }
    }

    return reorderedData;
}

export function getDroppedProductID(target) {
    if (target.getAttribute('data-itemid')) {
        return parseInt(target.getAttribute('data-itemid'), 10);
    } else {
        if (target.parentElement) {
            return getDroppedProductID(target.parentElement);
        } else {
            return false;
        }
    }
}

export function getTargetTopOffSet(event) {
    if (
        event.originalEvent.target.className !== 'k-drop-hint-line' &&
        event.originalEvent.target.className !== 'k-drop-hint k-drop-hint-h'
    ) {
        return event.offsetY >=
            event.originalEvent.target.parentElement.clientHeight / 2
            ? event.originalEvent.target.parentElement.offsetTop +
            document.querySelector('.k-grid-header').offsetHeight +
            document.querySelector('.k-grid').offsetTop +
            event.originalEvent.target.parentElement.clientHeight
            : event.originalEvent.target.parentElement.offsetTop +
            document.querySelector('.k-grid-header').offsetHeight +
            document.querySelector('.k-grid').offsetTop;
    }
}
