import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Register = () => {
  // Get references to the form and form elements
 const [cardholderName, setcardholderName] = useState("");
 const [cardNumber, setcardNumber] = useState('');
 const [expirationDate, setexpirationDate ] = useState('');
 const [ cvvCode, setcvvCode] = useState('');
 const registerButton = useState('');

  // Create a function to validate the credit/debit card number
  function validateCardNumber() {
    const cardRegex = /^(\d{4}-){3}\d{4}|\d{16}$/; // regex pattern for credit/debit card number

    if (!cardRegex.test(cardNumber)) {
      return false;
    }

    // Use the Luhn algorithm to validate the credit/debit card number
    let sum = 0;
    let double = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);
      if (double) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      double = !double;
    }

    return sum % 10 === 0;
  }


  const handleSubmit = async (e) => {
    try {
  if (validateCardNumber()) {
    registerButton.removeAttribute("disabled");
  // Define the handleClick function to be called when the element is clicked

    e.preventDefault();
    console.log("Element clicked");
    alert("invalid details");
   

    await axios.post('http://localhost:9000/register/', {
        cardholderName,
        cardNumber,
        expirationDate,
        cvvCode
    });

   }

   else {
    registerButton.setAttribute("disabled", "disabled");
}

   
}
catch(e) {
    console.log(e);

   }
}









/*
  // Add an event listener to the form submit button
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    if (!validateCardNumber()) {
      cardError.innerHTML = "Invalid credit/debit card number";
      return;
    }

    // TODO: send AJAX request to register the user
  });

  // Add an event listener to the credit/debit card number input to remove error messages and enable the register button
  cardNumberInput.addEventListener("input", function () {
    cardError.innerHTML = "";

    } else {
      
    }
  });

  // Add an event listener using useEffect to call handleClick when the element is clicked
  useEffect(() => {
    const element = document.getElementById("my-element");
    element.addEventListener("click", handleClick);

    // Clean up the event listener when the component unmounts
    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

  axios.post("/api/register", {
    cardNumber: cardNumberInput.value,
    cardholderName: document.getElementById("cardholder-name").value,
    expirationDate: document.getElementById("expiration-date").value,
    cvvCode: document.getElementById("cvv-code").value,
  })
  .then(function (response) {
    console.log(response);
    // TODO: handle successful registration
  })
  .catch(function (error) {
    console.log(error);
    // TODO: handle registration error
  });
*/


return (

    <div className="register">
        <Header />

        <div className="registercontainer">

<form id="registration-form">
    <br />
    <br />
    <grid>
  <label  for="cardholder-name">Cardholder Name</label>
  <input  type="text" id="cardholder-name" name="cardholder-name" required value={cardholderName} onChange={(e) => setcardholderName(e.target.value)}/>
<br />

<br />
  <label   for="card-number">Card Number</label>
  <input   type="text" id="card-number" name="card-number" required value={cardNumber} onChange={(e) => setcardNumber(e.target.value)} />
<br />
<br />
  <label  for="expiration-date">Expiration Date</label>
  <input   type="text" id="expiration-date" name="expiration-date" placeholder="MM / YY" required value={expirationDate} onChange={(e) => setexpirationDate(e.target.value)}/>
<br />
<br />
  <label for="cvv-code">CVV Code</label>
  
  <input   type="text" id="cvv-code" name="cvv-code" required value={cvvCode} onChange={(e) => setcvvCode(e.target.value)}/>
  <span class="error" id="card-error"></span>
  </grid>
<br />
<br />
  <button id="register-btn" disabled style = {{backgroundColor: "#27ac4f" , color: "white", borderRadius: "20px", border: "#27ac4f " , height: "30px"}} value={registerButton}  type="submit" onClick={handleSubmit}>Register</button>
  <br />
  <br />
</form>
            
</div>

<Footer />



    </div>



);


}

export default Register;