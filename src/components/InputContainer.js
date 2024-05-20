// import { } from '../functions/charCounter';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import '../style.css';
import Input from './Input';
import React, { useEffect, useRef } from "react";
import { checkInput } from '../functions/charCounter';


function InputContainer() {
    useEffect(() => {
        checkInput();
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