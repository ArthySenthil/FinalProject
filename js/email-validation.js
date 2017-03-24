// Contact Form Validation
$(document).ready(function(e) {
  $('#btnSend').click(function() {
    var sEmail = $('#email').val();
    var retVal = true;
    // Checking Empty Fields
    if ($.trim(sEmail).length == 0 || $("#name").val()=="") {
      if($("#name").val()==""){
        alert('All fields are mandatory. Please enter your name.');
        $("#name").focus();
      }
      if($('#email').val()==""){
        alert('All fields are mandatory. Please enter your email.');
        $("#email").focus();
      }
      return false;
    }
    else {
      if (validateEmail(sEmail)) {

        if($("#message").val()==""){
          alert('Your Message is Empty!');
          $("#message").focus();
          return false;
        }
        else{
          alert('Nice!! your Email is valid, and your message is ready to be sent.');
        }
      }
      else {
        alert('Invalid Email Address');
        $("#email").focus();
        return false;
      }
    }
  });
});
// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (filter.test(sEmail)) {
    return true;
  }
  else {
    return false;
  }
}
