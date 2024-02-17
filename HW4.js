// 1.  Напишите функцию, которая принимает в себя строку
//    в виде аргумента и возвращает true, если функции палиндром.
//    Палиндром - строка, которая читается с конца так же, как и с начала.
//    Условие - должны учитываться только буквы без знаков препинания.
//     f("tenet") // true
//     f("tenet!") // true//
function isPalindrome(str) {
    const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('tenet'))

// 2. Напишите функцию, принимающую строку и возвращающую самое длинное слово в строке
// f('Web Development Tutorial'); // "Development"//
function longestWord(str) {
    const words = str.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord('Web Development Tutorial'));

// 3. Напишите функцию, принимающую аргумент в виде строки и которая расставляет
// все буквы строки в алфавитном порядке.Возвращает новую строку с буквами в алфавитном порядке
// f("alphabetical"); // "aaabcehillpt";//
const sortLetters = str => str.split('').sort().join('');
console.log(sortLetters("alphabetical"));

// 4. Напишите функцию JavaScript, которая принимает строку и возвращает индекс первого неповторяющегося символа.//
function firstUniqueCharIndex(str) {
    if (typeof str !== "string") {
        return 'Введите строку'
    }
    const charCount = new Map();
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount.get(char) === 1) {
            return i;
        }
    }
    return 'В введеной строке все числа повторяются одинаковое колличество раз';
}

console.log(firstUniqueCharIndex('aab'));

//5. Напишите функцию, которая принимает строку в качестве параметра и возвращает количество гласных в строке.//
function countVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    str = str.toLowerCase();
    let count = 0;
    for (let char of str) {
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('Web Development Tutorial'));


