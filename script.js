$(document).ready(function () {
  var dt = luxon.DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
  });

  $("#currentDay").text(dt);

  $(".saveBtn").on("click", function () {
    var hour = $(this).siblings(".time-block").text();
    var input = $(this).siblings(".plans").val();
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

  function hourDisplay() {
    var hourRef = luxon.DateTime.local().toLocaleString({
      hour: "2-digit",
      hour12: false,
    });
    $(".time-block").each(function () {
      var eachBlock = parseInt($(this).text());
      if (eachBlock < hourRef) {
        $(this).siblings(".plans").addClass("past");
      } else if (eachBlock == hourRef) {
        $(this).siblings(".plans").removeClass("past");
        $(this).siblings(".plans").addClass("present");
      } else {
        $(this).siblings(".plans").removeClass("past");
        $(this).siblings(".plans").removeClass("present");
        $(this).siblings(".plans").addClass("future");
      }
    });
  }
  hourDisplay();
  renderPlans();
});
