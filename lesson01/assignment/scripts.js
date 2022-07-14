// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

   // An array that we can transform based on user input
  let data = [0, 1, 2, 3, 5, 8]

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

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

  // Phone company form.
  // Asks user what company their phone is from and outputs a message based on what company it is.
  // uses some() method
  let phoneForm = document.querySelector("#phone-form");
  phoneForm.addEventListener('submit', function(event){
    event.preventDefault() // prevents the form from trying to submit to a server
    const phoneInput = document.querySelector('#phone-form .input').value; // Gets the user's input
    
    // An array of phone companies (cus I like phones)
    let phones = ["apple", "samsung", "google", "oneplus", "lg", "xiaomi", "asus", "huawei"];

    // Checks if user's input matches any of the phone companies in the phones array using some() method
    function checkPhoneCompany(phone) {
      return phone == phoneInput;
    }
    const isSamsung = phones.some(checkPhoneCompany);

    // Prints a message based on what phone company the user inputs
    if (isSamsung) {
      document.querySelector("#phone-form .phone-output").innerHTML = phoneInput + " makes decent phones!";
    } else {
      document.querySelector("#phone-form .phone-output").innerHTML = "cool, I've never heard of " + phoneInput + " phones!";
    }
  });

  // number between 1 & 10 form
  // asks users to enter a number between 1 & 10 and adds their number to an array with numbers between 1 & 10.
  // uses push() and every() method
  let oneAndTenForm = document.querySelector("#one-and-ten-form");
  oneAndTenForm.addEventListener('submit', function(event){
    event.preventDefault(); // prevents the form from trying to submit to a server

    let = oneAndTenData = [1, 3, 6, 10] // my array
    let oneAndTenFormInput = document.querySelector("#one-and-ten-form .input").value; // gets the user's input

    // if user input is not a number ask them to submit a number. Otherwise, add user's number to data array
    if (NaN) {
      document.querySelector(".one-and-ten-text").innerHTML = "please enter a number";
    } else {
      oneAndTenData.push(oneAndTenFormInput);

      // uses every() method to check if all array numbers are 10 or less
      let lessThanTen = oneAndTenData.every(function(num) {
        return num <= 10 & num >= 1;
      });

      // Displays the array
      document.querySelector(".display-array").innerHTML = "my array: " + oneAndTenData;

      // Displays text based on the user's input
      if (lessThanTen) {
        document.querySelector(".one-and-ten-text").innerHTML = "cool, all numbers in my array are 10 or less"
      } else {
        document.querySelector(".one-and-ten-text").innerHTML = "now there's a number greater than 10 (or less than 1) in my array 😕"
      }
    }
  });

  // pick a number form
  // Asks user to pick a number and adds it to the data array. Then prints all numbers in the array out.
  // uses forEach() method
  let pickANumForm = document.querySelector("#pick-num-form")
  pickANumForm.addEventListener('submit', function(event){
    event.preventDefault(); // prevents the form from trying to submit to a server

    let numInput = document.querySelector("#pick-num-form .input").value; // gets the user's input
    let arrayContents = "";

    // if user input is not a number ask them to submit a number. Otherwise, add user's number to data array.
    if (NaN) {
      document.querySelector(".array").innerHTML = "please enter a number";
    } else {
      data.push(numInput); // adds user's num to data array

      // adds every value in the array to arrayContents variable
      data.forEach(element => {
        arrayContents += " " + element;
      });

      // prints out the updated data array
      document.querySelector(".array").innerHTML = arrayContents;
    }
  });

  // Multiply array by user input form
  // Asks user to enter a number and multiplies all values in the data array by that number, then displays the data array.
  // uses map() method
  let multiplyForm = document.querySelector("#multiply-form");
  multiplyForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevents form from trying to submit to server

    let multiplyInput = document.querySelector("#multiply-form .input").value; // gets user's input
    document.querySelector(".user-input").innerHTML = multiplyInput; // prints out user's input

    // checks if user entered a number or not. If not, asks them to submit a number
    if (!isNaN(multiplyInput)) {

      // multiplies everything in the data array by user's input and makes that into a new array
      let newArray = data.map(multiplyByInput);
      function multiplyByInput(num) {
        return num * multiplyInput;
      }
      document.querySelector(".new-array").innerHTML = newArray; // displays new array
    } else {
      document.querySelector(".new-array").innerHTML = "pls enter a number";
    }

  });
})