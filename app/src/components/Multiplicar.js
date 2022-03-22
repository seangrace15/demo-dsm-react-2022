import {useState} from 'react';

function Multiplicar(props) {

    const [inputValue, setInputValue] = useState(props.inputValue,'0');
    const [outputValue, setOutputValue] = useState(props.outputValue,'0');

    const inputChangeHandler = (event) => {
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const multiplicar = (event) => {
        setOutputValue(event.target.value*inputValue);
    }

    return (
        <div>
            <div>
            <input name="input" onChange={inputChangeHandler} value={inputValue}/>
            </div>
            <div>
                <button type="button" onClick={multiplicar} value={37} class="btn btn-primary">Multiplicar x 37</button>
                <button type="button" onClick={multiplicar} value={41} class="btn btn-primary">Multiplicar x 41</button>
            </div>
            <div>
                <h1>{outputValue}</h1>
            </div>
        </div>
    );
}



export default Multiplicar;
