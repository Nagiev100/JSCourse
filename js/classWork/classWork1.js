function getTimeOfDay(currentHour) {
    if (currentHour >= 0 && currentHour < 6) {
        return "ночь";
    } else if (currentHour >= 6 && currentHour < 12) {
        return "утро";
    } else if (currentHour >= 12 && currentHour < 18) {
        return "день";
    } else {
        return "вечер";
    }
}

console.log(getTimeOfDay(7));
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i)
}
let number = 1;
while (number <= 20) {
    if (number % 2 === 0 && number % 5 !== 0) {
        console.log(number);
    }
    number++;
}

function formatPhoneNumber(phoneNumber) {
    if (isNaN(phoneNumber)) {
        return "Некорректный номер телефона";
    }
    const areaCode = phoneNumber.substring(0, 3);
    const firstPart = phoneNumber.substring(3, 6);
    const secondPart = phoneNumber.substring(6);
    return `(${areaCode}) ${firstPart}-${secondPart}`;
}
console.log(formatPhoneNumber("1234567890"))