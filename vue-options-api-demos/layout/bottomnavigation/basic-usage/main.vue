<template>
  <div id="test" :class="'example-wrapper-basic-usage-bottomonavigation'">
    <div :class="'page'">
      <div :class="'content-bottom-navigation'">
        <router-view />
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
import { BottomNavigation } from "@progress/kendo-vue-layout";
import { inboxIcon, calendarIcon, userIcon } from "@progress/kendo-svg-icons";

export default {
    name: "App",
    components: { BottomNavigation },
    mounted() {
        this.$router.push(this.items[0].data);
    },
    data() {
        return {
            items: [
                {
                    text: "Inbox",
                    id: 1,
                    svgIcon: inboxIcon,
                    data: {
                        path: "/layout/bottomnavigation/overview/inbox",
                    },
                    selected: true,
                },
                {
                    text: "Calendar",
                    id: 2,
                    svgIcon: calendarIcon,
                    data: {
                        path: "/layout/bottomnavigation/overview/calendar",
                    },
                },
                {
                    text: "Profile",
                    id: 3,
                    svgIcon: userIcon,
                    data: {
                        path: "/layout/bottomnavigation/overview/profile",
                    },
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
            this.$router.push(e.itemTarget.data.path);
        },
    },
};
</script>
<style>
.example-wrapper-basic-usage-bottomonavigation {
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
    height: 550px;
  }

  .k-bottom-nav {
    border-radius: 0 0 20px 20px;
  }

  .title-basic-usage-bottomnav {
    text-align: center;
    font-size: 30px;
    padding: 40px 0;
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

  .separator-basic-usage-bottomnav {
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
</style>
