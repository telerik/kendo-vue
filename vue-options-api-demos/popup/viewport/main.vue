<template>
    <div>
        <kbutton
            class="anchor"
            @click="onClick"
            ref="button"
        >
            {{buttonText}}
        </kbutton>
        <Popup
            :anchor="'button'"
            :show="show"
            :popup-class="'popup-content'"
            :collision="collision"
        >
           <div class="popup-inner-content">
                Popup
            </div>
        </Popup>
    </div>
</template>
<script>
import './styles.css';
import { Popup } from '@progress/kendo-vue-popup';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'Popup': Popup,
      'kbutton': Button
    },
     data: function(){
        return {
            show: false,
            collision: {
                horizontal: "fit",
                vertical: "flip"
            }
        };
    },
    computed: {
        buttonText: function(){
            return this.show ? 'Hide' : 'Show';
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
