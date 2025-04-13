<template>
  <div id="test" :class="'example-wrapper-overview-bottomnavigation'">
    <div :class="'page'">
      <div :class="'content-bottom-navigation'">
        <h3 v-if="selected === 0" :class="'title k-color-primary'">Inbox</h3>
        <h3 v-if="selected === 1" :class="'title k-color-primary'">Calendar</h3>
        <h3 v-if="selected === 2" :class="'title k-color-primary'">Profile</h3>
      </div>
      <BottomNavigation
        :position-mode="'sticky'"
        :items="computedItems"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script>
import { envelopIcon, calendarIcon, userIcon } from '@progress/kendo-svg-icons';
import { BottomNavigation } from '@progress/kendo-vue-layout';

export default {
    name: 'App',
    components: { BottomNavigation },

    data() {
        return {
            items: [
                {
                    text: 'Inbox',
                    id: 1,
                    svgIcon: envelopIcon,
                    selected: true,
                },
                {
                    text: 'Calendar',
                    id: 2,
                    svgIcon: calendarIcon,
                },
                {
                    text: 'Profile',
                    id: 3,
                    svgIcon: userIcon,
                },
            ],
            selected: 0,
        };
    },
    computed: {
        computedItems() {
            return this.items.map((item, index) => ({
                ...item,
                selected: index === this.selected,
            }));
        },
    },
    methods: {
        onSelect(e) {
            this.selected = e.itemIndex;
        },
    },
};
</script>

<style scoped>
.example-wrapper-overview-bottomnavigation {
  width: 350px;
  margin: 0 auto;
  box-shadow: 0px 10px 20px #00000029;
  border-radius: 30px;
}
.page {
  padding: 10px 10px 0 10px;
}
.content-bottom-navigation {
  background: #f9f9f9;
  border-radius: 30px 30px 0 0;
  height: 350px;
}
.k-bottom-nav {
  border-radius: 0 0 20px 20px;
}
.list {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
}
.list-item {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  position: relative;
}
.k-avatar {
  margin-right: 15px;
}
.separator {
  border: 1px solid #ccc;
}
.section {
  background: #ededed;
  font-weight: bold;
  padding: 2px 5px;
  margin-bottom: 15px;
}
.centered {
  margin: 30px auto;
}
.v-line {
  width: 2px;
  margin: 0 10px 0 15px;
}
.profile-image {
  width: 100px;
  height: 100px;
  flex-basis: 100px;
  padding: 1px;
  margin: 0 auto;
}
.email {
  font-weight: bold;
}
.my-icon {
  position: absolute;
  right: 0;
}

.example-wrapper {
  width: 300px;
  margin: 0 auto;
  box-shadow: 0px 10px 20px #00000029;
  border-radius: 30px;
}

.example-wrapper .title {
  text-align: center;
  font-size: 30px;
  padding: 40px 0;
}
</style>
