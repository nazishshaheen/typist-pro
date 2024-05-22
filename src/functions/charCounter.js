
// function charCounter(value) {
//     let smallChars = 0;
//     let capitalChars = 0;
//     let specialChars = 0;
//     for (let char of value) {
//         if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//             capitalChars++;
//         }
//         if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//             smallChars++;
//         } else if (value) {
//             specialChars++;
//         }
//     }
//     return { smallChars: smallChars, capitalChars: capitalChars, specialChars: specialChars};
// }
// function checkInputStatus() {
//     // let { smallChars, capitalChars, specialChars }; = charCounter(e.target.value);
//     let total = smallChars + capitalChars + specialChars;
//     let maxLength = 0;
//     if (smallChars > 89) {
//         return 92;
//     } else if (smallChars < 89) {
//         if (capitalChars > 35) {
//             maxLength = 65;
//         } else if (capitalChars < 25 && capitalChars > 15) {
//             maxLength = 75;
//         } else if (capitalChars < 15 && capitalChars > 5) {
//             maxLength = 85;
//         } else if (capitalChars < 5) {
//             maxLength = 90;
//         } else if (!capitalChars) {
//             maxLength = 92;
//         }
//     }
//     return maxLength;

// }
import Input from "../components/Input";

function focusAndNewline() {
    document.querySelector('.Input-elm').focus();
    let allInputs = document.querySelectorAll('.Input-elm');

    for (let input of allInputs) {
        input.addEventListener("keydown", (e) => { callback(e)})
    }

}

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

export {
    focusAndNewline
}