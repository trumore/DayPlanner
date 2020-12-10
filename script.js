$(document).ready(function () {
  var dt = luxon.DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
  });

  var toDoList = [];

  $("#currentDay").text(dt);

  $(".saveBtn").on("click", function () {
    var hour = $(this).siblings(".time-block").text();
    var input = $(this).siblings(".plans").val();
    //console.log(input);
    //console.log(hour);
    //console.log("save button clicked");
    localStorage.setItem(hour, input);
  });

  function renderPlans() {
    $(".time-block").each(function () {
      var plans = $(this).text();
      var storedPlans = localStorage.getItem(plans);
      if (storedPlans !== null) {
        $(this).siblings(".plans").val(storedPlans);
      }
    });
  }

  renderPlans();

  var storedToDo = JSON.parse(localStorage.getItem("ToDoList"));

  /*$(".time-block").each(function () {
    var eachBlock = parseInt($(this).attr("id").split("hour")[1]);
    if (dt > eachBlock) {
      $().addClass("#past");
    }
  });*/

  //current hour will also be referenced using the dt variable
});

//if current hour = DateTime hour, current block= addClass.present
//if current hour < DateTime hour, current block =  addClass.future
//if current hour > DateTime hour, current block = addClass.past
//use the
