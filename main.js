// написание тескта на странице HTML с помощью JS. Если ссылка на JS находится в конце, то и запись будет там же, тк страница загружается последовательно
document.write ('My name is Anna<br>')

// У меня есть сумма 10$
let amount = 10;
console.log ('Amount is', amount);

// Печенье стоит 7$
const cookiePrice = 7;

// Конфеты стоят 8$
const candyPrice = 8;

// После покупки печенья останется
const rest = amount - cookiePrice;

const hasEnoughMoney = rest >=candyPrice;
console.log ('Has Enough Money', hasEnoughMoney);

// Смогу ли я купить печенье и конфеты?
if (hasEnoughMoney){
    document.write ('I have enough money')
} else {
    document.write ('I do not have enough money')
}

// Сообщение в консоль, можно посомтреть в коде страницы - console
console.log('Hello, world!');

/* Typeof - Оператор позволяет узнать тип данных переменной или целого выражения:
10 - number (число);
'Anna' - string (строка);
true, false - boolean (логический);
undefined - undefined (неопределённое значение);
null - object (переменная пока пустая, но позже будет содержать какое-то значение);
*/
const x = 10;
console.log (x);

const type = typeof x
console.log (type);

/* Operations with numbers
сложение 10 + 5 = 15;
вычитание 10 - 5 = 5;
умножение 10 * 5 = 50;
деление 10 / 5 = 2;
группировка (10 + 5) * 4 = 60;
возведение в степень 10 ** 5 = 100000;
остаток от деления 16 % 7 = 2 (вычитаем 7 пока результат не станет меньше 7);
получить последнюю цифру 345 % 10 = 5 (остаток от деления на 10)
проверить чётное ли число 345 % 2 = 1 (если остаток 0 - число чётное, 1 - нечётное);
Для задания правильного порядка вычислений можно воспользоваться скобками.
*/

/* String basics
1. Вставка переменных в строку в обратных кавычках называется интерполяция.
2. Cтроки можно складывать друг с другом и с данными других типов, это называется конкатенация. В результате конкатенации получается новая строка "склеенная" из двух частей. 
3. Пустая строка - нет ни одного символа = ' '  
*/
const a = 5;
const b = 3;
const name = 'Misha';
const message = `
  Hi, ${name}!
  Welcom to the team.
  a + b = ${a + b}
`;
console.log(message);

const a1 = 'Hello';
const b1 = 'world';
const resultString = `${a1}` + `, ` + `${b1}` + `!`;
// `, пробел`
console.log (resultString);

/* Comparison operators
Результат булевого типа часто получается в результат сравнения чисел.
a > b - даёт true, если a больше b;
a >= b - даёт true, если a больше или равно b;
a == b - даёт true, если a равно b (одинаковые значения), те простое равенство;
a != b - даёт true, если a НЕ равно b (разные значения), те простое неравенство;
a === b - даёт true, если a равно b (одинаковые значения и типы), те строгое равенство;
a !== b - даёт true, если a НЕ равно b (разные значения и типы), те строгое неравенство;
a < b - даёт true, если a меньше b;
a <= b - даёт true, если a меньше или равно b;
! - оператор НЕ, противоположный результат.
*/
const myAge = 32;
const hasAccess = myAge >= 40;
console.log (hasAccess);
if (hasAccess) {
    console.log ('Access granted');// доступ предоставлен
} else {
    console.log ('Access denied');// доступ запрещен
}
// Operators AND (&&) - проверка на выполнение двух условий. Он даёт true только если обе его части верны.
let cashInWallet = 50;
let age = 15;
const price = 40;
const ageLimit = 18;
    const isAllowed = age >=ageLimit;
    const hasEnoughMoney1 = cashInWallet >=price;
    const canBuy = isAllowed && hasEnoughMoney1;
console.log (canBuy);
// Operators OR (||) - выполнения одного из двух условий. Он даёт true если хотя бы одна часть равна true.
let cashInWallet1 = 30;
let cardAmount = 20;
const price1 = 40;
    const canPayWithCard = cardAmount >= price1;
    const hasEnoughMoney2 = cashInWallet1 >= price1;
    const canBuy1 = canPayWithCard || hasEnoughMoney2; 
console.log (canBuy1);

