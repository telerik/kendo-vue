<template>
  <div>
    <div class="col-sm-6 offset-sm-3">
      <div class="card">
        <div class="card-block">
          <form class="k-form k-form-horizontal" @submit="handleSubmit">
            <fieldset>
              <div class="k-form-field mb-3">
                <label class="k-label k-form-label">Name:</label>
                <KInput
                  :name="'username'"
                  :pattern="'[A-Za-z]+'"
                  :min-length="2"
                  :required="true"
                />
              </div>
              <div class="k-form-field mb-3">
                <label class="k-label k-form-label">Email:</label>
                <KInput :name="'email'" :type="'email'" :required="true" />
              </div>
              <div class="k-form-field mb-3">
                <label class="k-label k-form-label">CV:</label>
                <div :style="{ width: '100%' }">
                  <Upload
                    :files="files"
                    :batch="false"
                    :multiple="true"
                    :restrictions="{ allowedExtensions: ['.pdf', '.docx'] }"
                    @add="onAdd"
                    @remove="onRemove"
                    @progress="onProgress"
                    @statuschange="onStatusChange"
                    :with-credentials="false"
                    :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
                    :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"
                  />
                  <div class="k-form-hint">
                    Accepted files: <strong>PDF and DOCX</strong>
                  </div>
                </div>
              </div>
            </fieldset>
            <div class="text-right">
              <KButton :theme-color="'primary'" type="submit">
                Submit Application
              </KButton>
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

<script setup>
import { ref } from 'vue';
import { Upload } from '@progress/kendo-vue-upload';
import { Input as KInput } from '@progress/kendo-vue-inputs';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const addOneValidFile = ref(false);
const success = ref(false);
const files = ref([]);

function hasOneValidFile() {
    return files.value.some((f) => f.status === 4);
}

function onAdd(event) {
    files.value = event.newState;
}

function onRemove(event) {
    files.value = event.newState;
}

function onProgress(event) {
    files.value = event.newState;
}

function onStatusChange(event) {
    files.value = event.newState;
}

function handleSubmit(event) {
    event.preventDefault();
    addOneValidFile.value = !hasOneValidFile();
    setTimeout(() => {
        addOneValidFile.value = false;
    }, 3000);

    if (!addOneValidFile.value) {
        success.value = hasOneValidFile();
        setTimeout(() => {
            success.value = false;
        }, 3000);
    }
}
</script>
