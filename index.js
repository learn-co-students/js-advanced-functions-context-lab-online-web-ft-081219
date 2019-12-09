/* Your Code Here */

const createEmployeeRecord = function (array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function (array) {
    return array.map(arr => createEmployeeRecord(arr));
}

const createTimeInEvent = function (datestamp) {
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(datestamp.split(" ")[1]),
        date: datestamp.split(" ")[0]
    });
    return this;
}

const createTimeOutEvent = function (datestamp) {
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(datestamp.split(" ")[1]),
        date: datestamp.split(" ")[0]
    });
    return this;
}

const hoursWorkedOnDate = function (date) {
    const clockIn = this.timeInEvents.find(e => e.date === date).hour;
    const clockOut = this.timeOutEvents.find(e => e.date === date).hour;
    return (clockOut - clockIn) / 100;
}

const wagesEarnedOnDate = function (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

const findEmployeeByFirstName = function (array, name) {
    return array.find(e => e.firstName === name);
}

const calculatePayroll = function (array) {
    return array.reduce(
        (memo, obj) => memo + allWagesFor.call(obj), 0
    );
}

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