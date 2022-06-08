var currentDay = moment().format("dddd, MMMM Do");
var plansContainer = document.getElementById("plans-container");
$("#currentDay").html(currentDay);

var hours = [9 , 10, 11, 12, 13, 14, 15, 16, 17]
function createPlanner(start, end) {
    var currentHour = moment().hours();
    for (var hour of hours) {
        var stHour = getStandardHour(hour);
        var plan = document.createElement("div");
        plan.setAttribute("class", "plan row");
        plan.setAttribute("id", "plan-" + stHour);

        var hr = document.createElement("div");
        hr.setAttribute("class", "hour col-1");
        hr.setAttribute("id", "hour-" + stHour);
        if(hour < 12)
            $(hr).text(stHour + "AM");
        else
            $(hr).text(stHour + "PM");

        var task = document.createElement("textarea");
        if (hour > currentHour)
            task.setAttribute("class", "task col-10 future");
        else if (hour == currentHour)
            task.setAttribute("class", "task col-10 present");
        else
            task.setAttribute("class", "task col-10 past");
        task.setAttribute("id", "task-" + stHour);
        var taskVal = localStorage.getItem(stHour);
        if (taskVal != null)
            $(task).val(taskVal);

        var saveBtn = document.createElement("div");
        $(saveBtn).text("SAVE");
        saveBtn.setAttribute("class", "save-btn col-1 saveBtn");
        saveBtn.setAttribute("id", "save-btn-" + stHour);
        saveBtn.setAttribute("targetId", stHour);
        saveBtn.addEventListener("click", onSaveBtnClick);

        plan.appendChild(hr);
        plan.appendChild(task);
        plan.appendChild(saveBtn);

        plansContainer.appendChild(plan);
    }
}

function onSaveBtnClick(event) {
    var targetId = event.target.getAttribute("targetId");
    var taskVal = $("#task-" + targetId).val();
    localStorage.setItem(targetId, taskVal);
    console.log(localStorage);
}

function getStandardHour(militaryHour) {
    var output = militaryHour % 12;
    if (output === 0)
        return 12;
    return output;
}

createPlanner();