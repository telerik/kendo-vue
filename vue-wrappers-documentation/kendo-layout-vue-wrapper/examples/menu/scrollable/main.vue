<template>
  <h4>Horizontal</h4>
    <div style="width: 300px">
        <kendo-menu :scrollable="true">
            <li>
                Mens
                <ul>
                    <li>Jackets and Coats</li>
                    <li>Jeans</li>
                    <li>Knitwear</li>
                    <li>Shirts</li>
                    <li>Belts</li>
                    <li>Socks</li>
                    <li>Fan Zone</li>
                </ul>
            </li>
            <li>
                Ladies
                <ul>
                    <li>Jackets and Coats</li>
                    <li>Jeans</li>
                    <li>Knitwear</li>
                    <li>Shirts</li>
                    <li>Belts</li>
                    <li>Socks</li>
                    <li>Fan Zone</li>
                </ul>
            </li>
            <li>
                Kids
                <ul>
                    <li>Jackets and Coats</li>
                    <li>Jeans</li>
                    <li>Knitwear</li>
                    <li>Shirts</li>
                    <li>Belts</li>
                    <li>Socks</li>
                    <li>Fan Zone</li>
                </ul>
            </li>
            <li>Sports</li>
            <li>Brands</li>
            <li>Accessories</li>
            <li>Promotions</li>
        </kendo-menu>
    </div>

    <h4 style="padding-top:2em; margin-top:30px">Vertical</h4>

    <div style="width:100px;">
        <kendo-menu id="verticalMenu"
                    ref="verticalMenu"
                    :scrollable="true"
                    :orientation="'vertical'">
            <li>
                Mens
                <ul>
                    <li>Jackets and Coats</li>
                    <li>Jeans</li>
                    <li>Knitwear</li>
                    <li>Shirts</li>
                    <li>Belts</li>
                    <li>Socks</li>
                    <li>Fan Zone</li>
                </ul>
            </li>
            <li>
                Ladies
                <ul>
                    <li>Jackets and Coats</li>
                    <li>Jeans</li>
                    <li>Knitwear</li>
                    <li>Shirts</li>
                    <li>Belts</li>
                    <li>Socks</li>
                    <li>Fan Zone</li>
                </ul>
            </li>
            <li>
                Kids
                <ul>
                    <li>Jackets and Coats</li>
                    <li>Jeans</li>
                    <li>Knitwear</li>
                    <li>Shirts</li>
                    <li>Belts</li>
                    <li>Socks</li>
                    <li>Fan Zone</li>
                </ul>
            </li>
            <li>Sports</li>
            <li>Brands</li>
            <li>News</li>
            <li>About us</li>
        </kendo-menu>
    </div>
</template>
<script>
import { Menu, MenuItem } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-menu': Menu,
    'kendo-menu-item': MenuItem
  }
}
</script>
<style>
    #verticalMenu {
        height: 100px;
    }
</style>
