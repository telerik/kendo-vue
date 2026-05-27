<template>
  <div style="margin: 18px">
    <p>DropDownList with Changed Icon</p>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="sports"
      :default-value="'Basketball'"
    />
  </div>
  <div style="margin: 18px">
    <p>Editor with Changed Bold Icon and Updated DropDownLists Icon</p>
    <Editor
      :tools="tools"
      :content-style="{ height: '330px' }"
    />
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { Editor } from '@progress/kendo-vue-editor';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { starIcon } from '@progress/kendo-svg-icons';

const sports = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball',
];

const tools = [
    ['Bold', 'Italic', 'Underline', 'Strikethrough'],
    ['Subscript', 'Superscript'],
    ['AlignLeft', 'AlignCenter', 'AlignRight', 'AlignJustify'],
    ['Indent', 'Outdent'],
    ['OrderedList', 'UnorderedList'],
    'FontSize',
    'FontName',
    'FormatBlock',
    ['Undo', 'Redo'],
    ['Link', 'Unlink', 'InsertImage', 'ViewHtml'],
    ['InsertTable'],
    ['AddRowBefore', 'AddRowAfter', 'AddColumnBefore', 'AddColumnAfter'],
    ['DeleteRow', 'DeleteColumn', 'DeleteTable'],
    ['MergeCells', 'SplitCell'],
    'FindAndReplace',
];

provide('kendoIcons', {
    type: 'svg',
    icons: {
        bold: starIcon,
        'chevron-down': starIcon,
    },
});;
</script>
