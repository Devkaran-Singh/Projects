const password = document.querySelector(".enter input");
const color = document.querySelector(".enter");
const icon = document.querySelector(".icon");
const message = document.querySelector(".message");
const button = document.querySelector("#button");
let str;

password.addEventListener("keyup" , (event) => {
    if(event.key == "Enter"){
        const value = password.value;
        let sum;
        let strSum = 0;
        let numSum = 0;
        let splSum = 0;

        for(let ch in value){
            if((value.charCodeAt(ch) >= 97 && value.charCodeAt(ch) <= 122) || (value.charCodeAt(ch) >= 65 && value.charCodeAt(ch) <= 90)){
                strSum++;
            }
            else if(value.charCodeAt(ch) >= 48 && value.charCodeAt(ch) <= 57){
                numSum++;
            }
            else{
                splSum++;
            }
            sum = numSum + strSum + splSum;
        }

        if((sum < 8) || ((sum >= 8) && ((numSum == 0) || (strSum == 0))) && splSum == 0){
            message.classList.remove("hide2");
            message.innerText = "Weak";
            message.style.color = "#cc444b";
            // color.classList.add("hide3");
            color.style.borderColor = "#cc444b";
        }
        else if(((sum >= 8) && (numSum != 0) && (strSum != 0) && (splSum == 0))){
            str = " Moderate";
            message.classList.remove("hide2");
            message.innerText = "Moderate";
            message.style.color = "#f6f930";
            // color.classList.add("hide3");
            color.style.borderColor = "#f6f930";
        }
        else if((sum > 8 && ((numSum != 0) && (strSum != 0) && (splSum != 0)))){
            str = " Strong";
            message.classList.remove("hide2");
            message.innerText = "Strong";
            message.style.color = "#32a287";
            // color.classList.add("hide3");
            color.style.borderColor = "#32a287";
        }
    }
});

let hide = true;
icon.addEventListener("click" , () => {
    if(hide){
        icon.classList.remove("hide1");
        hide = false;
        password.type = "text";
    }
    else{
        icon.classList.add("hide1");
        hide = true;
        password.type = "password";
    }
});
