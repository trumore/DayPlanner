$(document).ready(function () {
  var dt = luxon.DateTime.local();

  $("#currentDay").text(dt);

  var toDo = $(".plans");
  $(".saveBtn").on("click", function () {
    console.log("save button clicked");
  });
});

//if current hour = DateTime hour, current block= addClass.present
//if current hour < DateTime hour, current block =  addClass.future
//if current hour > DateTime hour, current block = addClass.past
