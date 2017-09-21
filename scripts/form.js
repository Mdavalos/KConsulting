$(function() {
    $("#contactForm").submit(function (event) {
        var errors = [];
        
        if (!$(this.name).val()) {
            errors.push("<li>You must enter a name.</li>");
            $(this.name).parents("div.required").addClass("error");
            event.preventDefault();
        }
        if (!$(this.email).val()) {
            errors.push("<li>You must enter an email.</li>");
            $(this.email).parents("div.required").addClass("error");
            event.preventDefault();
        }
        if (!$(this.bio).val()) {
            errors.push("<li>You must enter a reason for contacting us.</li>");
            $(this.bio).parents("div.required").addClass("error");
            event.preventDefault();
        }
        $("div.errors", this).remove();
        if (errors.length > 0) {
            document.getElementById('wrong').play();
            $(this).prepend("<div class='errors'>You must "
                           + "correct the following errors:<ul>"
                           + errors.join("") + "</ul></div>");
        }
    });
});