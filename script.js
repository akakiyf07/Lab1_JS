console.log('Інструкція з використання');
console.log('Вводиться перший аргумент, після чого вводиться його тип, потім другий аргумент і відповідно його тип');
console.log('Доступні типи для вводу:');
console.log('leg                   катет');
console.log('hypotenuse            гіпотенуза');
console.log('adjacent angle        прилеглий до катета кут');
console.log('opposite angle        протилежний до катета кут');
console.log('angle                 один з двох гострих кутів(коли задана гіпотенуза)');

function check_negative(argument, type) {
    if (argument <= 0) {
        console.log("Error: " + type + " не може бути меншим або рівним 0.");
        return false;
    }
    return true;
}

function check_hypo_leg(leg, hypotenuse, type_leg, type_hypotenuse) {
    if (leg >= hypotenuse) {
        console.log("Error: " + type_leg + " не може бути більшим або рівним " + type_hypotenuse);
        return false;
    }
    return true;
}

function check_blunt_angle(angle, type) {
    if (angle >= 90) {
        console.log("Error: " + type + " не може бути тупим кутом (>= 90°).");
        return false;
    }
    return true;
}

function triangle(argument_1, type_1, argument_2, type_2) {
    let type1_valid = true, type2_valid = true;
    let a = 0, b = 0, c = 0, alpha = 0, beta = 0;

    if (argument_1 === undefined || type_1 === undefined || argument_2 === undefined || type_2 === undefined) {
        console.log('Error: Всі аргументи повинні бути визначені');
        return 'failed';
    }

    type1_valid = check_negative(argument_1, type_1);
    type2_valid = check_negative(argument_2, type_2);
    if (!type1_valid || !type2_valid) return 'failed';

    if ((type_1 === "leg" && type_2 === "hypotenuse") || (type_1 === "hypotenuse" && type_2 === "leg")) {
        if (type_1 === "leg") {
            type1_valid = check_hypo_leg(argument_1, argument_2, type_1, type_2);
        } else {
            type2_valid = check_hypo_leg(argument_2, argument_1, type_2, type_1);
        }
        if (!type1_valid || !type2_valid) return 'failed';
    }

    if ((type_1 === "adjacent angle" || type_1 === "opposite angle" || type_1 === "angle") && !check_blunt_angle(argument_1, type_1)) {
        type1_valid = false;
    }
    if ((type_2 === "adjacent angle" || type_2 === "opposite angle" || type_2 === "angle") && !check_blunt_angle(argument_2, type_2)) {
        type2_valid = false;
    }
    if (!type1_valid || !type2_valid) return 'failed';

    if (type_1 === "leg" && type_2 === "leg") {
        a = argument_1;
        b = argument_2;
        c = Math.sqrt(a * a + b * b);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = Math.acos(a / c) * 180 / Math.PI;
    } else if (type_1 === "leg" && type_2 === "hypotenuse") {
        a = argument_1;
        c = argument_2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = Math.acos(a / c) * 180 / Math.PI;
    } else if (type_1 === "hypotenuse" && type_2 === "leg") {
        c = argument_1;
        a = argument_2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = Math.acos(a / c) * 180 / Math.PI;
    } else if (type_1 === "leg" && type_2 === "opposite angle") {
        a = argument_1;
        alpha = argument_2;
        c = a / Math.sin(alpha * Math.PI / 180);
        b = Math.sqrt(c * c - a * a);
        beta = 90 - alpha;
    } else if (type_1 === "leg" && type_2 === "adjacent angle") {
        a = argument_1;
        beta = argument_2;
        c = a / Math.cos(beta * Math.PI / 180);
        b = Math.sqrt(c * c - a * a);
        alpha = 90 - beta;
    } else if (type_1 === "hypotenuse" && type_2 === "angle") {
        c = argument_1;
        alpha = argument_2;
        beta = 90 - alpha;
        a = c * Math.sin(alpha * Math.PI / 180);
        b = c * Math.sin(beta * Math.PI / 180);
    } else if (type_1 === "angle" && type_2 === "hypotenuse") {
        alpha = argument_1;
        c = argument_2;
        beta = 90 - alpha;
        a = c * Math.sin(alpha * Math.PI / 180);
        b = c * Math.sin(beta * Math.PI / 180);
    } else if (type_1 === "opposite angle" && type_2 === "leg") {
        alpha = argument_1;
        a = argument_2;
        c = a / Math.sin(alpha * Math.PI / 180);
        b = Math.sqrt(c * c - a * a);
        beta = 90 - alpha;
    } else if (type_1 === "adjacent angle" && type_2 === "leg") {
        beta = argument_1;
        a = argument_2;
        c = a / Math.cos(beta * Math.PI / 180);
        b = Math.sqrt(c * c - a * a);
        alpha = 90 - beta;
    } else {
        console.log('Error: Типи введених аргументів не підтримуються');
        return 'failed';
    }

    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
    console.log("alpha = " + alpha);
    console.log("beta = " + beta);
    return 'success';
}
