var currentDay = moment().format("dddd, MMMM Do");
var plansContainer = document.getElementById("plans-container");
$("#currentDay").html(currentDay);

var hours = [9 , 10, 11, 12, 13, 14, 15, 16, 17]
function createPlanner(start, end) {
    //var currentHour = moment().hours();
    var currentHour = hour;
    for (var hour of hours) {
        var stHour = getStandardHour(hour);
        var plan = document.createElement("div");
        plan.setAttribute("class", "plan row");
        plan.setAttribute("id", "plan-" + stHour);

    }}

    createPlanner();