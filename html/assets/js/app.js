window.addEventListener('message', function( event ) {
  var sex = event.data.information.gender
  
  if (event.data.nui == 'idcard') {
    $('#drivercard').hide();
    $('#card').show();
    $("#name").html(event.data.information.name);
    $("#sex").html(event.data.information.gender);
    $("#dob").html(event.data.information.dob);
    $("#nationality").html(event.data.information.nationality);
    $("#fingerprint").html(event.data.information.fingerprint);
    $("#type").html('');
    $("body").css("color","#000");
    }
    if (event.data.nui == 'driverlicense') {
      $('#drivercard').show();
      $('#card').hide();
      $("#lastname").html(event.data.information.lastname);
      $("#firstname").html(event.data.information.firstname);
      $("#driverdob").html(event.data.information.driverdob);
      $("#drivertypemotor").html(event.data.information.drivertypemotor);
      $("#drivertypecar").html(event.data.information.drivertypecar);
      $("#drivertypetruck").html(event.data.information.drivertypetruck);
      
      
      $("#drivernationality").html('');
      $("#driverfingerprint").html('');
      $("#driversex").html('');
      $("body").css("color","#ededed");
      $('#drivercard').css('background', 'url("/html/assets/images/driverlicense.png")');
      }  
    if ( sex == '0' ) {
      $('#card').css('background', 'url("/html/assets/images/idcard.png")');
      $('#sex').text('male');
    } else if ( sex == '1' ) {
      $('#card').css('background', 'url("/html/assets/images/idcard.png")');
      $('#sex').text('female');
    }

});


document.onkeyup = function (event) {
event = event || window.event;
var charCode = event.keyCode || event.which;
if (charCode == 27) {
  $.post(`https://qb-idcard/escape`)
  $('#card').hide();
  $('#drivercard').hide();
}};
