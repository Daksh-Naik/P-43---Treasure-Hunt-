class Security {

    constructor(){

        this.info = createElement('h3');
        this.info.position(0, 700);
        this.info.style('text-allign', 'center');
        this.info.style('font-family', 'verdana');
        this.info.style('color', 'white');
        this.info.html("This is basically a jumbled-word quiz. In a Javascript style. Unscramble the above words and type the correct word in the box. Nothing happens? That means its not correct. Another hint : Two options are related to Javascript, while the other one is related to online data stored in a basement.")

        this.access1 = createInput("Type here...")
        this.access1.position(70,90);
        this.access1.style('background', 'gold');  

        this.button1 = createButton('Check');
        this.button1.position(70,120);
        this.button1.style('background', 'lightblue');    

        this.access2 = createInput("Type here...")
        this.access2.position(650,190);
        this.access2.style('background', 'lightgreen');  

        this.button2 = createButton('Check');
        this.button2.position(650,220);
        this.button2.style('background', 'lightblue');

        this.access3 = createInput("Type here...");
        this.access3.position(300, 380);
        this.access3.style('background', 'orange');
        
        this.button3 = createButton('Check');
        this.button3.position(300, 410);
        this.button3.style('background', 'lightblue');

        this.feedback1 = createElement('h3');
        this.feedback1.html("Nice one! That's correct!");
        this.feedback1.style('color', 'white');
        this.feedback1.position(70, 100);
        this.feedback1.hide();

        this.feedback2 = createElement('h3');
        this.feedback2.html("Nice one! That's correct!")
        this.feedback2.position(650, 200);
        this.feedback2.style('color', 'white');
        this.feedback2.hide();

        this.feedback3 = createElement('h3');
        this.feedback3.html("Nice one! That's correct!")
        this.feedback3.position(300, 380);
        this.feedback3.style('color', 'white');
        this.feedback3.hide();

    }

    hide() {
        this.feedback1.hide();
        this.feedback2.hide();
        this.feedback3.hide();

    }

    display(){

        const accessCode1 = "VARIABLE";
        const accessCode2 = "FUNCTION";
        const accessCode3 = "DATABASE";        

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
                this.feedback1.show();
            } else {
                fill(255);
                textSize(17)
                text("Wrong one, try again!", 70, 130);
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
                this.feedback2.show();
            } else {
                fill(255);
                textSize(17)
                text("Wrong one, try again!", 650, 240);
            }
        });
        
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3, this.access3.value())) {
                this.button3.hide();
                this.access3.hide();
                score++;
                this.feedback3.show();
            } else {
                fill(255);
                textSize(17)
                text("Wrong one, try again!", 300, 430);
            }
        });


    }
}