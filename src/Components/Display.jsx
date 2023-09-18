import React, { useContext } from 'react'
import CalculatorContext from '../context/CalculatorContext'
const Display = () => {
  const {num} = useContext(CalculatorContext);
  // console.log(num);
  return (
    <>
      <textarea readOnly={true} value={num}></textarea>
    </>
  )
}

export default Display
