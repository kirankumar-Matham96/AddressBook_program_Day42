console.log("Welcome to addressbook program!");

//class to store data
class Person {
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phoneNumber;
  email;

  //constructor
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }

  //to update firstname
  updateFirstName(newFirstName) {
    this.firstName = newFirstName;
  }

  //to update lastname
  updateLastName(newLastName) {
    this.lastName = newLastName;
  }

  //to update address
  updateAddress(newAddress) {
    this.address = newAddress;
  }

  //to update city
  updateCity(newCity) {
    this.city = newCity;
  }

  //to update state
  updateState(newState) {
    this.state = newState;
  }

  //to update zip
  updateZip(newZip) {
    this.zip = newZip;
  }

  //to update phonenumber
  updatePhoneNumber(newPhoneNumber) {
    this.phoneNumber = newPhoneNumber;
  }

  //to update email
  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

//object creation
let person1 = new Person(
  "Kiran",
  "kumar",
  "address",
  "city",
  "state",
  451263,
  "+91 9876540123",
  "email@gmail.com"
);

//printing all the details
console.log(person1);
