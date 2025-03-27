let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let characters1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let btn = document.getElementById("btn-pwd");
let pwd_one = document.getElementById("passwords-one");
let pwd_two = document.getElementById("passwords-two");
let length = 0;

//checkbox cheacked
let checkbox = document.getElementById("symbols");
    checkbox.addEventListener("change", () => {
        if(checkbox.checked){
            console.log("checked box works!" + characters);
            let letters = characters.filter(char => /[a-zA-Z]/.test(char)); //return only letters
            characters = letters
        }else if(checkbox.checked == false){
            //let symbols = characters.filter(char => !/[a-zA-Z]/.test(char)); //return only symbols
            characters = characters1;
            console.log("unchecked box works!" + characters);
        }     
    });

function generate(){
    length = document.getElementById("userInput").value;
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

function copy(){
      // Get the text field
    var copyText = document.getElementById("passwords-one");
    if(navigator.clipboard){
        navigator.clipboard.writeText(copyText.innerText)
        .then(() => {
            console.log("Copied to clipboard");
        })
        .catch(err => {
            console.log("Failed to copy", err);
        });
    }


}