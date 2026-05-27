<template>
<div>
  <kendo-menu :items="menuItems" :vertical="false">
    <template #contentRender="{ props }">
      <div style="padding: 10px;">
        <div>Heading 1</div>
        <kendo-menu :items="props.item.items" :vertical="true">
          <template #contentRender="{ props: subProps }">
            <div style="padding: 10px;">
              <div>Heading 2</div>
              <kendo-menu :items="subProps.item.items" :vertical="true" />
            </div>
          </template>
        </kendo-menu>
      </div>
    </template>
  </kendo-menu>
</div>
</template>

<script setup>
import { Menu as KendoMenu } from '@progress/kendo-vue-layout';
import { heartIcon } from '@progress/kendo-svg-icons';

const menuItems = [
    {
        text: 'Item1'
    },
    {
        text: 'Item2',
        svgIcon: heartIcon,
        contentRender: 'contentRender',
        items: [
            {
                text: 'Item2.1',
                contentRender: 'contentRender',
                items: [
                    { text: 'Item2.1.1' }
                ]
            },
            {
                text: 'Item2.2'
            }
        ]
    }
];
</script>
