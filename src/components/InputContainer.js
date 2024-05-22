
import '../style.css';
import Input from './Input';
import React, { useEffect} from "react";
import { focusAndNewline } from '../functions/charCounter';


function InputContainer() {
    useEffect(() => {
        focusAndNewline();
    }, []);
    function addInput(element){
        console.log(element);
    }
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
            <Input addInput={addInput}/>
        </div>
    )
}

export default InputContainer; 