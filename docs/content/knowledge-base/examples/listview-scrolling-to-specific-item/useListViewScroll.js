import { nextTick } from 'vue';

export function useListViewScroll() {
  function scrollToItem(listViewRef, itemIndex, options = {}) {
    const { behavior = 'smooth', block = 'nearest' } = options;

    nextTick(() => {
      const listViewElement = listViewRef.value?.$el;
      const contentContainer = listViewElement?.querySelector(
        '.k-listview-content'
      );
      const listItems = contentContainer?.querySelectorAll('.k-listview-item');

      if (listItems && listItems[itemIndex]) {
        listItems[itemIndex].scrollIntoView({ behavior, block });
      }
    });
  }

  function scrollToPosition(listViewRef, position, options = {}) {
    const { behavior = 'smooth' } = options;

    nextTick(() => {
      const listViewElement = listViewRef.value?.$el;
      const contentContainer = listViewElement?.querySelector(
        '.k-listview-content'
      );

      if (contentContainer) {
        contentContainer.scrollTo({
          top: position,
          behavior,
        });
      }
    });
  }

  function scrollToBottom(listViewRef, options = {}) {
    const { behavior = 'smooth' } = options;

    nextTick(() => {
      const listViewElement = listViewRef.value?.$el;
      const contentContainer = listViewElement?.querySelector(
        '.k-listview-content'
      );

      if (contentContainer) {
        // Use scrollTo with behavior: 'smooth' instead of directly setting scrollTop
        contentContainer.scrollTo({
          top: contentContainer.scrollHeight,
          behavior,
        });
      }
    });
  }

  function scrollToTop(listViewRef, options = {}) {
    const { behavior = 'smooth' } = options;
    scrollToPosition(listViewRef, 0, { behavior });
  }

  return {
    scrollToItem,
    scrollToPosition,
    scrollToBottom,
    scrollToTop,
  };
}
