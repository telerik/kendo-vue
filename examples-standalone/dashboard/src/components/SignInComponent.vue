<template>
    <div id="signin" class="signin">
        <div class="signin-form p-5">
            <h1 id="app-title">ISSUES</h1>
            <p id="app-subtitle">SAMPLE DASHBOARD</p>
            <div class="form-group mt-4">
                <KInput :size="'large'" :placeholder="'Email or Username'" />
            </div>
            <div class="form-group mb-4">
                <KInput type="password" :size="'large'" :placeholder="'Password'" />
                <p class="text-xs-right small">
                    <a href="#">Forgot it?</a>
                </p>
            </div>
            <div class="form-group">
                <KButton class="btn btn-primary btn-block" @click="onLoginClick">Log in</KButton>
            </div>
        </div>
    </div>
</template>

<script>
import { Input } from "@progress/kendo-vue-inputs";
import { Button } from "@progress/kendo-vue-buttons";
export default {
    name: 'signin',
    components: {
        KInput: Input,
        KButton: Button
    },
    methods: {
        onLoginClick() {
            this.$router.push('/')
        }
    }
}
</script>