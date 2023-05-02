/**
 * The function is a simple calculator app that allows users to perform basic arithmetic operations and
 * reset the input and result fields.
 * @returns The App component is being returned, which contains a form with input fields and buttons
 * for performing basic arithmetic operations and resetting the input and result values. The current
 * value of the result is displayed in a paragraph element with a reference to resultRef.
 */
import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
    inputRef.current.value = ''; // clear input field
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
    inputRef.current.value = ''; // clear input field
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
    inputRef.current.value = ''; // clear input field
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = ''; // clear input field
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0); // reset result to zero
    inputRef.current.value = ''; // clear input field
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>{result}</p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
