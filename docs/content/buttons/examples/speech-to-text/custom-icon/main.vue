<template>
    <div class="custom-icon-examples">
        <div>
            <span>Star Icon</span>
            <SpeechToTextButton :svg-icon="starIcon" />
        </div>
        <div>
            <span>Search Icon</span>
            <SpeechToTextButton :svg-icon="searchIcon" />
         </div>
        <div>
            <span>Sharpen Icon</span>
            <SpeechToTextButton :svg-icon="sharpenIcon"/>
        </div>
    </div>
</template>

<script setup>
import { SpeechToTextButton } from "@progress/kendo-vue-buttons";
import { starIcon, searchIcon, sharpenIcon } from "@progress/kendo-svg-icons";
</script>

<style>
.custom-icon-examples {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.custom-icon-examples > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.custom-icon-examples span {
  font-size: 14px;
  color: #656565;
}
</style>
