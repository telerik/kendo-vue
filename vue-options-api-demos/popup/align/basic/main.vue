<template>
  <div>
        <kbutton
            @click="onClick"
            ref="button"
        >
            {{buttonText}}
        </kbutton>
        <Popup
            :anchor="'button'"
            :show="show"
            :popup-class="'popup-content'"
        >
            Popup content.
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
            show: false
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
