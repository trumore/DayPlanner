$(document).ready(function () {
  var dt = luxon.DateTime.local();

  $("#currentDay").text(dt);
});

//if current hour = DateTime hour, current block= addClass.present
//if current hour < DateTime hour, current block =  addClass.future
//if current hour > DateTime hour, current block = addClass.past
