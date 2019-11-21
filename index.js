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

function createEmployeeRecord(array){
    return ({
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
        

    })
}

function createEmployeeRecords(array){
    const Array = []
    array.forEach(e => {
       Array.push(createEmployeeRecord(e))
    })
    return Array
}

function createTimeInEvent(string){
   const  normalized_string =string.split(' ')
    const date = normalized_string[0]
    const time = parseInt(normalized_string[1])
    this.timeInEvents.push({type: "TimeIn", date: date, hour: time})
    return this
}

function createTimeOutEvent(string){
    const  normalized_string =string.split(' ')
     const date = normalized_string[0]
     const time = parseInt(normalized_string[1])
     this.timeOutEvents.push({type: "TimeOut", date: date, hour: time})
     return this
 }

 function hoursWorkedOnDate(date){
   const timeIn= this.timeInEvents.find(e => {return(e.date === date)})
   const timeOut= this.timeOutEvents.find(e => {return(e.date === date)})
   return (timeOut.hour - timeIn.hour) / 100
 }

 function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
 }

 function calculatePayroll(record){
     let result = 0
    record.forEach(e => {
       result +=  allWagesFor.bind(e)()
    })
    return result
 }

 function  findEmployeeByFirstName(src, name){
    const found =src.find(e => e.firstName=== name)
    return found
 }