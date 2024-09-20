const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function OddorEven(num) {
    mod=num % 2;
    return mod;
}

function com(){
    console.log("Not a prime number");
}

function prim(){
    console.log("Its a prime number");
}

function getUserInput() {
    rl.question("Please input a word or a number: ", (input) => {
       
        const numberInput = Number(input);

        if (isNaN(numberInput)) {
          const StringInput = String(input.toUpperCase());
          console.log("You entered the word: " + StringInput);
          const Reverses= reverseString( StringInput);
          
          console.log("The Reverse word of "+StringInput+" is "+Reverses);
          
          if(Reverses == StringInput){
             console.log("Its a Palindrome");
          }else{
             console.log("Not a Palindrome");
          }
        } else {
          console.log("You entered the number: " + numberInput);
          const proccesednum=OddorEven(numberInput);
          switch (proccesednum) {
            case 0:
                console.log("The number "+numberInput+" is even");
                break;
            case 1:
                console.log("The number "+numberInput+" is odd");
                break;
            default:
                console.log("The number "+numberInput+" is odd");
                break;
        }

            if(numberInput<=1){
                com();
            }else if(numberInput<=3){
                prim();
            }else if(numberInput >3 && numberInput <25){
                if (numberInput % 2 === 0 || numberInput% 3 === 0){
                    com();
                }else{
                    prim();
                }
            }else if(numberInput>=25){
                for(let i=5;i*i<=numberInput;i+=6){
                    if(numberInput%i===0 || numberInput%(i+2)===0){
                        com();
                    }else{
                        prim();
                    }
                }
            }
        }
        rl.close();
    });
}
getUserInput();