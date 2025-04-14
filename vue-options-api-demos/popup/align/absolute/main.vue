<template>
    <Popup
            :offset="offset"
            :show="true"
            :popup-class="'popup-content'"
        >
            Popup content.
        </Popup>
</template>
<script>
import './styles.css';
import { Popup } from '@progress/kendo-vue-popup';

export default {
    components: {
      'Popup': Popup
    },
    data: function(){
        return {
            offset: { left: 150, top: 50 }
        };
    }
};

</script>
