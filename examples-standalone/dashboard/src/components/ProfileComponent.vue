<template>
    <div>
        <div v-if="user.id">
            <div class="row mb-4">
                <div class="col-sm">
                    <h2>
                        <span class="small text-uppercase text-muted d-block">Account</span>
                        {{ user.login }} - {{ user.name }}
                    </h2>
                </div>
                <div class="col-sm text-sm-end">
                    <KButton class="btn btn-secondary" @click="onSignOutClick">Sign out</KButton>
                </div>
            </div>

            <div class="row">
                <div class="col-md-7 k-card-list">
                    <Card id="profile">
                        <CardHeader>Public Profile</CardHeader>
                        <CardBody>
                            <div class="row">
                                <div class="col-md-3 text-xs-center">
                                    <Avatar :type="'image'" :size="null" class="custom-avatar">
                                        <img :src="user.avatar_url" style="max-width: 100%" />
                                    </Avatar>
                                </div>
                                <div class="col-md-9">
                                    <div class="form-group">
                                        <KLabel class="h6">
                                            Username
                                        </KLabel>
                                        <KInput :type="'text'" id="username" :value="user.login" />
                                    </div>
                                    <div class="form-group">
                                        <KLabel class="h6">
                                            Name
                                        </KLabel>
                                        <KInput type="text" id="name" :value="user.name" />
                                    </div>
                                    <div class="form-group">
                                        <KLabel class="h6">Email</KLabel>
                                        <KInput type="email" id="email" :value="user.email" />
                                    </div>
                                    <div class="form-group">
                                        <KLabel class="form-check-label h6">
                                        </KLabel>
                                        <Checkbox :default-checked="true" /> Keep my email
                                        address private
                                    </div>
                                    <div class="form-group">
                                        <KLabel class="h6">Company</KLabel>
                                        <KInput type="text" id="company" :value="user.company" />
                                    </div>
                                    <div class="form-group">
                                        <KLabel class="h6">Location</KLabel>
                                        <KInput type="text" id="location" :value="user.location" />
                                    </div>
                                    <div class="form-group">
                                        <KButton class="btn btn-primary" @click="onUpdateClick">Update profile</KButton>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    <Card id="delete-account">
                        <CardHeader>Delete Account</CardHeader>
                        <CardBody>
                            <p>You will immediately lose access to your repositories and all other information
                                associated with your account.
                                <strong>This cannot be undone!</strong>
                            </p>
                            <KButton class="btn btn-danger" @click="onDeleteClick">Delete Account</KButton>
                        </CardBody>
                    </Card>
                </div>
                <div class="col-md-5 k-card-list">
                    <Card id="notifications">
                        <CardHeader>Notifications</CardHeader>
                        <CardBody>
                            <h4 class="h6">Automatically watch repositories?</h4>
                            <p class="text-muted">When you are given push access to a repository, automatically receive
                                notifications for it.</p>
                            <p>
                                <Switch on-label="YES" off-label="NO"></Switch>
                            </p>
                            <h4 class="h6">Receive updates to any conversations via email?</h4>
                            <p>
                                <Switch on-label="YES" off-label="NO" :default-checked="true"></Switch>
                            </p>
                            <h4 class="h6">Receive updates to any repositories via email?</h4>
                            <p>
                                <Switch on-label="YES" off-label="NO" :default-checked="true"></Switch>
                            </p>
                        </CardBody>
                    </Card>
                    <Card id="password">
                        <CardHeader>Update password</CardHeader>
                        <CardBody>
                            <div class="form-group">
                                <KLabel>
                                    Old password
                                </KLabel>
                                <KInput :type="'password'" :style="{ width: '100%' }" />
                            </div>
                            <div class="form-group">
                                <KLabel>
                                    New password
                                </KLabel>
                                <KInput :type="'password'" />
                            </div>
                            <div class="form-group">
                                <KLabel>
                                    Confirm password
                                </KLabel>
                                <KInput :type="'password'" />
                            </div>
                            <div class="form-group">
                                <KButton class="btn btn-secondary">Change password</KButton>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>

        <Dialog :modal="true" :title="'Thank You'" v-if="successWindowWidget" @close='onProfileDialogClose'>
            <p>Your profile has been successfully updated!</p>
            <DialogActionsBar>
                <KButton @click='onProfileDialogClose'>OK</KButton>
            </DialogActionsBar>
        </Dialog>

        <Dialog :modal="true" :title="'Are you sure you want to do this?'" v-if="successWindowWidget"
            @close='onDeleteDialogClose'>
            <p>Account deletetion cannot be undone!</p>
            <DialogActionsBar>
                <KButton @click="onDeleteDialogClose" style="width: 50%; float: left;">Cancel</KButton>
                <KButton @click="onDeleteDialogClose" :theme-color="'primary'" style="width: 50%; float: left;">Delete
                    Account</KButton>
            </DialogActionsBar>
        </Dialog>
    </div>
</template>

<script>
import { FieldWrapper } from "@progress/kendo-vue-form";

import { Button } from '@progress/kendo-vue-buttons'
import { Dialog, DialogActionsBar, Window } from '@progress/kendo-vue-dialogs'
import { Input, Checkbox, Switch } from '@progress/kendo-vue-inputs'
import { Label } from '@progress/kendo-vue-labels'
import {
    Card,
    CardHeader,
    CardBody,
    Avatar
} from "@progress/kendo-vue-layout";
// Replace with a personal access token to access your repositories.
// See https://github.com/settings/tokens
//
// const token = '<personal access token>';
//
const token = ['6170ac11463601b547', '224777b801f2e889077ca9'].join('');
/* global kendo */
export default {
    name: 'profile',
    components: {
        Window,
        Dialog,
        DialogActionsBar,
        Switch,
        KButton: Button,
        KInput: Input,
        Card,
        CardHeader,
        CardBody,
        Avatar,
        KLabel: Label,
        FieldWrapper,
        Checkbox
    },
    created() {
        fetch('https://api.github.com/users/mbechev', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${token}`,
            }
        }).then((response) => response.json())
            .then((data) => {
                this.user = data;
            })
    },
    data() {
        return {
            user: {},
            successWindowWidget: false,
            deleteWindowWidget: false
        }
    },
    methods: {
        onSignOutClick() {
            this.$router.push('Signin')
        },
        onUpdateClick() {
            this.successWindowWidget = true;
        },
        onProfileDialogClose() {
            this.successWindowWidget = false;
        },
        onDeleteDialogClose() {
            this.deleteWindowWidget = false;
        },
        onDeleteClick() {
            this.deleteWindowWidget = true;
        }
    }
}
</script>
