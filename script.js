$(document).ready(function () {
  var dt = luxon.DateTime.local();

  $("#currentDay").text(dt);

  $(".saveBtn").on("click", function () {
    let hour = $(this).siblings(".time-block").text();
    let input = $(this).siblings(".plans").val();
    console.log(input);
    console.log(hour);
    console.log("save button clicked");
    localStorage.setItem(hour, input);
  });

  /*$(".time-block").each(function () {
    var eachBlock = parseInt($(this).attr("id").split("-")[1]);
    if (dt > eachBlock) {
      $(this).addClass("#past");
    }
  });*/

  //current hour will also be referenced using the dt variable
});

//if current hour = DateTime hour, current block= addClass.present
//if current hour < DateTime hour, current block =  addClass.future
//if current hour > DateTime hour, current block = addClass.past
//use the
