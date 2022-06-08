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
        task.setAttribute("class", "task col-10 future");
        task.setAttribute("class", "task col-10 present");
        task.setAttribute("class", "task col-10 past");
        task.setAttribute("id", "task-" + stHour);


        var saveBtn = document.createElement("div");
        $(saveBtn).text("SAVE");
        saveBtn.setAttribute("class", "save-btn col-1 saveBtn");
        saveBtn.setAttribute("id", "save-btn-" + stHour);
        saveBtn.setAttribute("targetId", stHour);

        plan.appendChild(hr);
        plan.appendChild(task);
        plan.appendChild(saveBtn);

        plansContainer.appendChild(plan);

    }
}


function getStandardHour(militaryHour) {
    var output = militaryHour % 12;
    if (output === 0)
        return 12;
    return output;
}

createPlanner();