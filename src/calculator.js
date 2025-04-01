import {useState} from "react";
import {evaluate} from "mathjs";
import "./calculator.css"

function Calc () {
    const[input, setInput] = useState('');
    const[result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(input +value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleDelete = () => {
      setInput(input.slice(0, -1));
   };

   const handlePercentage = () => {
    if (input) {
        setInput((parseFloat(input) / 100).toString()); 
    }
    };

   const handleSquareRoot = () => {
    if (input) {
        const value = Math.sqrt(parseFloat(input));
        setInput(value.toString());
    }
    };
  
    const handlePower = () => {
         setInput(input + "^"); 
  };
  


    const handleCalculate = () => {
        try {
            const Output = evaluate (input);
            setResult(Output);

        }catch (error){
            setResult("error");
        };
        
    };  

    return(
        <div className="calculator">
            <h1>Calculator</h1>
            <div className="display">
            <input type="text" value={input} placeholder="0" disabled />
            <h2>{result}</h2>
            </div>
            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>


                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>

                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>

                <button onClick={handleClear}>C</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
                <button onClick={() => handleClick("/")}>/</button>

                <button onClick={handlePercentage}>%</button>
                <button onClick={handleSquareRoot}>√</button>
                <button onClick={handlePower}>xʸ</button>
                <button onClick={handleDelete}>⌫</button>
                <button onClick={handleCalculate}className="equals">=</button>
            </div>
        </div>
    );
}

export default Calc;