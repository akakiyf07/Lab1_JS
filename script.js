console.log('Інструкція з використання');
console.log('Вводиться перший аргумент, після чого вводиться його тип, потім другий аргумент і відповідно його тип');
console.log('Доступні типи для вводу:');
console.log('leg                   катет');
console.log('hypotenuse            гіпотенуза');
console.log('adjacent angle        прилеглий до катета кут');
console.log('opposite angle        протилежний до катета кут');
console.log('angle                 один з двох гострих кутів(коли задана гіпотенуза)');

let type1 = true, type2 = true;

function check_negative(argument_1, type_1, argument_2, type_2) {
    if (argument_1 <= 0) {
        if (argument_1 === 0) {
            console.log(type_1 + " не може бути рівним 0.");
        } else if (argument_1 < 0) {
            console.log(type_1 + " не може бути меншим 0.");
        }
        type1 = false;
    }

    if (argument_2 <= 0) {
        if (argument_2 === 0) {
            console.log(type_2 + " не може бути рівним 0.");
        } else if (argument_2 < 0) {
            console.log(type_2 + " не може бути меншим 0.");
        }
        type2 = false;
    }
}

function check_hypo_leg(argument_1, type_1, argument_2, type_2) {
    if (type_1 === "leg" && type_2 === "hypotenuse") {
        if (argument_1 > argument_2) {
            console.log(type_1 + " більший за " + type_2);
            type1 = false;
        } else if (argument_1 === argument_2) {
            console.log(type_1 + " рівний " + type_2);
            type1 = false;
        }
    }

    if (type_1 === "hypotenuse" && type_2 === "leg") {
        if (argument_2 > argument_1) {
            console.log(type_2 + " більший за " + type_1);
            type2 = false;
        } else if (argument_1 === argument_2) {
            console.log(type_1 + " рівний " + type_2);
            type2 = false;
        }
    }
}

function check_blunt_angle(argument_1, type_1, argument_2, type_2) {
    if (type_1 === "adjacent angle" && argument_1 > 89) {
        console.log(type_1 + " є негострим кутом");
        type1 = false;
    }
    if (type_2 === "adjacent angle" && argument_2 > 89) {
        console.log(type_2 + " є негострим кутом");
        type2 = false;
    }
    if (type_1 === "opposite angle" && argument_1 > 89) {
        console.log(type_1 + " є негострим кутом");
        type1 = false;
    }
    if (type_2 === "opposite angle" && argument_2 > 89) {
        console.log(type_2 + " є негострим кутом");
        type2 = false;
    }
    if (type_1 === "angle" && argument_1 > 89) {
        console.log(type_1 + " є негострим кутом");
        type1 = false;
    }
    if (type_2 === "angle" && argument_2 > 89) {
        console.log(type_2 + " є негострим кутом");
        type2 = false;
    }
}

function triangle(argument_1, type_1, argument_2, type_2) {
    type1 = true;
    type2 = true;
    let a = 5, b = 9, c = 10.3, alpha = 29.0546, beta = 60.9454;
    if (argument_1 === undefined || type_1 === undefined || argument_2 === undefined || type_2 === undefined) {
        return 'failed';
    }

    check_negative(argument_1, type_1, argument_2, type_2);
    if (!type1 || !type2) return 'failed';

    check_hypo_leg(argument_1, type_1, argument_2, type_2);
    if (!type1 || !type2) return 'failed';

    check_blunt_angle(argument_1, type_1, argument_2, type_2);
    if (!type1 || !type2) return 'failed';

    if (type_1 === "leg" && type_2 === "leg") {
        a = argument_1;
        b = argument_2;
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = Math.acos(a / c) * 180 / Math.PI;
    } else if (type_1 === "leg" && type_2 === "hypotenuse") {
        a = argument_1;
        c = argument_2;
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = Math.acos(a / c) * 180 / Math.PI;
    } else if (type_1 === "leg" && type_2 === "opposite angle") {
        a = argument_1;
        alpha = argument_2;
        c = a / (Math.sin(alpha * Math.PI / 180));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        beta = 90 - alpha;
    } else if (type_1 === "leg" && type_2 === "adjacent angle") {
        a = argument_1;
        beta = argument_2;
        c = a / (Math.cos(beta * Math.PI / 180));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = 90 - beta;
    } else if (type_1 === "hypotenuse" && type_2 === "angle") {
        c = argument_1;
        alpha = argument_2;
        beta = 90 - alpha;
        a = c * Math.sin(alpha * Math.PI / 180);
        b = c * Math.sin(beta * Math.PI / 180);
    } else if (type_1 === "hypotenuse" && type_2 === "leg") {
        c = argument_1;
        a = argument_2;
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = Math.acos(a / c) * 180 / Math.PI;
    } else if (type_1 === "opposite angle" && type_2 === "leg") {
        alpha = argument_1;
        a = argument_2;
        c = a / (Math.sin(alpha * Math.PI / 180));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        beta = 90 - alpha;
    } else if (type_1 === "adjacent angle" && type_2 === "leg") {
        beta = argument_1;
        a = argument_2;
        c = a / (Math.cos(beta * Math.PI / 180));
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = 90 - beta;
    } else if (type_1 === "angle" && type_2 === "hypotenuse") {
        alpha = argument_1;
        c = argument_2;
        beta = 90 - alpha;
        a = c * Math.sin(alpha * Math.PI / 180);
        b = c * Math.sin(beta * Math.PI / 180);
    } else {
        return 'failed';
    }
    console.log("a = " + a + "\nb = " + b + "\nc = " + c + "\nalpha = " + alpha + "\nbeta = " + beta);
    return 'success';
}
