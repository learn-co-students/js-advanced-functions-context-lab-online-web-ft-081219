/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function(employeeArray) {
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

let createEmployeeRecords = function(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
};

let timeEvent = function(dateStamp) {
    return {
        type: this,
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0]
    };
};

let createTimeInEvent = function(dateStamp) {
    this.timeInEvents.push(timeEvent.call('TimeIn', dateStamp));
    return this;
};

let createTimeOutEvent = function(dateStamp) {
    this.timeOutEvents.push(timeEvent.call('TimeOut', dateStamp));
    return this;
};

let hoursWorkedOnDate = function(date) {
    let timeIn = this.timeInEvents.find(e => e.date === date).hour;
    let timeOut = this.timeOutEvents.find(e => e.date === date).hour;
    return (timeOut - timeIn) / 100;
};

let wagesEarnedOnDate = function(date) {
    return (this.payPerHour * hoursWorkedOnDate.call(this, date));
};

let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(r => r.firstName === firstName)
}

let calculatePayroll = function(arrayOfEmployees) {
    return arrayOfEmployees.reduce(((total, employee) => total + allWagesFor.call(employee)), 0);
}