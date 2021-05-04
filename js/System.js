class System{

    constructor(){}    

    authenticate(actualCode,enteredCode){

        const accessCode1 = "VARIABLE";
        const accessCode2 = "FUNCTION";
        const accessCode3 = "DATABASE";
    
        textSize(50);
        fill("black");
        text(code,300,300);

        if (actualCode === enteredCode.toUpperCase()) {
            return true
        }   else {
            return false
        }

    }
}