// On click of header, switch to year view and close popup
  const datepicker = this.$el.find('.k-textbox').datepicker();
  datepicker.on('click', function(event) {
    if (event.target.classList.contains('k-header')) {
      datepicker.datepicker('show');
      return false;
    }
  });