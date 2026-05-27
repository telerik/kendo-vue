<template>
    <div>
        <BottomNavigation
            :position-mode="'sticky'"
            :items="computedItems"
            :fill="'solid'"
            :theme-color="'primary'"
            :item="'itemTemplate'"
            @select="onSelect"
        >
            <template #itemTemplate="{ props }">
                <span :style="{ 'text-align': 'center', 'text-decoration': 'none' }">
                    <span role="presentation" :class="`k-icon k-i-${props.item.icon}`"></span>
                    <div>{{ props.item.text }}</div>
                </span>
            </template>
        </BottomNavigation>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { BottomNavigation } from '@progress/kendo-vue-layout';
import { homeIcon, heartIcon, searchIcon, userIcon } from '@progress/kendo-svg-icons';

const selected = ref(0);
const items = ref([
    { svgIcon: homeIcon, text: 'Home' },
    { svgIcon: searchIcon, text: 'Search' },
    { svgIcon: heartIcon, text: 'Favorites' },
    { svgIcon: userIcon, text: 'Profile' },
]);

const computedItems = computed(() =>
    items.value.map((item, index) => ({
        ...item,
        selected: index === selected.value,
    })),
);

function onSelect(e) {
    selected.value = e.itemIndex;
}
</script>
