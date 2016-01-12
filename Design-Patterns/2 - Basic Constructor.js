function Person (name, gender) {
  this.name = name;
  this.gender = gender;
}

Person.prototype.sayName = function () {
  return 'My name is ' + this.name;
}

Person.prototype.sayGender = function () {
  return 'I am a ' + this.gender;
}

var shoukath = new Person('Shoukath', 'Male');

console.log(shoukath.sayName());

console.log(shoukath.sayGender());
