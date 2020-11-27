
import { Input } from './Input'
import { useState } from 'react'
import './style.scss';


function validateCardNumber(value) {
  let correctCard = "1234 1234 1234 1234"
  if (correctCard === value) {
    return ""
  }
  return "Incorrect or Empty Card Number"
}

function validateCardcvv2(value) {
  let numbers = /^[0-9]+$/;
  if (!value) {
    return "CVV2 is Empty"
  } else if (value.match(numbers)) {
    return ""
  }
  return "CVV2 Must Contain Only Digits"
}

function validateDate(value) {
  let now = new Date()
  let month = (now.getMonth() + 1)
  let year = now.getFullYear().toString().slice(-2)
  let [enteredMonth, enteredYear ] = value.split('/')
  if ((/\//.test(value)) === false) {
    return "Enter the ext.date in the format: 'mm/yy'"
  }
  if (enteredYear < year) {
    return "Credit Card's Year Is Expired"
  } else if (enteredYear > year) {
    return  ""
  }  
  if ((enteredMonth <= month || enteredMonth > 12  )) {
      return "Credit Card's Month Is Expired Or Invalid"
  }
  return ""
}


export function Form() {
  const [cardNumberError, setcardNumberError] = useState()
  const [cardCvv2Error, setcardCvv2Error] = useState()
  const [cardDateError, setcardDateError] = useState()
  const [cardNumber, setCardNumber] = useState("")
  const [cardCvv2, setcardCvv2] = useState("")
  const [cardDate, setcardDate] = useState("")

  function handleCardNumberChange(e) {
    setCardNumber(e.target.value)
  }

  function handleCardCvv2Change(e) {
    setcardCvv2(e.target.value)
  }

  function handleCardDateChange(e) {
    setcardDate(e.target.value)
  }


  function handleCardNumber(e) {
    setcardNumberError(validateCardNumber(e.target.value))
  }

  function handleCardCvv2(e) {
    setcardCvv2Error(validateCardcvv2(e.target.value))
  }

  function handleCardDate(e) {
    setcardDateError(validateDate(e.target.value))
  }
  return (
    <div>
      <Input type="text" label="Credit Card Number" mask='9999 9999 9999 9999' error={cardNumberError} onChange={handleCardNumberChange} value={cardNumber} onBlur={handleCardNumber} />
      <Input type="text" label="Credit Card Expiration Date" placeholder="MM/YY" maxLength="7" error={cardDateError} value={cardDate} onChange={handleCardDateChange} onBlur={handleCardDate} />
      <Input type="password" label="Credit Card CVV2" maxLength="3" value={cardCvv2} onChange={handleCardCvv2Change} error={cardCvv2Error} onBlur={handleCardCvv2} />
    </div>
  );
}

