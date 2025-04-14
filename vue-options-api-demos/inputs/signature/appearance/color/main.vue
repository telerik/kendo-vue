<template>
  <div class="demo">
    <span class="wrapper">
      <div>
        Brush color value:
        <span style="color: rgb(37, 37, 96)">
          <b>rgb(37, 37, 96)</b>
        </span>
      </div>
      <div>
        Background color value:
        <span style="color: salmon">
          <b>salmon</b>
        </span>
      </div>
      <Signature
        :color="'rgb(37, 37, 96)'"
        :backgroundColor="'salmon'"
        :maximizable="false"
      />
    </span>
    <span class="wrapper">
      <div>
        Brush color value:
        <span style="color: #aafc58">
          <b>#aafc58</b>
        </span>
      </div>
      <div>
        Background color value:
        <span style="color: orange">
          <b>orange</b>
        </span>
      </div>
      <Signature
        :color="'#aafc58'"
        :backgroundColor="'orange'"
        :maximizable="false"
      />
    </span>
    <span class="wrapper">
      <div>
        Brush color value:
        <span style="color: #11dcab">
          <b>#11dcab</b>
        </span>
      </div>
      <div>
        Background color value:
        <span style="color: lightblue">
          <b>lightblue</b>
        </span>
      </div>
      <Signature
        :color="'#11dcab'"
        :backgroundColor="'lightblue'"
        :maximizable="false"
      />
    </span>
  </div>
</template>
<script>
import { Signature } from "@progress/kendo-vue-inputs";

export default {
  components: {
    Signature,
  },
};
</script>

<style>
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
}
</style>
