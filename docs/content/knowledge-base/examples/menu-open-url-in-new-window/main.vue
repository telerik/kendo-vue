<template>
  <KendoMenu :items="items" @select="onSelect">
    <template #linkRender="{ props }">
      <a class="k-link k-menu-link" :href="props.item.url" @click.stop.prevent>
        <Icon
          v-if="props.item.svgIcon"
          :svgIcon="props.item.svgIcon"
          role="presentation"
        />
        <span
          v-else-if="props.item.icon"
          :class="`k-icon k-font-icon k-i-${props.item.icon}`"
          role="presentation"
        />
        {{ props.item.text }}
        <MenuItemArrow
          v-if="props.item.items && props.item.items.length > 0"
          :itemId="props.itemId"
          :vertical-menu="false"
          :dir="props.dir"
        />
      </a>
    </template>
  </KendoMenu>
</template>

<script>
import { ref } from 'vue';
import { Menu as KendoMenu, MenuItemArrow } from '@progress/kendo-vue-layout';
import { Icon } from '@progress/kendo-vue-common';
import { heartIcon } from '@progress/kendo-svg-icons';

export default {
  name: 'App',
  components: { KendoMenu, MenuItemArrow, Icon },
  setup() {
    const items = ref([
      { text: 'Item1', url: 'https://google.com' },
      {
        text: 'Item2',
        svgIcon: heartIcon,
        url: 'https://google.com',
      },
    ]);

    const onSelect = (e) => {
      if (e?.item?.url) {
        e.event?.preventDefault?.();
        window.open(e.item.url, '_blank');
      }
    };

    return { items, onSelect };
  },
};
</script>
