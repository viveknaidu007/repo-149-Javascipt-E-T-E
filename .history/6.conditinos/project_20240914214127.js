let Name = prompt("please enter ur name")
let Marks = prompt("enter ur marks")

switch (true) {
    case Marks > 90 && Marks <= 100:
        result = "great u r the topper"
        break;
    
    case Marks > 65 && Marks <= 90:
        result = "congratulations u got the first class"
        break;
    
    case Marks >= 40 && Marks <= 65:
        result = "you got second class"
        break;

    case Marks >= 30 && Marks <= 40:
        result = "u got third class"
        break;
    
    case Marks < 30:
        result = "sorry u r failed , better Next Time"
        break;
    
    default:
        result = "pls enter ur marks"
        break;
    
}

document.write(result)