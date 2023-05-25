const { getDifferenceInYearsAndMonths, getDateObject } = require('./utils');

// Person class
class Person {
  /**
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {string|Date} dateOfBirth
   */
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = getDateObject(dateOfBirth);
  }

  calculateAge() {
    const currentDate = new Date();

    return getDifferenceInYearsAndMonths(this.dateOfBirth, currentDate);
  }

  showDetails() {
    const age = this.calculateAge();
    console.log('Person Details');
    console.log(`First Name: ${this.firstName}`);
    console.log(`Last Name: ${this.lastName}`);
    console.log(`Age: ${age.years} years, ${age.months} months`);
    console.log('-----');
  }
}

class Employee extends Person {
  constructor(firstName, lastName, dateOfBirth, email, dateOfJoining, designation) {
    super(firstName, lastName, dateOfBirth);

    this.email = email;
    this.dateOfJoining = getDateObject(dateOfJoining);
    this.designation = designation;
  }

  calculateJobExperience() {
    const currentDate = new Date();

    return getDifferenceInYearsAndMonths(this.dateOfJoining, currentDate);
  }

  showDetails() {
    const jobExperience = this.calculateJobExperience();
    console.log('Employee Details');
    console.log(`First Name: ${this.firstName}`);
    console.log(`Last Name: ${this.lastName}`);
    console.log(`Designation: ${this.designation}`);
    console.log(`Job Experience: ${jobExperience.years} years, ${jobExperience.months} months`);
    console.log('-----');
  }
}

const person = new Person('Satvik', 'Daga', '1995-08-10');
person.showDetails();

const employee = new Employee(
  'Satvik',
  'Daga',
  '1995-08-10',
  'dagasatvik@gmail.com',
  '2020-01-02',
  'Full Stack Developer'
);
employee.showDetails();
