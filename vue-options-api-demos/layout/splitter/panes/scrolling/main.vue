<template>
  <Splitter
    :style="{ height: '340px' }"
    :panes="horizontalPanes"
    :orientation="'horizontal'"
    @change="onHorizontalChange"
  >
    <template v-slot:sideBar>
      <div class="pane-content">
        <h3>Sidebar content</h3>
        <h4>Item 1</h4>
        <h4>Item 2</h4>
        <h4>Item 3</h4>
        <h4>Item 4</h4>
        <h4>Item 5</h4>
        <h4>Item 6</h4>
        <h4>Item 7</h4>
        <h4>Item 8</h4>
        <h4>Item 9</h4>
        <h4>Item 10</h4>
        <h4>Item 11</h4>
        <h4>Item 12</h4>
        <h4>Item 13</h4>
        <h4>Item 14</h4>
        <h4>Item 15</h4>
        <h4>Item 16</h4>
        <h4>Item 17</h4>
        <h4>Item 18</h4>
        <h4>Item 19</h4>
        <h4>Item 20</h4>
      </div>
    </template>
    <template v-slot:mainContent>
      <div class="pane-content">
        <h3>Main content</h3>
        <section>
          <h3>What is Lorem Ipsum?</h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </section>
        <section>
          <h3>Why do we use it?</h3>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </section>
      </div>
    </template>
  </Splitter>
</template>

<script>
import { Splitter } from '@progress/kendo-vue-layout';
import './styles.css';

export default {
  components: {
    Splitter,
  },
  data() {
    return {
      horizontalPanes: [
        {
          size: '200px',
          scrollable: true,
          content: 'sideBar',
        },
        { content: 'mainContent', scrollable: false },
      ],
    };
  },
  methods: {
    onHorizontalChange(event) {
      this.horizontalPanes = event.newState;
    },
  },
};
</script>
