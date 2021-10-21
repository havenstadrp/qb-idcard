window.addEventListener('message', function( event ) {
  $('#card').show();
  var sex = event.data.information.gender
    if (event.data.nui == 'idcard') {
      $("#name").html(event.data.information.name);
      $("#lastname").html(event.data.information.lastname);
      $("#sex").html(event.data.information.gender);
      $("#dob").html(event.data.information.dob);
      $("#nationality").html(event.data.information.nationality);
      $("#type").html('');
      $('#card').css('background', 'url("/ui/assets/img/idcard.png") no-repeat');
      $('#card').css('background-size', '61.2vh');
      }
      else if (event.data.nui == 'driverlicense') {
        $('#seximg').attr('src', 'assets/img/driver.png');
        $("#name").html(event.data.information.name);
        $("#lastname").html(event.data.information.lastname);
        $("#dob").html(event.data.information.dob);
        $("#type").html(event.data.information.type);
        $("#sex").html('');
        $("#nationality").html('');
        $('#card').css('background', 'url("/ui/assets/img/driverlicense.png") no-repeat');
        $('#card').css('background-size', '61.2vh');
        }  
      else if (event.data.nui == 'weaponlicense') {
        $('#seximg').attr('src', 'assets/img/weapon.png');
        $("#name").html(event.data.information.name);
        $("#lastname").html(event.data.information.lastname);
        $("#dob").html(event.data.information.dob);
        $('#card').css('background', 'url("/ui/assets/img/weaponlicense.png") no-repeat');
        $('#card').css('background-size', '61.2vh');
        $("#nationality").html('');
        $("#sex").html('');
        $("#type").html('');
        }
        else if (event.data.nui == 'lawyerpass') {
          $('#seximg').attr('src', 'assets/img/lawyer.png');
          $("#name").html(event.data.information.name);
          $("#lastname").html(event.data.information.lastname);
          $("#dob").html(event.data.information.dob);
          $("#sex").html('');
          $("#nationality").html('');
          $("#type").html('');
          $('#card').css('background', 'url("/ui/assets/img/lawyerpass.png") no-repeat');
          $('#card').css('background-size', '61.2vh');
          }
            if ( sex == '0' ) {
              $('#seximg').attr('src', 'assets/img/male.png');
              $('#sex').text('Male');
            } else if ( sex == '1' ) {
              $('#seximg').attr('src', 'assets/img/female.png');
              $('#sex').text('Female');
            }
});


document.onkeyup = function (event) {
event = event || window.event;
var charCode = event.keyCode || event.which;
if (charCode == 8) { // Nui hide key backspace
  $.post(`https://qb-idcard/escape`)
  $('#card').hide();
}};
