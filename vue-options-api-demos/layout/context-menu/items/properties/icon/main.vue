<template>
  <div>
    <div :style="rectangularStyle" @contextmenu="handleContextMenu">
      <p>Right click here to open Context menu</p>
    </div>
    <Popup :show="show" :offset="currentOffset">
      <Menu
        :items="items"
        :vertical="true"
        :style="{ display: 'inline-block' }"
      />
    </Popup>
  </div>
</template>

<script>
import { Menu } from "@progress/kendo-vue-layout";
import { Popup } from "@progress/kendo-vue-popup";
import {
  folderIcon,
  fileIcon,
  fileImageIcon,
  filePdfIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    Menu,
    Popup,
  },
  mounted: function () {
    document.addEventListener(
      "click",
      function () {
        this.show = false;
      }.bind(this)
    );
  },
  computed: {
    currentOffset() {
      return this.offSet;
    },
  },
  data: function () {
    return {
      offSet: {
        left: 0,
        top: 0,
      },
      show: false,
      items: [
        {
          text: "My Web Site",
          svgIcon: folderIcon,
          items: [
            {
              text: "images",
              svgIcon: folderIcon,
              items: [
                {
                  text: "logo.png",
                  svgIcon: fileImageIcon,
                },
                {
                  text: "body-back.png",
                  svgIcon: fileImageIcon,
                },
                {
                  text: "my-photo.png",
                  svgIcon: fileImageIcon,
                },
              ],
            },
            {
              text: "resources",
              svgIcon: folderIcon,
              items: [
                {
                  text: "pdf",
                  svgIcon: folderIcon,
                  items: [
                    {
                      text: "prices.pdf",
                      svgIcon: filePdfIcon,
                    },
                    {
                      text: "brochure.pdf",
                      svgIcon: filePdfIcon,
                    },
                  ],
                },
                {
                  text: "zip",
                  svgIcon: folderIcon,
                },
              ],
            },
            {
              text: "about.html",
              svgIcon: fileIcon,
            },
            {
              text: "contacts.html",
              svgIcon: fileIcon,
            },
            {
              text: "index.html",
              svgIcon: fileIcon,
            },
            {
              text: "portfolio.html",
              svgIcon: fileIcon,
            },
          ],
        },
      ],
      rectangularStyle: {
        width: "300px",
        height: "200px",
        backgroundColor: "#f6f6f6",
        borderRadius: "5px",
        justifyContent: "center",
        display: "flex",
        position: "absolute",
        alignItems: "center",
        boxShadow:
          "0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)",
      },
    };
  },
  methods: {
    handleContextMenu(e) {
      e.preventDefault();
      this.offSet = {
        left: e.clientX,
        top: e.clientY,
      };
      this.show = true;
    },
  },
};
</script>
