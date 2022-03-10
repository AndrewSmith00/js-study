let schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

alert(isEmpty(schedule));

function isEmpty(object) {
    for (property in object) {
        if (object[property] !== undefined) return false;
    }
    return true;
}