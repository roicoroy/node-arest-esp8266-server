// Set pin 5 as output on lamp control module
$.getq('queue', '/esp-lampcontrol/mode/2/o');
$.getq('queue', '/esp-lampcontrol/mode/3/o');


$(document).ready(function() {

  // Function to control relay
  $("#1").click(function() {
    $.getq('queue', '/esp-lampcontrol/digital/2/1');
  });

  $("#2").click(function() {
    $.getq('queue', '/esp-lampcontrol/digital/2/0');
  });

  //Function to control led
  $("#led1").click(function() {
    $.getq('queue', '/esp-lampcontrol/digital/3/1');
  });

  $("#led2").click(function() {
    $.getq('queue', '/esp-lampcontrol/digital/3/0');
  })
});