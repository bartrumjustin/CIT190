// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
          },
      season: "required",
      'accomodations[]': {
        required: true,
        minlength: 3
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
      season: "Please select a Time of Year",
      'accomodations[]': {
        required: "Please select an option",
        minlength: "please select atleast 3"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
      submitHandler: function (form) {
          form.submit();
      }
  });
});