<template>
  <div>
    <Tooltip :position="'right'" :anchor-element="'target'">
      <TreeView
        :animate="false"
        :dataItems="tree"
        :expandIcons="true"
        :item="'item'"
      >
        <template v-slot:item="{ props }">
          <span :title="props.item.description">
            <span :class="iconClassName(props.item)" key="0" />
            {{ props.item.text }}
          </span>
        </template>
      </TreeView>
    </Tooltip>
  </div>
</template>

<script>
import { TreeView } from '@progress/kendo-vue-treeview';
import { Tooltip } from '@progress/kendo-vue-tooltip';

const is = (fileName, ext) => new RegExp(`.${ext}\$`).test(fileName);
export default {
  components: {
    TreeView,
    Tooltip,
  },
  data() {
    return {
      tree: [
        {
          text: 'My Documents',
          description:
            'This is the "My Documents" folder and it is the "root" node of the TreeView',
          expanded: true,
          items: [
            {
              text: 'Kendo UI for Vue Project',
              description:
                'This is the "Kendo UI for Vue Project" folder. It contains the index.html, about.html and logo.png files.',
              expanded: true,
              items: [
                {
                  text: 'about.html',
                  description:
                    'A file in the "Kendo UI for Vue Project" folder',
                },
                {
                  text: 'index.html',
                  description:
                    'A file in the "Kendo UI for Vue Project" folder',
                },
                {
                  text: 'logo.png',
                  description:
                    'A file in the "Kendo UI for Vue Project" folder',
                },
              ],
            },
            {
              text: 'New Web Site',
              description:
                'This is the "New Web Site" folder. It contains the mockup.jpg and Research.pdf files.',
              expanded: true,
              items: [
                {
                  text: 'mockup.jpg',
                  description: 'A file in the "New Web Site" folder',
                },
                {
                  text: 'Research.pdf',
                  description: 'A file in the "New Web Site" folder',
                },
              ],
            },
            {
              text: 'Reports',
              description:
                'This is a long text description. Demonstarating how the Tooltip handles a long texts. This is a long text description. Demonstarating how the Tooltip handles a long texts. This is a long text description. Demonstarating how the Tooltip handles a long texts.This is a long text description. Demonstarating how the Tooltip handles a long texts.',
              expanded: true,
              items: [
                {
                  text: 'February.pdf',
                  description: 'February.pdf file ',
                },
                {
                  text: 'March.pdf',
                  description: 'March.pdf file ',
                },
                {
                  text: 'April.pdf',
                  description: 'April.pdf file ',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    filterElements(element) {
      console.log(element.className === 'k-treeview-leaf');
      if (element.className === 'k-treeview-leaf') {
        return true;
      }
      return false;
    },
    iconClassName({ text, items }) {
      if (items !== undefined) {
        return 'k-icon k-i-folder';
      } else if (is(text, 'pdf')) {
        return 'k-icon k-i-file-pdf';
      } else if (is(text, 'html')) {
        return 'k-icon k-i-html';
      } else if (is(text, 'jpg|png')) {
        return 'k-icon k-i-image';
      } else {
        return '';
      }
    },
  },
};
</script>
