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

  //constructor(regex added to each element)
  constructor(...params) {

    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(params[0])) {
      this.firstName = params[0];
    } else {
      throw "Invalid first name!";
    }

    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(params[1])) {
      this.lastName = params[1];
    } else {
      throw "Invalid last name!";
    }

    let addressRegex = RegExp("[A-Za-z0-9./-]{3,}$");
    if (addressRegex.test(params[2])) {
      this.address = params[2];
    } else {
      throw "Invalid address!";
    }

    let cityRegex = RegExp("[A-Za-z0-9./]{3,}$");
    if (cityRegex.test(params[3])) {
      this.city = params[3];
    } else {
      throw "Invalid city!";
    }

    let stateRegex = RegExp("[A-Za-z0-9./]{3,}$");
    if (stateRegex.test(params[4])) {
      this.state = params[4];
    } else {
      throw "Invalid state!";
    }
    
    let zipRegex = RegExp("^[1-9]{1}[0-9]{2,6}$");
    if (zipRegex.test(params[5])) {
      this.zip = params[5];
    } else {
      throw "Invalid zip!";
    }
    
    let phoneRegex = RegExp("^[+][0-9]{1,2}[0-9]{3,13}$");
    if (phoneRegex.test(params[6])) {
      this.phoneNumber = params[6];
    } else {
      throw "Invalid phone number!";
    }
    
    let emailRegex = RegExp(
      "^^(?!\\.)[A-Za-z0-9]+([._%+-]?[0-9])*@[A-Za-z0-9-]+\\.[a-zA-Z]{2,}(\\.[A-Za-z]{2,})?$"
    );
    if (emailRegex.test(params[7])) {
      this.email = params[7];
    } else {
      throw "Invalid email!";
    }
  }

  //to set firstname with conditions
  setFirstName(newFirstName) {
    let fNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (fNameRegex.test(newFirstName)) {
      this.firstName = newFirstName;
    } else {
      throw "Invalid first name!";
    }
  }

  //to update lastname with conditions
  setLastName(newLastName) {
    let lNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (lNameRegex.test(newFirstName)) {
      this.lastName = newLastName;
    } else {
      throw "Invalid last name!";
    }
  }

  //to update address with conditions
  setAddress(newAddress) {
    let addressRegex = RegExp("[A-Za-z0-9./]{3,}$");
    if (addressRegex.test(newAddress)) {
      this.address = newAddress;
    } else {
      throw "Invalid address!";
    }
  }

  //to update city with conditions
  setCity(newCity) {
    let cityRegex = RegExp("[A-Za-z0-9./]{3,}$");
    if (cityRegex.test(newCity)) {
      this.city = newCity;
    } else {
      throw "Invalid city!";
    }
  }

  //to update state with conditions
  setState(newState) {
    let stateRegex = RegExp("[A-Za-z0-9./]{3,}$");
    if (stateRegex.test(newState)) {
      this.state = newState;
    } else {
      throw "Invalid state!";
    }
  }

  //to update zip with conditions
  setZip(newZip) {
    let zipRegex = RegExp("^[1-9]{1}[0-9]{2,6}$");
    if (zipRegex.test(newZip)) {
      this.zip = newZip;
    } else {
      throw "Invalid zip!";
    }
  }

  //to update phonenumber with conditions
  setPhoneNumber(newPhoneNumber) {
    let phoneRegex = RegExp("^[+][0-9]{1,2}[0-9]{3,13}$");
    if (phoneRegex.test(newPhoneNumber)) {
      this.phoneNumber = newPhoneNumber;
    } else {
      throw "Invalid phone number!";
    }
  }

  //to update email with conditions
  setEmail(newEmail) {
    let emailRegex = RegExp(
      "^^(?!\\.)[A-Za-z0-9]+([._%+-]?[0-9])*@[A-Za-z0-9-]+\\.[a-zA-Z]{2,}(\\.[A-Za-z]{2,})?$"
    );
    if (emailRegex.test(newEmail)) {
      this.email = newEmail;
    } else {
      throw "Invalid email!";
    }
  }
}

//object creation(adding new person)
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

//object creation(adding new person)
let person2 = new Person(
  "Kiran2",
  "kumar2",
  "address2",
  "city2",
  "state2",
  451670,
  "+91 2222222222",
  "email2@gmail.com"
);

//array to store object of person
let addressBookArray = new Array();

//adding persons to the addressbook array
addressBookArray.push(person1);
addressBookArray.push(person2);
