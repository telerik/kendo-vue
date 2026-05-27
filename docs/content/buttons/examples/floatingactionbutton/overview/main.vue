<template>
    <div class="example-wrap">
        <div class="k-card k-card-vertical">
            <img :src="grassImage" class="k-card-media" :alt="'Card Image'" />
            <div class="k-card-body">
                <FloatingActionButton
                    :text="'Add to Queue'"
                    :svg-icon="added ? checkIcon : undefined"
                    :align="{ horizontal: 'end', vertical: 'top' }"
                    :alignOffset="{ y: 175 }"
                    :positionMode="'absolute'"
                    @click="handleClick"
                />
                <h2 class="k-card-title">Summer Mix 2020</h2>
                <p class="k-card-subtitle">DJ Peril</p>
            </div>
        </div>
        <div class="notes-wrap k-block">
            <div v-if="open" class="k-overlay" />
            <h2 class="title">Notes:</h2>
            <TextArea :value="text" />
            <FloatingActionButton
                :svg-icon="open ? xIcon : shareIcon"
                :items="contacts"
                :item="customItem"
                :position-mode="'absolute'"
                :popup-settings="{ popupClass: 'contact-list' }"
                @open="handleOpen"
                @close="handleClose"
            >
                <template #myTemplate="{ props }">
                    <CustomItem :data-item="props.dataItem" />
                </template>
            </FloatingActionButton>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { FloatingActionButton } from '@progress/kendo-vue-buttons';
import { TextArea } from '@progress/kendo-vue-inputs';
import { checkIcon, xIcon, shareIcon } from '@progress/kendo-svg-icons';
import CustomItem from './CustomItem.vue';

const grassImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/scrollview/5.jpg';
const mallroyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/contacts/7.png';
const miaImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/contacts/4.png';
const darrelImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/contacts/1.png';

const contacts = [
    {
        name: 'Mallory Gillian',
        image: mallroyImage,
        role: 'UX Designer',
    },
    {
        name: 'Mia Coldwell',
        image: miaImage,
        role: 'Senior Director',
    },
    {
        name: 'Darrel Solis',
        image: darrelImage,
        role: 'Product Manager',
    },
];

const added = ref(true);
const open = ref(false);
const text = ref('I renamed my iPod The Titanic, so when I plug in it, it says "The Titanic is syncing."');
const customItem = 'myTemplate';

function handleClick() {
    added.value = !added.value;
}

function handleOpen() {
    open.value = true;
}

function handleClose() {
    open.value = false;
}
</script>

<style>
.example-wrap {
    display: flex;
    justify-content: space-around;
}
.k-card {
    width: 350px;
    height: auto;
    position: relative;
}
.k-card-media {
    height: 200px;
}
.k-card button.k-fab:focus {
    outline: none;
}
.title {
    font-size: 18px;
    color: #656565;
}
.notes-wrap {
    padding: 50px 20px 50px 20px;
    position: relative;
    height: 300px;
}
.notes-wrap textarea.k-textarea {
    height: 100px;
    resize: none;
}
.k-overlay {
    position: absolute;
    z-index: 1;
}
.notes-wrap .k-pos-absolute {
    z-index: 10003;
}
.contact-list.k-popup {
    padding: 0;
}
.contact-list .k-fab-items {
    padding: 6px 8px;
    width: 200px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    font-size: 12px;
}
.contact-item {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 3px 4px;
}
.contact-role {
    display: block;
    text-align: left;
    font-size: 10px;
    color: #0058e9;
}
</style>
