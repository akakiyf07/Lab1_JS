console.log('Інструкція з використання');
console.log('Вводиться перший аргумент, після чого вводиться його тип, потім другий аргумент і відповідно його тип')
console.log('Доступні типи для вводу:')
console.log('leg                   катет');
console.log('hypotenuse            гіпотенуза');
console.log('adjacent angle        прилеглий до катета кут');
console.log('opposite angle        протилежний до катета кут');
console.log('angle                 один з двох гострих кутів(коли задана гіпотенуза)');

let type1= true, type2= true;


function check_negative(argument_1, type_1, argument_2, type_2){
    if(argument_1 <= 0){
        if(argument_1 === 0){
            console.log(type_1+" не може бути рівним 0.");
        }
        else if (argument_1 < 0){
            console.log(type_1+" не може бути меншим 0.");
        }
        type1 = false;
    }

    if(argument_2 <= 0){
        if(argument_2 === 0){
            console.log(type_2+" не може бути рівним 0.");
        }
        else if (argument_2 < 0){
            console.log(type_2+" не може бути меншим 0.");
        }
        type2 = false;
    }
}

function check_hypo_leg(argument_1, type_1, argument_2, type_2){
    if(type_1 === "leg" && type_2 === "hypotenuse"){
        if(argument_1>argument_2){
            console.log(type_1+" більший за "+ type_2); type1=false;
        }
        else if(argument_1 === argument_2){
            console.log(type_1+" рівний "+ type_2); type1=false;
        }
    }

    if(type_1 === "hypotenuse" && type_2 === "leg"){
        if(argument_2>argument_1){
            console.log(type_2 + " більший за " + type_1);type2=false;
        }
        else if(argument_1 === argument_2){
            console.log(type_1 + " рівний " + type_2);type2=false;
        }
    }
}

function check_blunt_angle(argument_1, type_1, argument_2, type_2){
    if(type_1 === "adjacent angle"){
        if(argument_1 > 89){
            console.log(type_1+" є негострим кутом");
            type1=false;
        }
    }
    if(type_2 === "adjacent angle"){
        if(argument_2 > 89){
            console.log(type_2+" є негострим кутом");
            type2=false;
        }
    }
    if(type_1 === "opposite angle"){
        if(argument_1 > 89){
            console.log(type_1+" є негострим кутом");
            type1=false;
        }
    }
    if(type_2 === "opposite angle"){
        if(argument_2 > 89){
            console.log(type_2+" є негострим кутом");
            type2=false;
        }
    }
    if(type_1 === "angle"){
        if(argument_1 > 89){
            console.log(type_1+" є негострим кутом");
            type1=false;
        }
    }
    if(type_2 === "angle"){
        if(argument_2 > 89){
            console.log(type_2+" є негострим кутом");
            type2=false;
        }
    }
}



function triangle(argument_1, type_1, argument_2, type_2){
    type1 = true
    type2 = true;
    let a= 5, b= 9, c= 10.3, alpha= 29.0546, beta= 60.9454;
    if (argument_1 === undefined || type_1 === undefined || argument_2 === undefined || type_2 === undefined ) {
        return 'failed';
    }

    if(type_1 === "leg" && type_2 === "leg" || type_1 === "leg" && type_2 === "hypotenuse" || type_2 === "leg" && type_1 === "hypotenuse" || type_1 === "leg" && type_2 === "opposite angle" || type_1 === "opposite angle" && type_2 === "leg" || type_1 === "leg" && type_2 === "adjacent angle" || type_1 === "adjacent angle" && type_2 === "leg" || type_1 === "hypotenuse" && type_2 === "angle" || type_1 === "angle" && type_2 === "hypotenuse")
    {
        if(type_1 === "leg" && type_2 === "leg") {
            check_negative(argument_1, type_1, argument_2, type_2);
            if(type1){
                a = argument_1;
            }
            if(type2){
                b = argument_2;
            }
            if(!type1){
                console.log("Використовується значення за замовчуванням a = "+a);
            }
            if(!type2){
                console.log("Використовується значення за замовчуванням b = "+b);
            }
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            alpha = Math.asin(a/c)*180/Math.PI;
            beta = Math.acos(a/c)*180/Math.PI;
        }
        else if(type_1 === "leg" && type_2 === "hypotenuse") {
            check_negative(argument_1, type_1, argument_2, type_2);
            if(type1){
                a = argument_1;
            }
            if(type2){
                c = argument_2;
            }

            check_hypo_leg(a, type_1, c, type_2);
            if(a>c){
                c = 10.3;
            }
            if(type1&&type2){
                a=argument_1;c=argument_2;
            }
            else{
                console.log("Використовується значення за замовчуванням a = "+a+" c = "+c);
            }
            b=Math.sqrt(Math.pow(c,2)-Math.pow(a,2));
            alpha = Math.asin(a/c)*180/Math.PI;
            beta = Math.acos(a/c)*180/Math.PI;
        }
        else if(type_1 === "leg" && type_2 === "opposite angle"){
            check_negative(argument_1, type_1, argument_2, type_2);
            if(type1){
                a = argument_1;
            }
            if(!type1){
                console.log("Використовується значення за замовчуванням a = "+a);
            }
            check_blunt_angle(argument_1, type_1, argument_2, type_2);

            if(type2){
                alpha=argument_2;



            }
            else{
                console.log("Використовується значення за замовчуванням alpha бо кут є від'ємним = "+alpha);
            }


            c=a / (Math.sin(alpha * Math.PI/180));
            b=Math.sqrt(Math.pow(c,2)-Math.pow(a,2));
            beta = 90 - alpha;
        }
        else if(type_1 === "leg" && type_2 === "adjacent angle"){
            check_negative(argument_1, type_1, argument_2, type_2);
            if(type1){
                a = argument_1;
            }
            if(!type1){
                console.log("Використовується значення за замовчуванням a = "+a);
            }
            check_blunt_angle(argument_1, type_1, argument_2, type_2);

            if(type2){
                beta=argument_2;
            }
            else{
                console.log("Використовується значення за замовчуванням beta = "+beta);
            }
            c = a / (Math.cos(beta * Math.PI/180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = 90 - beta;
        }

        else if(type_1 === "hypotenuse" && type_2 === "angle"){
            check_negative(argument_1, type_1, argument_2, type_2);
            if(type1){
                c = argument_1;
            }
            if(!type1){
                console.log("c<0 використовується значення за замовчуванням c = "+c);
            }
            check_blunt_angle(argument_1, type_1, argument_2, type_2);

            if(type2){
                alpha=argument_2;
            }
            else{
                console.log("Використовується значення за замовчуванням alpha = "+alpha);
            }

            beta = 90  - alpha;
            a=  c * Math.sin(alpha * Math.PI/180);
            b= c * Math.sin(beta * Math.PI/180);
        }

        else if(type_1 === "hypotenuse" && type_2 === "leg") {
            check_negative(argument_1, type_1, argument_2, type_2);
            if(type1){
                c = argument_1;
            }
            if(type2){
                a = argument_2;
            }
            check_hypo_leg(c, type_1, a, type_2);
            if(a>c){
                c = 10.3;
            }
            if(type1&&type2){
                c=argument_1;a=argument_2;
            }
            else{
                console.log("Використовується значення за замовчуванням a = "+a+" c = "+c);
            }
            b=Math.sqrt(Math.pow(c,2)-Math.pow(a,2));
            alpha = Math.asin(a/c)*180/Math.PI;
            beta = Math.acos(a/c)*180/Math.PI;
        }
        else if(type_1 === "opposite angle" && type_2 === "leg"){
            check_negative(argument_1, type_1, argument_2, type_2);
            if(type2){
                a = argument_2;
            }
            if(!type2){
                console.log("Використовується значення за замовчуванням a = "+a);
            }
            check_blunt_angle(argument_1, type_1, argument_2, type_2);

            if(type2){

                alpha=argument_1;
            }
            else{
                console.log("Використовується значення за замовчуванням alpha = "+alpha);
            }
            c=a / (Math.sin(alpha * Math.PI/180));
            b=Math.sqrt(Math.pow(c,2)-Math.pow(a,2));
            beta = 90 - alpha;
        }
        else if(type_1 === "adjacent angle" && type_2 === "leg"){
            check_negative(argument_1, type_1, argument_2, type_2);
            if(type2){
                a = argument_1;
            }
            if(!type2){
                console.log("Використовується значення за замовчуванням a = "+a);
            }
            check_blunt_angle(argument_1, type_1, argument_2, type_2);

            if(type2){

                beta=argument_1;
                
            }
            else{
                console.log("Використовується значення за замовчуванням beta = "+beta);
            }
            c = a / (Math.cos(beta * Math.PI/180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = 90 - beta;
        }

        else if(type_1 === "angle" && type_2 === "hypotenuse"){
            check_negative(argument_1, type_1, argument_2, type_2);
            if(type2){
                c = argument_2;
            }
            if(!type2){
                console.log("c<0 використовується значення за замовчуванням c = "+c);
            }
            check_blunt_angle(argument_1, type_1, argument_2, type_2);

            if(type2){

                alpha=argument_1;


            }
            else{
                console.log("Використовується значення за замовчуванням alpha = "+alpha);
            }
            beta = 90  - alpha;
            a=  c * Math.sin(alpha * Math.PI/180);
            b= c * Math.sin(beta * Math.PI/180);
        }


        else{
            return 'failed';
        }
    }
    console.log("a = " + a + "\nb = " + b + "\nc = " + c + "\nalpha = " + alpha + "\nbeta = " + beta);
    return 'success';
}
