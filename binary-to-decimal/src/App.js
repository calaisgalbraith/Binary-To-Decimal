import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [decimalValue, setDecimalValue] = useState('')

  const [binaryValue, setBinaryValue] = useState('')
  const handleBinaryValueChange = (e) => {
    const { value } = e.target
    setBinaryValue(value) // update binary value on input change
  }

  const handleBinaryFormSubmit = (e) => {
    e.preventDefault()
    setDecimalValue(parseInt(binaryValue, 2)) // update decimal value on submit of binary value
  }

  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [displayError, setDisplayError] = useState(false)
  useEffect(() => {
    let setDisabled = true
    let showErrorMessage = false
    if (binaryValue !== '') { // check if binary input has value
      const re = /^[01]+$/;
      if (re.test(binaryValue)) { // check if binary input is valid (only 0 & 1) 
        setDisabled = false // if binary has input & is only 0 or 1, enable btn
      } else {
        showErrorMessage = true // if value not only 0 or 1, show error 
      }
    } 
    setButtonDisabled(setDisabled) // disable/enable btn depending on value
    setDisplayError(showErrorMessage) // show/hide error depending on value

  }, [binaryValue])


  return (
    <>
      <h1>Binary to Decimal Converter</h1>
      <form onSubmit={handleBinaryFormSubmit}>
        <label>Binary Value:</label>
        <input
            type="text"
            name="binary"
            placeholder="Enter binary (0 or 1)"
            onChange={handleBinaryValueChange}
            maxLength="8"
          />
        <span style={{ display: displayError ? 'block' : 'none' }}> Only 1 or 0 please</span>
        <button
          type="submit"
          disabled={buttonDisabled}
        >Convert</button>
      </form>
      <label>Decimal Value:</label>
      <input
        type="text"
        name="decimal"
        disabled={true}
        value={decimalValue}
      />
    </>
  );
}

export default App;
