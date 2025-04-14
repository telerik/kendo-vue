<template>
    <div>
      <div class="col-sm-6 offset-sm-3">
        <div class="card">
          <div class="card-block">
            <form class="k-form k-form-horizontal" @submit="handleSubmit">
              <fieldset>
                <div class="k-form-field mb-3">
                  <label class="k-label k-form-label">Name:</label>
                  <k-input
                    :name="'username'"
                    :pattern="'[A-Za-z]+'"
                    :min-length="2"
                    :required="true"
                  >
                  </k-input>
                </div>
                <div class="k-form-field mb-3">
                  <label class="k-label k-form-label">Email:</label>
                  <k-input :name="'email'" :type="'email'" :required="true" />
                </div>
                <div class="k-form-field mb-3">
                  <label class="k-label k-form-label">CV:</label>
                  <div :style="{ width: '100%' }">
                    <upload
                      :files="files"
                      :batch="false"
                      :multiple="true"
                      :restrictions="{
                        allowedExtensions: ['.pdf', '.docx'],
                      }"
                      @add="onAdd"
                      @remove="onRemove"
                      @progress="onProgress"
                      @statuschange="onStatusChange"
                      :with-credentials="false"
                      :save-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/save'"
                      :remove-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'"
                    />
                    <div class="k-form-hint">
                      Accepted files: <strong> PDF and DOCX</strong>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div class="text-right">
                <kbutton :theme-color="'primary'" type="submit"
                  >Submit Application</kbutton
                >
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        v-if="success"
        class="alert alert-success"
        :style="{ position: 'absolute' }"
      >
        Form submitted!
      </div>
      <div
        v-if="addOneValidFile"
        class="alert alert-warning"
        :style="{ position: 'absolute' }"
      >
        Upload at least one valid file.
      </div>
    </div>
  </template>
  <script>
  import { Upload } from '@progress/kendo-vue-upload';
  import { Input } from '@progress/kendo-vue-inputs';
  import { Button } from '@progress/kendo-vue-buttons';
  
  export default {
    components: {
      kbutton: Button,
      'k-input': Input,
      upload: Upload,
    },
    data() {
      return {
        addOneValidFile: false,
        success: false,
        files: [],
      };
    },
    methods: {
      hasOneValidFile() {
        return this.files.some((f) => f.status === 4);
      },
      onAdd(event) {
        this.files = event.newState;
      },
      onRemove(event) {
        this.files = event.newState;
      },
      onProgress(event) {
        this.files = event.newState;
      },
      onStatusChange(event) {
        this.files = event.newState;
      },
      handleSubmit(event) {
        event.preventDefault();
        this.addOneValidFile = !this.hasOneValidFile();
        setTimeout(() => {
          this.addOneValidFile = false;
        }, 3000);
  
        if (!this.addOneValidFile) {
          this.success = this.hasOneValidFile();
          setTimeout(() => {
            this.success = false;
          }, 3000);
        }
      },
    },
  };
  </script>
  