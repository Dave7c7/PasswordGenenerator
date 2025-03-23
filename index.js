const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.getElementById("btn-pwd");
let pwd_one = document.getElementById("passwords-one");
let pwd_two = document.getElementById("passwords-two");
let length = document.getElementById("length");

document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // Check if the Enter key was pressed
        length = this.value;  // Get the input value
        console.log("User entered:", userNumber);  // Output it (you can send it elsewhere)
    }
});

function generate(){
    let password = "";
    let password2 = "";
    for (let i = 0; i < length; i++){
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    pwd_one.innerHTML = password;
    for (let i = 0; i < length; i++){
        password2 += characters[Math.floor(Math.random() * characters.length)];
    } 
    pwd_two.innerHTML = password2;
}

