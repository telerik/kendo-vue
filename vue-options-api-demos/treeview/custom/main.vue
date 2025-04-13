<template>
  <div>
    <TreeView
      :animate="false"
      :dataItems="tree"
      :expandIcons="true"
      :item="'item'"
    >
      <template v-slot:item="{ props }">
        <span>
          <SvgIcon :icon="svgIconName(props.item)" :key="props.item.text" />
          {{ props.item.text }}
        </span>
      </template>
    </TreeView>
  </div>
</template>

<script>
import { TreeView } from "@progress/kendo-vue-treeview";
import {
  folderIcon,
  filePdfIcon,
  html5Icon,
  imageIcon,
} from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-vue-common";

const is = (fileName, ext) => new RegExp(`.${ext}\$`).test(fileName);
export default {
  components: {
    TreeView,
    SvgIcon,
  },
  data() {
    return {
      tree: [
        {
          text: "My Documents",
          expanded: true,
          items: [
            {
              text: "Kendo UI for Vue Project",
              expanded: true,
              items: [
                {
                  text: "about.html",
                },
                {
                  text: "index.html",
                },
                {
                  text: "logo.png",
                },
              ],
            },
            {
              text: "New Web Site",
              expanded: true,
              items: [
                {
                  text: "mockup.jpg",
                },
                {
                  text: "Research.pdf",
                },
              ],
            },
            {
              text: "Reports",
              expanded: true,
              items: [
                {
                  text: "February.pdf",
                },
                {
                  text: "March.pdf",
                },
                {
                  text: "April.pdf",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    svgIconName({ text, items }) {
      console.log(text, items);
      if (items !== undefined) {
        return folderIcon;
      } else if (is(text, "pdf")) {
        return filePdfIcon;
      } else if (is(text, "html")) {
        return html5Icon;
      } else if (is(text, "jpg|png")) {
        return imageIcon;
      } else {
        return "";
      }
    },
  },
};
</script>
