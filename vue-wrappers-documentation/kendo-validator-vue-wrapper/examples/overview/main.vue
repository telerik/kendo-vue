<template>
<div>
    <form id="ticketsForm" ref="myForm" v-kendo-validator @submit.prevent="onSubmit">
        <input type="search"
            id="search"
            name="search"
            required
            validationMessage="Field is required"
            class="k-textbox" />

		<div>
			<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" type="submit">Submit</button>
		</div>
    </form>

    <div class="status"></div>
</div>
</template>

<style>
    .k-button, .status {
        margin-top: 10px;
    }
    .invalid {
        color: red;
    }
    .valid {
        color: green;
    }
</style>

<script>
export default {
    methods: {
        onSubmit: function (ev) {
            var validator = kendo.jQuery(this.$refs.myForm).getKendoValidator()
            var status = kendo.jQuery('.status')
            if (validator.validate()) {
                status.text('Hooray! Your data is submitted!')
                  .removeClass('invalid')
                  .addClass('valid')
            } else {
                status.text('Oops! There is invalid data in the form.')
                  .removeClass('valid')
                  .addClass('invalid')
            }
        }
    }
}
</script>
