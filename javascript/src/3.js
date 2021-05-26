let firstName = 'rohit';
let middleName = "kumar";
let lastName = `dey`;

console.log(firstName);
console.log(middleName);
console.log(lastName)

let result =firstName + " "+ middleName+" "+ lastName;
console.log(result)

let result2 = `${firstName}`+`${middleName}`+`${lastName}`;
console.log(result2);

let id=1;
let name="rohit";
let email = "rohit@gamil.com";
let url = `http://localhost:8080/api/employee?id=${id}&name${name}&email${email}`;

console.log(url);
