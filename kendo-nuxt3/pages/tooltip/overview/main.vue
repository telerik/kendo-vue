<template>
  <div > 
    <Tooltip
              :anchor-element="'target'" :position="'top'"
                >
                <div id="agglomerations">
        <a href="#" title="Canton - 26,300,000" id="canton" />
        <a title="Jakarta - 25,800,000" id="jakarta" />
        <a title="Mexico City - 23,500,000" id="mexico" />
        <a title="Delhi - 23,500,000" id="delhi" />
        <a title="Karachi - 22,100,000" id="karachi" />
        <a title="New York - 21,500,000" id="newyork" />
        <a title="Sao Paulo - 21,300,000" id="saopaolo" />
        <a title="Mumbay/Bombay - 21,100,000" id="bombay" />
        <a title="Los Angeles - 17,100,000" id="losangeles" />
        <a title="Osaka - 16,800,000" id="osaka" />
        <a title="Moscow - 16,200,000" id="moscow" />
      </div>
            </Tooltip>
          </div>
</template>
<script lang="ts">
import { Tooltip } from '@progress/kendo-vue-tooltip';

export default {
  components: {
    Tooltip
  },
  data() {
    return {
      status: 'closed'
    };
  },
  methods: {
      handleShowTooltip (element) {
        if (element.innerHTML[0] === 's') {
            return false;
        }
        return true;
    },
    handleOpen () {
        this.status = 'opened';
    },
    handleClose () {
        this.status = 'closed';
    }
  }
};
</script>
<style scoped>
#agglomerations {
    position: relative;
    width: 692px;
    height: 480px;
    margin: 0 auto;
    background: url('https://www.telerik.com/kendo-angular-ui-develop/components/tooltip/assets/world-map.jpg') no-repeat 0 0;
}

#agglomerations > a {
    cursor: pointer;
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    background-color: #fff600;
    border-radius: 30px;
    border: 0;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.5);
    transition:  box-shadow .3s;
    z-index: 10;
}

#agglomerations > a:hover {
    box-shadow: 0 0 0 15px rgba(0,0,0,0.5);
}

#canton { top: 226px; left: 501px; }
#jakarta { top: 266px; left: 494px; }
#mexico { top: 227px; left: 182px; }
#delhi { top: 214px; left: 448px; }
#karachi { top: 222px; left: 431px; }
#newyork { top: 188px; left: 214px; }
#saopaolo { top: 304px; left: 248px; }
#bombay { top: 233px; left: 438px; }
#losangeles { top: 202px; left: 148px; }
#osaka { top: 201px; left: 535px; }
#moscow { top: 153px; left: 402px; }
</style>
