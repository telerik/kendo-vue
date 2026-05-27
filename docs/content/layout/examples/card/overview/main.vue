<template>
  <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap">
    <div v-for="(card, index) in cards" :key="index">
      <Card
        style="
          width: 260px;
          box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
          margin-top: 15px;
        "
      >
        <CardHeader class="k-hbox" style="background: transparent">
          <Avatar type="image" size="medium" shape="circle">
            <img
              style="width: 45px; height: 45px"
              :src="card.thumbnailSrc"
              alt="Card Thumbnail"
            />
          </Avatar>
          <div>
            <CardTitle style="margin-bottom: 4px">
              {{ card.headerTitle }}
            </CardTitle>
            <CardSubtitle>
              <p>{{ card.headerSubtitle }}</p>
            </CardSubtitle>
          </div>
        </CardHeader>
        <CardImage
          :src="card.scrollViewItems.url"
          style="height: 185px; max-width: 100%"
        />
        <CardActions style="display: flex; justify-content: space-between">
          <div>
            <KButton
              fill-mode="flat"
              :svg-icon="heartIcon"
              @click="() => postLikesCount(card)"
            />
            <KButton
              fill-mode="flat"
              :svg-icon="commentIcon"
              @click="() => commentClick(card)"
            />
            <KButton fill-mode="flat" :svg-icon="shareIcon" />
          </div>
          <span style="font-size: 13px; align-self: center; color: #656565">
            {{ card.postLikes }} likes
          </span>
        </CardActions>
        <CardBody v-if="card.commentsExpanded">
          <div>
            <div style="margin-bottom: 8px; padding: 0 16px">
              <div v-for="(comment, index) in card.comments" :key="index">
                <div style="display: flex; justify-content: space-between">
                  <div
                    style="padding: 4px 0; align-items: center; display: flex"
                  >
                    <Avatar
                      type="text"
                      rounded="full"
                      style="color: white"
                      size="small"
                    >
                      <span>SS</span>
                    </Avatar>
                    <div style="display: flex; flex-direction: column">
                      <span
                        style="
                          font-size: 13px;
                          font-weight: bold;
                          max-width: 100px;
                          word-break: break-all;
                        "
                      >
                        {{ comment.text }}
                      </span>
                      <span class="time">
                        1s ago
                        <span style="margin-left: 8px">
                          {{ comment.likes }} like
                        </span>
                      </span>
                    </div>
                  </div>
                  <KButton fill-mode="flat">
                    <span
                      :class="
                        comment && comment.likes > 0
                          ? 'k-icon k-i-heart'
                          : 'k-icon k-i-heart'
                      "
                    />
                  </KButton>
                </div>
              </div>
            </div>
          </div>
          <div class="k-hbox" style="padding: 16px 16px 0">
            <textarea
              class="k-textarea"
              placeholder="Comment..."
              style="
                resize: none;
                border-radius: 10px;
                padding: 5px;
                font-size: 10px;
              "
            />
            <KButton
              fill-mode="flat"
              theme-color="primary"
              style="margin-left: 10px; border-radius: 10px"
              @click="() => postComment(card)"
            >
              Post
            </KButton>
          </div>
        </CardBody>
      </Card>
    </div>
  </div>
</template>

<script setup>
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImage,
    CardActions,
    Avatar,
} from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import {
    commentIcon,
    heartIcon,
    shareIcon,
} from "@progress/kendo-svg-icons";

const rilaImage =
  (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") +
  "assets/layout/card/rila.jpg";
const rilaLakesImage =
  (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") +
  "assets/layout/card/rila_lakes.jpg";
const bgFlagImage =
  (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") +
  "assets/layout/card/bg_flag.jpg";
const roseFestivalImage =
  (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") +
  "assets/layout/card/rose_festival.jpg";

const cards = [
    {
        thumbnailSrc: bgFlagImage,
        headerTitle: "bg_traditions",
        headerSubtitle: "Bulgaria, Europe",
        commentsExpanded: false,
        postLiked: false,
        comments: [],
        newCommentTextValue: "",
        postLikes: 174,
        scrollViewItems: {
            url: roseFestivalImage,
        },
    },
    {
        thumbnailSrc: rilaImage,
        headerTitle: "bg_mountains",
        headerSubtitle: "Bulgaria, Europe",
        commentsExpanded: false,
        postLiked: false,
        comments: [],
        newCommentTextValue: "",
        postLikes: 962,
        scrollViewItems: {
            url: rilaLakesImage,
        },
    },
];

function postLikesCount(card) {
    const index = cards.findIndex(
        (item) => item.thumbnailSrc === card.thumbnailSrc
    );
    cards[index].postLiked = !cards[index].postLiked;
}

function commentClick(card) {
    const index = cards.findIndex(
        (item) => item.thumbnailSrc === card.thumbnailSrc
    );
    cards[index].commentsExpanded = !cards[index].commentsExpanded;
}

function postComment(card) {
    const index = cards.findIndex(
        (item) => item.thumbnailSrc === card.thumbnailSrc
    );
    const textArea = document.querySelector(".k-textarea");
    cards[index].comments.push({
        likes: 0,
        text: textArea.value,
    });
    textArea.value = "";
}
</script>
