<template>
    <div class="editor">
        <!-- Toolbar -->
        <div class="editor-toolbar">
            <div class="schematic-toolbar">
                <div class="button-group">
                    <div class="skeleton-btn skeleton-btn-left">
                        <span class="label" />
                    </div>
                    <div class="skeleton-btn skeleton-btn-right">
                        <span class="label" />
                    </div>
                </div>

                <div class="commands">
                    <div class="split-button">
                        <div class="skeleton-btn skeleton-btn-split-main">
                            <span class="label wide" />
                        </div>
                        <div class="skeleton-btn skeleton-btn-split-arrow">
                            <SvgIcon :icon="chevronDownIcon" />
                        </div>
                    </div>
                    <div class="skeleton-btn skeleton-btn-icon">
                        <SvgIcon :icon="moreVerticalIcon" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Text Area -->
        <div class="editor-text-area">
            <div class="content">
                <div class="editor-body">
                    <div class="editor-body-title">Title</div>
                    <div ref="textRef" :class="['editor-body-text', { copied: isCopied }]" @click="handleTextClick">
                        {{ contentText }}
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="content-footer">
            <KButton fill-mode="flat" rounded="large" @click="copyToClipboard">
                {{ showCopiedText ? 'Text Copied' : 'Copy Text' }}
            </KButton>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { SvgIcon } from '@progress/kendo-vue-common';
import { chevronDownIcon, moreVerticalIcon } from '@progress/kendo-svg-icons';

const props = defineProps({
    isCopied: Boolean,
    showCopiedText: Boolean,
});

const emit = defineEmits(['buttonCopy', 'textCopy']);

const textRef = ref(null);

const contentText =
    "Ashley Johnson is a UX Designer with 8 years of experience in Portland, Oregon. She's reliable, and great at making complex ideas simple. Her approach ensures smooth teamwork and great results. Reach her at (555) 248-9173.";

const copyToClipboard = () => {
    navigator.clipboard.writeText(contentText);
    emit('buttonCopy');
};

const handleTextClick = () => {
    if (textRef.value) {
        const range = document.createRange();
        range.selectNodeContents(textRef.value);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
    }
    navigator.clipboard.writeText(contentText);
    emit('textCopy');
};
</script>
