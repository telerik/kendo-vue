<template>
<div style="display: flex; justify-content: center">
  <k-form @submit="handleSubmit" :initial-values="formValues">
    <formcontent />
  </k-form>
  </div>
</template>

<script>
import { Form } from "@progress/kendo-vue-form";
import FormContent from "./ProfileComponents/FormContent.vue";

export default {
  components: {
    "k-form": Form,
    formcontent: FormContent,
  },
  data() {
    return {
      formValues: {
        avatar: [],
        firstName: "Peter",
        lastName: "Douglas",
        email: "peter.douglas@progress.com",
        phoneNumber: "(+1) 8373-837-93-02",
        countryselected: "Bulgaria",
        biography: null,
        team: "lemon",
      },
    };
  },
  created() {
    this.setFormValues();
  },
  mounted() {
    this.setAvatar();
  },
  methods: {
    handleSubmit(dataItem) {
      alert(JSON.stringify(dataItem, null, 2));
      const formValues = JSON.stringify(dataItem, null, 2);
      localStorage.setItem("form", formValues);
    },
    setAvatar() {
      const avatars = document.querySelectorAll(".k-avatar .k-avatar-image");
      const avatarImg = localStorage.getItem("avatar");
      if (avatarImg) {
        avatars.forEach((avatar) => {
          avatar.querySelector("img").setAttribute("src", avatarImg);
        });
      }
    },
    setFormValues() {
      const form = localStorage.getItem("form");
      if (form) {
        this.formValues = JSON.parse(form);
      }
    },
  },
};
</script>