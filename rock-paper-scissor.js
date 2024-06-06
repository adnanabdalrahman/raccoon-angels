const args = process.argv.slice(2);
const possibles = ['ROCK','SCISSORS','PAPER',];
//validation 

validateArgs(args);


const randomKey = (Math.floor(Math.random() * possibles.length));
const programChoice = possibles[randomKey];
const userChoice = args[0].toString().toUpperCase();
compareResults(userChoice, programChoice);

function compareResults(userChoice, programChoice){
    if (userChoice === programChoice){
    console.log('DRAW, computer Choice was scissors');
    return 'DRAW';
  }
  if(userChoice === 'ROCK'){
    if(programChoice === 'SCISSORS'){
      console.log('WIN!, computer Choice was scissors')
      return 'WIN'
    }else{
      console.log('LOST!, computer Choice was Paper')
      return 'LOST'
    }
  }
  if(userChoice === 'SCISSORS'){
    if(programChoice === 'PAPER'){
      console.log('WIN!, computer Choice was Paper')
      return 'WIN'
    }else{
      console.log('LOST!, computer Choice was Rock')
      return 'LOST'
    }
  }
  if(userChoice === 'PAPER'){
    if(programChoice === 'PAPER'){
      console.log('WIN!, computer Choice was Rock')
      return 'WIN'
    }else{
      console.log('LOST!, computer Choice was scissors')
      return 'scissors'
    }
  }
}


function validateArgs(args){
  if (args.length === 0) { 
    console.log("Please insert one of these choices ['Rock',' Paper','Scissors']")
    return false;
  }else if(args.length > 1){
    console.log("Please insert only one choice");
    return false;
  }else if ( !possibles.includes(args[0].toString().toUpperCase()) ){
    console.log("Please insert only one of these choices ['Rock',' Paper','Scissors']")
    return false;
  }
}