<template>
    <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap">
      <div v-for="(card, index) in cards" :key="index">
        <card
          style="
            width: 260px;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
            margin-top: 15px;
          "
        >
          <cardHeader class="k-hbox" style="background: transparent">
            <avatar type="image" size="medium" shape="circle">
              <img
                style="width: 45px; height: 45px"
                :src="card.thumbnailSrc"
                :alt="'Card Thumbnail'"
              />
            </avatar>
            <div>
              <cardTitle style="margin-bottom: 4px">
                {{ card.headerTitle }}
              </cardTitle>
              <cardSubtitle>
                <p>{{ card.headerSubtitle }}</p>
              </cardSubtitle>
            </div>
          </cardHeader>
          <cardImage
            :src="card.scrollViewItems.url"
            style="height: 185px; max-width: 100%"
          />
          <cardActions style="display: flex; justify-content: space-between">
            <div>
              <kbutton
                :fill-mode="'flat'"
                :svg-icon="card.postLiked ? heartIcon : heartOutlineIcon"
                @click="() => postLikesCount(card)"
              >
              </kbutton>
              <kbutton
                :fill-mode="'flat'"
                :svg-icon="commentIcon"
                @click="() => commentClick(card)"
              >
              </kbutton>
              <kbutton :fill-mode="'flat'" :svg-icon="shareIcon"> </kbutton>
            </div>
            <span style="font-size: 13px; align-self: center; color: #656565">
              {{ card.postLikes }} likes
            </span>
          </cardActions>
          <cardBody v-if="card.commentsExpanded">
            <div>
              <div style="margin-bottom: 8px; padding: 0 16px">
                <div v-for="(comment, index) in card.comments" :key="index">
                  <div style="display: flex; justify-content: space-between">
                    <div
                      style="padding: 4px 0; align-items: center; display: flex"
                    >
                      <avatar
                        :type="'text'"
                        :rounded="'full'"
                        style="color: white"
                        :size="'small'"
                      >
                        <span>SS</span>
                      </avatar>
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
                    <kbutton :fill-mode="'flat'">
                      <span
                        :class="
                          comment && comment.likes > 0
                            ? 'k-icon k-i-heart'
                            : 'k-icon k-i-heart-outline'
                        "
                      />
                    </kbutton>
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
              <kbutton
                :fill-mode="'flat'"
                :theme-color="'primary'"
                style="margin-left: 10px; border-radius: 10px"
                @click="() => postComment(card)"
              >
                Post
              </kbutton>
            </div>
          </cardBody>
        </card>
      </div>
    </div>
  </template>

  <script>
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
  import { Button } from "@progress/kendo-vue-buttons";
  import {
    commentIcon,
    heartIcon,
    heartOutlineIcon,
    shareIcon
  } from "@progress/kendo-svg-icons";

  const rilaImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/card/rila.jpg';
  const rilaLakesImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/card/rila_lakes.jpg';
  const bgFlagImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/card/bg_flag.jpg';
  const roseFestivalImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/card/rose_festival.jpg';

  const cardsData = [
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

  export default {
    components: {
      card: Card,
      cardHeader: CardHeader,
      cardBody: CardBody,
      cardTitle: CardTitle,
      cardSubtitle: CardSubtitle,
      cardImage: CardImage,
      cardActions: CardActions,
      avatar: Avatar,
      kbutton: Button,
    },
    data: function () {
      return {
        rilaImage,
        rilaLakesImage,
        bgFlagImage,
        roseFestivalImage,
        commentIcon,
        heartIcon,
        heartOutlineIcon,
        shareIcon,
        cards: cardsData,
      };
    },
    methods: {
      postLikesCount: function (card) {
        let index = this.cards.findIndex(
          (item) => item.thumbnailSrc === card.thumbnailSrc
        );
        let newCards = [...this.cards];
        newCards[index].postLiked = !newCards[index].postLiked;
        this.cards = newCards;
      },
      commentClick: function (card) {
        let index = this.cards.findIndex(
          (item) => item.thumbnailSrc === card.thumbnailSrc
        );
        let newCards = [...this.cards];
        newCards[index].commentsExpanded = !newCards[index].commentsExpanded;
        this.cards = newCards;
      },
      postComment: function (card) {
        let index = this.cards.findIndex(
          (item) => item.thumbnailSrc === card.thumbnailSrc
        );
        let newCards = [...this.cards];
        let textArea = document.querySelector(".k-textarea");
        newCards[index].comments.push({
          likes: 0,
          text: textArea.value,
        });
        textArea.value = "";
        this.cards = newCards;
      },
    },
  };
  </script>
