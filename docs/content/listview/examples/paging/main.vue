<template>
    <ListView
        :style="{ width: '100%' }"
        :data-items="articles.slice(skip, skip + take)"
        item="myItem"
        header="myHeader"
    >
        <template #myItem="{ props }">
            <Card
                :style="{
                    padding: '20px 24px',
                    border: 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.12)',
                }"
                orientation="horizontal"
                class="d-flex justify-content-between"
            >
                <div class="k-vbox k-column">
                    <div :style="{ padding: '0 8px', marginRight: '3rem' }">
                        <CardTitle :style="{ fontSize: '18px' }">
                            {{ props.dataItem.Title }}
                        </CardTitle>
                        <CardSubtitle :style="{ fontSize: '14px', marginTop: '0px' }">
                            {{ props.dataItem.Subtitle }}
                        </CardSubtitle>
                        <CardSubtitle :style="{ fontSize: '12px' }">
                            {{ props.dataItem.Date }}
                        </CardSubtitle>
                    </div>
                    <CardActions :style="{ padding: '2px' }">
                        <KButton rounded="medium" fill-mode="flat" size="medium"> Save for later </KButton>
                        <KButton rounded="medium" fill-mode="flat" size="medium"> Add to favorites </KButton>
                    </CardActions>
                </div>
                <CardImage
                    :src="`${articlesBaseUrl}${props.dataItem.Image}`"
                    :style="{ width: '220px', height: '140px', maxWidth: '220px' }"
                />
            </Card>
        </template>
        <template #myHeader>
            <ListViewHeader :style="{ color: 'rgb(160, 160, 160)', fontSize: '14px' }" class="pl-4 pb-2 pt-2">
                TRENDING ARTICLES THIS WEEK
            </ListViewHeader>
        </template>
    </ListView>

    <Pager :skip="skip" :take="take" @pagechange="handlePageChange" :total="articles.length" />
</template>

<script setup>
import { ref } from 'vue';
import { ListView, ListViewHeader } from '@progress/kendo-vue-listview';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Card, CardTitle, CardImage, CardSubtitle, CardActions } from '@progress/kendo-vue-layout';
import { Pager } from '@progress/kendo-vue-data-tools';
import articles from './articles.json';

const articlesBaseUrl = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/articles/';

const skip = ref(0);
const take = ref(3);

function handlePageChange(e) {
    skip.value = e.skip;
}
</script>

<style>
.k-card:last-of-type {
    border: none !important;
}
.k-pager-wrap {
    border-top: none;
}
</style>
