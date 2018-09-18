

function whichSchool(age) {
  if (age<13){
    return "Elementary School";
  }
  else if (age>=13 && age <= 18){
    return "Secondary School";
  }
  else{
    return "Lighthouse Labs";
  }
}
let testAge=16;
console.log("I am " + testAge + ". Which school should I go to?");
console.log("You need to go to " + whichSchool(testAge));

