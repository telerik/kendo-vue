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
import { Menu } from '@progress/kendo-vue-layout';
import { Popup } from '@progress/kendo-vue-popup';

export default {
  components: {
    Menu,
    Popup,
  },
  mounted: function () {
    document.addEventListener(
      'click',
      function () {
        this.show = false;
      }.bind(this)
    );

    fetch(this.url)
      .then((response) => response.json())
      .then((json) => {
        this.items = this.mapItems(json.value);
      });
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
      url: 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories?$expand=Products',
      items: [],
      rectangularStyle: {
        width: '300px',
        height: '200px',
        backgroundColor: '#f6f6f6',
        borderRadius: '5px',
        justifyContent: 'center',
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        boxShadow:
          '0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)',
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
    mapItems: function (items) {
      return items.map((item) => {
        const result = {
          text: item.CategoryName,
        };

        if (item.Products) {
          result.items = item.Products.map((childItem) => {
            return {
              text: childItem.ProductName,
            };
          });
        }

        return result;
      });
    },
  },
};
</script>
