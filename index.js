/*
SWITCH:
A switch is a statement that examines a value for a 
match against many case clauses.
It is more efficient than using many "else if" statements.
*/

let grade ="FANTA";

switch(grade){
    case "A":
        console.log("YOU DID GREAT,BRAVO!");
        break;

    case "B":
       console.log("YOU DID GOOD!");
       break;

    case "C":
       console.log("YOU DID OKAY!");
       break;

    case "D":
       console.log("YOU PASSED...BARELY!");
       break;

    case "F":
       console.log("YOU FAILED!");
       break;
    
//If there are no matching cases, an addition of a default clause is accepted.
//
    default:
        console.log(grade, "IS NOT A LETTER GRADE!");
}