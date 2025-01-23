<template>
<div>
    <form id="ticketsForm" ref="myForm" v-kendo-validator="set" @submit.prevent="onSubmit">
        <div>
            <label for="HireDate">Hire Date:</label>
            <datepicker id="HireDate"
                              name="HireDate"
                              style="width: 250px"
                              required="required"
                              v-model="date">
            </datepicker>
            <br />
            <span data-for='HireDate' class='k-invalid-msg'></span>
        </div>
        <br />
        <div>
            <label for="RetireDate">Retire Date:</label>
            <datepicker id="RetireDate"
                              style="width: 250px"
                              name="RetireDate"
                              required="required">
            </datepicker>
            <br />
            <span data-for='RetireDate' class='k-invalid-msg'></span>
        </div>
        <div>
            <button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" type="submit">Submit</button>
        </div>
    </form>

    <div class="status"></div>
</div>
</template>
<script>
import { DatePicker } from '@progress/kendo-dateinputs-vue-wrapper';

export default {
    components: {
       'datepicker': DatePicker
    },
    data: function () {
        return  {
            date: null,
            set: {
                rules: {
                    greaterdate (input) {
                        if (input.is("[name='RetireDate'") && input.val() != "") {
                            var date = kendo.parseDate(input.val()),
                                                otherDate = kendo.parseDate(kendo.jQuery("[name='HireDate']").val());
                            return otherDate == null || otherDate.getTime() < date.getTime();
                        }
                        return true;
                    }
                },
                messages: {
                    greaterdate: 'Retire date should be greater than Hire date'
                }
            }
        };
    },
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
<style>
    .k-button, .status {
        margin-top: 10px;
    }
    .k-invalid-msg {
        display: inline-block;
    }
    .invalid {
        color: red;
    }
    .valid {
        color: green;
    }
</style>
