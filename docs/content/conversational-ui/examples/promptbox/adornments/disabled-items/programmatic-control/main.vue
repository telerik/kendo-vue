<template>
    <div class="demo-container">
        <div class="example-buttons">
            <Button @click="togglePromptBox">
                {{ isPromptBoxDisabled ? 'Enable' : 'Disable' }} PromptBox
            </Button>
            <Button @click="toggleAdornments">
                {{ areAdornmentsDisabled ? 'Enable' : 'Disable' }} Adornments
            </Button>
        </div>
        <PromptBox
            :value="promptValue"
            @change="handleValueChange"
            mode="single"
            :disabled="isPromptBoxDisabled"
            placeholder="Type your message..."
            @promptaction="handleSend"
            :upload-button-config="true"
            :start-affix="startAffix"
            :end-affix="endAffix"
        />
    </div>
</template>

<script setup>
import { ref, h } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { Button } from '@progress/kendo-vue-buttons';
import { starIcon, bookIcon, heartIcon } from '@progress/kendo-svg-icons';

const promptValue = ref('Compare different machine learning algorithms for classification tasks');
const isPromptBoxDisabled = ref(false);
const areAdornmentsDisabled = ref(false);

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const togglePromptBox = () => {
    isPromptBoxDisabled.value = !isPromptBoxDisabled.value;
};

const toggleAdornments = () => {
    areAdornmentsDisabled.value = !areAdornmentsDisabled.value;
};

const handleSend = () => {
    promptValue.value = '';
};

const handleFavorite = () => {
    console.log('Added to favorites');
};

const handleBookmark = () => {
    console.log('Prompt bookmarked');
};

const handleLike = () => {
    console.log('Prompt liked');
};

const startAffix = () =>
    h(Button, {
        svgIcon: starIcon,
        fillMode: 'flat',
        rounded: 'full',
        disabled: areAdornmentsDisabled.value,
        title: 'Add to favorites',
        onClick: handleFavorite,
    });

const endAffix = () => [
    h(Button, {
        svgIcon: bookIcon,
        fillMode: 'flat',
        rounded: 'full',
        disabled: areAdornmentsDisabled.value,
        title: 'Bookmark prompt',
        onClick: handleBookmark,
    }),
    h(Button, {
        svgIcon: heartIcon,
        fillMode: 'flat',
        rounded: 'full',
        disabled: areAdornmentsDisabled.value,
        title: 'Like prompt',
        onClick: handleLike,
    }),
];
</script>

<style>
.demo-container {
    max-width: 600px;
    margin: 0 auto;
}

.example-buttons {
    margin-bottom: 16px;
    display: flex;
    gap: 8px;
}
</style>
