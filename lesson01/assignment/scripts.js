// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  let data = [0, 1, 2, 3, 5, 8]

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    // let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      // const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      const sum = data.reduce(function(accumulator, currentElement) {
        return accumulator + currentElement;
      });

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .fav-num-output').innerHTML = sum
    } else {
      document.querySelector('#example-form .fav-num-output').innerHTML = "Please enter a number"
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  // Phone company form
  let phoneForm = document.querySelector("#phone-form");
  phoneForm.addEventListener('submit', function(event){
    event.preventDefault() // prevents the form from trying to submit to a server
    const phoneInput = document.querySelector('#phone-form .input').value;
    
    let phones = ["apple", "samsung", "google", "oneplus", "lg", "xiaomi", "asus", "huawei"];

    function checkPhoneCompany(phone) {
      return phone == phoneInput;
    }
    const isSamsung = phones.some(checkPhoneCompany);
    if (isSamsung) {
      document.querySelector("#phone-form .phone-output").innerHTML = "They make decent phones!";
    } else {
      document.querySelector("#phone-form .phone-output").innerHTML = "That's one of the smaller phone companies!";
    }
  });

  // number between 1 & 10 form
  let oneAndTenForm = document.querySelector("#one-and-ten-form");
  oneAndTenForm.addEventListener('submit', function(event){
    event.preventDefault(); // prevents the form from trying to submit to a server

    let = oneAndTenData = [1, 3, 6, 10]
    let oneAndTenFormInput = document.querySelector("#one-and-ten-form .input").value; // gets the user's input
    if (NaN) {
      document.querySelector(".one-and-ten-text").innerHTML = "please enter a number";
    } else {
      oneAndTenData.push(oneAndTenFormInput); // adds user's num to data array

      // uses every to check if all array numbers are 10 or less
      let lessThanTen = oneAndTenData.every(function(num) {
        return num <= 10;
      });
      if (lessThanTen) {
        document.querySelector(".one-and-ten-text").innerHTML = "cool, all numbers in the array are 10 or less"
      } else {
        document.querySelector(".one-and-ten-text").innerHTML = "now there's a number greater than 10 in the array 😕"
      }
    }
  });

  // pick a number form
  let pickANumForm = document.querySelector("#pick-num-form")
  pickANumForm.addEventListener('submit', function(event){
    event.preventDefault(); // prevents the form from trying to submit to a server

    let numInput = document.querySelector("#pick-num-form .input").value; // gets the user's input
    let arrayContents = "";
    if (NaN) {
      document.querySelector(".array").innerHTML = "please enter a number";
    } else {
      data.push(numInput); // adds user's num to data array
      data.forEach(element => {
        arrayContents += " " + element;
      });
      document.querySelector(".array").innerHTML = arrayContents;
    }
  });
})