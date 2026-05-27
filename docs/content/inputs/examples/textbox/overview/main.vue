<template>
  <div class="profile-demo card-container">
    <div class="k-card custom-card">
      <div class="card-row">
        <div class="card-column no-flex">
          <div class="sidebar-container k-skeleton">
            <div class="avatar-name-container">
              <div class="k-skeleton skeleton-avatar" />
              <div class="name-container">
                <div class="k-skeleton skeleton-text" />
                <div class="k-skeleton skeleton-small-text-short" />
              </div>
            </div>
            <div class="description-container">
              <div class="k-skeleton skeleton-small-text" />
              <div class="k-skeleton skeleton-small-text" />
              <div class="k-skeleton skeleton-small-text" />
            </div>
          </div>
        </div>
        <div class="card-column">
          <div class="avatar-title-container">
            <div class="k-skeleton skeleton-avatar" />
            <h4 class="k-h4">My Profile</h4>
          </div>
          <div class="component-container">
            <form class="k-form" @submit="onSubmit">
              <fieldset>
                <div>Name</div>
                <KTextBox
                  :value="value"
                  @change="handleChange"
                  @input="handleInput"
                  :placeholder="'John Smith'"
                />
              </fieldset>
            </form>
          </div>
          <div class="skeleton-container top">
            <div class="k-skeleton skeleton-box-small" />
            <div class="k-skeleton skeleton-box-large" />
          </div>
          <div class="skeleton-container bottom">
            <div class="k-skeleton skeleton-box-small" />
            <div class="k-skeleton skeleton-box-large-double" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";
import "./overview-styles.css";

const value = ref(undefined);

function handleChange(event) {
    value.value = event.target.value;
}

function handleInput(event) {
    value.value = event.target.value;
}
</script>
