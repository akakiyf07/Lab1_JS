console.log("Для використання функції triangle передайте чотири аргументи: triangle(значення1, тип1, значення2, тип2).");
function triangle(val1, type1, val2, type2) {
    const type = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];

    let result = {};
    if (type.includes(type1) && type.includes(type2)) {
        if (val1 >= 0 && val2 >= 0) {
            switch (type1) {
                case "hypotenuse":
                    if (type2 === "leg") {
                        result.hypotenuse = val1;
                        result.leg = val2;
                        result.alpha = Math.acos(val2 / val1) * (180 / Math.PI);
                        result.beta = 90 - result.alpha;

                    } else {
                        console.log("Кут не може бути поруч з гіпотенузою, якщо задано лише катет.");
                        return "failed";
                    }
                    break;
                case "leg":
                    if (type2 === "hypotenuse") {
                        result.hypotenuse = val2;
                        result.leg = val1;
                        result.alpha = Math.acos(val1 / val2) * (180 / Math.PI);
                        result.beta = 90 - result.alpha;
                    } else {
                        console.log("Кут може бути поруч з гіпотенузою лише якщо задано катет.");
                        return "failed";
                    }
                    break;
                case "adjacent angle":
                    console.log("Гострі кути можна обчислити лише за відомою гіпотенузою.");
                    return "failed";
                case "opposite angle":
                    if (type2 === "leg") {
                        result.alpha = val1;
                        result.leg = val2;
                        result.beta = 90 - val1;
                        result.hypotenuse = val2 / Math.sin(val1 * Math.PI / 180);
                    } else {
                        console.log("Протилежний кут може бути обчислений лише якщо задано катет.");
                        return "failed";
                    }
                    break;
            }
            result.b = Math.sqrt(result.hypotenuse ** 2 - result.leg ** 2);
            console.log("a:", result.leg, "b:", result.b, "c:", result.hypotenuse, "alpha:", result.alpha.toFixed(2), "beta:", result.beta.toFixed(2));
            return "success";

        } else {
            console.log("Сторони трикутника повинні бути додатніми числами.");
            return "failed";
        }

    } else {
        console.log("Перевірте правильність введення типів елементів.");
        return "failed";
    }
}