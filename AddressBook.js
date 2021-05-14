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

    //first name
    let nameRegex = RegExp("^[A-Z]{1}[a-z0-9]{2,}$");
    if (nameRegex.test(params[0])) {
      this.firstName = params[0];
    } else {
      throw "Invalid first name!";
    }

    //last name
    if (nameRegex.test(params[1])) {
      this.lastName = params[1];
    } else {
      throw "Invalid last name!";
    }

    //address
    let addressRegex = RegExp("[A-Za-z0-9./-]{3,}$");
    if (addressRegex.test(params[2])) {
      this.address = params[2];
    } else {
      throw "Invalid address!";
    }

    //city
    let cityRegex = RegExp("[A-Za-z0-9./]{3,}$");
    if (cityRegex.test(params[3])) {
      this.city = params[3];
    } else {
      throw "Invalid city!";
    }

    //state
    let stateRegex = RegExp("[A-Za-z0-9./]{3,}$");
    if (stateRegex.test(params[4])) {
      this.state = params[4];
    } else {
      throw "Invalid state!";
    }
    
    //zip
    let zipRegex = RegExp("^[1-9]{1}[0-9]{2,6}$");
    if (zipRegex.test(params[5])) {
      this.zip = params[5];
    } else {
      throw "Invalid zip!";
    }
    
    //phone number
    let phoneRegex = RegExp("^[+][0-9]{1,2}\\s[0-9]{3,13}$");
    if (phoneRegex.test(params[6])) {
      this.phoneNumber = params[6];
    } else {
      throw "Invalid phone number!";
    }
    
    //email
    let emailRegex = RegExp(
      "^^(?!\\.)[A-Za-z0-9]+([._%+-]?[0-9])*@[A-Za-z0-9-]+\\.[a-zA-Z]{2,}(\\.[A-Za-z]{2,})?$"
    );
    if (emailRegex.test(params[7])) {
      this.email = params[7];
    } else {
      throw "Invalid email!";
    }
  }

  //toString method to get all the details
  toString(){
    return "[\n"+
    ' first name = '+ this.firstName+
    '\n last name = '+this.lastName+
    '\n address = '+this.address+
    '\n city = '+this.city+
    '\n state = '+this.state+
    '\n zip = '+this.zip+
    '\n phone number = '+this.phoneNumber+
    '\n email = '+this.email+
    "\n]";
  }
}

//object creation(adding new person)
let person1 = new Person(
  "Kiran",
  "Kumar",
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
  "Kumar2",
  "address2",
  "city2",
  "state2",
  451670,
  "+91 2222222222",
  "email2@gmail.com"
);

/**
 * UC3: adding to array
 */
//array to store object of person
let addressBookArray = new Array();

//adding persons to the addressbook array
addressBookArray.push(person1);
addressBookArray.push(person2);

/**
 * UC4: finding person by name and edit details
 */
//finding person by name
function isNameMatches(person){
  return (person.firstName === 'Kiran' || person.lastName === 'Kiran');
}

let personWanted = addressBookArray.find(isNameMatches);
console.log("person found!: \n"+personWanted);

//editing details
personWanted.email = 'newpersonsemai@gmail.com';
console.log("after changing email: \n"+personWanted);
