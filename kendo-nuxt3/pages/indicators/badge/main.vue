<template>
  <div class="example">
      <p>With Badge Container</p>
      <div class="wrap">
        <BadgeContainer :content="'content'">
          <Avatar :type="'icon'">KP</Avatar>
          <template v-slot:content>
                      <span class="k-icon k-i-check" />
                </template>
        </BadgeContainer>
        <BadgeContainer themeColor="info" shape="dot">
          Available Updates
            <template v-slot:content>
                      <span class="k-icon k-i-check" />
                </template>
        </BadgeContainer>
        <BadgeContainer :content="'content'"  :align="{
              vertical: 'bottom',
              horizontal: 'end',
            }"
            themeColor="dark">
          <span class="k-icon k-i-files" />
              <template v-slot:content>
                    11
              </template>
        </BadgeContainer>
        <BadgeContainer :content="'content'">
          <span class="k-icon k-i-shopping-cart" />
           <template v-slot:content>
                    4
              </template>
          <!-- <Badge>4</Badge> -->
        </BadgeContainer>
        <BadgeContainer :content="'content'" themeColor="tertiary">
          <Button>Action</Button>
           <template v-slot:content>
                    3
              </template>
          <!-- <Badge >3</Badge> -->
        </BadgeContainer>
      </div>
      <p>Without Badge Container</p>
      <div class="wrap">
        <span class="mail">
          Mail
          <Badge>87</Badge>
        </span>
        <span class="updates">
          Available Updates
          <Badge :themeColor="'info'" :shape="'dot'" />
        </span>
        <span class="files">
          <span class="k-icon k-i-files" />
          <Badge
            :align="{
              vertical: 'bottom',
              horizontal: 'end',
            }"
            themeColor="dark"
          >
            11
          </Badge>
        </span>
        <span class="shopping-cart">
          <span class="k-icon k-i-shopping-cart" />
          <Badge>4</Badge>
        </span>
        <span class="sent-items">
          <Button>
            Action
            <Badge themeColor="tertiary">34</Badge>
          </Button>
        </span>
      </div>
    </div>
</template>

<script lang="ts">
import {
 BadgeContainer,
 Badge
    } from '@progress/kendo-vue-indicators';
import { Avatar } from '@progress/kendo-vue-layout';

export default {
    components: {
      BadgeContainer,
      Badge,
      Avatar
    }
};

</script>

