<template>
   <div>
    <div class="example-config row">
                        <div class="col-sm-4 col-xs-12">
                            <h4>Anchor align point</h4>
                            <p>
                                Horizontal <br />
                                <dropdownlist
                                    :style="{ width: '230px'}"
                                    name="anchorHorizontal" v-model="anchorHorizontal" :data-items="horizontalOptions">
                                </dropdownlist>
                            </p>
                            <p>
                                Vertical <br />
                                <dropdownlist
                                    :style="{ width: '230px'}"
                                    name="anchorVertical" v-model="anchorVertical" :data-items="verticalOptions">
                                </dropdownlist>
                            </p>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <h4>Popup align point</h4>
                            <p>
                                Horizontal <br />
                                <dropdownlist
                                    :style="{ width: '230px'}"
                                    name="popupHorizontal" v-model="popupHorizontal" :data-items="horizontalOptions">
                                </dropdownlist>
                            </p>
                            <p>
                                Vertical <br />
                                 <dropdownlist
                                    :style="{ width: '230px'}"
                                    name="popupVertical" v-model="popupVertical" :data-items="verticalOptions">
                                </dropdownlist>
                            </p>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <h4>Popup action</h4>
                            <br />
                               <kbutton
                                @click="onClick"
                            >
                                {{buttonText}}
                            </kbutton>
                        </div>
                    </div>
        <span
            ref="anchor"
            class="anchor content"
        >
            ANCHOR
        </span>
     
        <Popup
            :anchor="'anchor'"
            :show="show"
            :anchor-align="anchorAlign"
            :popup-align="popupAlign"
        >
           <div class="content popup-inner-content">
                <p>Popup content.</p>
            </div>
        </Popup>
    </div>
</template>
<script>
import './styles.css';
import { Popup } from '@progress/kendo-vue-popup';
import { Button } from '@progress/kendo-vue-buttons';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
      'Popup': Popup,
      'kbutton': Button,
      'dropdownlist': DropDownList
    },
     data: function(){
        return {
            anchor: null,
            anchorHorizontal: 'left',
            anchorVertical: 'bottom',
            popupHorizontal: 'right',
            popupVertical: 'top',
            show: false,
            horizontalOptions: ['left','center','right'],
            verticalOptions: ['top', 'middle', 'bottom']
        };
    },
    computed: {
        buttonText: function(){
            return this.show ? 'Hide' : 'Show';
        },
        anchorAlign: function(){
            return {
                horizontal: this.anchorHorizontal,
                vertical: this.anchorVertical
            };
        },
        popupAlign: function(){
            return {
                horizontal: this.popupHorizontal,
                vertical: this.popupVertical
            };
        }
    },
    mounted(){
        this.show= true;
    },
    methods: {
         onClick () {
            this.show = !this.show;
        }
    }
};

</script>
