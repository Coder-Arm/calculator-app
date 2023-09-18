import { useState } from 'react';
import CalculatorContext from './CalculatorContext'
const CalculatorProvider = ({children}) => {
   const [num,setNum] = useState("");
   const [operator,setOperator] = useState("")

  return (
    <CalculatorContext.Provider value={{num,setNum,operator,setOperator}}>
      {children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorProvider
