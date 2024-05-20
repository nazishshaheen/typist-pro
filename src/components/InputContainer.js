// import { } from '../functions/charCounter';
import '../style.css';
import Input from './Input';
import React, { useEffect, useRef } from "react";


function InputContainer() {
    useEffect(() => {
        document.querySelector('.Input-elm').focus();
        let allInputs = document.querySelectorAll('.Input-elm');
        for (let input of allInputs) {
            input.addEventListener("keyup", (e) => {
                
                if (e.target.value.length > 88) {
                    e.target.nextElementSibling.focus();
                    console.dir(e.target);
                    // console.log(e.target.value.length);

                }
                // console.log(e.target.value.length);
            })
        }
    }, []);
    return (
        <div className='Input-container'>
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
        </div>
    )
}

export default InputContainer; 