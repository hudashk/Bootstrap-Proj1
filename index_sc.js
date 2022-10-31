$.validator.addMethod("letters", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-z0-9A-Z0-9\s-#&()]*$/);
});

$.validator.addMethod("emailtest", function(value, element) {
    return this.optional(element) || /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(value);
});

$(document).ready(function(){
    $("#submit_form").validate({
       rules: {
                fullname: {
                    required: true,
                    minlength: 3,
                    maxlength: 35,
                    letters: true
                },
                 password: {
                    maxlength: 10,
                    minlength: 10,
                   required: true
                },
                email: {
                    emailtest: true,
                    required: true,
                    email: true
                },
            },

            messages: {
                fullname: {
                    required: "username field is required",
                    letters: "Must character only",
                    maxlength: "Please enter 35 Characters only"
                },
                email: {
                    required: "email field is required",
                    email: "Please enter a valid email id",
                    emailtest: "Please enter a valid email address"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 10 characters long"
                },
             }
    });
});