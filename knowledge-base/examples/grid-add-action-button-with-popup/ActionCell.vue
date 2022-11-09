<template>
<td style="text-align: center" @mouseleave="onCellFocusOut">
 <div>
       <button
            class="k-button"
            @click="onClick"
            ref="button"
        >
            ...
        </button>
        <Popup
            :anchor="'button'"
            :show="show"
            :popup-class="'popup-content'"
            @mouseleave="onFocusOut"
            @mouseenter="onMouseEnter"
        >
            <div class="action" id="accept" 
                @click="onClickAction" 
            >
                Mark as ready for shipping
            </div>
            <div class="action" id="decline" 
                @click="onClickAction">
                Mark as not ready for shipping
            </div>
        </Popup>
    </div>
</td>

</template>
<script>
import { Popup } from '@progress/kendo-vue-popup';


export default {
    components: {
      'Popup': Popup
    },
    data(){
        return {
            show: false,
            mouseOverPopup: false
        }
    },
    mounted: function(){
        this.show = false;
    },
    props: {
        dataItem: Object
    },
    methods: {
        onClick (e) {
            this.show = true;
        },
        onClickAction (e) {
            this.$emit('actionselect', {dataItem:this.dataItem, action: e.target.id});
            this.show = !this.show;
        },
        onFocusOut (e) {
            this.show = false;
            this.mouseOverPopup = false;
        },
        onCellFocusOut(e){
            setTimeout(()=>{
                if(!this.mouseOverPopup){
                    this.show = false;
                }
                this.mouseOverPopup = false;
            })
        },
        onMouseEnter(){
            this.mouseOverPopup = true;
        }
    }
}
</script>

<style scoped>
    .k-button {
        border-radius: 18px;
        background-color: grey;
        opacity: 0.7;
    }

    .action {
        margin: 10px 20px 10px 20px;
        cursor: pointer
    }
</style>