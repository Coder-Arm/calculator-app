import React, { useContext } from 'react'
import CalculatorContext from '../context/CalculatorContext'
const Buttons = () => {
  const {num,setNum,operator,setOperator} = useContext(CalculatorContext);
// console.log(num);

function digitHandler(e){
  setNum((prevNum) => prevNum+e.target.innerText)
}

function operatorHandler(e){
  // console.log("clicked");
  if(num.length > 0)digitHandler(e);
  setOperator(e.target.innerText);
}

function ResultHandler(){
  const splittedArr = num.split(operator);
  const firstVal = parseFloat(splittedArr[0]);
  const secVal = parseFloat(splittedArr[1])
  switch(operator){
    case "+" : setNum((firstVal+secVal).toString());
    break;
    case "-" : setNum((firstVal-secVal).toString());
    break;
    case "X" : setNum((firstVal*secVal).toString());
    break;
    case "/" : setNum((firstVal%secVal !== 0 ? ((firstVal/secVal).toFixed(4)) : (firstVal/secVal)).toString());
    break;
    default : setNum(num)
  }
}
  return (
    <div className='btn-box'>
      <button onClick={(e) => digitHandler(e)}>1</button>
      <button onClick={(e) => digitHandler(e)}>2</button>
      <button onClick={(e) => digitHandler(e)}>3</button>
      <button className='clear' onClick={() => setNum("")}>C</button>
      <button onClick={(e) => digitHandler(e)}>4</button>
      <button onClick={(e) => digitHandler(e)}>5</button>
      <button onClick={(e) => digitHandler(e)}>6</button>
      <button className='delete' onClick={() => setNum((prevNum) => prevNum.substr(0,num.length-1))}>Del</button>
      <button onClick={(e) => digitHandler(e)}>7</button>
      <button onClick={(e) => digitHandler(e)}>8</button>
      <button onClick={(e) => digitHandler(e)}>9</button>
      <button onClick={(e) => operatorHandler(e)}>+</button>
      <button onClick={(e) => digitHandler(e)}>.</button>
      <button className='zero' onClick={(e) => digitHandler(e)}>0</button>
      <button onClick={(e) => operatorHandler(e)}>-</button>
      <button className='equal' onClick={num.length > 0 ? ResultHandler : setNum("")}>=</button>
      <button onClick={(e) => operatorHandler(e)}>/</button>
      <button onClick={(e) => operatorHandler(e)}>X</button>
    </div>
  )
}

export default Buttons
