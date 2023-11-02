
var header = document.querySelector(".enterdata");
var element = document.getElementById("adder");
var showResult = document.getElementById('proceed');
var resultDisplay = document.querySelector('.resultdata')
var addDataStyle = header.style;
var resultStyle = resultDisplay.style;

//**//
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var age = document.getElementById('age');
var address = document.getElementById('address');
//**//
var fullName = document.getElementById('fullName');
var resultAge = document.getElementById('resultAge');
var resultAddress = document.getElementById('resultAddress');
//**//


var ageresult = () => {
  var valueDate = age.value
  var dateObj = new Date(valueDate);
  var objYear = dateObj.getFullYear();
  var currentDate = new Date()
  var currentYear = currentDate.getFullYear();
  console.log(objYear)
  return currentYear - objYear;
}


element.addEventListener('dblclick', function() {
  console.log('hi')
  addDataStyle.display = 'flex';
  resultStyle.display = 'none';
});


showResult.addEventListener('click', function() {
  resultStyle.display = 'flex';
  addDataStyle.display = 'none';
  fullName.innerHTML = `FullName : ${firstName.value} ${lastName.value}`
  resultAge.innerHTML = `Age : ${ageresult()}`
  resultAddress.innerHTML = `Address : ${address.value}`
});




