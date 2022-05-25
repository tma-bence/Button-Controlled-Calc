import React, { Fragment } from "react";

function Numpad(props) {

    const calculate = async () => {
        const operationField = document.getElementById('operation');
        const operation = operationField.value;
        const body = {operation};
        console.log(body);
        const response = await fetch('/api/calculate', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(res => res.json());
        console.log('response:', response);
        operationField.value = response;
    }

    const clearField = () => {
        const operationField = document.getElementById('operation');
        operationField.value = "";
    }

    const memoryAdd = () => {
        
    }

    const memoryClear = () => {
        
    }

    const memoryRead = () => {
        
    }

    const foo = () => {
        const operation = document.getElementById('operation');
        operation.value += props.value;
    }

    const handleClick = () => {
        try {
            switch (props.value) {
                case '=':
                    calculate();
                    break;
                case 'Cl':
                    clearField();
                    break;
                case 'M+':
                    memoryAdd();
                    break;
                case 'M-':
                    memoryClear();
                    break;
                case 'MR':
                    memoryRead();
                    break;
                default:
                    foo();
                    break;
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <div>
                <button className="btn btn-dark btn-block mt-1" onClick={handleClick}>{props.value}</button>
            </div>
        </Fragment>
    );
  }
  
  export default Numpad;
  