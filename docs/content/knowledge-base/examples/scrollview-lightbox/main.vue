<template>
  <div>
    <ScrollView
      :style="{ width: '512px', height: '384px' }"
      arrows
      :data-items="items"
      content="content"
    >
      <template #content="{ props }">
        <div class="image-with-text">
          <h2 class="demo-title">{{ props.item.title }}</h2>
          <img
            :src="props.item.url"
            :alt="`Kendo Vue ScrollView Photo ${props.item.position}`"
            :style="{ width: '512px', height: '384px', cursor: 'zoom-in' }"
            :draggable="false"
            tabindex="0"
            role="button"
            :aria-label="`Open ${props.item.title} in a larger view`"
            @click="openAt(props.item.position - 1)"
            @keydown.enter.prevent="openAt(props.item.position - 1)"
            @keydown.space.prevent="openAt(props.item.position - 1)"
          />
        </div>
      </template>
    </ScrollView>

    <div class="thumbs-wrap">
      <ListView :data-items="items" :item="'thumbItem'">
        <template #thumbItem="{ props }">
          <div
            class="thumb"
            tabindex="0"
            role="button"
            :aria-label="`Open ${props.dataItem.title} in lightbox`"
            @click="openAt(props.dataItem.position - 1)"
            @keydown.enter.prevent="openAt(props.dataItem.position - 1)"
            @keydown.space.prevent="openAt(props.dataItem.position - 1)"
          >
            <img
              :src="props.dataItem.url"
              :alt="props.dataItem.title"
              :draggable="false"
            />
            <div class="thumb-caption">{{ props.dataItem.title }}</div>
          </div>
        </template>
      </ListView>
    </div>

    <Dialog v-if="isOpen" :onClose="closeLightbox">
      <div style="display: flex; flex-direction: column; gap: 12px">
        <div
          class="k-dialog-buttongroup k-actions k-actions-end"
          style="order: 2"
        >
          <Button @click="closeLightbox">Close</Button>
        </div>

        <ScrollView
          :style="{ width: '90vw', height: '80vh' }"
          arrows
          endless
          pageable
          pager-overlay="dark"
          :data-items="items"
          content="lightboxContent"
          :active-view="activeIndex + 1"
          @pageChange="onPageChange"
        >
          <template #lightboxContent="{ props }">
            <div class="lightbox-slide">
              <img
                :src="props.item.url"
                :alt="props.item.title"
                :draggable="false"
                style="
                  max-width: 100%;
                  max-height: 100%;
                  object-fit: contain;
                  user-select: none;
                "
              />
            </div>
          </template>
        </ScrollView>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ScrollView } from "@progress/kendo-vue-scrollview";
import { Dialog } from "@progress/kendo-vue-dialogs";
import { Button } from "@progress/kendo-vue-buttons";
import { ListView } from "@progress/kendo-vue-listview";

const items = [
  {
    title: "Balloons",
    position: 1,
    url: "https://demos.telerik.com/blazor-ui/images/photos/1.jpg",
  },
  {
    title: "Forest",
    position: 2,
    url: "https://demos.telerik.com/blazor-ui/images/photos/2.jpg",
  },
  {
    title: "Flower",
    position: 3,
    url: "https://demos.telerik.com/blazor-ui/images/photos/3.jpg",
  },
  {
    title: "Painting",
    position: 4,
    url: "https://demos.telerik.com/blazor-ui/images/photos/4.jpg",
  },
  {
    title: "Grass",
    position: 5,
    url: "https://demos.telerik.com/blazor-ui/images/photos/5.jpg",
  },
];

const isOpen = ref(false);
const activeIndex = ref(0);

const openAt = (index) => {
  activeIndex.value = index;
  isOpen.value = true;
};

const closeLightbox = () => {
  isOpen.value = false;
};

const onPageChange = (e) => {
  activeIndex.value = e.page - 1;
};
</script>
<style>
.k-scrollview {
  margin: 0 auto;
}
.image-with-text {
  position: relative;
}
/* Thumbs grid */
.thumbs-wrap .k-listview-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.thumb {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: zoom-in;
  outline: none;
}

.thumb:focus {
  box-shadow: 0 0 0 2px var(--kendo-color-primary, #3f51b5);
}

.thumb img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
}

.thumb-caption {
  padding: 6px 8px;
  font-size: 12px;
  text-align: center;
}

.lightbox-slide {
  width: 90vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000; /* helps the image pop */
}

/* Make ScrollView navigation arrows white */
.k-scrollview .k-scrollview-prev,
.k-scrollview .k-scrollview-next {
  color: white !important; /* makes icon white */
  background: rgba(
    0,
    0,
    0,
    0.3
  ); /* optional: semi-transparent dark background */
  border-radius: 50%;
  transition: background 0.2s ease;
}

.k-scrollview .k-scrollview-prev:hover,
.k-scrollview .k-scrollview-next:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

/* Adjust icon size if desired */
.k-scrollview .k-icon,
.k-scrollview .k-svg-icon {
  width: 24px;
  height: 24px;
  fill: white;
}

/* Optional: keep arrows visible on dark background even when overlay is dark */
.k-scrollview-overlay-dark .k-scrollview-prev,
.k-scrollview-overlay-dark .k-scrollview-next {
  color: white !important;
}

</style>
