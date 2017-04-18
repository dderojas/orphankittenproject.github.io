//initial attempt at an ajax form, couln't get to work...

jQuery(document).ready(function($) {
  const form = $('#ajax-contact');
  const formMessages = $('#form-messages');



  $(form).submit(function(event) {
    event.preventDefault();
    console.log('this is working');

    const formData = $(form).serialize();

    //submit form with ajax
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })

    .done(function(response) {
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      //set message text
      $(formMessages).text(response);

      //clear the form
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    })

    .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });
  })

});
