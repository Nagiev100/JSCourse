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
function findLongestWord(str) {
    const words = str.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(findLongestWord('Web Development Tutorial'));

// 3. Напишите функцию, принимающую аргумент в виде строки и которая расставляет
// все буквы строки в алфавитном порядке.Возвращает новую строку с буквами в алфавитном порядке
// f("alphabetical"); // "aaabcehillpt";//
const sortLetters = str => str.toLowerCase().split('').sort().join('');
console.log(sortLetters("alphabetical"));

// 4. Напишите функцию JavaScript, которая принимает строку и возвращает индекс первого неповторяющегося символа.//
function searchFirstNonRepeatChar(str) {
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

console.log(searchFirstNonRepeatChar('aab'));

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
// 6.Extra task :Тебе нужно написать функцию, которая принимает строку и возвращает самую длинную подстроку из неповторяющихся символов
// типа "pwwkew" -> "wke"//
function findSubstring(s) {
    let longest = '';
    let start = 0;
    let end = 0;
    while (end < s.length) {
        let currentChar = s[end];
        if (s.substring(start, end).includes(currentChar)) {
            start++;
        } else {
            end++;
        }
        let current = s.substring(start, end);
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
}

console.log(findSubstring('pwwkew'));

let users = new Set();
 users
     .add('max')
     .add('tim')
 users.forEach(users => console.log(users))

