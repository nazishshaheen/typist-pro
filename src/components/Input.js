import '../style.css';

function Input(props){
    
    function addEvents(){
        let allInputs = document.querySelectorAll('.Input-elm');
        for (let input of allInputs) {
            input.addEventListener("keydown", (e)=>{callback(e)})
        }
    }
    function callback(e){
        if (e.key === 'Enter' || e.keyCode === 13) {
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.focus();
            } else {
                console.log("new");
                <Input addInput={addInput}/>
                addEvents();
            }
    
        }
    }
    return(
        <input type="text" className='Input-elm'></input>
    )
}

export default Input;