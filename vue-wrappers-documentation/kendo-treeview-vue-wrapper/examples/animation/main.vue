<template>
<div>
    <treeview :animation-expand-effects="effects">
       <li>Furniture
                <ul>
                    <li>Tables & Chairs</li>
                    <li>Sofas</li>
                    <li>Occasional Furniture</li>
                    <li>Children's Furniture</li>
                    <li>Beds</li>
                </ul>
            </li>
            <li data-expanded="true">Decor
                <ul>
                    <li>Bed Linen</li>
                    <li>Throws</li>
                    <li>Curtains & Blinds</li>
                    <li>Rugs</li>
                    <li>Carpets</li>
                </ul>
            </li>
            <li>Storage
                <ul>
                    <li>Wall Shelving</li>
                    <li>Kids Storage</li>
                    <li>Baskets</li>
                    <li>Multimedia Storage</li>
                    <li>Floor Shelving</li>
                    <li>Toilet Roll Holders</li>
                    <li>Storage Jars</li>
                    <li>Drawers</li>
                    <li>Boxes</li>
                </ul>
            </li>
    </treeview>
    <br />
    <div class="box">
        <h4>Animation Settings</h4>
        <input id="toggle" type="radio" value="toggle" v-model="animationeffect" />
        <label for="toggle">toggle animation</label>
        <br />
        <input id="expand" type="radio" value="expand:vertical" v-model="animationeffect"  />
        <label for="expand">expand animation</label>
        <br />
        <input id="opacity" type="checkbox" v-model="opacity"  />
        <label for="opacity">animate opacity</label>
    </div>
</div>
</template>

<script>
import { TreeView } from '@progress/kendo-treeview-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treeview': TreeView,
    },
    data: function () {
        return {
            animationeffect: "expand:vertical",
            opacity: true
        }
    },
    computed: {
        effects () {
            var effect = this.animationeffect + " " + (this.opacity ? "fadeIn" : "");
            return effect;
        }
    }
}
</script>
