console.log("Для використання функції triangle передайте чотири аргументи: triangle(значення1, тип1, значення2, тип2).");

var type1= true, type2= true;

function check_negative(argument_1, type_1, argument_2, type_2){
    //від'ємні аргументи
    if(argument_1 <= 0){
        if(argument_1 === 0){
            console.log(type_1+" не може бути рівним 0.");
        }
        else if (argument_1 < 0){
            console.log(type_1+" не може бути меншим 0.");
        }
        type1=false;
    }

    if(argument_2 <= 0){
        if(argument_2 === 0){
            console.log(type_2+" не може бути рівним 0.");
        }
        else if (argument_2 < 0){
            console.log(type_2+" не може бути меншим 0.");
        }
        type2=false;
    }
}

function check_hypo_leg(argument_1, type_1, argument_2, type_2){
    //гіпотенуза менша або рівна катету
    if(type_1 === "leg" && type_2=="hypotenuse"){
        if(argument_1>argument_2){
            console.log(type_1+" більший за "+ type_2); type1=false;
        }
        else if(argument_1==argument_2){
            console.log(type_1+" рівний "+ type_2); type1=false;
        }
    }

    if(type_1=="hypotenuse"&&type_2=="leg"){
        if(argument_2>argument_1){
            console.log(type_2+" більший за "+ type_1);type2=false;
        }
        else if(argument_1==argument_2){
            console.log(type_1+" рівний "+ type_2);type2=false;
        }
    }
}

function triangle(argument_1, type_1, argument_2, type_2){
    let a = 5, b = 9, c = 10.3, alpha = 29.0546, beta = 60.9454;

    const isUndefined = (arg) => arg === undefined;
    const isNumber = (arg) => typeof arg === 'number';
    const defaultValuesMessage = `Використовується значення за замовчуванням: a = ${a}, b = ${b}, c = ${c}, alpha = ${alpha}, beta = ${beta}`;

    if (isUndefined(argument_1) || isUndefined(type_1) || isUndefined(argument_2) || isUndefined(type_2)) {
        console.log("Неправильна кількість введених аргументів!");
        console.log(defaultValuesMessage);
        return;
    }

    if (!isNumber(argument_1) || !isNumber(argument_2)) {
        console.log("Аргументи повинні бути числами!");
        console.log(defaultValuesMessage);
        return;
    }

    const isLeg = (type) => type === "leg";
    const isHypotenuse = (type) => type === "hypotenuse";
    const isOppositeAngle = (type) => type === "opposite angle";
    const isAdjacentAngle = (type) => type === "adjacent angle";
    const isAngle = (type) => type === "angle";

    const isValidPair = (type1, type2) => {
        return (isLeg(type1) && (isLeg(type2) || isHypotenuse(type2) || isOppositeAngle(type2) || isAdjacentAngle(type2))) ||
               (isHypotenuse(type1) && (isLeg(type2) || isAngle(type2))) ||
               (isOppositeAngle(type1) && (isLeg(type2) || isAdjacentAngle(type2))) ||
               (isAdjacentAngle(type1) && (isLeg(type2) || isOppositeAngle(type2))) ||
               (isAngle(type1) && (isHypotenuse(type2)));
    };

    if (!isValidPair(type_1, type_2)) {
        console.log("Неправильна пара типів аргументів!");
        console.log(defaultValuesMessage);
        return;
    }

    const calculateParameters = () => {
        if (isLeg(type_1) && isLeg(type_2)) {
            a = argument_1;
            b = argument_2;
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            alpha = Math.asin(a / c) * 180 / Math.PI;
            beta = Math.acos(a / c) * 180 / Math.PI;
        } else if (isLeg(type_1) && isHypotenuse(type_2)) {
            a = argument_1;
            c = argument_2;
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = Math.asin(a / c) * 180 / Math.PI;
            beta = Math.acos(a / c) * 180 / Math.PI;
        } else if (isLeg(type_1) && isOppositeAngle(type_2)) {
            a = argument_1;
            alpha = argument_2;
            c = a / (Math.sin(alpha * Math.PI / 180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            beta = 90 - alpha;
        } else if (isLeg(type_1) && isAdjacentAngle(type_2)) {
            a = argument_1;
            beta = argument_2;
            c = a / (Math.cos(beta * Math.PI / 180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = 90 - beta;
        } else if (isHypotenuse(type_1) && isAngle(type_2)) {
            c = argument_1;
            alpha = argument_2;
            beta = 90 - alpha;
            a = c * Math.sin(alpha * Math.PI / 180);
            b = c * Math.sin(beta * Math.PI / 180);
        } else if (isHypotenuse(type_1) && isLeg(type_2)) {
            c = argument_1;
            a = argument_2;
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = Math.asin(a / c) * 180 / Math.PI;
            beta = Math.acos(a / c) * 180 / Math.PI;
        } else if (isOppositeAngle(type_1) && isLeg(type_2)) {
            alpha = argument_1;
            a = argument_2;
            c = a / (Math.sin(alpha * Math.PI / 180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            beta = 90 - alpha;
        } else if (isAdjacentAngle(type_1) && isLeg(type_2)) {
            beta = argument_1;
            a = argument_2;
            c = a / (Math.cos(beta * Math.PI / 180));
            b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            alpha = 90 - beta;
        }
    };

    calculateParameters();

    console.log("a = " + a + "\nb = " + b + "\nc = " + c + "\nalpha = " + alpha + "\nbeta = " + beta + "\nsuccess!");
}

