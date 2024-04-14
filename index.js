/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Function to create an employee record
function createEmployeeRecord(employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
   // Function to create employee records from an array of arrays
   function createEmployeeRecords(employeesData) {
    return employeesData.map(createEmployeeRecord);
  }
   // Function to create a time-in event for an employee
   function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({ type: "TimeIn", hour: parseInt(hour), date: date });
    return this;
  }
   // Function to calculate hours worked on a specific date
   function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date).hour;
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour;
    return (timeOut - timeIn) / 100;
  }
    // Function to calculate wages earned on a specific date
    function wagesEarnedOnDate(date) {
        return hoursWorkedOnDate.call(this, date) * this.payPerHour;
      }
      
      // Function to calculate total wages earned for all dates worked by an employee
      function allWagesFor() {
        const eligibleDates = this.timeInEvents.map(event => event.date);
        const payable = eligibleDates.reduce((totalWages, date) => totalWages + wagesEarnedOnDate.call(this, date), 0);
        return payable;
      }
      
      // Function to find an employee by first name
      function findEmployeeByFirstName(srcArray, firstName) {
        return srcArray.find(employee => employee.firstName === firstName);
      }
      
      // Function to calculate total payroll for all employees
      function calculatePayroll(employeesArray) {
        return employeesArray.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
      }
      
